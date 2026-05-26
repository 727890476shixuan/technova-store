import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              Tech<span className="text-primary">Nova</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Your trusted source for premium 3C digital accessories. We deliver quality, innovation, and excellent service worldwide.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>123 Tech Street, Shenzhen, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <span>support@technova.com</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/products?category=chargers" className="hover:text-white transition-colors">Wall Chargers</Link></li>
              <li><Link to="/products?category=cables" className="hover:text-white transition-colors">USB Cables</Link></li>
              <li><Link to="/products?category=earbuds" className="hover:text-white transition-colors">Wireless Earbuds</Link></li>
              <li><Link to="/products?category=powerbanks" className="hover:text-white transition-colors">Power Banks</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">About Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Shipping Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Return Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Contact Us</span></li>
            </ul>
          </div>

          {/* Social + Payment */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook size={16} />
              </span>
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Twitter size={16} />
              </span>
              <span className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram size={16} />
              </span>
            </div>
            <h4 className="font-semibold text-white mt-6 mb-3">Payment Methods</h4>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1.5 bg-gray-800 rounded text-xs font-medium text-gray-300">Visa</span>
              <span className="px-3 py-1.5 bg-gray-800 rounded text-xs font-medium text-gray-300">Mastercard</span>
              <span className="px-3 py-1.5 bg-gray-800 rounded text-xs font-medium text-gray-300">PayPal</span>
              <span className="px-3 py-1.5 bg-gray-800 rounded text-xs font-medium text-gray-300">Amex</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-page py-4 text-center text-sm text-gray-500">
          &copy; 2026 TechNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
