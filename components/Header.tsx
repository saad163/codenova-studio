
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsMobileMenuOpen(false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' }
  ];

  const headerBackground = (isHomePage && !isScrolled)
    ? 'bg-transparent py-6'
    : 'bg-brand-dark/85 backdrop-blur-md shadow-lg py-4 border-b border-brand-primary/10';

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${headerBackground}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          {/* Futuristic CSS Logo Emblem */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-md"></div>
            <div className="absolute inset-0.5 bg-brand-dark rounded-xl flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent font-display font-black text-lg">C</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-cyan rounded-full animate-ping"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-brand-light font-display font-black text-xl tracking-tight leading-none">
              CodeNova<span className="text-brand-cyan">.</span>
            </span>
            <span className="text-brand-accent font-sans font-bold text-[9px] tracking-[0.3em] uppercase">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold tracking-wider transition-all relative group py-2 ${location.pathname === link.path
                ? 'text-brand-cyan'
                : 'text-brand-light/80 hover:text-brand-light'
                }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link 
            to="/contact" 
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold uppercase tracking-wider text-brand-light rounded-full group bg-gradient-to-br from-brand-cyan to-brand-primary group-hover:from-brand-cyan group-hover:to-brand-primary hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-brand-cyan/50 transition-all duration-300"
          >
            <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-brand-dark rounded-full group-hover:bg-opacity-0">
              Start a Project
            </span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-brand-light text-2xl p-2 focus:outline-none z-[110]"
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-brand-dark/95 backdrop-blur-xl transition-all duration-500 z-[90] flex items-center justify-center ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold tracking-wide transition-colors ${location.pathname === link.path ? 'text-brand-cyan' : 'text-brand-light'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 bg-gradient-to-r from-brand-cyan to-brand-primary text-brand-light px-10 py-4 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-brand-cyan/25 active:scale-95 transition-all"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

