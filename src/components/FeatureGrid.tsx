
import { Star, Diamond, Crown } from "lucide-react";

const FeatureGrid = () => {
  return (
    <div className="fixed z-[45] w-full max-w-4xl px-4 grid grid-cols-3 gap-4" style={{ top: '28%' }}>
      {[
        {
          icon: Star,
          title: "Feature One",
          description: "Lorem ipsum dolor sit amet"
        },
        {
          icon: Diamond,
          title: "Feature Two",
          description: "Consectetur adipiscing elit"
        },
        {
          icon: Crown,
          title: "Feature Three",
          description: "Sed do eiusmod tempor"
        }
      ].map((feature, index) => (
        <div
          key={index}
          className="relative group perspective-[1000px] transition-all duration-300 hover:scale-105"
        >
          <div className="bg-gradient-to-b from-[#9b87f5] to-[#7E69AB] rounded-2xl p-6 backdrop-blur-sm border border-white/10 shadow-xl transform transition-all duration-300 group-hover:rotate-y-12">
            <div className="flex flex-col items-center gap-3 text-white">
              <feature.icon className="w-8 h-8" />
              <h3 className="text-lg font-serif-display">{feature.title}</h3>
              <p className="text-sm text-center text-white/80">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
