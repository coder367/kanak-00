
import { Diamond, Crown, Gem } from "lucide-react";

const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 z-30">
      {[
        {
          icon: Diamond,
          title: "Feature One",
          description: "Lorem ipsum dolor sit amet consectetur"
        },
        {
          icon: Crown,
          title: "Feature Two",
          description: "Sed do eiusmod tempor incididunt"
        },
        {
          icon: Gem,
          title: "Feature Three",
          description: "Ut enim ad minim veniam quis"
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
            className="bg-[#8C1444] p-5 rounded-2xl border border-white/20"
          >
            <div className="flex flex-col items-center gap-3 text-white">
              <feature.icon className="w-8 h-8 stroke-[1.5]" />
              <h3 className="text-lg font-serif-display">{feature.title}</h3>
              <p className="text-xs text-center text-white/90">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
