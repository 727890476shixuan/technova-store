import { CreditCard } from 'lucide-react';

const methods = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    desc: 'Visa, Mastercard, Amex',
    icon: CreditCard,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    desc: 'Pay with your PayPal account',
    icon: null,
  },
];

export default function StepPayment({ selected, onChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
      <p className="text-sm text-text-secondary">
        This is a demo. No actual payment will be processed.
      </p>
      <div className="space-y-3">
        {methods.map((method) => {
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
              <div
                className={`w-12 h-8 rounded border flex items-center justify-center text-xs font-bold ${
                  isSelected ? 'bg-primary text-white border-primary' : 'bg-gray-100 text-gray-500 border-gray-200'
                }`}
              >
                {method.id === 'credit-card' ? 'CC' : 'PP'}
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">{method.name}</p>
                <p className="text-xs text-text-secondary">{method.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
