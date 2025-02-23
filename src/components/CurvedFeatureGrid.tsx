
const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 z-30">
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
          className={`relative transition-transform duration-300 hover:scale-105 w-full md:w-1/3 ${
            index === 1 ? 'md:-mt-12' : ''
          }`}
          style={{
            transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`
          }}
        >
          <div 
            className="bg-[#BA778B] p-5 rounded-2xl border border-white/20"
          >
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-lg font-serif-display text-white">{feature.title}</h3>
              <p className="text-sm font-garamond text-center text-white/95 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
