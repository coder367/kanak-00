
import { Card } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useInterval } from "@/hooks/use-interval";

export const Collections = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  // Text scroll animation
  useEffect(() => {
    const textScroll = textContainerRef.current;
    if (textScroll) {
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

      return () => {
        textAnimation.cancel();
      };
    }
  }, []);

  // Auto scroll for images on mobile
  useInterval(() => {
    if (isMobile) {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  }, 3000);

  const images = [
    "/lovable-uploads/b7be83d5-985f-413e-a449-e0984a72b397.png",
    "/lovable-uploads/198fdacb-0a3b-4f40-bbf7-552a328f74ea.png",
    "/lovable-uploads/3a6333ff-d27f-481c-9b11-4403340dc64a.png"
  ];

  const handleManualScroll = (index: number) => {
    if (isMobile) {
      setCurrentSlide(index);
    }
  };

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

      <div className="mt-8 md:mt-16 px-4 max-w-7xl mx-auto">
        <div className="w-full overflow-hidden relative">
          <div 
            className={`w-full flex transition-transform duration-500 ease-in-out ${
              isMobile ? `transform -translate-x-[${currentSlide * 100}%]` : ''
            }`}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`${isMobile ? 'w-full flex-shrink-0' : 'w-1/3'} px-2`}
                style={isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : undefined}
              >
                <Card className="w-[85%] mx-auto aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Collection ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator for mobile */}
        {isMobile && (
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualScroll(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-disco-dark' : 'bg-disco-dark/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
