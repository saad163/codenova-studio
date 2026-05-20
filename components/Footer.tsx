
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02000a] text-brand-light pt-24 pb-12 border-t border-brand-primary/10 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -mr-40 -mb-40"></div>

      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-brand-primary/10 relative z-10">
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="flex items-center space-x-3">
            {/* Logo Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-lg rotate-6 shadow-md"></div>
              <div className="absolute inset-0.5 bg-brand-dark rounded-lg flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent font-display font-black text-sm">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black text-brand-light uppercase tracking-tight">
                CodeNova<span className="text-brand-cyan">.</span>
              </span>
              <span className="text-[9px] font-sans font-bold text-brand-accent uppercase tracking-[0.3em]">
                STUDIO
              </span>
            </div>
          </Link>

          <p className="text-brand-slate text-sm leading-relaxed max-w-sm">
            We are a high-end software studio and creative digital agency. We build, design, and scale bespoke digital solutions—from React platforms and Shopify stores to full stack software architectures.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-brand-card border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-cyan transition-all duration-300 shadow-md">
              <i className="fa-brands fa-linkedin-in text-brand-light"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-brand-card border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-cyan transition-all duration-300 shadow-md">
              <i className="fa-brands fa-github text-brand-light"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-brand-card border border-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:border-brand-cyan transition-all duration-300 shadow-md">
              <i className="fa-brands fa-twitter text-brand-light"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Contact Details */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-cyan mb-8">Get In Touch</h3>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start space-x-4 group">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                <i className="fa-solid fa-envelope text-brand-cyan"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-slate font-bold uppercase tracking-wider mb-1">Email Inquiry</span>
                <a href="mailto:muhammadsaadhasan622@gmail.com" className="text-brand-light hover:text-brand-cyan transition-colors font-medium">
                  muhammadsaadhasan622@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-4 group">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                <i className="fa-solid fa-location-dot text-brand-cyan"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-slate font-bold uppercase tracking-wider mb-1">HQ Location</span>
                <span className="text-brand-light leading-relaxed font-medium">
                  Multan, Pakistan (Serving Globally)
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Navigation */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-cyan mb-8">Sitemap</h3>
          <div className="grid grid-cols-1 gap-4 text-sm font-semibold">
            <Link to="/" className="text-brand-slate hover:text-brand-cyan transition-all flex items-center group">
              <i className="fa-solid fa-chevron-right text-[8px] mr-3 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan"></i> Home
            </Link>
            <Link to="/services" className="text-brand-slate hover:text-brand-cyan transition-all flex items-center group">
              <i className="fa-solid fa-chevron-right text-[8px] mr-3 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan"></i> Services
            </Link>
            <Link to="/portfolio" className="text-brand-slate hover:text-brand-cyan transition-all flex items-center group">
              <i className="fa-solid fa-chevron-right text-[8px] mr-3 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan"></i> Portfolio
            </Link>
            <Link to="/about" className="text-brand-slate hover:text-brand-cyan transition-all flex items-center group">
              <i className="fa-solid fa-chevron-right text-[8px] mr-3 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan"></i> About Us
            </Link>
            <Link to="/contact" className="text-brand-slate hover:text-brand-cyan transition-all flex items-center group">
              <i className="fa-solid fa-chevron-right text-[8px] mr-3 opacity-0 group-hover:opacity-100 transition-all text-brand-cyan"></i> Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-brand-slate uppercase tracking-widest space-y-4 md:space-y-0 relative z-10">
        <p>© 2026 CodeNova Studio. All Rights Reserved. Tagline: Build. Design. Scale.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

