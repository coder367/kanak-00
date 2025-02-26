import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Instagram, Users, Search, MessageCircle, MoreHorizontal } from "lucide-react";

export const WaitlistSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    referralSource: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      return false;
    }
    if (!emailRegex.test(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address (e.g., example@domain.com)" }));
      return false;
    }
    setErrors(prev => ({ ...prev, email: "" }));
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));
    if (value) {
      validateEmail(value);
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.fullName) {
      toast({
        title: "Missing Information",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!formData.referralSource) {
      toast({
        title: "Missing Information",
        description: "Please select where you heard about us",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist_entries").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          whatsapp_number: formData.whatsappNumber || null,
          referral_source: formData.referralSource,
        },
      ]);

      if (error) throw error;

      toast({
        title: "🎉 Congratulations!",
        description: (
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xl font-serif-display text-[#8C1444]">
              You're now an Exclusive Member of KANAKDHAGA
            </span>
            <div className="text-turkish-rose text-sm">
              We'll keep you updated with exclusive offers and launches!
            </div>
          </div>
        ),
        className: "bg-white border-2 border-[#8C1444]/20 shadow-lg",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsappNumber: "",
        referralSource: "",
      });
      setErrors({ email: "" });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting to waitlist:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist-section bg-careys-pink/60 backdrop-blur-lg py-16 md:py-20 relative">
      <div className="container mx-auto px-4 max-w-xl relative z-10">
        <form onSubmit={handleSubmit} className="text-center space-y-6 md:space-y-8 bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display text-[#8C1444]">Join the waitlist</h2>
          <p className="text-turkish-rose text-base md:text-lg max-w-md mx-auto">
            Grab 20% Off & Join Our Exclusive Giveaway
          </p>
          
          <div className="space-y-3 md:space-y-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Full Name" 
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
              />
            </div>

            <div className="relative">
              <Input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleEmailChange}
                className={`w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6 ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
              )}
            </div>

            <Input 
              type="tel" 
              placeholder="Whatsapp number (Optional)" 
              value={formData.whatsappNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
              className="w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6"
            />
            
            <Select
              value={formData.referralSource}
              onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
            >
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
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </div>
                </SelectItem>
                <SelectItem 
                  value="friends" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Friends
                  </div>
                </SelectItem>
                <SelectItem 
                  value="google" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Google
                  </div>
                </SelectItem>
                <SelectItem 
                  value="whatsapp" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Whatsapp
                  </div>
                </SelectItem>
                <SelectItem 
                  value="others" 
                  className="hover:bg-turkish-rose/10 hover:text-disco transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MoreHorizontal className="h-4 w-4" />
                    Others
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8C1444] hover:bg-[#8C1444]/90 text-white font-garamond px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Get Exclusive Access"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
