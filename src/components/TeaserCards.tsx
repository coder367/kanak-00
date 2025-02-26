import { Card } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";

type Teaser = {
  image: string;
  icons?: Array<{ icon: string; label: string }>;
  title?: string;
  description: string | string[];
}

export const TeaserCards = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const teasers: Teaser[] = [
    {
      image: "/lovable-uploads/12ca3f72-8647-4356-b4e0-f06341eef697.png",
      icons: [
        { icon: "/lovable-uploads/4626dc7d-05b9-4deb-8583-9b1dd7c941ee.png", label: "Breathable" },
        { icon: "/lovable-uploads/10f8f108-fe25-447e-99e8-f53d6b14f47b.png", label: "Free Shipping" },
        { icon: "/lovable-uploads/f9e5edf4-16fa-4ffa-bd73-cb13fbd501be.png", label: "Made with love" },
        { icon: "/lovable-uploads/67697866-a69e-4875-8a89-2c5acf3fdd09.png", label: "Pure Cotton" },
      ],
      description: "Kanakdhaga is all about breathable co-ords, effortless lounge sets, and resort wear that move with you. Just like a golden thread ties everything together, our pieces bring together ease and charm without compromising on style.",
    },
    {
      image: "/lovable-uploads/6b994672-5bab-422a-86dc-3a94232daa33.png",
      title: "Be the First to Grab It – Flat 20% Off!",
      description: "Sign up now and enjoy an exclusive 20% discount on your first order, along with early access and a sneak peek at our first drop.",
    },
    {
      image: "/lovable-uploads/2a75a14a-ca16-4b47-a695-0448e316ecf3.png",
      title: "🎉 Grand Launch Giveaway",
      description: "Win Kurtis Worth ₹10,000! 5 Lucky Winners, Join Our Launch Giveaway!",
    },
  ];

  const scrollToWaitlist = useCallback(() => {
    const waitlistSection = document.querySelector('.waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 1.5;
      setIsFixed(scrollPosition > threshold);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.teaser-cards-section');
    if (section) {
      observer.observe(section);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-careys-pink/60 backdrop-blur-lg pt-16 md:pt-24 pb-8 md:pb-6 teaser-cards-section">
      <div className="container mx-auto px-4">
        <div className="min-h-[80vh] md:min-h-[150vh] relative perspective-[1000px] pb-0 md:pb-[30vh]">
          {teasers.map((teaser, index) => (
            <Card 
              key={index} 
              className={`bg-white border-none p-4 sm:p-8 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-8 items-center sticky top-[15vh] transition-transform duration-300 overflow-hidden ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                transform: isFixed ? 
                  `translateY(${index * (window.innerWidth >= 768 ? 10 : 2)}vh) translateZ(${index * -100}px)` :
                  `translateY(${index * (window.innerWidth >= 768 ? 10 : 2)}vh) translateZ(${index * -100}px)`,
                height: window.innerWidth < 768 ? '550px' : undefined,
                maxHeight: window.innerWidth < 768 ? '550px' : undefined,
                minHeight: window.innerWidth < 768 ? '550px' : undefined,
                opacity: index === 2 ? 0.99 : 1,
                marginBottom: 0,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {index === 0 && (
                <>
                  <div className="w-full md:w-72 h-[220px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <picture>
                      <source media="(min-width: 768px)" srcSet={teaser.image} />
                      <img 
                        src="/lovable-uploads/8015cc13-9ed8-4eb9-b287-cbf4d6c85a7c.png" 
                        alt="Feature Collection" 
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {teaser.icons?.map(({ icon, label }, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className="w-8 h-8 md:w-14 md:h-14">
                            <img 
                              src={icon} 
                              alt={label}
                              className="w-full h-full object-contain" 
                            />
                          </div>
                          <span className="text-xs md:text-base mt-2 text-disco text-center">{label}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-turkish-rose font-garamond leading-relaxed text-sm md:text-base">
                      {teaser.description}
                    </p>
                  </div>
                </>
              )}
              {index === 1 && (
                <>
                  <div className="w-full md:w-72 h-[250px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
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
                      className="bg-disco hover:bg-disco-dark text-white font-garamond px-4 md:px-6 py-2 rounded-xl transition-colors mx-auto md:mx-0 text-sm md:text-base"
                    >
                      Get Exclusive Access
                    </button>
                  </div>
                </>
              )}
              {index === 2 && (
                <>
                  <div className="w-full md:w-72 h-[250px] md:h-[400px] overflow-hidden rounded-xl flex-shrink-0">
                    <picture>
                      <source media="(min-width: 768px)" srcSet="/lovable-uploads/2a75a14a-ca16-4b47-a695-0448e316ecf3.png" />
                      <img 
                        src="/lovable-uploads/b790f0eb-1a82-497d-b18a-ea2aa37c77be.png" 
                        alt="Launch Offer" 
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="text-2xl md:text-4xl font-serif-display text-disco-dark mb-4 md:mb-6">{teaser.title}</h3>
                    <p className="text-base md:text-xl font-garamond text-turkish-rose mb-6">{teaser.description}</p>
                    <div className="flex justify-center">
                      <button 
                        onClick={scrollToWaitlist}
                        className="bg-disco hover:bg-disco-dark text-white font-garamond px-6 md:px-8 py-2 md:py-3 rounded-xl transition-colors text-base md:text-lg"
                      >
                        Join Waitlist
                      </button>
                    </div>
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
