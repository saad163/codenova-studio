import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$5,000 - $10,000',
    projectType: 'Web Development',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Dynamic Email Format Validation Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address structure (e.g., mail@company.com).');
      return;
    }

    if (formData.name.trim().length < 3) {
      setValidationError('Please provide a name with at least 3 letters.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you for your message, ${formData.name}! Saad Hasan and the CodeNova team will respond to you at ${formData.email} within 4 hours.`);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        budget: '$5,000 - $10,000',
        projectType: 'Web Development',
        message: ''
      });
    }, 500);
  };

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#080424]/60 backdrop-blur-md shadow-[0_20px_50px_rgba(79,70,229,0.1)] overflow-hidden rounded-3xl border border-brand-primary/20">

          {/* Info Side */}
          <div className="lg:w-1/3 bg-gradient-to-b from-brand-card to-[#030014] p-10 lg:p-14 text-brand-light relative overflow-hidden border-r border-brand-primary/10">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl"></div>

            {/* Pulsing Availability Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="text-emerald-400 text-[9px] font-black uppercase tracking-wider">Available for Freelance & Contracts</span>
            </div>

            <h3 className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em] mb-4">Start a Project</h3>
            <h2 className="text-4xl font-display font-black mb-10 leading-tight">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">SOMETHING</span> <br />
              EPIC.
            </h2>

            <div className="space-y-10">
              <div className="group">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan mb-2">Direct Contact Email</h4>
                <p className="flex items-center text-sm font-semibold hover:text-brand-cyan transition-colors">
                  <i className="fa-solid fa-envelope mr-3 text-brand-cyan"></i>
                  <a href="mailto:muhammadsaadhasan622@gmail.com">muhammadsaadhasan622@gmail.com</a>
                </p>
                <p className="text-[11px] text-brand-slate mt-1">Send a direct RFP or specification sheet</p>
              </div>

              <div className="group">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan mb-2">Direct Call & WhatsApp</h4>
                <p className="flex items-center text-sm font-semibold hover:text-brand-cyan transition-colors">
                  <i className="fa-solid fa-phone mr-3 text-brand-cyan"></i>
                  <a href="tel:03049781382">03049781382</a>
                </p>
                <p className="text-[11px] text-brand-slate mt-1">Average response time: &lt; 15 mins</p>
              </div>

              <div className="group">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan mb-2">Studio Location</h4>
                <p className="text-sm leading-relaxed font-semibold">
                  Multan, Punjab, Pakistan
                </p>
                <p className="text-[11px] text-brand-slate mt-1">Available for remote consultations globally</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-10 lg:p-16 bg-[#06021f]/40">
            <div className="mb-12">
              <h3 className="text-3xl font-display font-black text-brand-light mb-3">
                Send a Project Brief
              </h3>
              <p className="text-brand-slate text-sm font-medium">Complete the form below and Muhammad Saad Hasan will review your requirements and reach out within 4 hours with a custom scope of work.</p>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="mb-8 p-4 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-xl flex items-center gap-3">
                <i className="fa-solid fa-triangle-exclamation text-base"></i>
                <p className="font-semibold">{validationError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-brand-cyan mb-3 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-brand-primary/20 rounded-xl focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all text-brand-light placeholder:text-brand-slate/40"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-brand-cyan mb-3 uppercase tracking-wider">Email Address</label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.com"
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-brand-primary/20 rounded-xl focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all text-brand-light placeholder:text-brand-slate/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-brand-cyan mb-3 uppercase tracking-wider">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-brand-primary/20 rounded-xl focus:border-brand-cyan focus:outline-none transition-all text-brand-light"
                  >
                    <option value="Web Development">Web Development (React / Next.js)</option>
                    <option value="Shopify Store Development">Shopify E-Commerce</option>
                    <option value="UI/UX Product Design">UI/UX Product Design</option>
                    <option value="Full Stack System">Full Stack Development (Laravel / Python)</option>
                    <option value="SEO & Scaling Strategy">SEO & Digital Marketing</option>
                    <option value="Branding & Visual Design">Branding & Corporate Identity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-brand-cyan mb-3 uppercase tracking-wider">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-brand-primary/20 rounded-xl focus:border-brand-cyan focus:outline-none transition-all text-brand-light"
                  >
                    <option value="<$5,000">Less than $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+ / Custom Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-brand-cyan mb-3 uppercase tracking-wider">Project Brief / Tell us about your idea</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your goal, timeline, technical stack requirements, or standard features needed..."
                  className="w-full px-5 py-4 bg-brand-dark/50 border border-brand-primary/20 rounded-xl focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all text-brand-light placeholder:text-brand-slate/40 resize-none animate-fade-in"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-black uppercase tracking-widest text-brand-light rounded-full group bg-gradient-to-br from-brand-cyan via-brand-primary to-brand-accent hover:from-brand-cyan hover:to-brand-accent hover:text-white focus:ring-2 focus:outline-none focus:ring-brand-cyan/50 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-brand-primary/20 hover:scale-105 active:scale-95"
                >
                  <span className="relative px-12 py-4.5 transition-all ease-in duration-75 bg-[#080424] rounded-full group-hover:bg-opacity-0 w-full flex items-center justify-center gap-3">
                    {submitted ? 'Sending Inquiry...' : 'Launch Project Idea'}
                    <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
