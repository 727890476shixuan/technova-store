import { useEffect, useRef } from 'react';

const fields = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567' },
  { name: 'address', label: 'Street Address', type: 'text', placeholder: '123 Main Street' },
  { name: 'city', label: 'City', type: 'text', placeholder: 'New York' },
  { name: 'state', label: 'State / Province', type: 'text', placeholder: 'NY' },
  { name: 'zipCode', label: 'ZIP Code', type: 'text', placeholder: '10001' },
];

export default function StepAddress({ data, onChange, errors }) {
  const firstInput = useRef(null);
  useEffect(() => {
    firstInput.current?.focus();
  }, []);

  const update = (name, value) => onChange({ ...data, [name]: value });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Shipping Address</h2>
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
          <input
            ref={f.name === 'fullName' ? firstInput : undefined}
            type={f.type}
            value={data[f.name] || ''}
            onChange={(e) => update(f.name, e.target.value)}
            placeholder={f.placeholder}
            className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              errors[f.name]
                ? 'border-red-300 focus:ring-red-200'
                : 'border-gray-200 focus:ring-primary/30 focus:border-primary'
            }`}
          />
          {errors[f.name] && (
            <p className="text-xs text-red-500 mt-1">{errors[f.name]}</p>
          )}
        </div>
      ))}

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
        <select
          value={data.country || ''}
          onChange={(e) => update('country', e.target.value)}
          className={`w-full px-3 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
            errors.country
              ? 'border-red-300 focus:ring-red-200'
              : 'border-gray-200 focus:ring-primary/30 focus:border-primary'
          }`}
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="JP">Japan</option>
          <option value="KR">South Korea</option>
          <option value="SG">Singapore</option>
          <option value="CN">China</option>
        </select>
        {errors.country && (
          <p className="text-xs text-red-500 mt-1">{errors.country}</p>
        )}
      </div>
    </div>
  );
}
