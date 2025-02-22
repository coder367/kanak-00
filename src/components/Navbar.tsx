
import { cn } from '@/lib/utils';

interface NavbarProps {
  isVisible: boolean;
  brandRef?: React.RefObject<HTMLHeadingElement>;
}

export const Navbar = ({ isVisible }: NavbarProps) => {
  return (
    <nav
      className={cn(
        'w-full h-20 z-50 transition-all duration-500',
        isVisible ? 'fixed top-0 left-0 bg-rum-swizzle/90 backdrop-blur-sm' : 'absolute top-0 pointer-events-none opacity-0'
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};
