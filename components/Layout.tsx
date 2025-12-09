import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronDown, ArrowRight } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS, SERVICES } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-primary text-contrast">
      {/* Floating Navigation */}
      <div className="fixed w-full z-50 top-0 left-0 pt-4 px-4 flex justify-center pointer-events-none">
        <header 
          className={`w-full max-w-7xl rounded-2xl transition-all duration-300 pointer-events-auto flex items-center justify-between ${
            isScrolled 
              ? 'bg-primary/80 backdrop-blur-xl border border-border shadow-lg shadow-black/5 py-3 px-6' 
              : 'bg-transparent py-4 px-2'
          }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-contrast rounded-lg flex items-center justify-center text-primary shadow-lg shadow-contrast/10 group-hover:shadow-contrast/30 transition-all duration-300">
                <BarChart2 size={22} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-contrast tracking-tight">Apex<span className="text-muted">SEO</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <div key={link.name} className="relative group">
                      <button
                        className={`flex items-center text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                          location.pathname.startsWith('/services')
                            ? 'text-primary bg-contrast' 
                            : 'text-muted hover:text-contrast hover:bg-contrast/5'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      
                      {/* Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-primary/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-border overflow-hidden p-1.5 ring-1 ring-border">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={service.slug}
                              className="block px-4 py-3 rounded-lg hover:bg-contrast/5 transition-colors group/item"
                            >
                              <div className="text-sm font-medium text-contrast group-hover/item:text-contrast flex items-center">
                                {service.title}
                              </div>
                              <div className="text-[11px] text-muted mt-0.5 line-clamp-1 group-hover/item:text-contrast/80">
                                {service.shortDescription}
                              </div>
                            </Link>
                          ))}
                          {/* View All Services Link */}
                          <Link
                            to="/services"
                            className="block px-4 py-3 rounded-lg hover:bg-contrast/5 transition-colors group/item border-t border-border mt-1"
                          >
                            <div className="text-sm font-bold text-contrast group-hover/item:text-accent flex items-center justify-between">
                              View All Services
                              <ArrowRight size={14} className="opacity-70 group-hover/item:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                      location.pathname === link.path 
                        ? 'text-primary bg-contrast' 
                        : 'text-muted hover:text-contrast hover:bg-contrast/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button to="/free-audit" variant="primary" className="!py-2 !px-5 text-sm h-10">
                Free Audit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                className="text-contrast p-2 rounded-lg bg-contrast/5 border border-border hover:bg-contrast/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl pt-28 px-6 md:hidden flex flex-col h-screen animate-fade-in overflow-y-auto">
          {NAV_LINKS.map((link) => {
            if (link.name === 'Services') {
              return (
                <div key={link.name} className="flex flex-col border-b border-border pb-2">
                  <div className="flex items-center justify-between" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                    <span className={`text-lg font-medium py-3 ${location.pathname.startsWith('/services') ? 'text-contrast' : 'text-muted'}`}>
                      {link.name}
                    </span>
                    <ChevronDown size={20} className={`text-muted transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isServicesOpen && (
                    <div className="pl-4 flex flex-col space-y-3 mt-1 mb-4 border-l-2 border-border ml-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={service.slug}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-muted hover:text-contrast py-1 block"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                          to="/services"
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm font-bold text-contrast py-1 block mt-2"
                        >
                          View All Services
                        </Link>
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium py-3 border-b border-border last:border-0 ${
                  location.pathname === link.path ? 'text-contrast' : 'text-muted'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8">
            <Button to="/free-audit" variant="primary" fullWidth onClick={() => setIsMenuOpen(false)}>
              Get Free Audit
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary pt-20 pb-10 border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-contrast rounded flex items-center justify-center text-primary">
                  <BarChart2 size={18} />
                </div>
                <span className="text-xl font-bold text-contrast">Apex<span className="text-muted">SEO</span></span>
              </Link>
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
                Engineering organic growth through data-driven strategies and technical precision.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-lg bg-contrast/5 flex items-center justify-center text-muted hover:bg-contrast hover:text-primary transition-all duration-300 border border-border hover:border-contrast">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-contrast font-semibold mb-6">Services</h4>
                  <ul className="space-y-3 text-sm">
                    {SERVICES.map(s => (
                       <li key={s.id}><Link to={s.slug} className="text-muted hover:text-contrast transition-colors">{s.title}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-contrast font-semibold mb-6">Company</h4>
                  <ul className="space-y-3 text-sm">
                    <li><Link to="/about" className="text-muted hover:text-contrast transition-colors">About Us</Link></li>
                    <li><Link to="/blog" className="text-muted hover:text-contrast transition-colors">Insights</Link></li>
                    <li><Link to="/contact" className="text-muted hover:text-contrast transition-colors">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-contrast font-semibold mb-6">Contact</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 text-muted">
                      <MapPin size={16} className="text-contrast mt-0.5 flex-shrink-0" />
                      <span>123 Market St, SF, CA</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted">
                      <Mail size={16} className="text-contrast flex-shrink-0" />
                      <span>hello@apexseo.com</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Apex SEO Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;