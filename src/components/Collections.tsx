
import { Card } from "@/components/ui/card";
import { useRef, useEffect } from "react";

export const Collections = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textScroll = textContainerRef.current;
    const collectionsScroll = collectionsRef.current;
    
    if (textScroll && collectionsScroll) {
      const textAnimation = textScroll.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-100%)' }
        ],
        {
          duration: 20000,
          iterations: Infinity,
          easing: 'linear'
        }
      );

      const collectionsAnimation = collectionsScroll.animate(
        [
          { transform: 'translateX(-100%)' },
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

  const images = [
    "lovable-uploads/564fc35d-c420-44c5-bf1a-dadfbb741cde.png",
    "lovable-uploads/5466685f-1a29-4607-aa30-193e43a50157.png",
    "lovable-uploads/5e181592-590b-4783-a78b-2238367c209b.png"
  ];

  // Create a repeating array of images for continuous loop, showing only 3 at a time
  const repeatedImages = [...images, ...images];

  return (
    <section id="collections" className="bg-careys-pink/60 backdrop-blur-lg overflow-hidden pt-12 pb-16 md:pb-24">
      <div className="relative whitespace-nowrap" ref={textContainerRef}>
        <div className="flex items-center space-x-4 md:space-x-8 text-disco-dark" style={{ width: 'fit-content' }}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center space-x-2 md:space-x-4">
              <div className="w-2 h-2 md:w-4 md:h-4 bg-disco rounded-full" />
              <span className="text-4xl md:text-6xl lg:text-8xl font-serif-display">COMING SOON</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-16 relative" ref={collectionsRef}>
        <div className="flex space-x-4 md:space-x-8 px-4" style={{ width: 'fit-content' }}>
          {repeatedImages.map((image, index) => (
            <Card 
              key={index}
              className="w-[200px] md:w-[300px] h-[300px] md:h-[400px] rounded-[30px] md:rounded-[40px] overflow-hidden flex-shrink-0"
            >
              <img 
                src={image} 
                alt={`Collection ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
