import { Link } from 'react-router-dom';
// import { Instagram, Facebook, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* Newsletter */}
        <div className="text-center mb-12 pb-12 border-b border-secondary">
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-charcoal mb-2">
            Be The First To Know
          </h3>
          <p className="font-body text-sm text-charcoal/60 mb-6">
            New scents, offers & candle care tips. No spam, promise.
          </p>
          <form className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 font-body text-sm px-4 py-3 rounded-full border border-secondary bg-secondary/30 focus:outline-none focus:border-charcoal/30 text-charcoal placeholder:text-charcoal/40"
            />
            <button
              type="submit"
              className="bg-charcoal text-background rounded-full p-3 hover:opacity-90 transition-opacity"
            >
              {/* <Send size={16} /> */}
            </button>
          </form>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Shop
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop All</Link></li>
              <li><Link to="/shop/scented" className="hover:text-charcoal transition-colors">Scented Candles</Link></li>
              <li><Link to="/shop/gift-sets" className="hover:text-charcoal transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Company
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li><Link to="/about" className="hover:text-charcoal transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-charcoal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-charcoal mb-4">
              Policies
            </h4>
            <ul className="space-y-2 font-body text-sm text-charcoal/60">
              <li><Link to="/shipping-returns" className="hover:text-charcoal transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-charcoal transition-colors">Terms of Service</Link></li>
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

        {/* Bottom bar */}
        <div className="pt-6 border-t border-secondary flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-charcoal/50">
            © {new Date().getFullYear()} Aabha. All rights reserved.
          </p>
          <p className="font-body text-xs text-charcoal/50">
            Designed & Developed by{' '}
            <a
              href="https://www.linkedin.com/in/manish-birthal"
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