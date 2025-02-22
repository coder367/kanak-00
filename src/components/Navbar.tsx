
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  isVisible: boolean;
}

export const Navbar = ({ isVisible }: NavbarProps) => {
  return (
    <nav
      className={cn(
        'w-full h-20 z-50 transition-all duration-500',
        isVisible ? 'navbar-fixed' : 'absolute top-0 pointer-events-none'
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <h1 
          className={cn(
            "text-3xl brand-transition",
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          Ethniq Glow
        </h1>
      </div>
    </nav>
  );
};
