
import { useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeroProps {
  onScroll: (isScrolled: boolean) => void;
  brandRef: React.RefObject<HTMLHeadingElement>;
}

export const Hero = ({ onScroll, brandRef }: HeroProps) => {
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScroll(!entry.isIntersecting);
      },
      { threshold: 0.75 } // Changed from 0.9 to 0.75 to trigger earlier
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [onScroll]);

  return (
    <div 
      className="h-screen flex items-start justify-center pt-32 relative" 
      ref={observerRef}
      style={{
        backgroundImage: 'url("/lovable-uploads/5466685f-1a29-4607-aa30-193e43a50157.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-disco-dark z-[50] flex items-center justify-end px-6">
        <button className="text-white hover:opacity-80 transition-opacity">
          <ShoppingCart size={24} />
        </button>
      </div>

      {/* Brand Container */}
      <h1 
        ref={brandRef}
        className="fixed w-full left-0 text-8xl md:text-9xl lg:text-[12rem] text-white tracking-[1rem] font-serif-display transition-all duration-500 flex items-center justify-center z-[60]"
        style={{
          transform: `scale(${window.scrollY > window.innerHeight / 4 ? 0.15 : 1})`,
          top: window.scrollY > window.innerHeight / 4 ? '10px' : '20%',
          height: window.scrollY > window.innerHeight / 4 ? '80px' : 'auto'
        }}
      >
        G U C C I
      </h1>

      {/* Tagline Container */}
      <div className="absolute top-[28rem] left-0 right-0 z-40">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-garamond whitespace-nowrap text-center">
          Luxury Ethnic Wear, Crafted for You
        </p>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
};
