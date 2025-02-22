
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Collections = () => {
  const collections = [
    { id: 1, title: "Summer Collection" },
    { id: 2, title: "Autumn Essentials", className: "col-span-2" },
    { id: 3, title: "Winter Wear" },
    { id: 4, title: "Spring Collection", className: "col-span-2" },
    { id: 5, title: "Accessories" },
    { id: 6, title: "Evening Wear" },
    { id: 7, title: "Casual Wear" },
    { id: 8, title: "Formal Collection" },
    { id: 9, title: "Designer Series", className: "col-span-2" },
  ];

  return (
    <section className="bg-rum-swizzle py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-serif-display text-disco-dark mb-12 text-center">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`relative group cursor-pointer ${collection.className || ''}`}
            >
              <AspectRatio ratio={1}>
                <div className="w-full h-full bg-[linear-gradient(45deg,#f0f0f0_25%,#e0e0e0_25%,#e0e0e0_50%,#f0f0f0_50%,#f0f0f0_75%,#e0e0e0_75%)] bg-[length:20px_20px] rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-95" />
              </AspectRatio>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-disco-dark/80 rounded-lg">
                <h3 className="text-white font-garamond text-2xl">{collection.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
