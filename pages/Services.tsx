import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { SERVICES, SERVICES_PAGE_FAQS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our SEO Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide a holistic approach to digital marketing. From technical foundations to creative content, 
            our services are designed to work together to maximize your organic presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Methodology</h2>
            <p className="text-slate-400">How we deliver consistent results for our clients.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: '01', title: 'Audit', desc: 'Deep dive analysis of your current status.' },
              { step: '02', title: 'Strategy', desc: 'Custom roadmap aligned with business goals.' },
              { step: '03', title: 'Execute', desc: 'Rigorous implementation of SEO tactics.' },
              { step: '04', title: 'Optimize', desc: 'Continuous monitoring and refinement.' }
            ].map((item) => (
              <div key={item.step} className="relative p-6">
                <div className="text-6xl font-bold text-slate-800 absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-accent">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Service Questions</h2>
          <FAQ items={SERVICES_PAGE_FAQS} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Discuss Your Project</h2>
               <p className="text-slate-600 mb-8">
                 Not sure which services you need? Our team will analyze your website and recommend the perfect package for your budget and goals.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center text-slate-700">
                   <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                   Free Competitor Analysis
                 </li>
                 <li className="flex items-center text-slate-700">
                   <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                   30-Minute Strategy Call
                 </li>
                 <li className="flex items-center text-slate-700">
                   <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
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