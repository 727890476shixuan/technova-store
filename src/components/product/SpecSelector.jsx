export default function SpecSelector({ specs, selected, onChange }) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className="space-y-4">
      {Object.entries(specs).map(([label, options]) => (
        <div key={label}>
          <p className="text-sm font-medium text-gray-900 mb-2">
            {label}: <span className="text-text-secondary">{selected[label]}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => {
              const isSelected = selected[label] === option;
              return (
                <button
                  key={option}
                  onClick={() => onChange({ ...selected, [label]: option })}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/30'
                      : 'border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
