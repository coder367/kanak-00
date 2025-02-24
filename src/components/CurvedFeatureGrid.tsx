
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
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`,
            marginTop: index === 1 ? '-2rem' : '0'
          }}
        >
          <div 
            className={`
              relative h-[150px]
              bg-turkish-rose
              rounded-[10px]
              border border-[#D4AF37]
              shadow-[0_4px_8px_rgba(0,0,0,0.15)]
              hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)]
              overflow-hidden
              transition-all duration-300
            `}
          >
            {/* Left Cutout */}
            <div className="absolute -left-[8px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-careys-pink rounded-full" />
            
            {/* Right Cutout */}
            <div className="absolute -right-[8px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-careys-pink rounded-full" />
            
            {/* Left Decorative Circle */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border border-[#D4AF37]/50 rounded-full" />
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

            {/* Dotted Line */}
            <div className="absolute left-14 right-14 top-1/2 -translate-y-1/2 border-t border-dashed border-[#D4AF37]/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
