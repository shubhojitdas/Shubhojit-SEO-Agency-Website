import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Shield, Target } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import { SERVICES, TESTIMONIALS, HOME_FAQS } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);
  
  const clientLogos = [
    "ACME Corp", "Globex", "Soylent", "Initech", "Massive Dynamic", 
    "Cyberdyne", "Umbrella", "Stark Ind", "Wayne Ent", "Hooli"
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Ambient Glows (Responsive to Theme) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-contrast/5 rounded-full blur-[120px] animate-blob"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-contrast/5 border border-border text-sm font-medium text-contrast mb-8 backdrop-blur-md animate-fade-in-up hover:bg-contrast/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 bg-contrast rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(var(--text-contrast),0.8)]"></span>
            Accepting New Projects for Q4
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-10 text-contrast mix-blend-normal">
            SCALE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-contrast to-muted">REVENUE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We don't just rank keywords. We build comprehensive organic growth engines using data-driven strategies that drive measurable revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button to="/free-audit" variant="primary" className="px-10 py-4 text-lg w-full sm:w-auto">
              Get Free SEO Audit
            </Button>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-lg transition-all duration-200 border border-contrast/30 text-contrast hover:bg-contrast hover:text-primary w-full sm:w-auto backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="py-16 border-y border-border bg-primary relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10"></div>
        
        <div className="flex overflow-hidden group">
          <div className="flex gap-24 animate-marquee whitespace-nowrap items-center">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <span key={index} className="text-2xl font-bold text-muted/50 uppercase tracking-[0.2em] hover:text-contrast transition-colors duration-500 cursor-default select-none">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section className="py-32 relative bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-secondary/50 border border-border rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-contrast/5 transition-colors group backdrop-blur-sm">
                <div className="text-5xl font-bold text-contrast mb-2 group-hover:scale-110 transition-transform duration-300">250+</div>
                <div className="text-muted font-medium tracking-wide uppercase text-xs">Clients Scaled</div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-contrast/5 transition-colors group backdrop-blur-sm">
                 <div className="text-5xl font-bold text-contrast mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                 <div className="text-muted font-medium tracking-wide uppercase text-xs">Retention Rate</div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-contrast/5 transition-colors group backdrop-blur-sm">
                 <div className="text-5xl font-bold text-contrast mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
                 <div className="text-muted font-medium tracking-wide uppercase text-xs">Keywords Ranked</div>
              </div>
              <div className="bg-contrast rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_40px_rgba(var(--text-contrast),0.15)]">
                 <div className="text-5xl font-bold text-primary mb-2">5x</div>
                 <div className="text-primary/70 font-bold tracking-wide uppercase text-xs">Average ROI</div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-contrast mb-6 tracking-tight">Our <span className="text-muted">Ecosystem</span></h2>
              <p className="text-xl text-muted font-light">
                Bridging the gap between technical perfection and creative storytelling.
              </p>
            </div>
            <Button to="/services" variant="outline" className="hidden md:inline-flex mt-6 md:mt-0">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
          
          <div className="mt-12 text-center md:hidden">
            <Button to="/services" variant="outline">
               View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-32 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-bold text-contrast mb-6 tracking-tight">The Apex Advantage</h2>
             <p className="text-muted max-w-2xl mx-auto text-lg">Why industry leaders trust us with their organic growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 bg-primary rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-contrast/20 transition-all duration-500">
               <div className="absolute top-0 right-0 w-80 h-80 bg-contrast/5 rounded-full blur-[100px] group-hover:bg-contrast/10 transition-all duration-500"></div>
               {/* Removed justify-between, added gap-6, removed mb-5 from icon */}
               <div className="relative z-10 h-full flex flex-col gap-6">
                  <div className="w-16 h-16 bg-contrast rounded-2xl flex items-center justify-center text-primary border border-border shadow-inner">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-contrast mb-2">Revenue-First Methodology</h3>
                    <p className="text-muted leading-relaxed max-w-lg text-lg">
                      Most agencies report on rankings. We report on revenue. We integrate with your CRM to track the complete user journey from search query to closed deal.
                    </p>
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-primary rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-contrast/20 transition-all duration-500">
               <div className="relative z-10 h-full flex flex-col gap-6">
                  <div className="w-14 h-14 bg-contrast rounded-2xl flex items-center justify-center text-primary border border-border shadow-inner">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-contrast mb-2">White-Hat Only</h3>
                    <p className="text-muted">
                      Zero risk. Sustainable growth. We strictly adhere to Google's webmaster guidelines.
                    </p>
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-primary rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-contrast/20 transition-all duration-500">
               <div className="relative z-10 h-full flex flex-col gap-6">
                  <div className="w-14 h-14 bg-contrast rounded-2xl flex items-center justify-center text-primary border border-border shadow-inner">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-contrast mb-2">Technical Precision</h3>
                    <p className="text-muted">
                      Our engineers fix the deep technical issues that standard SEO tools often miss.
                    </p>
                  </div>
               </div>
            </div>

            {/* Card 4 - Large */}
            <div className="md:col-span-2 bg-gradient-to-br from-secondary to-primary rounded-3xl p-8 border border-border relative overflow-hidden group hover:border-contrast/20 transition-all duration-500">
               <img src="https://picsum.photos/seed/code/800/400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 grayscale mix-blend-overlay" alt="code" />
               <div className="relative z-10 h-full flex flex-col gap-6">
                  <div className="w-16 h-16 bg-contrast/80 backdrop-blur rounded-2xl flex items-center justify-center text-primary border border-border shadow-inner">
                    <Target size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-contrast mb-2">Proprietary AI Modeling</h3>
                    <p className="text-muted leading-relaxed max-w-lg text-lg">
                      We use advanced machine learning models to predict keyword trends before they happen, giving you a 3-6 month head start on the competition.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-contrast mb-4 tracking-tight">Client Success</h2>
            <p className="text-muted text-lg">Don't take our word for it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-secondary/30 p-8 rounded-3xl border border-border hover:border-contrast/30 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-4 bg-contrast rounded-full opacity-80"></div>
                  ))}
                </div>
                <p className="text-contrast/80 mb-6 italic leading-relaxed text-lg">"{t.content}"</p>
                <div className="flex items-center border-t border-border pt-6">
                  <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full mr-4 border border-border grayscale" />
                  <div>
                    <div className="font-bold text-contrast">{t.name}</div>
                    <div className="text-xs text-muted font-bold uppercase tracking-wider">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">Frequently Asked Questions</h2>
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-contrast text-primary">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to Dominate?</h2>
          <p className="text-primary/70 text-xl mb-12 max-w-2xl mx-auto">
            Get a free, no-obligation SEO audit of your website. We'll identify your biggest opportunities for growth in less than 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button to="/free-audit" variant="secondary" className="px-12 py-5 text-lg font-bold bg-primary text-contrast hover:bg-primary/90 shadow-2xl">
                Get My Free Audit
            </Button>
            <Button to="/contact" variant="outline" className="px-12 py-5 text-lg font-bold border-primary text-primary hover:bg-primary hover:text-contrast">
                Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;