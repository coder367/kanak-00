
import { Card } from "@/components/ui/card";
import { useRef, useEffect } from "react";

export const Collections = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textScroll = textContainerRef.current;
    const collectionsScroll = collectionsRef.current;
    
    if (textScroll && collectionsScroll) {
      // Text scrolling animation (backward)
      textScroll.style.transform = 'translateX(0)';
      const textAnimation = textScroll.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-50%)' }
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      // Collections scrolling animation (forward)
      const collectionsAnimation = collectionsScroll.animate(
        [
          { transform: 'translateX(-50%)' },
          { transform: 'translateX(0)' }
        ],
        {
          duration: 30000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      return () => {
        textAnimation.cancel();
        collectionsAnimation.cancel();
      };
    }
  }, []);

  return (
    <section className="bg-rum-swizzle overflow-hidden py-24">
      <div className="relative whitespace-nowrap" ref={textContainerRef}>
        <div className="flex items-center space-x-8 text-disco-dark">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-disco rounded-full" />
              <span className="text-8xl font-serif-display">COMING SOON</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 relative" ref={collectionsRef}>
        <div className="flex space-x-8 px-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card 
              key={item}
              className="w-[300px] h-[400px] rounded-[40px] overflow-hidden flex-shrink-0 bg-turkish-rose/20"
            >
              <div className="w-full h-full bg-[linear-gradient(45deg,#f0f0f0_25%,#e0e0e0_25%,#e0e0e0_50%,#f0f0f0_50%,#f0f0f0_75%,#e0e0e0_75%)] bg-[length:20px_20px]" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
