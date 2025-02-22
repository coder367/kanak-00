
import { useEffect, useRef, useState } from 'react';

export const FeatureCards = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-rum-swizzle py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif-display text-disco-dark text-center mb-16">
          Celebrating Cultural Diversity
        </h2>
        <p className="text-turkish-rose text-xl text-center max-w-2xl mx-auto mb-20 font-garamond">
          Elevate Your Style with Our Curated Collection of Ethnic Apparel, Blending Tradition and Modernity
        </p>

        <div className="relative h-[150vh]">
          {/* Cards Container */}
          <div className="sticky top-32 space-y-8">
            {/* Card 1 */}
            <div 
              className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              style={{
                transform: `translateY(${Math.min(0, -(scrollY - sectionRef.current?.offsetTop! - 200) * 0.2)}px)`,
              }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-serif-display text-disco-dark mb-4">Graceful Elegance</h3>
                  <p className="text-turkish-rose font-garamond mb-6">
                    Where tradition meets finesse! Craftsmanship and contemporary design unite in our exquisite ethnic wear.
                  </p>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors">
                    Discover More
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/c5ec40a5-613c-44cd-9752-bacf67d2105e.png"
                    alt="Elegant ethnic wear"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              style={{
                transform: `translateY(${Math.min(0, -(scrollY - sectionRef.current?.offsetTop! - 400) * 0.2)}px)`,
              }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-serif-display text-disco-dark mb-4">Modern Heritage</h3>
                  <p className="text-turkish-rose font-garamond mb-6">
                    Experience the perfect blend of traditional craftsmanship with contemporary aesthetics.
                  </p>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors">
                    Explore Collection
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/c5ec40a5-613c-44cd-9752-bacf67d2105e.png"
                    alt="Modern ethnic wear"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              style={{
                transform: `translateY(${Math.min(0, -(scrollY - sectionRef.current?.offsetTop! - 600) * 0.2)}px)`,
              }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-serif-display text-disco-dark mb-4">Timeless Beauty</h3>
                  <p className="text-turkish-rose font-garamond mb-6">
                    Discover pieces that transcend seasons, crafted with precision and adorned with traditional elements.
                  </p>
                  <button className="bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors">
                    View Details
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/c5ec40a5-613c-44cd-9752-bacf67d2105e.png"
                    alt="Timeless ethnic wear"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
