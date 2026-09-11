import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USPStrip from './components/USPStrip';
import Process from './components/Process';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <USPStrip />
      <Process />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
