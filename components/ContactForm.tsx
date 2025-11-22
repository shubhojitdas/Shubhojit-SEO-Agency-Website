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

  return (
    <div className={`rounded-2xl ${isHero ? 'bg-white p-8 shadow-2xl' : 'bg-slate-50 p-8 border border-slate-200'}`}>
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${isHero ? 'text-slate-900' : 'text-slate-900'}`}>
          {isHero ? 'Get Your Free Audit' : 'Get In Touch'}
        </h3>
        <p className="text-slate-600 text-sm">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Website URL</label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
            placeholder="https://www.yourcompany.com"
          />
        </div>
        {!isHero && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white resize-none"
              placeholder="Tell us about your SEO goals..."
            ></textarea>
          </div>
        )}
        <Button type="submit" fullWidth variant="primary">
          {isHero ? 'Get Free Audit Now' : 'Send Message'}
        </Button>
        <p className="text-xs text-slate-500 text-center mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;