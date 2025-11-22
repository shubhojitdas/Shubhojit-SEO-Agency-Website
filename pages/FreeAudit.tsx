import React, { useState } from 'react';
import { BarChart2, Smartphone, FileSearch, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import FAQ from '../components/FAQ';
import { CONTACT_FAQS } from '../constants';

const FreeAudit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    niche: '',
    websiteName: '',
    websiteUrl: '',
    reason: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We have received your audit request. Our team will send the basic overview report to your email within 24 hours.");
    setFormData({
      name: '',
      email: '',
      businessName: '',
      niche: '',
      websiteName: '',
      websiteUrl: '',
      reason: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Your Free SEO Overview</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get a high-level snapshot of your website's performance. We'll check the essentials to see if you're on the right track.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side: Value Prop */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Free Audit</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Basic Health Check</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Automated scan for critical errors, broken links, and server response codes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <FileSearch size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">On-Page Fundamentals</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Review of your homepage title tags, meta descriptions, and header structure.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0 mr-4">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Mobile Compatibility</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Basic check to ensure your site renders correctly on mobile devices.</p>
                  </div>
                </div>
              </div>

              {/* Paid Upsell Box */}
               <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <div className="flex items-center mb-3 text-accent">
                    <AlertCircle size={20} className="mr-2" />
                    <h4 className="font-bold text-lg">Need a Deep Dive?</h4>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                    Advanced services like <strong>Keyword Gap Analysis</strong>, <strong>Competitor Spying</strong>, and <strong>Deep Backlink Audits</strong> are reserved for our paid consulting packages.
                </p>
                <p className="text-slate-600 text-xs italic">
                    This free audit is a preliminary health check only.
                </p>
              </div>

              <div className="mt-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Trusted Confidentiality</h4>
                <p className="text-slate-500 text-sm">Your data is safe with us. We never share your information with third parties.</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Your Free Overview</h2>
                <p className="text-slate-600 mb-8 text-sm">Please provide your details below.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 mb-1">Business Name *</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="Your Company LLC"
                      />
                    </div>
                    <div>
                      <label htmlFor="niche" className="block text-sm font-medium text-slate-700 mb-1">Business Niche / Industry *</label>
                      <input
                        type="text"
                        id="niche"
                        name="niche"
                        required
                        value={formData.niche}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="e.g. SaaS, Real Estate, E-commerce"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="websiteName" className="block text-sm font-medium text-slate-700 mb-1">Website Name *</label>
                      <input
                        type="text"
                        id="websiteName"
                        name="websiteName"
                        required
                        value={formData.websiteName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="My Awesome Site"
                      />
                    </div>
                    <div>
                      <label htmlFor="websiteUrl" className="block text-sm font-medium text-slate-700 mb-1">Website URL *</label>
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1">Why are you choosing us? (Optional)</label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
                      placeholder="e.g. I need help with technical SEO, I want more local traffic..."
                    ></textarea>
                  </div>

                  <Button type="submit" fullWidth variant="primary" className="py-4 text-lg shadow-lg">
                    Analyze My Website
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-xs text-slate-400">By submitting this form, you agree to our Privacy Policy.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
          <FAQ items={CONTACT_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default FreeAudit;