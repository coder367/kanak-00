
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const WaitlistSection = () => {
  return (
    <section className="waitlist-section bg-careys-pink/60 backdrop-blur-lg py-12 -mt-screen relative">
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <div className="text-center space-y-4 bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-serif-display text-[#8C1444]">Join the waitlist</h2>
          <p className="text-turkish-rose text-sm md:text-base max-w-sm mx-auto">
            Grab 20% Off & Join Our Exclusive Giveaway
          </p>
          
          <div className="space-y-3">
            <Input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-10 rounded-xl text-base px-4"
            />
            <Input 
              type="email" 
              placeholder="Your mailadress" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-10 rounded-xl text-base px-4"
            />
            <Input 
              type="tel" 
              placeholder="Whatsapp number (Optional)" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-10 rounded-xl text-base px-4"
            />
            
            <Select>
              <SelectTrigger 
                className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-10 rounded-xl text-base px-4"
              >
                <SelectValue placeholder="Where did you hear about us?" />
              </SelectTrigger>
              <SelectContent className="bg-white/90 backdrop-blur-md">
                <SelectItem value="friends">Friends</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="whatsapp">Whatsapp</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>

            <button className="w-full bg-[#8C1444] hover:bg-[#8C1444]/90 text-white font-garamond px-6 py-2.5 rounded-xl text-base transition-all duration-300">
              Get Exclusive Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
