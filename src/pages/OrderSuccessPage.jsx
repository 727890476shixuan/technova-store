import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/', { replace: true });
    }
  }, [orderData, navigate]);

  if (!orderData) return null;

  return (
    <div className="container-page py-16">
      <div className="max-w-lg mx-auto text-center">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-text-secondary mb-8">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        {/* Order details */}
        <div className="bg-card-bg rounded-xl p-6 mb-6 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Order Number</span>
            <span className="font-mono font-bold text-gray-900">{orderData.orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Estimated Delivery</span>
            <span className="font-medium text-gray-900">{orderData.estimatedDelivery}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Shipping To</span>
            <span className="font-medium text-gray-900">
              {orderData.address.city}, {orderData.address.country}
            </span>
          </div>
        </div>

        {/* Delivery info */}
        <div className="flex items-center justify-center gap-2 text-sm text-text-secondary mb-8">
          <Package size={16} className="text-primary" />
          <span>A confirmation email will be sent to {orderData.address.email}</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg">
              Continue Shopping
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
