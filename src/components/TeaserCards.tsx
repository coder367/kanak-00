
import { Card } from "@/components/ui/card";
import { Sun, Truck, Heart, Shirt } from "lucide-react";

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
              className="bg-[#FBFBFB] border-none p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 items-center sticky top-[15vh] transition-transform duration-300"
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
                    {/* Icons Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {teaser.icons.map(({ icon: Icon, label }, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <Icon className="w-6 h-6 text-disco" />
                          <span className="text-xs mt-1 text-disco">{label}</span>
                        </div>
                      ))}
                    </div>
                    {/* Description */}
                    <p className="text-turkish-rose font-garamond leading-relaxed">
                      {teaser.description}
                    </p>
                  </div>
                </>
              ) : index === 1 ? (
                <>
                  <div className="w-full md:w-72 h-[250px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <img 
                      src={teaser.image} 
                      alt="Exclusive Offer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left flex flex-col gap-4">
                    <h3 className="text-3xl md:text-5xl font-serif-display text-disco-dark">{teaser.title}</h3>
                    <p className="text-lg md:text-xl font-garamond text-turkish-rose max-w-md">{teaser.description}</p>
                    <button 
                      onClick={scrollToWaitlist}
                      className="bg-disco hover:bg-disco-dark text-white font-garamond px-8 py-3 rounded-xl transition-colors self-start mt-4"
                    >
                      Get Exclusive Access
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-72 h-[250px] md:h-[400px] bg-gray-200 rounded-xl flex-shrink-0">
                    <div className="w-full h-full bg-[linear-gradient(45deg,#f0f0f0_25%,#e0e0e0_25%,#e0e0e0_50%,#f0f0f0_50%,#f0f0f0_75%,#e0e0e0_75%)] bg-[length:20px_20px]" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-serif-display text-disco-dark mb-2 md:mb-4">{teaser.title}</h3>
                    <p className="text-lg md:text-xl font-garamond text-turkish-rose max-w-md">{teaser.description}</p>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
