import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceData } from '../types';
import { SERVICES } from '../constants';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Button from '../components/Button';

interface ServiceDetailProps {
  data: ServiceData;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ data }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const relatedServices = SERVICES.filter(s => s.id !== data.id).slice(0, 3);

  return (
    <div className="animate-fade-in bg-primary text-contrast">
      {/* Hero Section with Contact Form */}
      <section className="bg-primary py-20 md:py-32 text-contrast border-b border-border relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[100px] pointer-events-none -z-10 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-contrast/5 border border-contrast/10 text-contrast text-xs font-bold tracking-widest uppercase mb-6">
                Professional SEO Services
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-contrast">
                {data.title}
              </h1>
              <p className="text-xl text-muted mb-10 leading-relaxed font-light">
                {data.fullDescription}
              </p>
              <ul className="space-y-4 mb-8">
                {data.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-contrast/80">
                    <CheckCircle className="text-contrast mr-4" size={20} />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div className="lg:pl-8">
               <div className="bg-white rounded-3xl shadow-2xl p-2 border border-border">
                  <ContactForm />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-secondary text-contrast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-contrast mb-4 tracking-tight">Why Invest in {data.title}?</h2>
            <p className="text-muted text-lg">Real business impact, measurable results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-primary rounded-2xl border border-border hover:border-contrast/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-contrast rounded-lg shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-5">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-contrast mb-2">{benefit.title}</h3>
                <p className="text-muted leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-primary text-contrast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative group">
                <div className="absolute inset-0 bg-contrast/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <img 
                  src={`https://picsum.photos/seed/${data.id}/800/600`} 
                  alt={`${data.title} illustration`} 
                  className="relative rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border border-border"
                />
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-contrast mb-8 tracking-tight">What Our Service Includes</h2>
                <div className="grid gap-4">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-6 bg-secondary rounded-xl shadow-sm border border-border hover:bg-white transition-colors">
                       <CheckCircle className="text-contrast mt-1 mr-6 flex-shrink-0" size={24} />
                       <span className="font-bold text-lg text-contrast">{feature}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">Frequently Asked Questions</h2>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 bg-primary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-bold text-contrast mb-2">Explore Other Services</h2>
               <p className="text-muted">Boost your strategy with our other expert solutions.</p>
            </div>
            <Button to="/services" variant="outline" className="hidden md:inline-flex">
               View All
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {relatedServices.map((service) => (
                <Link 
                  key={service.id} 
                  to={service.slug}
                  className="group block bg-secondary p-8 rounded-2xl hover:bg-contrast/5 transition-colors border border-border"
                >
                   <div className="flex items-center justify-between mb-6">
                      <div className="p-4 bg-primary rounded-xl text-contrast border border-border shadow-sm group-hover:shadow-md transition-all">
                         <service.icon size={24} />
                      </div>
                      <ArrowRight className="text-muted group-hover:text-contrast group-hover:translate-x-1 transition-all" size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-contrast mb-3">{service.title}</h3>
                   <p className="text-muted text-sm line-clamp-2">{service.shortDescription}</p>
                </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;