
import { Card } from "@/components/ui/card";

export const Collections = () => {
  // Fixed array of three placeholder images
  const images = [
    "lovable-uploads/564fc35d-c420-44c5-bf1a-dadfbb741cde.png",
    "lovable-uploads/5466685f-1a29-4607-aa30-193e43a50157.png",
    "lovable-uploads/5e181592-590b-4783-a78b-2238367c209b.png"
  ];

  return (
    <section id="collections" className="bg-careys-pink/60 backdrop-blur-lg overflow-hidden pt-12 pb-16 md:pb-24">
      <div className="relative whitespace-nowrap mb-12">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-2 h-2 md:w-4 md:h-4 bg-disco rounded-full" />
            <span className="text-4xl md:text-6xl lg:text-8xl font-serif-display text-disco-dark">COMING SOON</span>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="w-full aspect-[3/4] rounded-[30px] md:rounded-[40px] overflow-hidden"
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
