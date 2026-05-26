import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Toast() {
  const { lastAdded } = useCart();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (lastAdded) {
      setMessage(lastAdded);
      setLeaving(false);
      setVisible(true);
      const timer = setTimeout(() => {
        setLeaving(true);
        setTimeout(() => setVisible(false), 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [lastAdded]);

  if (!visible || !message) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-[100] max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3 transition-all duration-300 ${
        leaving ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
      }`}
    >
      <CheckCircle size={20} className="text-green-500 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{message.name}</p>
        <p className="text-xs text-text-secondary">Added to cart</p>
      </div>
      <button
        onClick={() => {
          setLeaving(true);
          setTimeout(() => setVisible(false), 300);
        }}
        className="text-gray-400 hover:text-gray-600"
      >
        <X size={16} />
      </button>
    </div>
  );
}
