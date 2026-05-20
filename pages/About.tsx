import React from 'react';
import ContactForm from '../components/ContactForm';

const About: React.FC = () => {
  const skills = [
    { name: 'React.js / Next.js', percent: '95%' },
    { name: 'Laravel (PHP Engine)', percent: '90%' },
    { name: 'Python (Django & Scripting)', percent: '85%' },
    { name: 'MySQL / PostgreSQL Systems', percent: '88%' },
    { name: 'Shopify Liquid / Custom Styling', percent: '92%' },
    { name: 'TailwindCSS / High-Fidelity UI', percent: '98%' }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#04011f]/90 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-12">
          <h2 className="text-brand-cyan text-sm font-bold tracking-[0.4em] uppercase mb-4 animate-fade-down">Engineering Talent</h2>
          <h1 className="text-4xl md:text-7xl font-display font-black text-brand-light mb-6 uppercase tracking-tight animate-fade-up">About CodeNova</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-accent mx-auto rounded-full animate-zoom"></div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Text Details */}
            <div className="lg:w-1/2 animate-fade-up">
              <h2 className="text-xs font-bold text-brand-cyan uppercase tracking-[0.4em] mb-4">Lead Developer & Architect</h2>
              <h3 className="text-3xl md:text-5xl font-display font-black text-brand-light mb-8 leading-tight">
                Muhammad Saad Hasan
              </h3>
              
              <p className="text-brand-slate text-sm leading-relaxed mb-6">
                Welcome to CodeNova Studio. I am a professional Software Engineer specializing in full stack architectures, highly interactive frontends, and custom e-commerce storefronts. I established CodeNova to help modern startups and global businesses launch robust systems and grow their digital presence.
              </p>
              
              <p className="text-brand-slate text-sm leading-relaxed mb-8">
                My engineering approach unites modular, clean-coded structures with top-tier graphic design systems. From advanced React platforms to deep relational database modeling, every single layout, script, and component is optimized for performance, security, and scalability.
              </p>

              {/* Developer Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-2 border-brand-cyan pl-4 hover-scale">
                  <h4 className="font-bold text-brand-light text-sm mb-1 uppercase tracking-wide">High-Fidelity Code</h4>
                  <p className="text-xs text-brand-slate">Writing pure, component-driven, reusable TypeScript/JavaScript logic with maximum optimization.</p>
                </div>
                <div className="border-l-2 border-brand-cyan pl-4 hover-scale">
                  <h4 className="font-bold text-brand-light text-sm mb-1 uppercase tracking-wide">Agile & Accountable</h4>
                  <p className="text-xs text-brand-slate">Delivering projects in swift sprints with open communication lines and transparent scopes.</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Graphic Profile */}
            <div className="lg:w-1/2 relative flex justify-center animate-zoom" style={{ animationDelay: '0.2s' }}>
              {/* Glowing Ambient Background Behind Picture */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-brand-accent/20 rounded-3xl blur-2xl transform rotate-3 scale-95 pointer-events-none"></div>

              {/* Tech Stack Skill Metrics Box */}
              <div className="w-full max-w-lg bg-[#080424]/80 backdrop-blur-md p-8 rounded-3xl border border-brand-primary/20 shadow-2xl relative z-10 hover-scale">
                <h3 className="text-brand-cyan text-xs font-black uppercase tracking-[0.2em] mb-6">Skill Infrastructure</h3>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-brand-light/90">
                        <span>{skill.name}</span>
                        <span className="text-brand-cyan">{skill.percent}</span>
                      </div>
                      <div className="h-2 w-full bg-brand-dark rounded-full overflow-hidden border border-brand-primary/10">
                        <div 
                          className="h-full bg-gradient-to-r from-brand-cyan to-brand-primary rounded-full transition-all duration-1000"
                          style={{ width: skill.percent }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-cyan to-brand-primary p-6 rounded-2xl shadow-xl border border-brand-cyan/20 animate-float hidden md:block">
                <span className="text-3xl font-display font-black text-brand-light block leading-none">3+</span>
                <p className="text-[9px] font-bold text-brand-light uppercase tracking-[0.2em] mt-2">Years Active Coding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Values */}
      <section className="py-24 bg-[#06021f]/50 border-t border-brand-primary/10 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-fade-down">
            <h3 className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em] mb-2">Our Operating System</h3>
            <h2 className="text-3xl md:text-5xl font-display font-black text-brand-light">Studio Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover-scale animate-zoom">
              <div className="w-12 h-12 bg-brand-primary/15 rounded-xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-microchip text-2xl text-brand-cyan group-hover:rotate-12 transition-transform"></i>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-brand-light uppercase tracking-wider">Continuous Innovation</h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                We stay at the absolute forefront of web tech. Embracing high-performance caching (Redis), reactive components (Vite/React), and decoupled headless store systems so you always outpace your industry rivals.
              </p>
            </div>

            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover-scale animate-zoom" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-brand-primary/15 rounded-xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-fingerprint text-2xl text-brand-cyan group-hover:rotate-12 transition-transform"></i>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-brand-light uppercase tracking-wider">Uncompromising Aesthetics</h3>
              <p className="text-brand-slate text-sm leading-relaxed">
                Code must look beautiful, but interfaces must look breathtaking. We obsess over pixel positions, glassmorphic visual systems, dynamic custom responsive alignments, and modern micro-animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Trigger */}
      <ContactForm />
    </div>
  );
};

export default About;
