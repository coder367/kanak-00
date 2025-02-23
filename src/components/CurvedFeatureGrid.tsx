
const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 z-30">
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
          className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-1/3`}
          style={{
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`,
            marginTop: index === 1 ? '-2rem' : '0'
          }}
        >
          <div 
            className="bg-[#BA778B] p-5 md:p-6 rounded-2xl border border-white/20 shadow-[4px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 min-h-[180px] md:min-h-[220px] flex items-center"
          >
            <div className="flex flex-col items-center gap-4 text-white w-full">
              <h3 className="text-lg md:text-xl font-serif-display">{feature.title}</h3>
              <p className="text-sm md:text-base text-center text-white/90">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
