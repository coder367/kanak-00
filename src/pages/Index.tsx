
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  return (
    <div className="relative">
      <Navbar isVisible={isNavbarVisible} />
      <Hero onScroll={setIsNavbarVisible} />
      <Welcome />
    </div>
  );
};

export default Index;
