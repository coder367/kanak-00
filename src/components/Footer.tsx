
import { Instagram, Phone, Mail, Link } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-rum-swizzle py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Contact Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-xl mb-4">Contact</h3>
            <ul className="space-y-3 font-garamond text-turkish-rose">
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <span>+91 999 999 9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <span>info@kanakdhaga.com</span>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/kanakdhaga?igsh=bThlaHp6ODFoN3Fn&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-turkish-rose hover:text-disco transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://pin.it/7DArmCSCD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex text-turkish-rose hover:text-disco transition-colors"
              >
                <Link size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Brand and Copyright Section */}
        <div className="text-center pt-8 border-t border-turkish-rose/20">
          <h2 className="font-serif-display text-6xl md:text-7xl lg:text-8xl text-disco-dark mb-6 tracking-wider">
            KANAKDHAGA
          </h2>
          <p className="font-garamond text-turkish-rose text-sm">
            © {new Date().getFullYear()} Kanakdhaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
