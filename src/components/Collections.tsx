
import { Card } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import { Feather, Truck, Heart } from "lucide-react";

export const Collections = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="collections" className="bg-careys-pink/60 backdrop-blur-lg overflow-hidden pt-12 pb-16 md:pb-24">
      {/* Kept the original rotating COMING SOON text */}
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

      {/* Collection Cards Grid */}
      <div className="mt-8 md:mt-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* First Card with Updated Content */}
          <Card className="w-full overflow-hidden flex flex-col">
            {/* Image Container */}
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/lovable-uploads/55f0eba3-8655-468b-8ebc-0be0fa061155.png"
                alt="Collection 1"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-6 bg-white">
              {/* Icons Row */}
              <div className="flex justify-between mb-4">
                <div className="flex flex-col items-center">
                  <Feather className="h-6 w-6 text-disco" />
                  <span className="text-xs mt-1 text-disco">Light</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-6 w-6 text-disco" />
                  <span className="text-xs mt-1 text-disco">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-6 w-6 text-disco" />
                  <span className="text-xs mt-1 text-disco">Made with love</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/3c2ffa71-eb02-47e5-b95b-5baa139d8c50.png" 
                    alt="Pure Cotton"
                    className="h-6 w-6"
                  />
                  <span className="text-xs mt-1 text-disco">Pure Cotton</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-disco-dark leading-relaxed">
                Kanakdhaga is all about breathable co-ords, effortless lounge sets, and resort wear that move with you. Just like a golden thread ties everything together, our pieces bring together ease and charm without compromising on style.
              </p>
            </div>
          </Card>

          {/* Placeholder Cards */}
          {[2, 3].map((index) => (
            <Card 
              key={index}
              className="w-full aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden"
            >
              <img 
                src={`lovable-uploads/${index === 2 ? '5466685f-1a29-4607-aa30-193e43a50157.png' : '5e181592-590b-4783-a78b-2238367c209b.png'}`}
                alt={`Collection ${index}`}
                className="w-full h-full object-cover"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
