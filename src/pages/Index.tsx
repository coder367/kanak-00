
import { useRef, useState, useCallback, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { WaitlistSection } from '@/components/WaitlistSection';
import { TeaserCards } from '@/components/TeaserCards';
import { Collections } from '@/components/Collections';
import { AboutUs } from '@/components/AboutUs';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = useCallback(() => {
    if (brandRef.current) {
      const scale = window.scrollY > window.innerHeight / 5 ? 
        (window.innerWidth < 640 ? 0.1 : 0.15) : 1; // Smaller scale for mobile
      brandRef.current.style.transform = `scale(${scale})`;
      brandRef.current.style.top = window.scrollY > window.innerHeight / 5 ? '10px' : '15%';
      brandRef.current.style.height = window.scrollY > window.innerHeight / 5 ? '80px' : 'auto';
    }
    setIsNavbarVisible(window.scrollY > window.innerHeight / 5);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      <Hero onScroll={setIsNavbarVisible} brandRef={brandRef} />
      <WaitlistSection />
      <TeaserCards />
      <Collections />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
