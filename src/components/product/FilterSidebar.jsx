import { brands, categories } from '../../data/products';
import Button from '../ui/Button';

export default function FilterSidebar({ filters, onChange, onClear, onClose }) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        <button onClick={onClear} className="text-xs text-primary hover:underline">
          Clear All
        </button>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
        <div className="space-y-1.5">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={!filters.category}
              onChange={() => update('category', '')}
              className="text-primary"
            />
            All Categories
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => update('category', cat.id)}
                className="text-primary"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Price Range</h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) => update('minPrice', e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <span className="text-text-secondary">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) => update('maxPrice', e.target.value)}
            className="w-full px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Minimum Rating</h4>
        <div className="space-y-1.5">
          {[4, 3, 2, 1].map((r) => (
            <label key={r} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={Number(filters.minRating) === r}
                onChange={() => update('minRating', r)}
                className="text-primary"
              />
              {r}+ Stars
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={!filters.minRating}
              onChange={() => update('minRating', '')}
              className="text-primary"
            />
            Any
          </label>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-2">Brand</h4>
        <div className="space-y-1.5 max-h-40 overflow-y-auto">
          {brands.map((brand) => {
            const selected = filters.brands || [];
            const checked = selected.includes(brand);
            return (
              <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const next = checked
                      ? selected.filter((b) => b !== brand)
                      : [...selected, brand];
                    update('brands', next);
                  }}
                  className="text-primary rounded"
                />
                {brand}
              </label>
            );
          })}
        </div>
      </div>

      {/* Mobile close button */}
      {onClose && (
        <div className="pt-4 lg:hidden">
          <Button variant="primary" className="w-full" onClick={onClose}>
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
}
