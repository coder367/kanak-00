
const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 z-30">
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
          className="relative w-[300px] md:w-[340px] transition-all duration-300 hover:scale-102"
          style={{
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`,
            marginTop: index === 1 ? '-2rem' : '0'
          }}
        >
          <div 
            className={`
              relative h-[200px]
              bg-turkish-rose
              rounded-[10px]
              border border-[#D4AF37]
              shadow-[0_5px_15px_rgba(0,0,0,0.2)]
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
              overflow-hidden
              transition-all duration-300
            `}
          >
            {/* Left Cutout */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-careys-pink rounded-full" />
            
            {/* Right Cutout */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-careys-pink rounded-full" />
            
            {/* Left Decorative Circle */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border border-[#D4AF37]/50 rounded-full" />
            </div>

            {/* Content Container */}
            <div className="h-full px-20 py-6 flex flex-col justify-center">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold font-serif-display text-[#FBFBEB]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#FBFBEB]/90 font-garamond">
                  {feature.description}
                </p>
                
                {/* CTA Button */}
                <button className="mt-2 px-4 py-1.5 bg-[#8C1444] text-[#FBFBEB] rounded-full text-sm font-medium self-start hover:bg-[#8C1444]/90 hover:shadow-[0_0_10px_rgba(140,20,68,0.3)] transition-all duration-300">
                  Claim Now
                </button>
              </div>
            </div>

            {/* Dotted Line */}
            <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 border-t border-dashed border-[#D4AF37]/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
