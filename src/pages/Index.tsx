
import { useRef, useState, useEffect, useCallback } from 'react';
import { Hero } from '@/components/Hero';
import { WaitlistSection } from '@/components/WaitlistSection';
import { TeaserCards } from '@/components/TeaserCards';
import { Collections } from '@/components/Collections';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = useCallback(() => {
    if (brandRef.current) {
      brandRef.current.style.transform = `scale(${window.scrollY > window.innerHeight / 5 ? 0.15 : 1})`;
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
      <Footer />
    </div>
  );
};

export default Index;
