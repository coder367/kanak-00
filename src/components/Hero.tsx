
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onScroll: (isScrolled: boolean) => void;
  brandRef: React.RefObject<HTMLHeadingElement>;
}

export const Hero = ({ onScroll, brandRef }: HeroProps) => {
  const observerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div 
      className="min-h-screen flex items-start justify-center pt-16 md:pt-32 relative" 
      ref={observerRef}
      style={{
        backgroundImage: 'url("/lovable-uploads/5466685f-1a29-4607-aa30-193e43a50157.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Navbar */}
      <div className={`fixed top-0 left-0 right-0 h-16 md:h-20 bg-disco-dark z-[50] flex items-center justify-between px-4 md:px-6 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img 
              src="/lovable-uploads/2c48a457-88f2-45e0-af06-0d043afd1978.png" 
              alt="Kanakdhaga Logo" 
              className="h-8 md:h-12 w-auto"
            />
          </Link>
        </div>
        <button 
          onClick={scrollToCollections}
          className="text-white hover:opacity-80 transition-opacity px-4 py-2 border border-white rounded-lg text-sm md:text-base"
        >
          Our Collection
        </button>
      </div>

      {/* Brand and Timer Container */}
      <div className="absolute top-1/4 left-0 right-0 flex flex-col items-center z-[60] px-4">
        {/* Brand Name */}
        <h1 
          ref={brandRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white tracking-[0.25rem] md:tracking-[0.5rem] font-serif-display"
        >
          KANAKDHAGA
        </h1>

        {/* Launching Soon Tag */}
        <div className="mt-8 px-6 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white text-sm md:text-base tracking-wider font-garamond">Launching Soon</span>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8">
          <CountdownTimer />
        </div>
      </div>

      {/* Tagline Container */}
      <div className="absolute top-[65%] md:top-[28rem] left-0 right-0 z-40 px-4">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-garamond text-center">
          Luxury Ethnic Wear, Crafted for You
        </p>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};
