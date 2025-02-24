
const CurvedFeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-md rounded-3xl p-6 space-y-4"
        >
          <h3 className="text-xl text-disco font-serif-display">Theme {index + 1}</h3>
          <p className="text-sm text-turkish-rose font-garamond">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
