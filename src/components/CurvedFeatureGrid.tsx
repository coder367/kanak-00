
import { Diamond, Crown, Gem } from "lucide-react";

const CurvedFeatureGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 z-30">
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
          className="relative group transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-gradient-to-br from-[#9b87f5]/90 to-[#7E69AB]/90 rounded-[30px] p-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <div className="flex flex-col items-center gap-4 text-white">
              <feature.icon className="w-10 h-10" />
              <h3 className="text-xl font-serif-display">{feature.title}</h3>
              <p className="text-sm text-center text-white/90">{feature.description}</p>
            </div>
          </div>
          {/* Curved bottom shape */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-br from-[#9b87f5]/60 to-[#7E69AB]/60 rounded-b-[50px] blur-sm z-[-1]" />
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
