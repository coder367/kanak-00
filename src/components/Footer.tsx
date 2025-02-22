
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-rum-swizzle py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-xl mb-4">Contact</h3>
            <div className="space-y-2 font-garamond text-turkish-rose">
              <p>123 Elegance Lane, Style City</p>
              <p>contact@ethniqglow.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Useful Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-xl mb-4">Useful</h3>
            <ul className="space-y-2 font-garamond text-turkish-rose">
              <li><a href="#" className="hover:text-disco transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-disco transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-disco transition-colors">Shipping Information</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-serif-display text-disco-dark text-xl mb-4">Follow Us</h3>
            <a 
              href="https://instagram.com/ethniqglow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-turkish-rose hover:text-disco transition-colors"
            >
              <Instagram size={20} />
              <span className="font-garamond">@ethniqglow</span>
            </a>
          </div>
        </div>

        {/* Bottom bar with logo and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-turkish-rose/20">
          <h2 className="font-serif-display text-3xl text-disco-dark mb-4 md:mb-0">
            ETHNIQ GLOW
          </h2>
          <p className="font-garamond text-turkish-rose text-sm">
            © {new Date().getFullYear()} Ethniq Glow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
