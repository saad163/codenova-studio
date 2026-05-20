import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-light">
      {/* Header section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#04011f]/90 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-12">
          <h2 className="text-brand-cyan text-sm font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in">Direct Communications</h2>
          <h1 className="text-4xl md:text-7xl font-display font-black text-brand-light mb-6 uppercase tracking-tight">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-accent mx-auto rounded-full mb-8"></div>
          <p className="text-brand-slate max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed hidden md:block">
            Let's build, design, and scale your next software innovation. Request a roadmap or RFP.
          </p>
        </div>
      </section>

      {/* Shared consultation Form */}
      <ContactForm />

      {/* Modern Global Operations Map representation */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#050124]/40 h-[400px] rounded-3xl overflow-hidden relative shadow-2xl border border-brand-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
              alt="Global Operations" 
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-card/90 backdrop-blur-md p-8 rounded-2xl border border-brand-primary/20 shadow-2xl text-center max-w-sm mx-4">
                <i className="fa-solid fa-earth-americas text-4xl text-brand-cyan mb-4 animate-float"></i>
                <h4 className="text-brand-light font-display font-bold text-lg mb-2">Global Operations HQ</h4>
                <p className="text-brand-slate text-xs mb-4">Located in Multan, Pakistan, delivering high-performance code and layouts to partners in the US, Europe, and the Middle East.</p>
                <a 
                  href="mailto:muhammadsaadhasan622@gmail.com" 
                  className="inline-block bg-gradient-to-r from-brand-cyan to-brand-primary text-brand-light text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-brand-cyan/20 transition-all"
                >
                  Send Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
