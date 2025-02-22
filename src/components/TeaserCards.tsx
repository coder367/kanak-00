
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
        <div className="space-y-[-100px]"> {/* This creates the overlapping effect */}
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className="bg-white border-none p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 flex gap-8 items-center relative"
              style={{
                transform: `translateY(${index * 20}px)`,
                zIndex: teasers.length - index
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
