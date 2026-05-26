import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Package, CheckCircle, Shield, ArrowLeft, RefreshCcw } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import StarRating from '../components/ui/StarRating';
import Button from '../components/ui/Button';
import ImageCarousel from '../components/product/ImageCarousel';
import SpecSelector from '../components/product/SpecSelector';
import QuantitySelector from '../components/product/QuantitySelector';
import NotFoundPage from './NotFoundPage';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  const defaultSpecs = {};
  if (product) {
    Object.entries(product.specs).forEach(([key, options]) => {
      defaultSpecs[key] = options[0];
    });
  }

  const [selectedSpecs, setSelectedSpecs] = useState(defaultSpecs);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return <NotFoundPage />;

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSpecs);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSpecs);
    navigate('/checkout');
  };

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Specifications' },
    { id: 'reviews', label: `Reviews (${product.reviewCount})` },
  ];

  return (
    <div className="container-page py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        {/* Image Carousel */}
        <ImageCarousel images={product.images} />

        {/* Product info */}
        <div className="space-y-5">
          <div>
            <p className="text-sm text-text-secondary mb-1">{product.brand}</p>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{product.name}</h1>
          </div>

          {/* Rating */}
          <StarRating rating={product.rating} reviewCount={product.reviewCount} size={18} />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-accent">{formatCurrency(product.price)}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-text-secondary line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-500" />
            <span className="text-sm text-green-600 font-medium">In Stock</span>
            <span className="text-sm text-text-secondary">— Ready to ship</span>
          </div>

          {/* Specs selection */}
          <SpecSelector
            specs={product.specs}
            selected={selectedSpecs}
            onChange={setSelectedSpecs}
          />

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Quantity</p>
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              variant="accent"
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </Button>
            <Button variant="primary" size="lg" className="flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex gap-4 pt-2">
            {[
              { icon: Package, text: 'Free Shipping' },
              { icon: Shield, text: 'Secure Checkout' },
              { icon: RefreshCcw, text: '30-Day Returns' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-xs text-text-secondary">
                <item.icon size={14} className="text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200 pt-8">
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-secondary hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'description' && (
          <div className="max-w-3xl">
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="max-w-lg">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-text-secondary w-40">Brand</td>
                  <td className="py-3 font-medium">{product.brand}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-text-secondary">Category</td>
                  <td className="py-3 font-medium capitalize">{product.category}</td>
                </tr>
                {Object.entries(product.specs).map(([key, vals]) => (
                  <tr key={key} className="border-b border-gray-100">
                    <td className="py-3 text-text-secondary">{key}</td>
                    <td className="py-3 font-medium">{vals.join(' / ')}</td>
                  </tr>
                ))}
                <tr className="border-b border-gray-100">
                  <td className="py-3 text-text-secondary">Stock</td>
                  <td className="py-3 font-medium text-green-600">In Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                <StarRating rating={product.rating} reviewCount={0} size={14} showCount={false} />
                <p className="text-xs text-text-secondary mt-1">{product.reviewCount} reviews</p>
              </div>
            </div>
            {[
              { name: 'David L.', rating: 5, date: '2026-05-15', text: 'Excellent product! Works exactly as described. The build quality is outstanding and shipping was fast.' },
              { name: 'Maria K.', rating: 4, date: '2026-05-10', text: 'Great value for the price. Been using it for a couple weeks now and very happy with the performance.' },
              { name: 'James T.', rating: 5, date: '2026-04-28', text: 'This is my second purchase from TechNova. Quality is consistent and the product exceeds expectations.' },
            ].map((r, i) => (
              <div key={i} className="bg-card-bg rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                      {r.name[0]}
                    </div>
                    <span className="font-medium text-sm">{r.name}</span>
                  </div>
                  <span className="text-xs text-text-secondary">{r.date}</span>
                </div>
                <StarRating rating={r.rating} reviewCount={0} size={12} showCount={false} />
                <p className="text-sm text-gray-700 mt-2">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm text-text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>
      </div>
    </div>
  );
}
