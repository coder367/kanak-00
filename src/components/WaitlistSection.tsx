
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const WaitlistSection = () => {
  return (
    <section className="waitlist-section bg-careys-pink/60 backdrop-blur-lg py-16 md:py-20 relative">
      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <div className="text-center space-y-6 md:space-y-8 bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-[#8C1444]">Join the waitlist</h2>
          <p className="text-turkish-rose text-base md:text-lg max-w-md mx-auto">
            Grab 20% Off & Join Our Exclusive Giveaway
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <Input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            <Input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            <Input 
              type="tel" 
              placeholder="Whatsapp number (Optional)" 
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            
            <Select>
              <SelectTrigger 
                className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
              >
                <SelectValue placeholder="Where did you hear about us?" />
              </SelectTrigger>
              <SelectContent className="bg-white/90 backdrop-blur-md">
                <SelectItem 
                  value="instagram" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  Instagram
                </SelectItem>
                <SelectItem 
                  value="friends" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  Friends
                </SelectItem>
                <SelectItem 
                  value="google" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  Google
                </SelectItem>
                <SelectItem 
                  value="whatsapp" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  Whatsapp
                </SelectItem>
                <SelectItem 
                  value="others" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  Others
                </SelectItem>
              </SelectContent>
            </Select>

            <button className="w-full bg-[#8C1444] hover:bg-[#8C1444]/90 text-white font-garamond px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300">
              Get Exclusive Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
