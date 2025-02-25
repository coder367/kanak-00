
import { Instagram, Phone, Mail, Link } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-rum-swizzle py-12 sm:py-14 md:py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-4 mb-12 sm:mb-16 md:mb-20">
          {/* Contact Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-2xl sm:text-2xl mb-4 sm:mb-5">Contact</h3>
            <ul className="space-y-3 sm:space-y-4 font-garamond text-turkish-rose">
              <li className="flex items-center gap-2 transition-colors duration-200 hover:text-disco cursor-pointer">
                <Phone size={20} className="sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">+91 7757033088</span>
              </li>
              <li className="flex items-center gap-2 transition-colors duration-200 hover:text-disco cursor-pointer">
                <Mail size={20} className="sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">kanakdhagamain@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-2xl sm:text-2xl mb-4 sm:mb-5">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kanakdhaga?igsh=bThlaHp6ODFoN3Fn&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-turkish-rose hover:text-disco transition-colors duration-200"
              >
                <Instagram size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a 
                href="https://pin.it/7DArmCSCD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-turkish-rose hover:text-disco transition-colors duration-200"
              >
                <Link size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Brand and Copyright Section */}
        <div className="text-center pt-6 sm:pt-8 border-t border-turkish-rose/20">
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-disco-dark mb-4 sm:mb-6 tracking-wider">
            KANAKDHAGA
          </h2>
          <p className="font-garamond text-turkish-rose text-xs sm:text-sm">
            © {new Date().getFullYear()} Kanakdhaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
