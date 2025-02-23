
import { Card } from "@/components/ui/card";

export const TeaserCards = () => {
  const teasers = [
    {
      title: "Teaser",
      description: "The new social experience for you and your friends. Sign up to learn more.",
    },
    {
      title: "Connect",
      description: "Join a community of like-minded individuals and share your perspective today.",
    },
    {
      title: "Create",
      description: "Express yourself in new ways and build meaningful connections with others.",
    },
  ];

  return (
    <section className="bg-careys-pink/60 backdrop-blur-lg pt-16 md:pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="min-h-[150vh] relative perspective-[1000px] pb-[30vh]">
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className="bg-white border-none p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 items-center sticky top-[15vh] transition-transform duration-300"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transform: `translateY(calc(${index * 10}vh)) translateZ(${index * -100}px)`,
              }}
            >
              <div className="w-full md:w-72 h-[250px] md:h-[400px] bg-gray-200 rounded-xl flex-shrink-0">
                <div className="w-full h-full bg-[linear-gradient(45deg,#f0f0f0_25%,#e0e0e0_25%,#e0e0e0_50%,#f0f0f0_50%,#f0f0f0_75%,#e0e0e0_75%)] bg-[length:20px_20px]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-serif-display text-disco-dark mb-2 md:mb-4">{teaser.title}</h3>
                <p className="text-lg md:text-xl font-garamond text-turkish-rose max-w-md">{teaser.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
