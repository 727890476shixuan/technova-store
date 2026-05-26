import { Truck, RefreshCcw, Headphones, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Global Shipping',
    desc: 'Free delivery on orders over $50. Fast and reliable worldwide shipping with tracking.',
  },
  {
    icon: RefreshCcw,
    title: '30-Day Returns',
    desc: "Not satisfied? Return any product within 30 days for a full refund. No questions asked.",
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Our dedicated support team is available around the clock to assist with any questions.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    desc: 'Your payment information is protected with industry-standard 256-bit encryption.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
