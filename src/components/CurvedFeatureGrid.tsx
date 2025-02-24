
import { Star } from "lucide-react";

const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[24px] z-30">
      {[
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
      ].map((feature, index) => (
        <div 
          key={index}
          className="relative w-[350px] transition-all duration-300 hover:-translate-y-[5px] hover:scale-[1.01]"
          style={{
            transform: `rotate(${index === 0 ? '-3deg' : index === 2 ? '3deg' : '0deg'})`,
            marginTop: index === 1 ? '-1rem' : '0'
          }}
        >
          <div 
            className={`
              relative h-[180px]
              bg-turkish-rose
              border-2 border-[#D4AF37]
              overflow-hidden
              transition-all duration-300
              shadow-[0_4px_8px_rgba(0,0,0,0.15)]
              hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)]
            `}
          >
            {/* Ticket Shape Corners */}
            <div className="absolute inset-0">
              {/* Top Left */}
              <div className="absolute -left-3 -top-3 w-6 h-6 bg-careys-pink rounded-br-full" />
              {/* Top Right */}
              <div className="absolute -right-3 -top-3 w-6 h-6 bg-careys-pink rounded-bl-full" />
              {/* Bottom Left */}
              <div className="absolute -left-3 -bottom-3 w-6 h-6 bg-careys-pink rounded-tr-full" />
              {/* Bottom Right */}
              <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-careys-pink rounded-tl-full" />
            </div>

            {/* Decorative Border Frame */}
            <div className="absolute inset-[12px] border-2 border-[#D4AF37]/60 rounded-sm" />

            {/* Star Decorations */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4">
              {[0, 1, 2].map((i) => (
                <Star key={i} className="w-4 h-4 ml-5 text-[#D4AF37]/60" />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-4">
              {[0, 1, 2].map((i) => (
                <Star key={i} className="w-4 h-4 mr-5 text-[#D4AF37]/60" />
              ))}
            </div>

            {/* Content Container */}
            <div className="h-full px-16 py-5 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold font-serif-display text-[#FBFBEB]">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#FBFBEB]/90 font-garamond">
                  {feature.description}
                </p>
                
                {/* CTA Button */}
                <button className="mt-2 px-6 py-1.5 bg-[#8C1444] text-[#FBFBEB] text-[16px] rounded-full font-medium mx-auto hover:bg-[#8C1444]/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(140,20,68,0.3)] transition-all duration-300">
                  Claim Now
                </button>
              </div>
            </div>

            {/* Horizontal Decorative Lines */}
            <div className="absolute left-12 right-12 top-[30px] border-t border-[#D4AF37]/30" />
            <div className="absolute left-12 right-12 bottom-[30px] border-t border-[#D4AF37]/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
