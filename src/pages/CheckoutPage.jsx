import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/checkout/CheckoutForm';

export default function CheckoutPage() {
  const { items } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);

  if (items.length === 0) return null;

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}
