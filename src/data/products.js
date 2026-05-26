export const categories = [
  {
    id: 'chargers',
    name: 'Wall Chargers',
    icon: 'Zap',
    image: 'https://picsum.photos/seed/charger-cat/400/400',
    description: 'GaN fast charging technology',
  },
  {
    id: 'cables',
    name: 'USB Cables',
    icon: 'Cable',
    image: 'https://picsum.photos/seed/cable-cat/400/400',
    description: 'Durable braided cables',
  },
  {
    id: 'earbuds',
    name: 'Wireless Earbuds',
    icon: 'Headphones',
    image: 'https://picsum.photos/seed/earbuds-cat/400/400',
    description: 'ANC & hi-fi sound',
  },
  {
    id: 'powerbanks',
    name: 'Power Banks',
    icon: 'BatteryFull',
    image: 'https://picsum.photos/seed/powerbank-cat/400/400',
    description: 'Portable power on the go',
  },
];

export const products = [
  // Wall Chargers
  {
    id: 'gan-65w-charger',
    name: 'GaN 65W Fast Charger',
    category: 'chargers',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 1283,
    brand: 'Anker',
    badge: 'bestseller',
    images: [
      'https://picsum.photos/seed/gan65-1/600/600',
      'https://picsum.photos/seed/gan65-2/600/600',
      'https://picsum.photos/seed/gan65-3/600/600',
      'https://picsum.photos/seed/gan65-4/600/600',
      'https://picsum.photos/seed/gan65-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White'],
      Plug: ['US', 'EU', 'UK'],
    },
    description:
      'Experience next-level charging with our compact GaN 65W charger. Engineered with Gallium Nitride technology, it delivers powerful 65W output in a form factor 50% smaller than traditional silicon chargers. Perfect for laptops, tablets, and smartphones.',
    features: [
      'GaN technology for ultra-compact size',
      '65W total power output',
      'Supports PD 3.0 and QC 4.0',
      'Overheat and overcharge protection',
      'Worldwide voltage compatibility (100-240V)',
    ],
    inStock: true,
  },
  {
    id: 'dual-port-45w-charger',
    name: 'Dual-Port 45W Charger',
    category: 'chargers',
    price: 29.99,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 856,
    brand: 'Ugreen',
    badge: null,
    images: [
      'https://picsum.photos/seed/dual45-1/600/600',
      'https://picsum.photos/seed/dual45-2/600/600',
      'https://picsum.photos/seed/dual45-3/600/600',
      'https://picsum.photos/seed/dual45-4/600/600',
      'https://picsum.photos/seed/dual45-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White'],
      Plug: ['US', 'EU'],
    },
    description:
      'Charge two devices simultaneously with this versatile 45W dual-port charger. Smart power allocation ensures optimal charging speed for each connected device.',
    features: [
      'Dual USB-C ports',
      '45W total output',
      'Intelligent power distribution',
      'Compact and travel-friendly',
    ],
    inStock: true,
  },
  {
    id: 'mini-20w-pd-charger',
    name: 'Mini 20W PD Charger',
    category: 'chargers',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.3,
    reviewCount: 2145,
    brand: 'Baseus',
    badge: 'sale',
    images: [
      'https://picsum.photos/seed/mini20-1/600/600',
      'https://picsum.photos/seed/mini20-2/600/600',
      'https://picsum.photos/seed/mini20-3/600/600',
      'https://picsum.photos/seed/mini20-4/600/600',
      'https://picsum.photos/seed/mini20-5/600/600',
    ],
    specs: {
      Color: ['White', 'Black', 'Blue'],
      Plug: ['US', 'EU', 'UK'],
    },
    description:
      'The ultra-portable 20W PD charger fits in any pocket. Ideal for iPhone and Android fast charging, with the smallest footprint in its class.',
    features: [
      'Ultra-compact design',
      '20W Power Delivery',
      'Compatible with all USB-C devices',
      'Advanced thermal management',
    ],
    inStock: true,
  },

  // USB Cables
  {
    id: 'usbc-100w-cable-2m',
    name: 'USB-C to C 100W Cable (2m)',
    category: 'cables',
    price: 15.99,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 3420,
    brand: 'Anker',
    badge: 'bestseller',
    images: [
      'https://picsum.photos/seed/usbc100-1/600/600',
      'https://picsum.photos/seed/usbc100-2/600/600',
      'https://picsum.photos/seed/usbc100-3/600/600',
      'https://picsum.photos/seed/usbc100-4/600/600',
      'https://picsum.photos/seed/usbc100-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White', 'Navy'],
      Length: ['1m', '2m', '3m'],
    },
    description:
      'High-speed 100W USB-C cable with braided nylon construction. Supports data transfer up to 480Mbps and charging up to 100W for laptops and fast-charge devices.',
    features: [
      '100W Power Delivery',
      '480Mbps data transfer',
      'Braided nylon, rated for 10,000+ bends',
      'E-Marker chip for safe high-power charging',
    ],
    inStock: true,
  },
  {
    id: '3in1-charging-cable',
    name: '3-in-1 Charging Cable',
    category: 'cables',
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.4,
    reviewCount: 1567,
    brand: 'Baseus',
    badge: 'sale',
    images: [
      'https://picsum.photos/seed/3in1-1/600/600',
      'https://picsum.photos/seed/3in1-2/600/600',
      'https://picsum.photos/seed/3in1-3/600/600',
      'https://picsum.photos/seed/3in1-4/600/600',
      'https://picsum.photos/seed/3in1-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White'],
    },
    description:
      'One cable, three connectors. USB-C, Lightning, and Micro-USB tips in a single durable cable. Perfect for households with multiple device types.',
    features: [
      '3 connectors: USB-C, Lightning, Micro-USB',
      '1.2m braided cable',
      'Supports up to 3A fast charging',
      'Tangle-free design',
    ],
    inStock: true,
  },
  {
    id: 'lightning-usbc-1m',
    name: 'Lightning to USB-C (1m)',
    category: 'cables',
    price: 9.99,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 2890,
    brand: 'Ugreen',
    badge: null,
    images: [
      'https://picsum.photos/seed/lightning-1/600/600',
      'https://picsum.photos/seed/lightning-2/600/600',
      'https://picsum.photos/seed/lightning-3/600/600',
      'https://picsum.photos/seed/lightning-4/600/600',
      'https://picsum.photos/seed/lightning-5/600/600',
    ],
    specs: {
      Color: ['White', 'Black'],
      Length: ['0.5m', '1m', '2m'],
    },
    description:
      'MFi-certified Lightning to USB-C cable for Apple devices. Fast charge your iPhone and sync data reliably with Apple-certified quality.',
    features: [
      'Apple MFi certified',
      'PD fast charging support',
      '480Mbps sync speed',
      'Reinforced connector durability',
    ],
    inStock: true,
  },

  // Wireless Earbuds
  {
    id: 'airbuds-pro-anc',
    name: 'AirBuds Pro ANC',
    category: 'earbuds',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 4321,
    brand: 'Soundcore',
    badge: 'sale',
    images: [
      'https://picsum.photos/seed/airbuds-1/600/600',
      'https://picsum.photos/seed/airbuds-2/600/600',
      'https://picsum.photos/seed/airbuds-3/600/600',
      'https://picsum.photos/seed/airbuds-4/600/600',
      'https://picsum.photos/seed/airbuds-5/600/600',
    ],
    specs: {
      Color: ['Midnight Black', 'Cloud White', 'Ocean Blue'],
    },
    description:
      'Premium true wireless earbuds with active noise cancellation. Immerse yourself in rich, detailed sound with custom 11mm drivers and adaptive ANC that adjusts to your environment.',
    features: [
      'Active Noise Cancellation (up to -35dB)',
      '11mm custom dynamic drivers',
      '8 hours playback (32 with case)',
      'IPX5 water resistance',
      'Transparency mode',
    ],
    inStock: true,
  },
  {
    id: 'sportclip-tws',
    name: 'SportClip TWS',
    category: 'earbuds',
    price: 59.99,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 1876,
    brand: 'SoundPeats',
    badge: 'new',
    images: [
      'https://picsum.photos/seed/sportclip-1/600/600',
      'https://picsum.photos/seed/sportclip-2/600/600',
      'https://picsum.photos/seed/sportclip-3/600/600',
      'https://picsum.photos/seed/sportclip-4/600/600',
      'https://picsum.photos/seed/sportclip-5/600/600',
    ],
    specs: {
      Color: ['Black', 'Red', 'Blue'],
    },
    description:
      'Stay-put earhook design for intense workouts. With powerful bass, IPX7 waterproof rating, and secure fit — these are built for athletes who demand great sound.',
    features: [
      'Secure earhook design',
      'IPX7 fully waterproof',
      '10 hours playback',
      'Enhanced bass tuning',
      'Built-in mic with ENC',
    ],
    inStock: true,
  },
  {
    id: 'bassbeat-earbuds',
    name: 'BassBeat Earbuds',
    category: 'earbuds',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.2,
    reviewCount: 965,
    brand: 'QCY',
    badge: null,
    images: [
      'https://picsum.photos/seed/bassbeat-1/600/600',
      'https://picsum.photos/seed/bassbeat-2/600/600',
      'https://picsum.photos/seed/bassbeat-3/600/600',
      'https://picsum.photos/seed/bassbeat-4/600/600',
      'https://picsum.photos/seed/bassbeat-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White', 'Purple'],
    },
    description:
      'Affordable wireless earbuds with surprisingly deep bass. Great entry-level TWS option with reliable Bluetooth 5.3 connectivity and comfortable fit.',
    features: [
      'Bluetooth 5.3',
      'Deep bass tuning',
      '6 hours playback (24 with case)',
      'Touch controls',
      'Low-latency gaming mode',
    ],
    inStock: true,
  },

  // Power Banks
  {
    id: '20000mah-pd-powerbank',
    name: '20000mAh PD Power Bank',
    category: 'powerbanks',
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 5678,
    brand: 'Anker',
    badge: 'bestseller',
    images: [
      'https://picsum.photos/seed/powerbank20k-1/600/600',
      'https://picsum.photos/seed/powerbank20k-2/600/600',
      'https://picsum.photos/seed/powerbank20k-3/600/600',
      'https://picsum.photos/seed/powerbank20k-4/600/600',
      'https://picsum.photos/seed/powerbank20k-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White'],
    },
    description:
      'Massive 20000mAh capacity with 65W bi-directional PD fast charging. Charge your laptop, tablet, and phone multiple times. Perfect for travel and outdoor adventures.',
    features: [
      '20000mAh high capacity',
      '65W USB-C PD input & output',
      'Dual USB-A + USB-C ports',
      'LED battery indicator',
      'Airline-safe design',
    ],
    inStock: true,
  },
  {
    id: 'magsafe-5000mah',
    name: 'MagSafe 5000mAh',
    category: 'powerbanks',
    price: 29.99,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 2340,
    brand: 'Baseus',
    badge: 'new',
    images: [
      'https://picsum.photos/seed/magsafe5k-1/600/600',
      'https://picsum.photos/seed/magsafe5k-2/600/600',
      'https://picsum.photos/seed/magsafe5k-3/600/600',
      'https://picsum.photos/seed/magsafe5k-4/600/600',
      'https://picsum.photos/seed/magsafe5k-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White', 'Blue', 'Pink'],
    },
    description:
      'Snap-on MagSafe wireless power bank for iPhone. Ultra-slim at only 8mm thick, with 5000mAh capacity that provides a full day of extra battery without the bulk.',
    features: [
      'MagSafe magnetic attachment',
      '15W wireless charging',
      '5000mAh capacity',
      '8mm ultra-slim profile',
      'USB-C port for wired charging',
    ],
    inStock: true,
  },
  {
    id: '10000mah-slim-powerbank',
    name: '10000mAh Slim Power Bank',
    category: 'powerbanks',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.4,
    reviewCount: 1890,
    brand: 'Ugreen',
    badge: null,
    images: [
      'https://picsum.photos/seed/slim10k-1/600/600',
      'https://picsum.photos/seed/slim10k-2/600/600',
      'https://picsum.photos/seed/slim10k-3/600/600',
      'https://picsum.photos/seed/slim10k-4/600/600',
      'https://picsum.photos/seed/slim10k-5/600/600',
    ],
    specs: {
      Color: ['Black', 'White', 'Green'],
    },
    description:
      'Slim 10000mAh power bank that slips easily into a pocket or bag. Features 22.5W output for fast charging and a sleek, minimalist design.',
    features: [
      '10000mAh capacity',
      '22.5W fast output',
      'Dual USB ports',
      'Slim 14mm thickness',
      'Digital power display',
    ],
    inStock: true,
  },
];

export const brands = ['Anker', 'Ugreen', 'Baseus', 'Soundcore', 'SoundPeats', 'QCY'];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getProductsByCategory(categoryId) {
  if (!categoryId) return products;
  return products.filter((p) => p.category === categoryId);
}

export function getFeaturedProducts() {
  return products.slice(0, 6);
}

export function getRelatedProducts(product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}
