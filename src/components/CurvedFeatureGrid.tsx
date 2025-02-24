
const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 z-30">
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
          className="group relative w-[300px] md:w-[350px] transition-all duration-500 hover:scale-105"
          style={{
            height: '420px',
            perspective: '1000px',
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`,
            marginTop: index === 1 ? '-2rem' : '0'
          }}
        >
          <div 
            className={`
              w-full h-full 
              bg-[#FBFBEB] 
              rounded-[50px_50px_0_0] 
              border border-[#8C1444] 
              shadow-[0_10px_20px_rgba(0,0,0,0.1)]
              group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]
              p-8
              flex flex-col items-center justify-center
              relative
              overflow-hidden
              transition-all duration-300
            `}
          >
            {/* Decorative Arc Pattern */}
            <div 
              className="absolute top-0 left-0 right-0 h-24 bg-[#D0A0AB]/10"
              style={{
                borderRadius: '50px 50px 100% 100%',
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center mt-8">
              {/* Decorative Line */}
              <div className="w-16 h-0.5 bg-[#8C1444]/30 mb-2" />
              
              <h3 className="text-2xl md:text-3xl font-serif-display text-[#8C1444]">
                {feature.title}
              </h3>
              
              {/* Decorative Line */}
              <div className="w-16 h-0.5 bg-[#8C1444]/30" />
              
              <p className="text-base md:text-lg text-turkish-rose font-garamond max-w-[250px] leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Bottom Decorative Pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#D0A0AB]/10" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
