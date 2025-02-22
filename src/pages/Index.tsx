
import { useRef, useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (brandRef.current) {
        brandRef.current.style.transform = `translateY(${window.scrollY > 100 ? '0' : '0'}) scale(${window.scrollY > 100 ? 0.3 : 1})`;
        brandRef.current.style.top = window.scrollY > 100 ? '10px' : '30%';
      }
      setIsNavbarVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar isVisible={isNavbarVisible} brandRef={brandRef} />
      <Hero onScroll={setIsNavbarVisible} brandRef={brandRef} />
      <Welcome />
    </div>
  );
};

export default Index;
