
import { Card } from "@/components/ui/card";
import { Sun, Truck, Heart, Shirt, Mail, Percent } from "lucide-react";

export const TeaserCards = () => {
  const teasers = [
    {
      image: "/lovable-uploads/0f856697-8814-4188-a095-7ea4ce08c309.png",
      icons: [
        { icon: Sun, label: "Light" },
        { icon: Truck, label: "Free Shipping" },
        { icon: Heart, label: "Made with love" },
        { icon: Shirt, label: "Pure Cotton" },
      ],
      description: "Kanakdhaga is all about breathable co-ords, effortless lounge sets, and resort wear that move with you. Just like a golden thread ties everything together, our pieces bring together ease and charm without compromising on style.",
    },
    {
      image: "/lovable-uploads/6b994672-5bab-422a-86dc-3a94232daa33.png",
      title: "Be the First to Grab It – Flat 20% Off!",
      description: "Sign up now and enjoy an exclusive 20% discount on your first order, along with early access and a sneak peek at our first drop.",
      promos: [
        {
          icon: Percent,
          title: "Use code KANAK20",
          description: "Flat 20% OFF on your first order!"
        },
        {
          icon: Shirt,
          title: "Win a Free Kurti!",
          description: "Stand a chance to get a beautiful Kurti from us on launch."
        },
        {
          icon: Mail,
          title: "Stay tuned!",
          description: "Check your mail & WhatsApp for exciting updates."
        }
      ]
    },
    {
      title: "Create",
      description: "Express yourself in new ways and build meaningful connections with others.",
    },
  ];

  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('.waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              {index === 0 ? (
                <>
                  <div className="w-full md:w-72 h-[250px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <img 
                      src={teaser.image} 
                      alt="Feature Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {teaser.icons.map(({ icon: Icon, label }, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <Icon className="w-6 h-6 text-disco" />
                          <span className="text-xs mt-1 text-disco">{label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-turkish-rose font-garamond leading-relaxed">
                      {teaser.description}
                    </p>
                  </div>
                </>
              ) : index === 1 ? (
                <div className="w-full flex flex-col gap-6">
                  {teaser.promos?.map((promo, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <promo.icon size={28} className="text-disco" />
                      <div>
                        <h3 className="text-xl font-serif-display text-disco-dark">{promo.title}</h3>
                        <p className="text-turkish-rose font-garamond">{promo.description}</p>
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={scrollToWaitlist}
                    className="mt-4 bg-disco-dark text-white px-8 py-3 rounded-full font-garamond hover:bg-disco transition-colors self-start"
                  >
                    Join Waitlist
                  </button>
                </div>
              ) : (
                <div className="w-full text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-serif-display text-disco-dark mb-2 md:mb-4">{teaser.title}</h3>
                  <p className="text-lg md:text-xl font-garamond text-turkish-rose max-w-md">{teaser.description}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
