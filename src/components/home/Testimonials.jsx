import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Reviewer',
    avatar: 'https://picsum.photos/seed/person1/100/100',
    text: 'TechNova has become my go-to for all charging accessories. The GaN 65W charger is incredibly compact yet powerful. Fast shipping and great customer service.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Software Engineer',
    avatar: 'https://picsum.photos/seed/person2/100/100',
    text: 'The braided USB-C cables from TechNova are the best I\'ve used. After 6 months of daily use, they still look brand new. Highly recommend the 100W cable.',
    rating: 5,
  },
  {
    name: 'Emily Park',
    role: 'Digital Nomad',
    avatar: 'https://picsum.photos/seed/person3/100/100',
    text: 'As someone who travels constantly, the 20000mAh power bank has been a lifesaver. Charges my laptop and phone with room to spare. Worth every penny!',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-card-bg">
      <div className="container-page">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="text-text-secondary mt-1">Trusted by thousands worldwide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-amber-400' : 'text-gray-200'}
                    fill={i < t.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
