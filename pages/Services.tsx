import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { SERVICES, SERVICES_PAGE_FAQS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in bg-primary text-contrast">
      {/* Header */}
      <section className="bg-primary py-32 relative overflow-hidden">
         {/* Ambient Glows */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-contrast/5 rounded-full blur-[150px] pointer-events-none animate-blob"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-contrast mb-8 tracking-tight">Our Solutions</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            We provide a holistic approach to digital marketing. From technical foundations to creative content, 
            our services are designed to work together to maximize your organic presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-primary text-contrast border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Methodology</h2>
            <p className="text-muted">How we deliver consistent results for our clients.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { step: '01', title: 'Audit', desc: 'Deep dive analysis of your current status.' },
              { step: '02', title: 'Strategy', desc: 'Custom roadmap aligned with business goals.' },
              { step: '03', title: 'Execute', desc: 'Rigorous implementation of SEO tactics.' },
              { step: '04', title: 'Optimize', desc: 'Continuous monitoring and refinement.' }
            ].map((item) => (
              <div key={item.step} className="relative p-6 group">
                <div className="text-9xl font-bold text-secondary absolute top-[-40px] left-1/2 transform -translate-x-1/2 -z-10 select-none group-hover:text-border transition-colors">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-2 mt-6 text-contrast">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">Service Questions</h2>
          <FAQ items={SERVICES_PAGE_FAQS} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-primary text-contrast relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-bold text-contrast mb-6 tracking-tight">Let's Discuss Your Project</h2>
               <p className="text-muted mb-10 text-lg">
                 Not sure which services you need? Our team will analyze your website and recommend the perfect package for your budget and goals.
               </p>
               <ul className="space-y-6 mb-8">
                 <li className="flex items-center text-contrast font-medium">
                   <span className="w-2 h-2 bg-contrast rounded-full mr-4"></span>
                   Free Competitor Analysis
                 </li>
                 <li className="flex items-center text-contrast font-medium">
                   <span className="w-2 h-2 bg-contrast rounded-full mr-4"></span>
                   30-Minute Strategy Call
                 </li>
                 <li className="flex items-center text-contrast font-medium">
                   <span className="w-2 h-2 bg-contrast rounded-full mr-4"></span>
                   Custom Proposal
                 </li>
               </ul>
             </div>
             <ContactForm />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;