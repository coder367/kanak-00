
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
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-[#FBFBEB]/30">
              {/* Top Decorative Pattern */}
              <div className="absolute top-0 left-0 right-0 h-6 border-b border-[#FBFBEB]/30">
                <div className="absolute inset-x-4 top-1 flex justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4">
                      <div className="w-3 h-3 border-2 border-[#FBFBEB]/30 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-6 border-t border-[#FBFBEB]/30">
                <div className="absolute inset-x-4 bottom-1 flex justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4">
                      <div className="w-3 h-3 border-2 border-[#FBFBEB]/30 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Side Pattern */}
              <div className="absolute left-0 top-6 bottom-6 w-6 border-r border-[#FBFBEB]/30">
                <div className="absolute inset-y-4 left-1 flex flex-col justify-between">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4">
                      <div className="w-3 h-3 border-2 border-[#FBFBEB]/30 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Pattern */}
              <div className="absolute right-0 top-6 bottom-6 w-6 border-l border-[#FBFBEB]/30">
                <div className="absolute inset-y-4 right-1 flex flex-col justify-between">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4">
                      <div className="w-3 h-3 border-2 border-[#FBFBEB]/30 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
