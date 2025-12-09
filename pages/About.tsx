import React from 'react';
import { Award, Users, Globe, Target, Linkedin } from 'lucide-react';
import FAQ from '../components/FAQ';
import { ABOUT_FAQS, TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-primary text-contrast">
      {/* Hero */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden bg-primary">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-contrast/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-contrast tracking-tighter">We Are Apex SEO</h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl mx-auto font-light">
            A team of data scientists, creative strategists, and technical wizards dedicated to one goal: growing your business through search.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-bold text-contrast mb-8 tracking-tight">Our Mission</h2>
               <p className="text-muted text-lg mb-8 leading-relaxed">
                 To democratize access to high-quality SEO services. We believe that every business, regardless of size, deserves to be found by their ideal customers. We strive to remove the mystery from SEO and provide transparent, results-driven campaigns.
               </p>
               <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="p-8 bg-primary rounded-3xl border border-border shadow-sm">
                    <h3 className="font-bold text-contrast text-4xl mb-2">10+</h3>
                    <p className="text-sm text-muted uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div className="p-8 bg-primary rounded-3xl border border-border shadow-sm">
                    <h3 className="font-bold text-contrast text-4xl mb-2">500+</h3>
                    <p className="text-sm text-muted uppercase tracking-wider">Projects Delivered</p>
                  </div>
               </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-contrast/5 rounded-2xl blur-3xl group-hover:bg-contrast/10 transition-all duration-500"></div>
              <img 
                src="https://picsum.photos/seed/meeting/600/400" 
                alt="Team meeting" 
                className="relative rounded-2xl border border-border shadow-2xl w-full object-cover grayscale transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-contrast mb-4 tracking-tight">Meet Our Experts</h2>
            <p className="text-muted">The brilliant minds behind your campaign success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group bg-secondary rounded-3xl p-6 border border-border hover:border-contrast/20 hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square bg-white">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-contrast/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:underline">
                      <Linkedin size={16} className="mr-2" /> Connect
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-contrast">{member.name}</h3>
                <p className="text-muted font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted/80 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-contrast mb-4 tracking-tight">Core Values</h2>
            <p className="text-muted">The principles that guide every decision we make.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
             {[
               { icon: Award, title: "Excellence", desc: "We don't settle for 'good enough'. We aim for #1." },
               { icon: Users, title: "Collaboration", desc: "We work with you, not just for you." },
               { icon: Globe, title: "Transparency", desc: "No secret sauces. Just honest work." },
               { icon: Target, title: "Results", desc: "We focus on metrics that impact revenue." }
             ].map((val, idx) => (
               <div key={idx} className="bg-primary p-8 rounded-3xl border border-border hover:border-contrast/30 hover:shadow-lg transition-all duration-300 group">
                 <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 text-contrast border border-border group-hover:bg-contrast group-hover:text-primary transition-colors duration-300 shadow-sm">
                   <val.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-contrast mb-2">{val.title}</h3>
                 <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">More About Us</h2>
          <FAQ items={ABOUT_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default About;