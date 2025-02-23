
import { Instagram, Phone, Mail, Pinterest } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-rum-swizzle py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                <Pinterest size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with logo and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-turkish-rose/20">
          <h2 className="font-serif-display text-3xl text-disco-dark mb-4 md:mb-0">
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
