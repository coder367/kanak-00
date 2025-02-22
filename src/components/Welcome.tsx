
import { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export const Welcome = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.scrollLeft + carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });

        // Reset scroll position if we've reached the end
        if (scrollAmount >= carouselRef.current.scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/lovable-uploads/aacbff0e-5d0d-4600-ae8a-87215cad5c08.png",
    "/lovable-uploads/5e181592-590b-4783-a78b-2238367c209b.png",
    "/lovable-uploads/cb1e13e1-8abb-4054-8e1c-2f81d79df038.png",
    "/lovable-uploads/d264d225-2c0b-4ad3-a953-a27a693ec53a.png",
    "/lovable-uploads/07b14714-f5e9-484d-a1c6-c3fbd0fa3fc7.png"
  ];

  return (
    <section className="bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-center text-white text-xl tracking-widest mb-4">WELCOME TO</h2>
        <h1 className="text-center text-white text-6xl md:text-7xl font-serif-display">GUCCI</h1>
      </div>
      
      <Carousel 
        className="w-full overflow-hidden"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="flex" ref={carouselRef}>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="aspect-[3/4] relative overflow-hidden group">
                <img
                  src={image}
                  alt={`Ethnic wear collection ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
