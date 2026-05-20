import React from 'react';
import ContactForm from '../components/ContactForm';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      name: 'Web Platforms Development',
      icon: 'fa-code',
      description: 'Engineered with React, TypeScript, and Next.js. We build lightning-fast web systems that are clean-coded, accessible, responsive, and designed to engage users.',
      features: ['Headless React Platforms', 'TypeScript Codebases', 'Framer Motion Animations']
    },
    {
      id: 2,
      name: 'Shopify E-Commerce Studio',
      icon: 'fa-bag-shopping',
      description: 'Bespoke Shopify storefronts built with custom Liquid sections or headless storefront setups. Optimized for maximum conversion rate, lightning load speeds, and seamless checkouts.',
      features: ['Custom Liquid Customizations', 'Headless Checkout Integrations', 'Conversion Rate Optimization']
    },
    {
      id: 3,
      name: 'UI/UX & Product Design',
      icon: 'fa-wand-magic-sparkles',
      description: 'Futuristic designs that focus on micro-animations, glassmorphic visual systems, geometric typography, and smooth layouts to establish a premium presence.',
      features: ['High-Fidelity Wireframes', 'Interactive Micro-Animations', 'Premium Color Systems']
    },
    {
      id: 4,
      name: 'SEO & Performance Scaling',
      icon: 'fa-chart-line',
      description: 'Search Engine Optimization built directly into the codebase. We optimize Google Web Vitals, page speed ratios, schema markers, and scaling strategy to bring organic growth.',
      features: ['99+ Core Web Vitals Score', 'Descriptive Schema Metadata', 'Continuous Analytics Setup']
    },
    {
      id: 5,
      name: 'Branding & Digital Strategy',
      icon: 'fa-compass-drafting',
      description: 'Creating cohesive brands with modern logo assets, brand guidelines, color theories, taglines, and marketing templates designed to target international markets.',
      features: ['Brand Positioning Maps', 'Futuristic Corporate Visuals', 'Market Launch Strategy']
    },
    {
      id: 6,
      name: 'Full Stack Backend Systems',
      icon: 'fa-server',
      description: 'Heavy backend architectures built using Laravel, Python, and Node.js. Resilient databases designed with MySQL/PostgreSQL, safe RESTful APIs, and secure server deployments.',
      features: ['Scalable Database Architectures', 'High-Performance APIs', 'Cloud Deployments (AWS/Vercel)']
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light">
      {/* Services Header */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background visual overlay */}
        <div className="absolute inset-0 bg-[#04011f]/90 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-12">
          <h2 className="text-brand-cyan text-sm font-bold tracking-[0.4em] uppercase mb-4 animate-fade-down">Service Suite</h2>
          <h1 className="text-4xl md:text-7xl font-display font-black text-brand-light mb-6 uppercase tracking-tight animate-fade-up">Our Capabilities</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-accent mx-auto rounded-full mb-8 animate-zoom"></div>
          <p className="text-brand-slate max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed hidden md:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Engineered for elite speed, styled for visual perfection. Explore our technology stack capabilities.
          </p>
        </div>
      </section>

      {/* Main Service Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="glass-card glass-card-hover p-8 pb-10 rounded-3xl border border-brand-primary/10 flex flex-col justify-between group hover-scale animate-zoom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-all duration-300">
                    <i className={`fa-solid ${service.icon} text-2xl text-brand-cyan group-hover:rotate-12 transition-transform`}></i>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-brand-light mb-4 tracking-tight leading-none group-hover:text-brand-cyan transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-brand-slate text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Features List */}
                  <div className="flex flex-col space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center text-[11px] font-bold uppercase tracking-wider text-brand-light/95">
                        <i className="fa-solid fa-circle-check text-[10px] text-brand-cyan mr-2"></i>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan border-b border-brand-cyan/20 pb-1 hover:text-brand-light hover:border-brand-light transition-all">
                    Inquire Specification <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Contact Form */}
      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default Services;
