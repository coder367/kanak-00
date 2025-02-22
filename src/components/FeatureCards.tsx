
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(card => card !== null);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          zIndex: index + 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: true,
            markers: false,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-rum-swizzle py-20">
      <div className="container mx-auto px-4">
        <div className="relative h-[150vh]">
          {/* Cards Container */}
          <div className="sticky top-32 flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* Card 1 */}
              <div 
                ref={el => cardsRef.current[0] = el}
                className="absolute top-0 left-0 right-0 aspect-square bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-serif-display text-disco-dark">Traditional Sarees</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Explore our collection of handcrafted sarees, featuring intricate embroidery and traditional designs.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    View Collection
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                ref={el => cardsRef.current[1] = el}
                className="absolute top-0 left-0 right-0 aspect-square bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-serif-display text-disco-dark">Ethnic Jewelry</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Discover our exquisite collection of traditional jewelry pieces, each telling a unique cultural story.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    Browse Jewelry
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                ref={el => cardsRef.current[2] = el}
                className="absolute top-0 left-0 right-0 aspect-square bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-serif-display text-disco-dark">Festive Wear</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Celebrate special occasions with our collection of festive ethnic wear, designed for memorable moments.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
