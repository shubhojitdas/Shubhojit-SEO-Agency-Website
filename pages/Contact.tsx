import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import { CONTACT_FAQS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in bg-primary text-contrast">
      <section className="bg-primary text-contrast py-32 text-center relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-contrast/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Contact Us</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto font-light">Have a question? Need a custom quote? We are here to help.</p>
         </div>
      </section>

      <section className="py-24 bg-secondary text-contrast rounded-t-[3rem] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-contrast mb-8 tracking-tight">Get In Touch</h2>
              <p className="text-muted mb-12 leading-relaxed text-lg">
                Whether you're a local business looking to rank in your city or a global enterprise needing a technical audit, our team is ready to assist.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-xl mb-2">Visit Us</h3>
                    <p className="text-muted">123 Market Street, Suite 400<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-xl mb-2">Email Us</h3>
                    <p className="text-muted">hello@apexseo.com<br/>support@apexseo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-xl mb-2">Call Us</h3>
                    <p className="text-muted">+1 (555) 123-4567<br/>Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-xl mb-2">Business Hours</h3>
                    <p className="text-muted">Monday - Friday: 09:00 - 18:00<br/>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-primary rounded-3xl shadow-2xl p-2 border border-border">
                  <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">Common Inquiries</h2>
          <FAQ items={CONTACT_FAQS} />
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="w-full h-96 bg-secondary relative border-t border-border">
         <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted font-medium flex items-center text-lg"><MapPin className="mr-3"/> Google Maps Integration</p>
         </div>
      </div>
    </div>
  );
};

export default Contact;