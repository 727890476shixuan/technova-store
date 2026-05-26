import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyCart from '../components/cart/EmptyCart';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, itemCount } = useCart();

  if (items.length === 0) return (
    <div className="container-page py-8">
      <EmptyCart />
    </div>
  );

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
      </h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <CartItem
                key={item.cartKey}
                item={item}
                onUpdateQuantity={(q) => updateQuantity(item.cartKey, q)}
                onRemove={() => removeFromCart(item.cartKey)}
              />
            ))}
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 mt-6 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
