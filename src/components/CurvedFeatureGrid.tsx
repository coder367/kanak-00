
const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 z-30">
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
          className="relative transition-all duration-300 group w-full md:w-1/3"
          style={{
            transform: `translateY(${index === 1 ? '-2rem' : '0'})`,
            height: '100%'
          }}
        >
          <div 
            className={`h-full p-8 rounded-2xl border border-white/10 transition-transform duration-300 group-hover:transform group-hover:-translate-y-2 ${
              index === 1 
                ? 'bg-gradient-to-br from-[#9b87f5] to-[#7c6ad8]' 
                : 'bg-[#2A2A2A]'
            } shadow-lg hover:shadow-xl`}
          >
            <div className="flex flex-col items-center gap-4 text-white h-full">
              <h3 className="text-2xl font-serif-display">{feature.title}</h3>
              <p className="text-base text-center text-white/80 mt-2">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
