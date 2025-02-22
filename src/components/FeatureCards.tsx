
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
                    <h3 className="text-3xl font-serif-display text-disco-dark">Graceful Elegance</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Where tradition meets finesse! Experience the perfect blend of craftsmanship and contemporary design.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    Discover More
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
                    <h3 className="text-3xl font-serif-display text-disco-dark">Modern Heritage</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Experience the perfect fusion of traditional aesthetics with contemporary design elements.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    Explore Collection
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
                    <h3 className="text-3xl font-serif-display text-disco-dark">Timeless Beauty</h3>
                    <p className="text-turkish-rose font-garamond mt-4">
                      Discover pieces that transcend seasons, crafted with precision and traditional elements.
                    </p>
                  </div>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    View Details
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
