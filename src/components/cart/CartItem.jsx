import { Trash2 } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import QuantitySelector from '../product/QuantitySelector';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const specText = Object.values(item.selectedSpec || {}).join(' / ');
  const lineTotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-lg overflow-hidden bg-card-bg">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-2">
          <div>
            <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">
              {item.name}
            </h3>
            {specText && (
              <p className="text-xs text-text-secondary mt-0.5">{specText}</p>
            )}
          </div>
          <button
            onClick={onRemove}
            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(q) => onUpdateQuantity(q)}
            size="sm"
          />
          <div className="text-right">
            <span className="font-semibold text-gray-900">{formatCurrency(lineTotal)}</span>
            {item.quantity > 1 && (
              <p className="text-xs text-text-secondary">{formatCurrency(item.price)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
