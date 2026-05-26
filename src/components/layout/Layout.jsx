import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Toast from '../ui/Toast';
import useScrollToTop from '../../hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </div>
  );
}
