
import { useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";

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
      <div className="fixed top-0 left-0 right-0 h-20 bg-disco-dark z-50" />

      {/* Content */}
      <div className="relative text-center px-4 flex flex-col items-center">
        <h1 
          ref={brandRef}
          className="fixed w-full left-0 text-8xl md:text-9xl lg:text-[12rem] text-white tracking-[1rem] font-serif-display transition-all duration-500 flex items-center justify-center z-50"
          style={{
            transform: `scale(${window.scrollY > 100 ? 0.15 : 1})`,
            top: window.scrollY > 100 ? '10px' : '20%',
            height: window.scrollY > 100 ? '80px' : 'auto'
          }}
        >
          G U C C I
        </h1>
        <div className="mt-[75vh] space-y-6 z-30 relative w-full max-w-3xl mx-auto px-6">
          <Input 
            type="text" 
            placeholder="Full Name" 
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-16 rounded-2xl text-lg px-6"
          />
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-16 rounded-2xl text-lg px-6"
          />
          <button className="w-full bg-disco hover:bg-disco/90 text-white font-garamond px-8 py-4 rounded-2xl text-lg transition-all duration-300 animate-slide-up mt-8">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
