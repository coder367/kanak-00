
import { useEffect, useRef, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import CurvedFeatureGrid from './CurvedFeatureGrid';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroProps {
  onScroll: (isScrolled: boolean) => void;
  brandRef: React.RefObject<HTMLHeadingElement>;
}

export const Hero = ({ onScroll, brandRef }: HeroProps) => {
  const observerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScroll(!entry.isIntersecting);
      },
      { threshold: 0.75 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScroll]);

  const scrollToCollections = () => {
    const collectionsSection = document.querySelector('#collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="min-h-[100vh] flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-24 lg:pt-32 relative overflow-hidden" 
      ref={observerRef}
      style={{
        backgroundImage: 'url("/lovable-uploads/75408b96-a696-49f9-ab58-676a4fd95c6e.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Navbar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-16 sm:h-16 md:h-20 bg-disco-dark z-[50] flex items-center justify-between px-4 sm:px-6 md:px-8 transition-all duration-500 ${
          isScrolled || isMobile ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToTop} 
          className="p-2 rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95"
        >
          {isMobile ? (
            <span className="text-white font-serif-display text-base">KANAKDHAGA</span>
          ) : (
            <img 
              src="/lovable-uploads/2c48a457-88f2-45e0-af06-0d043afd1978.png" 
              alt="Kanakdhaga Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          )}
        </button>
        <button 
          onClick={scrollToCollections}
          className="text-white px-4 sm:px-6 py-2 sm:py-2.5 border border-white rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-disco-dark active:scale-95 hover:shadow-lg"
        >
          Our Collection
        </button>
      </div>

      {/* Brand Name Container */}
      {!isMobile && (
        <div className="fixed z-[60] w-full flex justify-center">
          <h1 
            ref={brandRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white tracking-[0.15rem] sm:tracking-[0.25rem] md:tracking-[0.5rem] font-serif-display transition-all duration-500"
            style={{
              transform: `scale(${isScrolled ? 0.35 : 1})`,
              position: 'fixed',
              top: isScrolled ? '10px' : '15%',
              left: '50%',
              transformOrigin: 'center center',
              translate: '-50% 0',
              transition: 'all 0.5s ease-out'
            }}
          >
            KANAKDHAGA
          </h1>
        </div>
      )}

      {/* Feature Grid */}
      <div className="absolute top-[25%] sm:top-[25%] md:top-[30%] lg:top-[43%] left-0 right-0 z-[40] px-4 sm:px-6">
        <CurvedFeatureGrid />
      </div>

      {/* Launching Soon and Timer Container */}
      <div className="absolute bottom-40 sm:bottom-16 md:bottom-12 lg:bottom-8 left-0 right-0 z-[40] px-4 sm:px-6 flex flex-col items-center">
        {/* Launching Soon Tag */}
        <div className="mt-[20px] md:mt-0 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/30 bg-[#8C1444] backdrop-blur-sm flex items-center space-x-2 sm:space-x-3 shadow-lg hover:bg-[#8C1444]/90 hover:shadow-[0_0_15px_rgba(140,20,68,0.4)] transition-all duration-300">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FBFBEB] animate-pulse" />
          <span className="text-[#FBFBEB] text-sm sm:text-base md:text-lg tracking-wider font-serif-display">Launching Soon</span>
        </div>

        {/* Countdown Timer */}
        <div className="mt-4 sm:mt-6 w-full sm:w-auto mx-auto">
          <CountdownTimer />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};
