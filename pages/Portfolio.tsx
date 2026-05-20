import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  homepage: string | null;
}

const Portfolio: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [errorRepos, setErrorRepos] = useState(false);

  const liveProjects = [
    {
      id: 1,
      name: 'Professional Developer Portfolio',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      description: 'A personal high-end showcase website presenting engineering skills, live project deployments, and dynamic credentials with responsive micro-grids and fluid layout animations.',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Netlify'],
      demoUrl: 'http://saadhasan-dev.netlify.app/',
      githubUrl: 'https://github.com/saad163'
    },
    {
      id: 2,
      name: 'Zamane Luxury Watch Store',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      description: 'An ultra-premium e-commerce storefront for luxury watches. Features high-fidelity layout styling, responsive shopping structures, and conversion-optimized cart systems.',
      tech: ['React', 'Context API', 'Vite', 'TailwindCSS', 'Netlify'],
      demoUrl: 'https://zamane-watch-store.netlify.app/',
      githubUrl: 'https://github.com/saad163'
    },
    {
      id: 3,
      name: 'A2S Innovations Portal',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Corporate platform showcase designed for a modern digital solution and scaling agency. Leverages geometric visual panels, responsive navigation, and performance optimization.',
      tech: ['React', 'Vite', 'CSS Modules', 'TailwindCSS', 'Netlify'],
      demoUrl: 'https://a2s-innovations.netlify.app/',
      githubUrl: 'https://github.com/saad163'
    },
    {
      id: 4,
      name: 'ColorLab Palette Suite',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
      description: 'Interactive developer utility designed to generate contrast-compliant HSL theme structures, featuring real-time visual tests and instant copy-to-clipboard CSS variables.',
      tech: ['Vite', 'React', 'HTML5 Canvas', 'TailwindCSS', 'Netlify'],
      demoUrl: 'https://colorlab-by-saad.netlify.app/',
      githubUrl: 'https://github.com/saad163'
    }
  ];

  // Dynamic GitHub Fetch
  useEffect(() => {
    fetch('https://api.github.com/users/saad163/repos?sort=updated&per_page=6')
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limit or Network Error');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoadingRepos(false);
      })
      .catch((err) => {
        console.error(err);
        setErrorRepos(true);
        setLoadingRepos(false);
        // Fallback static repository configurations
        setRepos([
          {
            id: 101,
            name: 'portfolio-website',
            description: 'Custom React & Tailwind developer portfolio optimized for lightning-fast loads.',
            html_url: 'https://github.com/saad163',
            stargazers_count: 5,
            forks_count: 2,
            language: 'TypeScript',
            homepage: 'http://saadhasan-dev.netlify.app/'
          },
          {
            id: 102,
            name: 'zamane-storefront',
            description: 'E-Commerce storefront showcasing modern product cards and state routing.',
            html_url: 'https://github.com/saad163',
            stargazers_count: 8,
            forks_count: 3,
            language: 'JavaScript',
            homepage: 'https://zamane-watch-store.netlify.app/'
          },
          {
            id: 103,
            name: 'colorlab-utility',
            description: 'High-fidelity HSL visual scheme builder with contrast checkers.',
            html_url: 'https://github.com/saad163',
            stargazers_count: 6,
            forks_count: 1,
            language: 'JavaScript',
            homepage: 'https://colorlab-by-saad.netlify.app/'
          }
        ]);
      });
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-brand-light">
      {/* Page Header */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#04011f]/90 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
        </div>
        <div className="relative z-10 text-center px-4 pt-12">
          <h2 className="text-brand-cyan text-sm font-bold tracking-[0.4em] uppercase mb-4">Engineering Showcase</h2>
          <h1 className="text-4xl md:text-7xl font-display font-black text-brand-light mb-6 uppercase tracking-tight">Our Portfolio</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-accent mx-auto rounded-full mb-8"></div>
          <p className="text-brand-slate max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed hidden md:block">
            High-performance codebases and premium live deployments engineered to launch corporate brands.
          </p>
        </div>
      </section>

      {/* Section 1: Live Projects Showcase */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-brand-cyan text-xs font-bold uppercase tracking-[0.3em] mb-2">🌐 Live Deployments</h3>
            <h2 className="text-3xl md:text-5xl font-display font-black">Featured Products</h2>
            <p className="text-brand-slate text-xs mt-3">Click on "Live Demo" to view the active servers instantly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {liveProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#080424]/60 backdrop-blur-md rounded-3xl overflow-hidden border border-brand-primary/15 shadow-2xl group hover:border-brand-cyan/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame with glowing zoom overlay */}
                  <div className="h-72 overflow-hidden relative border-b border-brand-primary/10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-cyan hover:bg-brand-primary text-brand-light font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full shadow-lg transition-colors flex items-center gap-2"
                      >
                        Launch Demo <i className="fa-solid fa-up-right-from-square text-[10px]"></i>
                      </a>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-display font-black text-brand-light mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed mb-6 font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges & CTAs */}
                <div className="px-8 pb-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="bg-brand-dark/95 text-[10px] font-bold text-brand-slate border border-brand-primary/15 px-3 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2 border-t border-brand-primary/10">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-brand-cyan to-brand-primary text-brand-light font-bold text-xs uppercase tracking-widest py-3 rounded-xl text-center shadow-md hover:shadow-brand-cyan/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-globe"></i> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-brand-card hover:bg-brand-card/80 text-brand-light border border-brand-primary/20 font-bold text-xs uppercase tracking-widest py-3 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-brands fa-github text-brand-cyan"></i> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Live GitHub Repository Section */}
      <section className="py-24 bg-[#05011f]/40 border-t border-brand-primary/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <h3 className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-2">💻 GITHUB INTEGRATION</h3>
              <h2 className="text-3xl md:text-5xl font-display font-black">Active Code Repositories</h2>
              <p className="text-brand-slate text-xs mt-2">Connecting directly to profile <a href="https://github.com/saad163" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline font-bold">saad163</a></p>
            </div>
            
            <a
              href="https://github.com/saad163"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-card border border-brand-primary/20 hover:border-brand-cyan text-brand-light px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-3"
            >
              <i className="fa-brands fa-github text-lg text-brand-cyan"></i> View All Repositories
            </a>
          </div>

          {loadingRepos ? (
            /* Loading State Mock */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="glass-card p-8 rounded-2xl animate-pulse h-[250px]">
                  <div className="h-6 w-1/2 bg-brand-primary/20 rounded mb-4"></div>
                  <div className="h-4 w-3/4 bg-brand-primary/10 rounded mb-8"></div>
                  <div className="h-8 w-1/3 bg-brand-primary/20 rounded-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col justify-between h-[280px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                        <i className="fa-solid fa-folder-closed text-brand-cyan"></i>
                      </div>
                      <div className="flex space-x-3 text-xs text-brand-slate font-bold">
                        <span className="flex items-center"><i className="fa-regular fa-star mr-1 text-brand-cyan"></i> {repo.stargazers_count}</span>
                        <span className="flex items-center"><i className="fa-solid fa-code-fork mr-1 text-brand-cyan"></i> {repo.forks_count}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-display font-bold text-brand-light mb-3 tracking-tight group-hover:text-brand-cyan leading-snug">
                      {repo.name}
                    </h4>
                    
                    <p className="text-brand-slate text-xs leading-relaxed line-clamp-3 mb-4">
                      {repo.description || 'Custom digital product logic and system backend modules designed for premium visual operations.'}
                    </p>
                  </div>

                  <div>
                    {repo.language && (
                      <span className="text-[10px] font-bold text-brand-cyan bg-brand-cyan/5 px-2.5 py-1 rounded-full border border-brand-cyan/25 inline-block mb-4">
                        {repo.language}
                      </span>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-brand-primary/10">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold uppercase tracking-wider text-brand-light hover:text-brand-cyan transition-colors"
                      >
                        <i className="fa-brands fa-github mr-1"></i> Repository
                      </a>
                      
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan hover:text-brand-light transition-colors"
                        >
                          Launch Live <i className="fa-solid fa-chevron-right ml-0.5 text-[8px]"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section Trigger */}
      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default Portfolio;
