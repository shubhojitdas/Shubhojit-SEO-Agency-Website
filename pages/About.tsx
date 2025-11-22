import React from 'react';
import { Award, Users, Globe, Target, Linkedin } from 'lucide-react';
import FAQ from '../components/FAQ';
import { ABOUT_FAQS, TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Are Apex SEO</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            A team of data scientists, creative strategists, and technical wizards dedicated to one goal: growing your business through search.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 To democratize access to high-quality SEO services. We believe that every business, regardless of size, deserves to be found by their ideal customers. We strive to remove the mystery from SEO and provide transparent, results-driven campaigns.
               </p>
               <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-bold text-accent text-2xl mb-1">10+</h3>
                    <p className="text-sm text-slate-600">Years Experience</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-bold text-accent text-2xl mb-1">500+</h3>
                    <p className="text-sm text-slate-600">Projects Delivered</p>
                  </div>
               </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/meeting/600/400" 
                alt="Team meeting" 
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <p className="text-slate-600">The brilliant minds behind your campaign success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-sm border border-slate-100">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <a href="#" className="inline-flex items-center text-sm font-medium hover:text-accent-200 transition-colors">
                        <Linkedin size={16} className="mr-2" /> Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
             {[
               { icon: Award, title: "Excellence", desc: "We don't settle for 'good enough'. We aim for #1." },
               { icon: Users, title: "Collaboration", desc: "We work with you, not just for you." },
               { icon: Globe, title: "Transparency", desc: "No secret sauces. Just honest work and clear reports." },
               { icon: Target, title: "Results", desc: "We focus on metrics that impact your bottom line." }
             ].map((val, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                   <val.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                 <p className="text-slate-600 text-sm">{val.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">More About Us</h2>
          <FAQ items={ABOUT_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default About;