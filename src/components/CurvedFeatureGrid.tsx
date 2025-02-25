
import { useRef, useState, useEffect } from "react";
import { useInterval } from "@/hooks/use-interval";

const CurvedFeatureGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  const features = [
    {
      title: "Early Bird Offer",
      description: "Flat 20% off on first order"
    },
    {
      title: "Exclusive Giveaway",
      description: "Kurtis worth Rs. 10,000 to lucky waitlist members"
    },
    {
      title: "Sneak Peek Access",
      description: "Early access and sneak peek to our first drop"
    }
  ];

  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('.waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check and update screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1084);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useInterval(() => {
    if (isSmallScreen) {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }
  }, 3000);

  const handleDotClick = (index: number) => {
    if (isSmallScreen) {
      setCurrentSlide(index);
    }
  };

  if (isSmallScreen) {
    return (
      <div className="w-full max-w-[600px] mx-auto">
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="relative w-full transition-all duration-300">
                  <div className="relative h-[180px] bg-turkish-rose rounded-[30px] border border-[#D4AF37] shadow-[0_4px_8px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 mb-4">
                    <div className="absolute -left-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-careys-pink rounded-full" />
                    <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-careys-pink rounded-full" />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 border border-[#D4AF37]/50 rounded-full" />
                    </div>
                    
                    <div className="h-full px-8 py-6 flex flex-col justify-center">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-[18px] font-bold font-serif-display text-[#FBFBEB]">
                          {feature.title}
                        </h3>
                        <p className="text-[15px] text-[#FBFBEB]/90 font-garamond">
                          {feature.description}
                        </p>
                        <button 
                          onClick={scrollToWaitlist}
                          className="mt-2 px-5 py-1.5 bg-[#8C1444] text-[#FBFBEB] text-[15px] rounded-full font-medium mx-auto hover:bg-[#8C1444]/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(140,20,68,0.3)] transition-all duration-300"
                        >
                          Claim Now
                        </button>
                      </div>
                    </div>
                    <div className="absolute left-14 right-14 top-1/2 -translate-y-1/2 border-t border-dashed border-[#D4AF37]/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots for navigation */}
          <div className="flex justify-center space-x-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-row items-center justify-center gap-6 md:gap-[24px] z-30">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="relative w-[300px] sm:w-[340px] md:w-[380px] transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.01]"
          style={{
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`,
            marginTop: index === 1 ? '-2rem' : '0'
          }}
        >
          <div className="relative h-[150px] sm:h-[160px] md:h-[170px] bg-turkish-rose rounded-[10px] border border-[#D4AF37] shadow-[0_4px_8px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300">
            <div className="absolute -left-[8px] top-1/2 -translate-y-1/2 w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] bg-careys-pink rounded-full" />
            <div className="absolute -right-[8px] top-1/2 -translate-y-1/2 w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] bg-careys-pink rounded-full" />
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
              <div className="w-4 sm:w-5 h-4 sm:h-5 border border-[#D4AF37]/50 rounded-full" />
            </div>
            
            <div className="h-full px-8 sm:px-12 md:px-16 py-4 sm:py-5 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold font-serif-display text-[#FBFBEB]">
                  {feature.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#FBFBEB]/90 font-garamond">
                  {feature.description}
                </p>
                <button 
                  onClick={scrollToWaitlist}
                  className="mt-2 px-4 sm:px-6 py-1 sm:py-1.5 bg-[#8C1444] text-[#FBFBEB] text-[14px] sm:text-[16px] rounded-full font-medium mx-auto hover:bg-[#8C1444]/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(140,20,68,0.3)] transition-all duration-300"
                >
                  Claim Now
                </button>
              </div>
            </div>
            <div className="absolute left-14 right-14 top-1/2 -translate-y-1/2 border-t border-dashed border-[#D4AF37]/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
