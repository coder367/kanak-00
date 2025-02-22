
import { useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="relative">
      <Navbar isVisible={isNavbarVisible} brandRef={brandRef} />
      <Hero onScroll={setIsNavbarVisible} brandRef={brandRef} />
      <Welcome />
    </div>
  );
};

export default Index;
