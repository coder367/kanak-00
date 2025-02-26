
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    whatsappNumber: "",
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

  const validateWhatsappNumber = (number: string) => {
    if (!number) {
      setErrors(prev => ({ ...prev, whatsappNumber: "WhatsApp number is required" }));
      return false;
    }
    // Check if number starts with + and contains only digits after that
    const phoneRegex = /^\+\d{10,15}$/;
    if (!phoneRegex.test(number)) {
      setErrors(prev => ({ ...prev, whatsappNumber: "Please enter a valid number with country code (e.g., +911234567890)" }));
      return false;
    }
    setErrors(prev => ({ ...prev, whatsappNumber: "" }));
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

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, whatsappNumber: value }));
    if (value) {
      validateWhatsappNumber(value);
    } else {
      setErrors(prev => ({ ...prev, whatsappNumber: "" }));
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

    if (!validateWhatsappNumber(formData.whatsappNumber)) {
      toast({
        title: "Invalid WhatsApp Number",
        description: "Please enter a valid WhatsApp number with country code",
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
          whatsapp_number: formData.whatsappNumber,
          referral_source: formData.referralSource,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        whatsappNumber: "",
        referralSource: "",
      });
      setErrors({ email: "", whatsappNumber: "" });

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
                required
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
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <Input 
                type="tel" 
                placeholder="WhatsApp number with country code (e.g., +911234567890)" 
                value={formData.whatsappNumber}
                onChange={handleWhatsappChange}
                className={`w-full bg-white/20 border-none text-[#8C1444] placeholder:text-turkish-rose h-12 md:h-14 rounded-xl md:rounded-2xl text-base md:text-lg px-4 md:px-6 ${
                  errors.whatsappNumber ? 'ring-2 ring-red-500' : ''
                }`}
                required
              />
              {errors.whatsappNumber && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.whatsappNumber}</p>
              )}
            </div>
            
            <Select
              value={formData.referralSource}
              onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
              required
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
