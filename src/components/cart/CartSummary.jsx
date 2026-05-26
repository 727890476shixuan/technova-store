import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import Button from '../ui/Button';

export default function CartSummary({ showCheckout = true }) {
  const { subtotal } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card-bg rounded-xl p-5 space-y-4">
      <h3 className="font-semibold text-gray-900">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span className="font-medium">{formatCurrency(shipping)}</span>
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Estimated Tax</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        {subtotal < 50 && (
          <p className="text-xs text-amber-600">
            Add {formatCurrency(50 - subtotal)} more for free shipping
          </p>
        )}
        <div className="pt-3 border-t border-gray-200 flex justify-between">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="text-xl font-bold text-accent">{formatCurrency(total)}</span>
        </div>
      </div>
      {showCheckout && (
        <Button
          variant="accent"
          size="lg"
          className="w-full"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      )}
    </div>
  );
}
