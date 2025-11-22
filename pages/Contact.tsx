import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { CONTACT_FAQS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Have a question? Need a custom quote? We are here to help.</p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're a local business looking to rank in your city or a global enterprise needing a technical audit, our team is ready to assist.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600">123 Market Street, Suite 400<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">hello@apexseo.com<br/>support@apexseo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+1 (555) 123-4567<br/>Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 09:00 - 18:00<br/>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Inquiries</h2>
          <FAQ items={CONTACT_FAQS} />
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="w-full h-96 bg-slate-200 relative">
         <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-500 font-medium flex items-center"><MapPin className="mr-2"/> Google Maps Integration</p>
         </div>
      </div>
    </div>
  );
};

export default Contact;