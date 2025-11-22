import { 
  Search, 
  BarChart2, 
  Globe, 
  Layout, 
  MapPin, 
  Cpu, 
  Link, 
  Smartphone 
} from 'lucide-react';
import { ServiceData, BlogPost, Testimonial, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceData[] = [
  {
    id: 'on-page-seo',
    title: 'On-Page SEO',
    slug: '/services/on-page-seo',
    icon: Search,
    shortDescription: 'Optimize your content and HTML source code to rank higher and earn more relevant traffic.',
    fullDescription: 'Our On-Page SEO services focus on optimizing individual web pages to rank higher and earn more relevant traffic in search engines. We align your content with user intent and technical best practices.',
    features: [
      'Keyword Research & Strategy',
      'Meta Tag Optimization',
      'Content Optimization',
      'Internal Linking Structure',
      'Image Alt Text & Compression',
      'URL Structure Optimization'
    ],
    benefits: [
      { title: 'Higher Search Rankings', description: 'Improve your visibility for targeted keywords that drive revenue.' },
      { title: 'Better User Experience', description: 'Optimized pages load faster and are easier for users to navigate.' },
      { title: 'Increased CTR', description: 'Compelling meta titles and descriptions improve click-through rates.' }
    ],
    faqs: [
      { question: 'What is On-Page SEO?', answer: 'On-Page SEO refers to the practice of optimizing web pages to improve a website\'s search engine rankings and earn organic traffic.' },
      { question: 'How long does it take to see results?', answer: 'Typically, you can start seeing improvements in rankings and traffic within 3-6 months, depending on competition.' },
      { question: 'Is content part of On-Page SEO?', answer: 'Yes, high-quality, relevant content is the backbone of successful on-page optimization.' },
      { question: 'Do you optimize for voice search?', answer: 'Yes, we implement schema markup and conversational keyword strategies to capture voice search queries.' },
      { question: 'How do you handle duplicate content?', answer: 'We identify duplicate content issues and resolve them using canonical tags or 301 redirects to ensure search engines index the correct pages.' }
    ]
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    slug: '/services/technical-seo',
    icon: Cpu,
    shortDescription: 'Ensure your website is readable, crawlable, and indexable by search engine bots.',
    fullDescription: 'Technical SEO is the foundation of your organic growth. We ensure that search engines can crawl, index, and interpret your website effectively without any hindrances.',
    features: [
      'Site Speed Optimization',
      'XML Sitemap & Robots.txt',
      'Mobile-Friendliness Audit',
      'Schema Markup Implementation',
      'Canonical Tag Management',
      'SSL/HTTPS Security'
    ],
    benefits: [
      { title: 'Faster Loading Times', description: 'Speed is a ranking factor. We ensure your site loads instantly.' },
      { title: 'Correct Indexing', description: 'Ensure Google sees and ranks your most important pages.' },
      { title: 'Secure Website', description: 'Protect your users and build trust with HTTPS implementation.' }
    ],
    faqs: [
      { question: 'Why is Technical SEO important?', answer: 'Without a solid technical foundation, your content may not be indexed or ranked, regardless of its quality.' },
      { question: 'Do you fix broken links?', answer: 'Yes, we identify and fix broken links and redirect chains to preserve link equity.' },
      { question: 'What is Schema Markup?', answer: 'Schema is code that helps search engines understand your content and provide rich snippets in search results.' },
      { question: 'How do you handle site migrations?', answer: 'We have a comprehensive migration protocol involving URL mapping, redirect testing, and monitoring to prevent traffic loss during site redesigns.' },
      { question: 'What tools do you use for auditing?', answer: 'We use industry-standard tools like Screaming Frog, Google Search Console, Ahrefs, and SEMrush for deep technical analysis.' }
    ]
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO & Link Building',
    slug: '/services/off-page-seo',
    icon: Link,
    shortDescription: 'Build authority and trust with high-quality backlinks and digital PR strategies.',
    fullDescription: 'Off-Page SEO tells search engines what others think about your site. Our ethical link-building strategies establish your website as an authority in your industry.',
    features: [
      'Competitor Backlink Analysis',
      'Guest Posting Outreach',
      'Broken Link Building',
      'Digital PR Campaigns',
      'Brand Mention Monitoring',
      'Social Signals'
    ],
    benefits: [
      { title: 'Increased Domain Authority', description: 'High-quality links signal trust to search engines, boosting overall site authority.' },
      { title: 'Referral Traffic', description: 'Get traffic from relevant websites in your industry.' },
      { title: 'Long-Term Sustainability', description: 'White-hat strategies ensure your rankings are safe from algorithm updates.' }
    ],
    faqs: [
      { question: 'Is link building safe?', answer: 'Yes, we strictly adhere to white-hat practices to ensure your site is never penalized.' },
      { question: 'How do you acquire backlinks?', answer: 'We use outreach, content creation, and relationship building with high-authority publishers.' },
      { question: 'What matters more: quantity or quality?', answer: 'Quality is far more important. One high-authority link is worth more than hundreds of low-quality ones.' },
      { question: 'Do you buy links?', answer: 'No, we do not buy links. We earn them through manual outreach and high-quality content assets, ensuring compliance with Google guidelines.' },
      { question: 'How do you measure link quality?', answer: 'We evaluate Domain Authority (DA), Trust Flow, relevance, traffic, and spam scores of potential link partners.' }
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    slug: '/services/web-design',
    icon: Layout,
    shortDescription: 'Create a visually stunning, SEO-friendly website that converts visitors into customers.',
    fullDescription: 'Your website is your digital storefront. We design and develop custom, responsive websites that look great and are built for performance and conversion.',
    features: [
      'Custom UI/UX Design',
      'Responsive Mobile Design',
      'Conversion Rate Optimization (CRO)',
      'CMS Integration (WordPress)',
      'Landing Page Design',
      'Website Maintenance'
    ],
    benefits: [
      { title: 'Higher Conversion Rates', description: 'Design that guides users toward taking action.' },
      { title: 'Mobile First', description: 'Perfect experience across all devices: Desktop, Tablet, and Mobile.' },
      { title: 'SEO Ready', description: 'Code structure that search engines love from day one.' }
    ],
    faqs: [
      { question: 'Do you use templates?', answer: 'We create custom designs tailored to your brand, though we can work with templates if requested.' },
      { question: 'Will my site be mobile friendly?', answer: 'Absolutely. We design with a mobile-first approach, ensuring perfect rendering on all device sizes.' },
      { question: 'Can I update the site myself?', answer: 'Yes, we build on user-friendly CMS platforms so you can manage content easily.' },
      { question: 'How long does a website build take?', answer: 'A typical custom website project takes 4-8 weeks, depending on the complexity and scope of functionality required.' },
      { question: 'Is SEO included in web design?', answer: 'Yes, our "SEO-first" design philosophy means basic technical SEO and on-page optimization are integrated into the development process.' }
    ]
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    slug: '/services/local-seo',
    icon: MapPin,
    shortDescription: 'Dominate your local market and get found by customers in your geographic area.',
    fullDescription: 'For businesses serving a specific geographic area, Local SEO is crucial. We help you appear in the "Map Pack" and capture high-intent local searchers.',
    features: [
      'Google Business Profile Optimization',
      'Local Citation Building',
      'Review Management Strategy',
      'Local Keyword Research',
      'NAP Consistency Audit',
      'Localized Content Creation'
    ],
    benefits: [
      { title: 'Map Pack Dominance', description: 'Appear in the top 3 results for "near me" searches.' },
      { title: 'Drive Foot Traffic', description: 'Connect with customers who are ready to visit your store.' },
      { title: 'Build Local Trust', description: 'Positive reviews and accurate info build trust with your community.' }
    ],
    faqs: [
      { question: 'What is the Google Map Pack?', answer: 'It is the block of three business listings that appears below the map in Google search results.' },
      { question: 'Why are reviews important?', answer: 'Reviews impact your rankings and heavily influence consumer buying decisions.' },
      { question: 'Do I need a physical address?', answer: 'You need a verified location or a service area to utilize Google Business Profile effectively.' },
      { question: 'How do you handle multiple locations?', answer: 'We create distinct location pages and manage separate Google Business Profiles for each branch to maximize local visibility.' },
      { question: 'Can you help remove fake reviews?', answer: 'While we cannot directly delete reviews, we can flag violations of Google\'s policy and manage your reputation with professional responses.' }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "David Harrison",
    role: "CEO & Lead Strategist",
    bio: "With 15+ years in digital marketing, David has helped scale 3 SaaS companies to 8-figure ARR through organic search.",
    imageUrl: "https://picsum.photos/seed/team1/500/500"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head of Technical SEO",
    bio: "Sarah is a former Google engineer who understands the algorithm inside out. She ensures our clients' sites are technically flawless.",
    imageUrl: "https://picsum.photos/seed/team2/500/500"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Content Director",
    bio: "Michael leads our team of 20+ writers. His content strategies focus on topical authority and user engagement.",
    imageUrl: "https://picsum.photos/seed/team3/500/500"
  },
  {
    id: 4,
    name: "Jessica Ross",
    role: "Director of Link Building",
    bio: "Jessica specializes in high-end digital PR and outreach, securing placements in major publications like Forbes and TechCrunch.",
    imageUrl: "https://picsum.photos/seed/team4/500/500"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of SEO: AI and Machine Learning",
    excerpt: "Discover how artificial intelligence is reshaping the search landscape and what you need to do to stay ahead.",
    date: "Oct 12, 2023",
    author: "Sarah Jenkins",
    category: "Trends",
    imageUrl: "https://picsum.photos/seed/blog1/800/600"
  },
  {
    id: 2,
    title: "5 Technical SEO Mistakes Killing Your Rankings",
    excerpt: "Are these common technical errors holding your site back? Learn how to identify and fix them immediately.",
    date: "Nov 05, 2023",
    author: "Mike Ross",
    category: "Technical",
    imageUrl: "https://picsum.photos/seed/blog2/800/600"
  },
  {
    id: 3,
    title: "Local SEO Strategies for Small Businesses",
    excerpt: "A comprehensive guide to dominating your local market and driving foot traffic to your store.",
    date: "Dec 10, 2023",
    author: "Jessica Pearson",
    category: "Local SEO",
    imageUrl: "https://picsum.photos/seed/blog3/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content: "Apex SEO Agency completely transformed our online presence. Our organic traffic has tripled in just 6 months. The technical expertise they bring is unmatched.",
    avatarUrl: "https://picsum.photos/seed/avatar1/100/100"
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Founder",
    company: "Urban Styles",
    content: "The Local SEO services have been a game changer for my boutique. We are now ranking #1 in the map pack for all our main keywords.",
    avatarUrl: "https://picsum.photos/seed/avatar2/100/100"
  },
  {
    id: 3,
    name: "David Chen",
    role: "CTO",
    company: "SaaSify",
    content: "Their web design team built us a site that not only looks incredible but converts at a rate we never thought possible. Highly recommended.",
    avatarUrl: "https://picsum.photos/seed/avatar3/100/100"
  }
];

// Page Specific FAQs

export const HOME_FAQS = [
  { question: "What makes Apex SEO Agency different?", answer: "We focus entirely on ROI. Unlike agencies that just report on rankings, we align our strategies with your business goals to drive revenue, not just traffic." },
  { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. While some technical fixes can yield quick wins, significant organic growth typically takes 3-6 months depending on your industry's competitiveness." },
  { question: "Do you offer guaranteed #1 rankings?", answer: "No reputable agency can guarantee a specific ranking because search algorithms are outside our control. We guarantee a professional, data-driven process that maximizes your probability of success." },
  { question: "Do you work with small businesses?", answer: "Yes! We work with businesses of all sizes, from local startups to global enterprises. We tailor our strategies to fit your budget and growth stage." },
  { question: "Will I have a dedicated account manager?", answer: "Absolutely. You will have a direct point of contact who understands your business and provides regular updates on your campaign's progress." }
];

export const SERVICES_PAGE_FAQS = [
  { question: "Can I customize my SEO package?", answer: "Yes, we understand that every business is unique. We build custom SEO packages based on your specific goals, budget, and current website status." },
  { question: "What is the difference between On-Page and Off-Page SEO?", answer: "On-Page SEO involves optimizing elements on your website (content, code, speed), while Off-Page SEO involves building authority through external signals like backlinks and social mentions." },
  { question: "Do you provide monthly reporting?", answer: "Yes, we provide detailed monthly reports that cover traffic, rankings, conversions, and work completed, along with a strategy call to discuss the next steps." },
  { question: "Is there a minimum contract period?", answer: "We generally recommend a 6-month engagement to allow enough time for the strategy to gain traction, but we offer flexible terms based on client needs." },
  { question: "How do you measure campaign success?", answer: "We look at Key Performance Indicators (KPIs) such as organic traffic growth, keyword ranking improvements, lead generation, and ultimately, revenue attribution." }
];

export const ABOUT_FAQS = [
  { question: "Where is your team located?", answer: "Our headquarters is in San Francisco, CA, but we have a distributed team of experts working across multiple time zones to support clients globally." },
  { question: "Who will be managing my account?", answer: "Your account will be managed by a Senior SEO Strategist who leads a dedicated team of content writers, technical SEOs, and link builders." },
  { question: "Do you outsource your work?", answer: "We handle 95% of our work in-house to maintain quality control. For highly specialized tasks, we occasionally partner with vetted experts." },
  { question: "Can I visit your office?", answer: "We love meeting clients! You are welcome to visit our San Francisco office by appointment, or we can arrange video conferences at your convenience." },
  { question: "What industries do you specialize in?", answer: "We have experience across various sectors including SaaS, E-commerce, Healthcare, Legal, and Real Estate." }
];

export const BLOG_PAGE_FAQS = [
  { question: "How often do you publish new content?", answer: "We publish deep-dive articles and industry updates weekly to keep our readers informed about the ever-changing landscape of SEO." },
  { question: "Can I contribute a guest post?", answer: "We do accept high-quality guest contributions from industry experts. Please contact our editorial team for guidelines." },
  { question: "Are your SEO strategies up to date?", answer: "Yes, our blog reflects our current methodologies. We constantly test and adapt our strategies based on the latest Google algorithm updates." },
  { question: "Do you cover news or just tutorials?", answer: "We cover a mix of practical 'how-to' guides, strategic thought leadership, and breaking news regarding major search engine updates." },
  { question: "Can I subscribe to a newsletter?", answer: "Yes! You can subscribe to our 'Search Signals' newsletter to get our latest insights delivered directly to your inbox every Tuesday." }
];

export const CONTACT_FAQS = [
  { question: "How quickly do you respond to inquiries?", answer: "We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our office directly." },
  { question: "Do you offer free consultations?", answer: "Yes, we offer a complimentary 30-minute strategy session where we can discuss your goals and see if we're a good fit." },
  { question: "What information do I need for an audit?", answer: "Ideally, we need your website URL, access to Google Analytics/Search Console (if available), and a brief overview of your main competitors." },
  { question: "Can we schedule a video call?", answer: "Certainly. We regularly conduct meetings via Zoom, Google Meet, or Teams to accommodate our international clients." },
  { question: "What are your support hours?", answer: "Our standard support hours are Monday through Friday, 9:00 AM to 6:00 PM PST. Emergency support is available for enterprise clients." }
];