
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
        brandRef.current.style.transform = `scale(${window.scrollY > window.innerHeight / 4 ? 0.15 : 1})`;
        brandRef.current.style.top = window.scrollY > window.innerHeight / 4 ? '10px' : '20%';
        brandRef.current.style.height = window.scrollY > window.innerHeight / 4 ? '80px' : 'auto';
      }
      setIsNavbarVisible(window.scrollY > window.innerHeight / 4);
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
