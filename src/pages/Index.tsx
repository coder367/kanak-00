
import { useRef, useState, useCallback, useEffect, Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { WaitlistSection } from '@/components/WaitlistSection';
import { TeaserCards } from '@/components/TeaserCards';
import { Collections } from '@/components/Collections';
import { AboutUs } from '@/components/AboutUs';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const brandRef = useRef<HTMLHeadingElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();

  const handleScroll = useCallback(() => {
    if (brandRef.current) {
      const scale = window.scrollY > window.innerHeight / 5 ? 
        (window.innerWidth < 640 ? 0.1 : 0.15) : 1;
      brandRef.current.style.transform = `scale(${scale})`;
      brandRef.current.style.top = window.scrollY > window.innerHeight / 5 ? '10px' : '15%';
      brandRef.current.style.height = window.scrollY > window.innerHeight / 5 ? '80px' : 'auto';
    }
    setIsNavbarVisible(window.scrollY > window.innerHeight / 5);
  }, []);

  useEffect(() => {
    // Set a timeout to show loading screen if loading takes longer than 500ms
    loadingTimeoutRef.current = setTimeout(() => {
      if (!isLoaded) {
        setShowLoadingScreen(true);
      }
    }, 500);

    const imagesToPreload = [
      '/lovable-uploads/12ca3f72-8647-4356-b4e0-f06341eef697.png',
      '/lovable-uploads/8015cc13-9ed8-4eb9-b287-cbf4d6c85a7c.png',
      '/lovable-uploads/6b994672-5bab-422a-86dc-3a94232daa33.png',
      '/lovable-uploads/8e47072b-c16a-4210-879c-a243d34faf13.png',
      '/lovable-uploads/4626dc7d-05b9-4deb-8583-9b1dd7c941ee.png',
      '/lovable-uploads/10f8f108-fe25-447e-99e8-f53d6b14f47b.png',
      '/lovable-uploads/f9e5edf4-16fa-4ffa-bd73-cb13fbd501be.png',
      '/lovable-uploads/67697866-a69e-4875-8a89-2c5acf3fdd09.png'
    ];

    const loadContent = async () => {
      try {
        await Promise.all(
          imagesToPreload.map((src) => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
            });
          })
        );
      } finally {
        setIsLoaded(true);
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
      }
    };

    loadContent();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  if (!isLoaded && showLoadingScreen) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-careys-pink">
        <div className="text-disco-dark text-3xl md:text-4xl font-serif-display animate-pulse text-center">
          WELCOME TO KANAKDHAGA...
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Suspense fallback={null}>
        <Hero onScroll={setIsNavbarVisible} brandRef={brandRef} />
        <TeaserCards />
        <WaitlistSection />
        <Collections />
        <AboutUs />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
