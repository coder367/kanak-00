
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isVisible: boolean;
  brandRef?: React.RefObject<HTMLHeadingElement>;
}

export const Navbar = ({ isVisible, brandRef }: NavbarProps) => {
  const [brandPos, setBrandPos] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (brandRef?.current && isVisible) {
      const rect = brandRef.current.getBoundingClientRect();
      setBrandPos({
        top: rect.top,
        left: rect.left,
        width: rect.width
      });
    }
  }, [isVisible, brandRef]);

  return (
    <nav
      className={cn(
        'w-full h-20 z-50 transition-all duration-500',
        isVisible ? 'fixed top-0 left-0 bg-rum-swizzle/90 backdrop-blur-sm' : 'absolute top-0 pointer-events-none'
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <h1 
          className={cn(
            "text-3xl tracking-wider text-disco transition-all duration-500 origin-top",
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
          )}
          style={{
            transform: isVisible ? 'scale(1)' : `translate(${brandPos.left}px, ${brandPos.top}px) scale(1.5)`
          }}
        >
          G U C C I
        </h1>
      </div>
    </nav>
  );
};
