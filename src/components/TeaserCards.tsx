
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
    <section className="bg-rum-swizzle">
      <div className="container mx-auto px-4">
        <div className="min-h-[300vh]"> {/* Increased height to allow for full scroll effect */}
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className="bg-white border-none p-8 rounded-2xl flex gap-8 items-center fixed w-[calc(100%-2rem)] mx-4 top-1/2 -translate-y-1/2 transition-transform duration-300"
              style={{
                willChange: 'transform',
                opacity: 1,
                transform: `translateY(calc(${index * 100}vh - 50vh))`,
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
