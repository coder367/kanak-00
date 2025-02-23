
import { Input } from "@/components/ui/input";

export const WaitlistSection = () => {
  return (
    <section className="bg-careys-pink/60 backdrop-blur-lg py-16 md:py-24 -mt-screen relative">
      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="text-center space-y-6 md:space-y-8 bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-[#8C1444]">Join the waitlist</h2>
          <p className="text-turkish-rose text-base md:text-lg max-w-md mx-auto">
            Get exclusive early access to our software and stay updated on launch news.
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <Input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            <Input 
              type="email" 
              placeholder="Your mailadress" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            <button className="w-full bg-[#8C1444] hover:bg-[#8C1444]/90 text-white font-garamond px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
