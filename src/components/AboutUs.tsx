
export const AboutUs = () => {
  return (
    <section className="bg-rum-swizzle py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif-display text-disco-dark">A Heritage of Elegance & Craftsmanship</h2>
            <div className="space-y-4 text-turkish-rose">
              <p className="font-garamond text-lg">
                Kanakdhaga is more than a brand—it's a legacy of craftsmanship, trust, and timeless elegance. Inspired by real stories and built on family values, every piece is crafted with care and precision. From the finest fabrics to skilled artisans, we create clothing that blends tradition with modern comfort.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/549b8eb7-c208-4bd5-8c3e-269d3664ae60.png"
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
