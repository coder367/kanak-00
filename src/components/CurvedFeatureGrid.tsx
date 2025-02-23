
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
          style={{
            transform: index === 1 ? 'translateY(-2rem)' : 'none'
          }}
        >
          <div 
            style={{ 
              borderRadius: '20px',
              transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`
            }}
            className="bg-[#BA778B] p-6 border border-white/20"
          >
            <div className="flex flex-col items-center gap-4 text-white">
              <feature.icon className="w-10 h-10 stroke-[1.5]" />
              <h3 className="text-xl font-serif-display">{feature.title}</h3>
              <p className="text-sm text-center text-white/90">{feature.description}</p>
            </div>
          </div>
          {/* Curved shape at bottom */}
          <div 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] h-12"
            style={{
              background: '#BA778B',
              borderBottomLeftRadius: '100px',
              borderBottomRightRadius: '100px',
              transform: `rotate(${index === 0 ? '-5deg' : index === 2 ? '5deg' : '0deg'})`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CurvedFeatureGrid;
