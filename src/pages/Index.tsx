
import { useRef, useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { WaitlistSection } from '@/components/WaitlistSection';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (brandRef.current) {
        brandRef.current.style.transform = `scale(${window.scrollY > 100 ? 0.15 : 1})`;
        brandRef.current.style.top = window.scrollY > 100 ? '10px' : '30%';
        brandRef.current.style.height = window.scrollY > 100 ? '80px' : 'auto';
      }
      setIsNavbarVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Hero onScroll={setIsNavbarVisible} brandRef={brandRef} />
      <WaitlistSection />
      <Welcome />
    </div>
  );
};

export default Index;
