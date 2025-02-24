
import { Card } from "@/components/ui/card";
import { Sun, Truck, Heart, Shirt } from "lucide-react";

type Teaser = {
  image: string;
  icons?: Array<{ icon: any; label: string }>;
  title?: string;
  description: string | string[];
}

export const TeaserCards = () => {
  const teasers: Teaser[] = [
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
      image: "/lovable-uploads/8e47072b-c16a-4210-879c-a243d34faf13.png",
      title: "Exclusive Launch Offer",
      description: [
        "Flat 20% OFF on your first order – Use code KANAK20 at checkout.",
        "Stand a chance to win a free Kurti as part of our launch giveaway.",
        "Stay updated—check your email and WhatsApp for upcoming announcements."
      ],
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
        <div className="min-h-[100vh] md:min-h-[150vh] relative perspective-[1000px] pb-[30vh]">
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className="bg-white border-none p-4 md:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 items-center sticky top-[15vh] transition-transform duration-300 overflow-hidden"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transform: `translateY(calc(${index * (window.innerWidth >= 768 ? 10 : 85)}vh)) translateZ(${index * -100}px)`,
                height: window.innerWidth < 768 ? 'auto' : undefined,
                maxHeight: window.innerWidth < 768 ? '85vh' : undefined,
                minHeight: window.innerWidth < 768 ? '450px' : undefined,
                opacity: index === 2 ? 0.99 : 1,
                marginBottom: window.innerWidth < 768 ? '2rem' : undefined,
              }}
            >
              {index === 0 ? (
                <>
                  <div className="w-full md:w-72 h-[200px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <img 
                      src={teaser.image} 
                      alt="Feature Collection" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {teaser.icons?.map(({ icon: Icon, label }, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <Icon className="w-6 h-6 text-disco" />
                          <span className="text-xs mt-1 text-disco">{label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-turkish-rose font-garamond leading-relaxed text-sm md:text-base">
                      {teaser.description}
                    </p>
                  </div>
                </>
              ) : index === 1 ? (
                <>
                  <div className="w-full md:w-72 h-[200px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <img 
                      src={teaser.image} 
                      alt="Exclusive Offer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left flex flex-col gap-4">
                    <h3 className="text-2xl md:text-5xl font-serif-display text-disco-dark">{teaser.title}</h3>
                    <p className="text-base md:text-xl font-garamond text-turkish-rose max-w-md">
                      {typeof teaser.description === 'string' ? teaser.description : teaser.description.join(' ')}
                    </p>
                    <button 
                      onClick={scrollToWaitlist}
                      className="bg-disco hover:bg-disco-dark text-white font-garamond px-6 md:px-8 py-2 md:py-3 rounded-xl transition-colors mx-auto md:mx-0 mt-4"
                    >
                      Get Exclusive Access
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-72 h-[200px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <img 
                      src={teaser.image} 
                      alt="Launch Offer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl md:text-4xl font-serif-display text-disco-dark mb-4 md:mb-6">{teaser.title}</h3>
                    <div className="space-y-3 md:space-y-4">
                      {Array.isArray(teaser.description) ? teaser.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-disco text-base md:text-lg flex-shrink-0">✔</span>
                          <p className="text-base md:text-lg font-garamond text-turkish-rose">{item}</p>
                        </div>
                      )) : (
                        <p className="text-base md:text-lg font-garamond text-turkish-rose">{teaser.description}</p>
                      )}
                    </div>
                    <button 
                      onClick={scrollToWaitlist}
                      className="bg-disco hover:bg-disco-dark text-white font-garamond px-6 md:px-8 py-2 md:py-3 rounded-xl transition-colors mt-4 md:mt-6 w-full md:w-auto"
                    >
                      Join Waitlist
                    </button>
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
