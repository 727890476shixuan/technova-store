import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, SearchX } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import FilterMobile from '../components/product/FilterMobile';
import SortDropdown from '../components/product/SortDropdown';
import Button from '../components/ui/Button';

function parseFilters(params) {
  return {
    category: params.get('category') || '',
    minPrice: params.get('minPrice') || '',
    maxPrice: params.get('maxPrice') || '',
    minRating: params.get('minRating') || '',
    brands: params.get('brands') ? params.get('brands').split(',') : [],
    search: params.get('search') || '',
  };
}

function serializeFilters(filters) {
  const p = {};
  if (filters.category) p.category = filters.category;
  if (filters.minPrice) p.minPrice = filters.minPrice;
  if (filters.maxPrice) p.maxPrice = filters.maxPrice;
  if (filters.minRating) p.minRating = filters.minRating;
  if (filters.brands?.length) p.brands = filters.brands.join(',');
  if (filters.search) p.search = filters.search;
  return p;
}

const sortFns = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'best-selling': (a, b) => b.reviewCount - a.reviewCount,
  newest: (a, b) => b.id.localeCompare(a.id),
};

export default function ProductListPage() {
  const [params, setParams] = useSearchParams();
  const filters = parseFilters(params);
  const sortBy = params.get('sort') || '';

  const setFilters = (next) => {
    const serialized = serializeFilters(next);
    const sp = new URLSearchParams(serialized);
    if (sortBy) sp.set('sort', sortBy);
    if (params.get('_filterOpen') === 'true') sp.set('_filterOpen', 'true');
    setParams(sp);
  };

  const setSort = (sort) => {
    const next = new URLSearchParams(params);
    if (sort) next.set('sort', sort);
    else next.delete('sort');
    setParams(next);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }
    if (filters.minRating) {
      result = result.filter((p) => p.rating >= Number(filters.minRating));
    }
    if (filters.brands?.length) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy && sortFns[sortBy]) {
      result.sort(sortFns[sortBy]);
    }

    return result;
  }, [filters, sortBy]);

  const clearFilters = () => setParams({});

  return (
    <div className="container-page py-8">
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {filters.category
            ? products.find((p) => p.category === filters.category)?.category || 'Products'
            : 'All Products'}
        </h1>
        <p className="text-sm text-text-secondary mt-1">{filtered.length} products found</p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl border border-gray-100 p-5">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onClear={clearFilters}
            />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            {/* Mobile filter button */}
            <FilterMobile
              open={params.get('_filterOpen') === 'true'}
              onClose={() => {
                const next = new URLSearchParams(params);
                next.delete('_filterOpen');
                setParams(next);
              }}
              filters={filters}
              onChange={setFilters}
              onClear={clearFilters}
            />
            <button
              onClick={() => {
                const next = new URLSearchParams(params);
                next.set('_filterOpen', 'true');
                setParams(next);
              }}
              className="lg:hidden flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 rounded-lg hover:bg-card-bg transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            <SortDropdown value={sortBy} onChange={setSort} />
          </div>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <SearchX size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-text-secondary mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
