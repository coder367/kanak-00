import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Feather, Gift, HandHeart, Leaf, Mail, Percent, Shirt } from 'lucide-react';

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
                className="absolute top-0 left-0 right-0 bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="flex flex-col">
                  {/* Image */}
                  <div className="w-full aspect-[4/5]">
                    <img 
                      src="/lovable-uploads/0f856697-8814-4188-a095-7ea4ce08c309.png"
                      alt="Feature Collection"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Icons Row - Updated with new Lucide icons */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <Feather size={24} className="text-disco" />
                        <span className="text-xs mt-1 text-disco">Light</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Gift size={24} className="text-disco" />
                        <span className="text-xs mt-1 text-disco">Free Shipping</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <HandHeart size={24} className="text-disco" />
                        <span className="text-xs mt-1 text-disco">Made with love</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Leaf size={24} className="text-disco" />
                        <span className="text-xs mt-1 text-disco">Pure Cotton</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-turkish-rose font-garamond leading-relaxed">
                      Kanakdhaga is all about breathable co-ords, effortless lounge sets, and resort wear that move with you. Just like a golden thread ties everything together, our pieces bring together ease and charm without compromising on style.
                    </p>
                  </div>
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

              {/* Card 3 - Updated with new promotional content */}
              <div 
                ref={el => cardsRef.current[2] = el}
                className="absolute top-0 left-0 right-0 bg-white rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-full w-full p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Promo Code Section */}
                    <div className="flex items-center space-x-4 text-disco">
                      <Percent size={28} className="text-disco" />
                      <div>
                        <h3 className="text-xl font-serif-display text-disco-dark">Use code KANAK20</h3>
                        <p className="text-turkish-rose font-garamond">Flat 20% OFF on your first order!</p>
                      </div>
                    </div>

                    {/* Free Kurti Section */}
                    <div className="flex items-center space-x-4">
                      <Shirt size={28} className="text-disco" />
                      <div>
                        <h3 className="text-xl font-serif-display text-disco-dark">Win a Free Kurti!</h3>
                        <p className="text-turkish-rose font-garamond">Stand a chance to get a beautiful Kurti from us on launch.</p>
                      </div>
                    </div>

                    {/* Updates Section */}
                    <div className="flex items-center space-x-4">
                      <Mail size={28} className="text-disco" />
                      <div>
                        <h3 className="text-xl font-serif-display text-disco-dark">Stay tuned!</h3>
                        <p className="text-turkish-rose font-garamond">Check your mail & WhatsApp for exciting updates.</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start">
                    Join Waitlist
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
