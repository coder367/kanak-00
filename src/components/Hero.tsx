
import { useEffect, useRef } from 'react';

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
      { threshold: 0.9 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [onScroll]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={observerRef}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-rum-swizzle/60 to-rum-swizzle/40" />
        <img
          src="/lovable-uploads/a8b4f9a6-e0cb-4de0-9a00-636e06b41c64.png"
          alt="Elegant ethnic wear"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-32">
        <h1 
          ref={brandRef}
          className="fixed w-full left-0 text-8xl md:text-9xl lg:text-[12rem] text-disco tracking-[1rem] font-serif-display transition-all duration-500 flex items-center justify-center z-[60]"
          style={{
            transform: `scale(${window.scrollY > 100 ? 0.15 : 1})`,
            top: window.scrollY > 100 ? '10px' : '30%',
            height: window.scrollY > 100 ? '80px' : 'auto'
          }}
        >
          G U C C I
        </h1>
        <div className="mt-[25vh] space-y-16">
          <p className="font-garamond-bold text-xl md:text-2xl text-turkish-rose animate-slide-up">
            Embrace Tradition, Radiate Elegance
          </p>
          <button className="bg-disco hover:bg-disco/90 text-white font-garamond px-8 py-3 rounded-md transition-all duration-300 animate-slide-up">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
