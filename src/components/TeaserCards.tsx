
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
    <section className="bg-rum-swizzle py-24">
      <div className="container mx-auto px-4">
        <div className="min-h-[150vh] relative perspective-[1000px]"> {/* Added perspective for 3D effect */}
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className="bg-white border-none p-8 rounded-2xl flex gap-8 items-center sticky top-[15vh] transition-transform duration-300"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transform: `translateY(calc(${index * 100}vh - ${index * 40}px)) translateZ(${index * -100}px)`,
              }}
            >
              <div className="w-72 h-[400px] bg-gray-200 rounded-xl flex-shrink-0">
                {/* Image placeholder with diagonal stripes */}
                <div className="w-full h-full bg-[linear-gradient(45deg,#f0f0f0_25%,#e0e0e0_25%,#e0e0e0_50%,#f0f0f0_50%,#f0f0f0_75%,#e0e0e0_75%)] bg-[length:20px_20px]" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-5xl font-serif-display text-disco-dark mb-4">{teaser.title}</h3>
                <p className="text-turkish-rose text-xl font-garamond max-w-md">{teaser.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
