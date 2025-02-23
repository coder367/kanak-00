
import { Building, Users } from "lucide-react";

export const AboutUs = () => {
  return (
    <section className="bg-rum-swizzle py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif-display text-disco-dark">About Kanakdhaga</h2>
            <div className="space-y-4 text-turkish-rose">
              <p className="font-garamond text-lg">
                Welcome to Kanakdhaga, where tradition meets contemporary fashion. We specialize in creating exquisite ethnic wear that celebrates the rich heritage of Indian craftsmanship while embracing modern design sensibilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-disco" />
                  <span className="font-garamond">Established 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-disco" />
                  <span className="font-garamond">Growing Community</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/8e36c8bd-21a3-401a-a221-cf8f3e2a0308.png"
                alt="About Kanakdhaga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
