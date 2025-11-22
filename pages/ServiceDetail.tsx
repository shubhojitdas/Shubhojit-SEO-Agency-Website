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
    <div className="animate-fade-in">
      {/* Hero Section with Contact Form */}
      <section className="bg-primary py-20 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded bg-slate-800 border border-slate-700 text-accent text-xs font-bold tracking-wide uppercase mb-6">
                Professional SEO Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {data.fullDescription}
              </p>
              <ul className="space-y-3 mb-8">
                {data.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <CheckCircle className="text-accent mr-3" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div className="lg:pl-8">
               <ContactForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Invest in {data.title}?</h2>
            <p className="text-slate-600 text-lg">Real business impact, measurable results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent font-bold text-xl mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
                <img 
                  src={`https://picsum.photos/seed/${data.id}/800/600`} 
                  alt={`${data.title} illustration`} 
                  className="rounded-2xl shadow-xl"
                />
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Our Service Includes</h2>
                <div className="grid gap-4">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                       <CheckCircle className="text-accent mt-1 mr-4 flex-shrink-0" size={20} />
                       <span className="font-medium text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
               <h2 className="text-3xl font-bold text-white mb-2">Explore Other Services</h2>
               <p className="text-slate-400">Boost your strategy with our other expert solutions.</p>
            </div>
            <Button to="/services" variant="outline" className="hidden md:inline-flex border-slate-600 text-white hover:bg-slate-800">
               View All
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {relatedServices.map((service) => (
                <Link 
                  key={service.id} 
                  to={service.slug}
                  className="group block bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
                >
                   <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-slate-900 rounded-lg text-accent">
                         <service.icon size={24} />
                      </div>
                      <ArrowRight className="text-slate-500 group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                   <p className="text-slate-400 text-sm line-clamp-2">{service.shortDescription}</p>
                </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;