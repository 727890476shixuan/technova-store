import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';

export default function EmptyCart() {
  return (
    <div className="text-center py-20">
      <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-text-secondary mb-6">Looks like you haven&apos;t added any products yet.</p>
      <Link to="/products">
        <Button variant="primary" size="lg">
          Start Shopping
        </Button>
      </Link>
    </div>
  );
}
