import HeroBanner from '../components/home/HeroBanner';
import CategoryNav from '../components/home/CategoryNav';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturesSection from '../components/home/FeaturesSection';
import Testimonials from '../components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryNav />
      <FeaturedProducts />
      <FeaturesSection />
      <Testimonials />
    </>
  );
}
