
import { Instagram, Phone, Mail, Link } from "lucide-react";

export const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kanakdhagamain@gmail.com";
  };

  return (
    <footer className="bg-rum-swizzle py-12 sm:py-14 md:py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Contact and Follow Us Container */}
        <div className="bg-rum-swizzle/80 rounded-xl p-6 sm:pl-8 sm:pt-8 sm:pb-8 sm:pr-[22rem] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            {/* Contact Us Section */}
            <div>
              <h3 className="font-serif-display text-disco-dark text-3xl sm:text-3xl md:text-2xl mb-6 sm:mb-6">Contact Us</h3>
              <ul className="space-y-4 sm:space-y-5 font-garamond text-turkish-rose">
                <li className="flex items-center gap-3 transition-colors duration-200 hover:text-disco cursor-pointer">
                  <Phone size={24} className="sm:w-7 sm:h-7 md:w-6 md:h-6" />
                  <a href="tel:+917757033088" className="text-xl sm:text-xl md:text-lg">+91 7757033088</a>
                </li>
                <li 
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 transition-colors duration-200 hover:text-disco cursor-pointer"
                >
                  <Mail size={24} className="sm:w-7 sm:h-7 md:w-6 md:h-6" />
                  <span className="text-xl sm:text-xl md:text-lg">kanakdhagamain@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="font-serif-display text-disco-dark text-3xl sm:text-3xl md:text-2xl mb-6 sm:mb-6">Follow Us</h3>
              <div className="flex gap-6">
                <a 
                  href="https://www.instagram.com/kanakdhaga?igsh=bThlaHp6ODFoN3Fn&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex text-turkish-rose hover:text-disco transition-colors duration-200"
                >
                  <Instagram size={28} className="sm:w-8 sm:h-8 md:w-7 md:h-7" />
                </a>
                <a 
                  href="https://pin.it/7DArmCSCD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex text-turkish-rose hover:text-disco transition-colors duration-200"
                >
                  <Link size={28} className="sm:w-8 sm:h-8 md:w-7 md:h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand and Copyright Section */}
        <div className="text-center pt-8 sm:pt-10 border-t border-turkish-rose/20">
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
