import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Shop All', to: '/shop' },
  { label: 'Scented Candles', to: '/shop/scented' },
  { label: 'Gift Sets', to: '/shop/gift-sets' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-secondary sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-rock-salt text-3xl md:text-4xl font-semibold tracking-wide text-charcoal mx-auto md:mx-0"
        >
          Aabha 
        </Link>

        {/* Desktop nav links */}
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

        {/* Icons */}
        <div className="flex items-center gap-4 text-charcoal">
          <button className="hidden sm:block hover:opacity-60 transition-opacity">
            <Search size={20} />
          </button>
          <button className="hidden sm:block hover:opacity-60 transition-opacity">
            <Heart size={20} />
          </button>
          <Link to="/account" className="hover:opacity-60 transition-opacity">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-charcoal text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
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