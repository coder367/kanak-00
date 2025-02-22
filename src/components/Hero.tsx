
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
    <div className="relative min-h-screen flex items-center justify-center" ref={observerRef}>
      {/* Background Navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-disco/90 z-50" />

      {/* Content */}
      <div className="relative text-center px-4 flex flex-col items-center gap-48">
        <h1 
          ref={brandRef}
          className="fixed w-full left-0 text-8xl md:text-9xl lg:text-[12rem] text-white tracking-[1rem] font-serif-display transition-all duration-500 flex items-center justify-center z-50"
          style={{
            transform: `scale(${window.scrollY > 100 ? 0.15 : 1})`,
            top: window.scrollY > 100 ? '10px' : '30%',
            height: window.scrollY > 100 ? '80px' : 'auto'
          }}
        >
          G U C C I
        </h1>
        <div className="mt-[35vh] space-y-16 z-30 relative">
          <button className="bg-disco hover:bg-disco/90 text-white font-garamond px-8 py-3 rounded-md transition-all duration-300 animate-slide-up">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
