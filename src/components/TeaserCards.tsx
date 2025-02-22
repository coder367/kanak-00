
import { Card } from "@/components/ui/card";

export const TeaserCards = () => {
  const teasers = [
    {
      title: "Exclusive Access",
      description: "Be the first to experience our revolutionary platform and shape its future.",
    },
    {
      title: "Connect & Share",
      description: "Join a community of like-minded individuals and share your unique perspective.",
    },
    {
      title: "Stay Updated",
      description: "Get notified about our launch and receive special early-bird benefits.",
    },
  ];

  return (
    <section className="bg-rum-swizzle py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teasers.map((teaser, index) => (
            <Card key={index} className="bg-white/20 border-none p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-serif-display text-disco-dark mb-4">{teaser.title}</h3>
              <p className="text-turkish-rose text-lg font-garamond">{teaser.description}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
