import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Cyclical Typewriter Logic
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Build.', 'Design.', 'Scale.'];
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: number;
    
    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, 60);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 120);
    }
    
    if (!isDeleting && typedText === currentWord) {
      // Pause at full word
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  const servicesPreview = [
    { 
      title: 'Web Platforms Development', 
      desc: 'Blazing fast, responsive web applications built with Next.js, React, and TypeScript. Optimized for SEO and Google search indexing.', 
      icon: 'fa-code', 
      tag: 'React / Next.js' 
    },
    { 
      title: 'Shopify E-Commerce Stores', 
      desc: 'High-end custom Shopify storefronts with conversion-optimized layouts, liquid engine engineering, and headless options.', 
      icon: 'fa-bag-shopping', 
      tag: 'Shopify Development' 
    },
    { 
      title: 'Full Stack Backend Architectures', 
      desc: 'Secure behind-the-scenes APIs, data managers, and databases built using Laravel, Python, and scalable MySQL environments.', 
      icon: 'fa-server', 
      tag: 'Laravel / Django' 
    }
  ];

  const featuredProjects = [
    { 
      title: 'NovaShop Headless Platform', 
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800', 
      tag: 'E-Commerce Platform',
      tech: ['React', 'Next.js', 'GraphQL', 'Shopify Engine'] 
    },
    { 
      title: 'Apex CRM System Dashboard', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
      tag: 'Enterprise Full Stack SaaS',
      tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Charts'] 
    },
    { 
      title: 'Quantum HSL ColorLab', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
      tag: 'Developer UX Utility',
      tech: ['Vite', 'React', 'HTML5 Canvas', 'TailwindCSS'] 
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light relative">
      
      {/* Premium Hero Section with Shifting Space Gradient */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden animated-bg">
        {/* Background Visual Layer overlays */}
        <div className="absolute inset-0 bg-[#030014]/60 z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }}></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            
            {/* Smooth Top tag entrance */}
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-down">
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-ping"></span>
              <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">
                CodeNova Studio &bull; Next-Gen Digital Agency
              </span>
            </div>

            {/* Dynamic Typewriter Heading H1 for SEO */}
            <h1 className="text-5xl md:text-8xl font-display font-black text-brand-light mb-8 leading-[1.05] tracking-tight animate-fade-up">
              We Code. We Design. <br />
              We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-accent glow-text-cyan blink-cursor">{typedText}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-slate mb-12 font-medium max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              We are a modern software studio and digital agency engineering high-performance web platforms, custom Shopify storefronts, premium UI/UX, and scalable backend architectures.
            </p>
            
            {/* Animated Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/portfolio" 
                className="bg-gradient-to-r from-brand-cyan to-brand-primary hover:from-brand-cyan hover:to-brand-primary text-brand-light px-10 py-4.5 rounded-full font-bold uppercase tracking-wider transition-all text-center shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-105 active:scale-95 duration-300"
              >
                View Live Work
              </Link>
              <Link 
                to="/contact" 
                className="border border-brand-primary/40 hover:border-brand-cyan text-brand-light bg-brand-card/30 hover:bg-brand-card/75 px-10 py-4.5 rounded-full font-bold uppercase tracking-wider transition-all text-center backdrop-blur-sm hover:scale-105 duration-300"
              >
                Connect With Saad
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block cursor-pointer z-20 hover:scale-110 transition-transform"
        >
          <i className="fa-solid fa-chevron-down text-brand-cyan text-2xl"></i>
        </div>
      </section>

      {/* Stats Section with entrance styling */}
      <section className="py-20 border-y border-brand-primary/10 bg-[#06021f]/50 backdrop-blur-sm relative z-20 animate-zoom">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: '50+', label: 'Digital Products Scaled' },
              { val: '$10M+', label: 'Client Revenue Scaled' },
              { val: '99%', label: 'CSAT Client Retention' },
              { val: '24/7', label: 'Continuous Tech Support' }
            ].map((s, i) => (
              <div key={i} className="group cursor-default p-4 hover-scale">
                <div className="text-4xl md:text-5xl font-display font-black text-brand-light mb-2 bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">
                  {s.val}
                </div>
                <div className="text-brand-slate font-bold uppercase tracking-[0.2em] text-[10px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4">Core Competencies</h3>
              <h2 className="text-3xl md:text-5xl font-display font-black">Our Services Preview</h2>
            </div>
            <Link 
              to="/services" 
              className="bg-brand-card hover:bg-brand-primary/20 text-brand-cyan border border-brand-primary/30 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((service, i) => (
              <div 
                key={i} 
                className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden group hover-scale"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-all duration-300">
                  <i className={`fa-solid ${service.icon} text-2xl text-brand-cyan group-hover:rotate-12 transition-transform`}></i>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan px-3 py-1 rounded-full mb-4 inline-block">{service.tag}</span>
                <h3 className="text-brand-light text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-cyan hover:text-brand-light text-xs font-bold uppercase tracking-widest flex items-center transition-colors">
                  Learn Details <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-32 bg-[#06021f]/30 border-t border-brand-primary/10 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4">Engineering Showcase</h3>
              <h2 className="text-3xl md:text-5xl font-display font-black">Featured Products</h2>
            </div>
            <Link 
              to="/portfolio" 
              className="bg-brand-card hover:bg-brand-primary/20 text-brand-light border border-brand-primary/30 px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:scale-105"
            >
              Browse Full Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl h-[450px] shadow-2xl border border-brand-primary/10 hover-scale">
                <img
                  src={project.image}
                  alt={`CodeNova Studio - ${project.title} Visual representation of premium tech work`}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-2 block">{project.tag}</span>
                  <h3 className="text-brand-light text-2xl font-display font-bold mb-4">{project.title}</h3>
                  
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="bg-brand-dark/80 text-brand-slate text-[9px] font-bold px-2 py-0.5 rounded border border-brand-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link to="/portfolio" className="text-brand-light group-hover:text-brand-cyan text-xs font-bold uppercase tracking-widest flex items-center transition-colors">
                    Explore Case Study <i className="fa-solid fa-arrow-right-long ml-3"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Workflow */}
      <section className="py-32 bg-brand-dark border-t border-brand-primary/10 relative overflow-hidden z-20">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 text-center mb-20">
          <h3 className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4">The CodeNova Engine</h3>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">Our Seamless Engineering Flow</h2>
          <p className="text-brand-slate max-w-lg mx-auto text-sm">We combine agile software engineering with high-fidelity creative layouts.</p>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-brand-primary/20 z-0"></div>
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your commercial objectives, identifying system architecture requirements.' },
              { step: '02', title: 'UI/UX Design', desc: 'Crafting elegant, modern, high-fidelity prototypes using modern spacing and design systems.' },
              { step: '03', title: 'Development', desc: 'Writing clean, performant, clean-coded components backed by scalable APIs.' },
              { step: '04', title: 'Deploy & Scale', desc: 'SEO-optimizing, deployment to ultra-fast servers, and scaling globally.' },
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center md:text-left glass-card p-6 rounded-2xl hover-scale">
                <div className="w-14 h-14 bg-gradient-to-tr from-brand-cyan to-brand-primary text-brand-light rounded-xl flex items-center justify-center font-display font-black text-2xl mx-auto md:mx-0 mb-6 shadow-lg">
                  {p.step}
                </div>
                <h3 className="text-lg font-display font-bold mb-3 uppercase tracking-wider text-brand-cyan">{p.title}</h3>
                <p className="text-xs text-brand-slate leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Landing Page CTA */}
      <section className="py-32 relative overflow-hidden bg-[#05011f]/80 border-t border-brand-primary/10 z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black text-brand-light mb-8 leading-tight">
            Ready to Accelerate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">Digital Footprint?</span>
          </h2>
          
          <p className="text-base md:text-lg text-brand-slate mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's launch a premium web application, a custom e-commerce solution, or an enterprise SaaS product. Contact our development studio today to receive a free roadmap.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-brand-cyan to-brand-primary hover:from-brand-cyan hover:to-brand-primary text-brand-light px-12 py-5 rounded-full font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-105 duration-300 active:scale-95 text-center"
            >
              Get a Free Roadmap
            </Link>
            <a 
              href="mailto:muhammadsaadhasan622@gmail.com" 
              className="bg-brand-card/50 hover:bg-brand-card border border-brand-primary/30 text-brand-light px-12 py-5 rounded-full font-bold uppercase tracking-wider transition-all text-center hover:scale-105 duration-300"
            >
              Email Saad Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
