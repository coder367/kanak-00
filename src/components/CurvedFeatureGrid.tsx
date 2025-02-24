
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
              rounded-lg
              overflow-hidden
              transition-all duration-300
              shadow-[0_4px_8px_rgba(0,0,0,0.15)]
              hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)]
            `}
          >
            {/* Decorative Border */}
            <div className="absolute inset-[3px] border-2 border-[#FBFBEB]/30 rounded-lg" />
            
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#FBFBEB]/30 rounded-tl" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#FBFBEB]/30 rounded-tr" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#FBFBEB]/30 rounded-bl" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#FBFBEB]/30 rounded-br" />

            {/* Left Side Pattern */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 bg-[#FBFBEB]/30 rounded-full mb-2 ml-2"
                />
              ))}
            </div>

            {/* Right Side Pattern */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 bg-[#FBFBEB]/30 rounded-full mb-2 mr-2"
                />
              ))}
            </div>

            {/* Content Container */}
            <div className="h-full px-12 py-5 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold font-serif-display text-[#FBFBEB] text-center">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#FBFBEB]/90 font-garamond text-center">
                  {feature.description}
                </p>
                
                {/* CTA Button */}
                <button 
                  className="mt-2 px-6 py-1.5 bg-[#8C1444] text-[#FBFBEB] text-[16px] 
                           rounded-full font-medium mx-auto 
                           hover:bg-[#8C1444]/90 hover:scale-105 
                           hover:shadow-[0_0_15px_rgba(140,20,68,0.3)] 
                           transition-all duration-300"
                >
                  Claim Now
                </button>
              </div>
            </div>

            {/* Dotted Line Border Top */}
            <div className="absolute top-8 left-8 right-8 border-t border-dashed border-[#FBFBEB]/30" />
            
            {/* Dotted Line Border Bottom */}
            <div className="absolute bottom-8 left-8 right-8 border-t border-dashed border-[#FBFBEB]/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
