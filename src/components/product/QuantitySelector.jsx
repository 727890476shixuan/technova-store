import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ quantity, onChange, min = 1, max = 10, size = 'md' }) {
  const isSmall = size === 'sm';
  const btnClass = isSmall
    ? 'w-7 h-7 text-sm'
    : 'w-9 h-9';

  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        className={`${btnClass} flex items-center justify-center text-gray-600 hover:text-primary hover:bg-card-bg disabled:opacity-40 disabled:cursor-not-allowed transition-colors`}
        aria-label="Decrease quantity"
      >
        <Minus size={isSmall ? 14 : 16} />
      </button>
      <span
        className={`${isSmall ? 'w-8 text-sm' : 'w-10'} text-center font-medium select-none`}
      >
        {quantity}
      </span>
      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        className={`${btnClass} flex items-center justify-center text-gray-600 hover:text-primary hover:bg-card-bg disabled:opacity-40 disabled:cursor-not-allowed transition-colors`}
        aria-label="Increase quantity"
      >
        <Plus size={isSmall ? 14 : 16} />
      </button>
    </div>
  );
}
