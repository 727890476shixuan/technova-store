import { X } from 'lucide-react';
import FilterSidebar from './FilterSidebar';

export default function FilterMobile({ open, onClose, filters, onChange, onClear }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Drawer */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl p-6 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>
        <FilterSidebar
          filters={filters}
          onChange={onChange}
          onClear={onClear}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
