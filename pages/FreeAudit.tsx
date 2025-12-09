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
    <div className="animate-fade-in bg-primary text-contrast">
      {/* Hero Header */}
      <section className="bg-primary text-contrast py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-contrast/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Free SEO Overview</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-light">
            Get a high-level snapshot of your website's performance. We'll check the essentials to see if you're on the right track.
          </p>
        </div>
      </section>

      <section className="py-24 bg-secondary text-contrast rounded-t-[3rem] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left Side: Value Prop */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-contrast mb-10">What's Included</h2>
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-lg mb-2">Basic Health Check</h3>
                    <p className="text-muted text-sm leading-relaxed">Automated scan for critical errors, broken links, and server response codes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <FileSearch size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-lg mb-2">On-Page Fundamentals</h3>
                    <p className="text-muted text-sm leading-relaxed">Review of your homepage title tags, meta descriptions, and header structure.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-contrast flex-shrink-0 mr-4 shadow-sm border border-border">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-contrast text-lg mb-2">Mobile Compatibility</h3>
                    <p className="text-muted text-sm leading-relaxed">Basic check to ensure your site renders correctly on mobile devices.</p>
                  </div>
                </div>
              </div>

              {/* Paid Upsell Box */}
               <div className="mt-16 bg-primary p-8 rounded-2xl border border-border shadow-sm">
                <div className="flex items-center mb-3 text-contrast">
                    <AlertCircle size={20} className="mr-2" />
                    <h4 className="font-bold text-lg">Need a Deep Dive?</h4>
                </div>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                    Advanced services like <strong>Keyword Gap Analysis</strong>, <strong>Competitor Spying</strong>, and <strong>Deep Backlink Audits</strong> are reserved for our paid consulting packages.
                </p>
                <p className="text-muted/70 text-xs italic">
                    This free audit is a preliminary health check only.
                </p>
              </div>

              <div className="mt-6 bg-primary p-6 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-contrast mb-2">Trusted Confidentiality</h4>
                <p className="text-muted text-sm">Your data is safe with us. We never share your information with third parties.</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3">
              <div className="bg-primary rounded-3xl shadow-2xl p-8 md:p-12 border border-border">
                <h2 className="text-3xl font-bold text-contrast mb-2">Request Audit</h2>
                <p className="text-muted mb-10 text-sm">Please provide your details below.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-contrast mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-contrast mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-bold text-contrast mb-2">Business Name *</label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="Your Company LLC"
                      />
                    </div>
                    <div>
                      <label htmlFor="niche" className="block text-sm font-bold text-contrast mb-2">Business Niche / Industry *</label>
                      <input
                        type="text"
                        id="niche"
                        name="niche"
                        required
                        value={formData.niche}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="e.g. SaaS, Real Estate"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="websiteName" className="block text-sm font-bold text-contrast mb-2">Website Name *</label>
                      <input
                        type="text"
                        id="websiteName"
                        name="websiteName"
                        required
                        value={formData.websiteName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="My Awesome Site"
                      />
                    </div>
                    <div>
                      <label htmlFor="websiteUrl" className="block text-sm font-bold text-contrast mb-2">Website URL *</label>
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors bg-secondary/50 text-contrast"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-bold text-contrast mb-2">Why are you choosing us? (Optional)</label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-contrast focus:border-contrast outline-none transition-colors resize-none bg-secondary/50 text-contrast"
                      placeholder="e.g. I need help with technical SEO..."
                    ></textarea>
                  </div>

                  <Button type="submit" fullWidth variant="primary" className="py-5 text-lg shadow-xl">
                    Analyze My Website
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-xs text-muted">By submitting this form, you agree to our Privacy Policy.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary text-contrast border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-contrast mb-12">Common Questions</h2>
          <FAQ items={CONTACT_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default FreeAudit;