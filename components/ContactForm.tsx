import React, { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  variant?: 'default' | 'hero';
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
    setFormData({ name: '', email: '', website: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isHero = variant === 'hero';

  // Styles differ based on context (Hero = Black on White, Default = White on Black or vice versa depending on page bg)
  // Assuming Contact Form is usually on White/Light BG pages in B/W theme sections, or Dark. 
  // Let's make it versatile.
  
  const containerClass = isHero 
    ? 'bg-white text-black p-8 md:p-10 shadow-2xl rounded-3xl' 
    : 'bg-neutral-50 p-8 md:p-10 border border-neutral-200 rounded-3xl';

  return (
    <div className={containerClass}>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-black">
          {isHero ? 'Get Your Free Audit' : 'Get In Touch'}
        </h3>
        <p className="text-gray-600 text-sm">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-black mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-colors bg-white text-black placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-black mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-colors bg-white text-black placeholder-gray-400"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-bold text-black mb-2">Website URL</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-colors bg-white text-black placeholder-gray-400"
            placeholder="https://www.yourcompany.com"
          />
        </div>
        {!isHero && (
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-black mb-2">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-colors bg-white text-black placeholder-gray-400 resize-none"
              placeholder="Tell us about your SEO goals..."
            ></textarea>
          </div>
        )}
        <Button type="submit" fullWidth variant="secondary" className="bg-black text-white hover:bg-neutral-800 border-transparent py-4 text-lg">
          {isHero ? 'Get Free Audit Now' : 'Send Message'}
        </Button>
        <p className="text-xs text-gray-500 text-center mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;