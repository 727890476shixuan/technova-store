import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function HeroBanner() {
  return (
    <section className="relative h-[500px] sm:h-[550px] lg:h-[600px] bg-gray-900 overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/technova-hero/1920/800"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full container-page flex items-center">
        <div className="max-w-lg">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
            New Collection 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Premium 3C <br />
            <span className="text-accent">Accessories</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
            Fast charging. Superior sound. Built to last. Discover the next generation of digital accessories designed for your connected life.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/products">
              <Button variant="accent" size="lg">
                Shop Now
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link
              to="/products?category=chargers"
              className="text-white text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
            >
              Explore Chargers
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
