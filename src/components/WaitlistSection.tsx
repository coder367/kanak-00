
import { Input } from "@/components/ui/input";

export const WaitlistSection = () => {
  return (
    <section className="bg-careys-pink py-24">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-serif-display text-disco-dark">Join the waitlist</h2>
          <p className="text-turkish-rose text-lg max-w-md mx-auto">
            Get exclusive early access to our software and stay updated on launch news.
          </p>
          
          <div className="space-y-4">
            <Input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/20 border-none text-disco-dark placeholder:text-turkish-rose h-14 rounded-2xl text-lg px-6"
            />
            <Input 
              type="email" 
              placeholder="Your mailadress" 
              className="w-full bg-white/20 border-none text-disco-dark placeholder:text-turkish-rose h-14 rounded-2xl text-lg px-6"
            />
            <button className="w-full bg-disco hover:bg-disco-dark text-white font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-300">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
