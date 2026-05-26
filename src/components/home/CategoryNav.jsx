import { Link } from 'react-router-dom';
import { Zap, Cable, Headphones, BatteryFull, ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const iconMap = {
  Zap,
  Cable,
  Headphones,
  BatteryFull,
};

export default function CategoryNav() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
            <p className="text-text-secondary mt-1">Find exactly what you need</p>
          </div>
          <Link
            to="/products"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-card-bg"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    {Icon && <Icon size={18} />}
                    <span className="font-semibold text-sm">{cat.name}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">{cat.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
