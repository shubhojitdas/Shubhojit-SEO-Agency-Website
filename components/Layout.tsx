import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ChevronDown } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-5 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
                <BarChart2 size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Apex<span className="text-accent">SEO</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <div key={link.name} className="relative group">
                      <Link
                        to={link.path}
                        className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-accent py-2 ${
                          location.pathname.startsWith('/services')
                            ? 'text-accent' 
                            : 'text-slate-600'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className="ml-1 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                      </Link>
                      
                      {/* Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-slate-900/5">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={service.slug}
                              className="block px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                            >
                              <div className="text-sm font-semibold text-slate-800 group-hover/item:text-accent flex items-center">
                                {service.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                                {service.shortDescription}
                              </div>
                            </Link>
                          ))}
                          <div className="mt-2 pt-2 border-t border-slate-100">
                            <Link to="/services" className="block text-center text-xs font-bold text-accent hover:text-accentHover py-2 uppercase tracking-wide">
                              View All Services
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                      location.pathname === link.path 
                        ? 'text-accent' 
                        : 'text-slate-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button to="/free-audit" variant="primary" className="py-2 px-5 text-sm">
                Free Audit
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-600 hover:text-slate-900 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-2 h-[calc(100vh-80px)] overflow-y-auto">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col border-b border-slate-50 pb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        className={`text-base font-medium py-2 ${
                          location.pathname.startsWith('/services') ? 'text-accent' : 'text-slate-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesOpen(!isServicesOpen);
                        }}
                        className="p-2 text-slate-500 focus:outline-none"
                      >
                        <ChevronDown size={20} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    {/* Mobile Accordion */}
                    {isServicesOpen && (
                      <div className="pl-4 flex flex-col space-y-3 mt-2 mb-2 border-l-2 border-slate-100 ml-2 animate-fade-in">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={service.slug}
                            className="text-sm text-slate-600 hover:text-accent"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium py-2 border-b border-slate-50 last:border-0 ${
                    location.pathname === link.path ? 'text-accent' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-auto">
              <Button to="/free-audit" variant="primary" fullWidth>
                Get Free Audit
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white">
                  <BarChart2 size={20} />
                </div>
                <span className="text-xl font-bold text-white">Apex<span className="text-accent">SEO</span></span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Helping businesses scale through data-driven SEO strategies. We build visibility, trust, and revenue for our clients worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                {SERVICES.map(s => (
                   <li key={s.id}><Link to={s.slug} className="hover:text-accent transition-colors">{s.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-accent mt-0.5" />
                  <span>123 Market Street, Suite 400<br />San Francisco, CA 94103</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-accent" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-accent" />
                  <span>hello@apexseo.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Apex SEO Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;