import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { Truck, Zap } from 'lucide-react';

const methods = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    desc: 'Delivery within 5-7 business days',
    price: 4.99,
    icon: Truck,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    desc: 'Delivery within 2-3 business days',
    price: 12.99,
    icon: Zap,
  },
];

export default function StepShipping({ selected, onChange }) {
  const { subtotal } = useCart();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Shipping Method</h2>
      {methods.map((method) => {
        const isFree = method.id === 'standard' && subtotal >= 50;
        const displayPrice = isFree ? 0 : method.price;
        const isSelected = selected === method.id;

        return (
          <button
            key={method.id}
            onClick={() => onChange(method.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
              isSelected
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <method.icon
              size={24}
              className={isSelected ? 'text-primary' : 'text-text-secondary'}
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{method.name}</p>
              <p className="text-xs text-text-secondary">{method.desc}</p>
            </div>
            <span className="font-semibold text-sm">
              {isFree ? (
                <span className="text-green-600">FREE</span>
              ) : (
                formatCurrency(displayPrice)
              )}
            </span>
          </button>
        );
      })}
      {subtotal < 50 && (
        <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
          Add {formatCurrency(50 - subtotal)} more for free standard shipping
        </p>
      )}
    </div>
  );
}
