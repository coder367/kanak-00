
import { Input } from "@/components/ui/input";

export const WaitlistSection = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-400">Launch in Feb 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif-display text-white">Join the waitlist</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Get exclusive early access to our software and stay updated on launch news.
          </p>
          
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Your mailadress" 
              className="w-full bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-14 rounded-xl text-lg"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300">
              Join waitlist
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-x"><path d="M6 13.5L9 20l3-3.5"/><path d="M21 4l-6 6m-6 6l6-6M21 4l-6 6"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
