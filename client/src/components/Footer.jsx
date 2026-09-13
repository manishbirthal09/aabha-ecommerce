import { Link } from 'react-router-dom';
// import { Instagram, Facebook, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        
       
       

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Shop
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li><Link to="/products" className="hover:text-charcoal transition-colors">Shop All</Link></li>
              
               <li>
      <a
        href="https://wa.me/919142918584?text=Hi%2C%20I%27m%20interested%20in%20bulk%20orders"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-charcoal transition-colors"
      >
        Bulk Orders
      </a>
    </li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Company
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li><Link to="/about" className="hover:text-charcoal transition-colors">About Us</Link></li>
              <li>
      <a
        href="https://wa.me/919142918584?text=Hi%2C%20I%27d%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-charcoal transition-colors"
      >
        Contact Us
      </a>
    </li>
               </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Policies
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
  
              <li><Link to="/privacy-policy" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-charcoal transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-charcoal transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li>priyachoudhary<br/>1005@gmail.com</li>
              <li>+91 9142918584</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-charcoal/60 hover:text-charcoal transition-colors">
                {/* <Instagram size={18} /> */}
              </a>
              <a href="#" className="text-charcoal/60 hover:text-charcoal transition-colors">
                {/* <Facebook size={18} /> */}
              </a>
            </div>
          </div>
        </div>

        
        <div className="pt-6 border-t border-secondary flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-charcoal/50">
            © {new Date().getFullYear()} Aabha. All rights reserved.
          </p>
          <p className="font-body text-xs text-charcoal/50">
            Designed & Developed by{' '}
            <a
              href="https://wa.me/918053067573"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-charcoal transition-colors"
            >
              Manish Verma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;