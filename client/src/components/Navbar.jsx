import { useState } from 'react';
import { Link } from 'react-router-dom';
import {   User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
const navLinks = [
  { label: 'Shop All', to: '/products' },
  { label: 'Bulk Orders', to: 'https://wa.me/919142918584?text=Hi%2C%20I%27m%20interested%20in%20bulk%20orders', external: true },
  { label: 'Instagram', to: 'https://instagram.com/aabha_bybhanupriya', external: true},
  { label: 'contact us', to: '/footer' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 const { itemCount } = useCart();
  return (
    <header className="bg-background border-b border-secondary sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-11 md:h-15">
        
        
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
<Link to="/">
        <img
        src="/images/aalogo.png"
        alt="Handpoured candle"
        className="h-20 md:h-25 w-auto object-contain"
      />
      </Link> 

        
        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-charcoal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-4 text-charcoal">
          
          <Link to="/profile" className="hover:opacity-60 transition-opacity">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} />

            {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-charcoal text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {itemCount}
            </span>
          )}
          </Link>
        </div>
      </div>

     
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 font-body text-sm text-charcoal bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;