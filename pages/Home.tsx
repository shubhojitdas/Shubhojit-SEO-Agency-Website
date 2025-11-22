import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, ShieldCheck, Zap, BarChart, Users } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { SERVICES, TESTIMONIALS, HOME_FAQS } from '../constants';

const Home: React.FC = () => {
  // Only show first 3 services on home
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* SaaS Style Hero - Centered, Text Only, Solid Color */}
      <section className="bg-primary pt-20 pb-24 md:pt-32 md:pb-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-accent mb-8">
            <span className="flex h-2 w-2 bg-accent rounded-full mr-2 animate-pulse"></span>
            Accepting New Clients for Q4
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Scale Your Revenue with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Data-Driven SEO</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We don't just rank keywords. We build comprehensive organic growth engines that drive qualified leads and measurable revenue for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/free-audit" variant="primary" className="px-8 py-4 text-lg w-full sm:w-auto">
              Get Free SEO Audit
            </Button>
            <Button to="/services" variant="outline" className="px-8 py-4 text-lg border-slate-600 text-white hover:border-white hover:text-white w-full sm:w-auto">
              Explore Our Services
            </Button>
          </div>
          
          {/* Social Proof Logos */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Trusted by high-growth companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
               {/* Placeholders for logos using text for semantics */}
               <span className="text-xl font-bold font-serif">ACME Corp</span>
               <span className="text-xl font-bold font-sans">Globex</span>
               <span className="text-xl font-bold font-mono">Soylent</span>
               <span className="text-xl font-bold">Initech</span>
               <span className="text-xl font-bold font-serif italic">Massive Dynamic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">250+</div>
              <div className="text-sm text-slate-500">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">98%</div>
              <div className="text-sm text-slate-500">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">10k+</div>
              <div className="text-sm text-slate-500">Keywords Ranked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-1">5x</div>
              <div className="text-sm text-slate-500">Avg ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive SEO Solutions</h2>
            <p className="text-lg text-slate-600">
              We offer a full suite of digital marketing services designed to dominate search results and capture your market share.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Growth Partner / About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-50"></div>
               <img 
                 src="https://picsum.photos/seed/office/600/500" 
                 alt="Team analyzing data" 
                 className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
               />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Not Just Another Agency. We Are Your Growth Partner.</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                While other agencies focus on vanity metrics, we obsess over what matters: Revenue. Our proprietary methodology combines technical precision with creative content strategies.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Data-Driven Strategy, Not Guesswork',
                  'Full Transparency & Monthly Reporting',
                  'Dedicated Account Manager',
                  'Agile Implementation'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-accent mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button to="/about" variant="primary">
                Meet The Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Apex SEO?</h2>
            <p className="text-lg text-slate-600">
              In a crowded market of agencies, here is why forward-thinking companies partner with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Measurable ROI</h3>
              <p className="text-slate-600 leading-relaxed">
                We do not hide behind confusing jargon. We track leads, conversions, and revenue so you can see exactly how our work impacts your bottom line.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safe, Long-Term Results</h3>
              <p className="text-slate-600 leading-relaxed">
                We exclusively use white-hat SEO techniques that comply with search engine guidelines, protecting your site from penalties and ensuring sustainable growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technical Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team includes full-stack developers who understand the code behind your website, ensuring technical issues never hold back your rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 text-lg">Success stories from businesses just like yours.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.content}"</p>
                <div className="flex items-center">
                  <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Dominate Your Market?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation SEO audit of your website. We'll identify your biggest opportunities for growth.
          </p>
          <Button to="/free-audit" variant="white" className="px-10 py-4 text-lg font-bold shadow-xl">
            Get My Free Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;