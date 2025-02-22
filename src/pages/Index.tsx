
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  return (
    <div className="relative">
      <Navbar isVisible={isNavbarVisible} />
      <Hero onScroll={setIsNavbarVisible} />
    </div>
  );
};

export default Index;
