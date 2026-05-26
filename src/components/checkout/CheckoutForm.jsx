import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { validateAddressForm } from '../../utils/validators';
import Button from '../ui/Button';
import StepAddress from './StepAddress';
import StepShipping from './StepShipping';
import StepPayment from './StepPayment';
import CartSummary from '../cart/CartSummary';

const steps = [
  { id: 1, label: 'Address' },
  { id: 2, label: 'Shipping' },
  { id: 3, label: 'Payment' },
  { id: 4, label: 'Review' },
];

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const nextStep = () => {
    if (currentStep === 1) {
      const errs = validateAddressForm(formData);
      setErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }
    setCurrentStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const shippingCost = shippingMethod === 'standard' ? (subtotal >= 50 ? 0 : 4.99) : 12.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  const handleSubmit = () => {
    setSubmitting(true);
    const orderNumber = 'TN-' + Date.now().toString(36).toUpperCase();
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(
      estimatedDelivery.getDate() + (shippingMethod === 'standard' ? 6 : 3)
    );

    setTimeout(() => {
      clearCart();
      navigate('/order-success', {
        state: {
          orderNumber,
          estimatedDelivery: estimatedDelivery.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          address: formData,
        },
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : currentStep === step.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {currentStep > step.id ? <CheckCircle size={16} /> : step.id}
              </div>
              <span className="text-xs mt-1 text-text-secondary hidden sm:block">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-2 ${
                  currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
        {currentStep === 1 && (
          <StepAddress data={formData} onChange={setFormData} errors={errors} />
        )}
        {currentStep === 2 && (
          <StepShipping selected={shippingMethod} onChange={setShippingMethod} />
        )}
        {currentStep === 3 && (
          <StepPayment selected={paymentMethod} onChange={setPaymentMethod} />
        )}
        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Review Your Order</h2>

            {/* Address summary */}
            <div className="bg-card-bg rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Address</h3>
              <p className="text-sm text-text-secondary">
                {formData.fullName}<br />
                {formData.address}<br />
                {formData.city}, {formData.state} {formData.zipCode}<br />
                {formData.country}<br />
                {formData.email} &bull; {formData.phone}
              </p>
            </div>

            {/* Shipping & Payment */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card-bg rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1">Shipping</h3>
                <p className="text-sm text-text-secondary capitalize">{shippingMethod}</p>
              </div>
              <div className="bg-card-bg rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1">Payment</h3>
                <p className="text-sm text-text-secondary capitalize">{paymentMethod}</p>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900">Items ({items.length})</h3>
              {items.map((item) => (
                <div key={item.cartKey} className="flex items-center gap-3 text-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.name}</p>
                    <p className="text-xs text-text-secondary">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <CartSummary showCheckout={false} />
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        {currentStep > 1 && currentStep < 4 ? (
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
        ) : (
          <div />
        )}
        {currentStep < 4 ? (
          <Button variant="primary" onClick={nextStep}>
            Continue
          </Button>
        ) : (
          <Button
            variant="accent"
            size="lg"
            onClick={handleSubmit}
            loading={submitting}
          >
            Place Order — {formatCurrency(total)}
          </Button>
        )}
      </div>
    </div>
  );
}
