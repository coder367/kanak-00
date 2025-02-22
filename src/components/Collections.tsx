
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Collections = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const collections = [
    {
      id: 1,
      image: "/lovable-uploads/07b14714-f5e9-484d-a1c6-c3fbd0fa3fc7.png",
      title: "Summer Vibes"
    },
    {
      id: 2,
      image: "/lovable-uploads/564fc35d-c420-44c5-bf1a-dadfbb741cde.png",
      title: "Autumn Grace"
    },
    {
      id: 3,
      image: "/lovable-uploads/5e181592-590b-4783-a78b-2238367c209b.png",
      title: "Winter Dreams"
    },
    {
      id: 4,
      image: "/lovable-uploads/8e36c8bd-21a3-401a-a221-cf8f3e2a0308.png",
      title: "Spring Bloom"
    },
    {
      id: 5,
      image: "/lovable-uploads/aacbff0e-5d0d-4600-ae8a-87215cad5c08.png",
      title: "Evening Elegance"
    }
  ];

  useEffect(() => {
    if (textRef.current && imagesRef.current) {
      // Animate "COMING SOON" text scrolling backwards
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1
      });

      // Animate collection images scrolling forwards automatically
      gsap.to(imagesRef.current.children, {
        xPercent: -100 * (collections.length - 3),
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-rum-swizzle py-24 overflow-hidden">
      {/* Coming Soon Text */}
      <div className="relative w-full overflow-hidden mb-12">
        <div 
          ref={textRef}
          className="whitespace-nowrap text-[150px] font-serif-display text-disco-dark opacity-90 flex items-center"
          style={{ width: "fit-content" }}
        >
          <span className="w-[150px] h-[150px] bg-disco-dark rounded-full mr-8"></span>
          COMING SOON COMING SOON COMING SOON COMING SOON
        </div>
      </div>

      {/* Collection Images */}
      <div className="relative w-full overflow-hidden px-4">
        <div 
          ref={imagesRef}
          className="flex gap-6"
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="min-w-[400px] aspect-[3/4] group cursor-pointer relative overflow-hidden flex-shrink-0"
              style={{
                borderRadius: "50% / 40%",
              }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-disco-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white font-garamond text-2xl">{collection.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
