import React from 'react';
import { Calendar, User } from 'lucide-react';
import FAQ from '../components/FAQ';
import { BLOG_POSTS, BLOG_PAGE_FAQS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in bg-primary text-contrast">
      <section className="bg-primary py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-contrast/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-contrast mb-6 tracking-tighter">Insights</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto font-light">Stay updated with the latest trends in search engine optimization, digital marketing strategies, and industry updates.</p>
        </div>
      </section>

      <section className="py-24 bg-secondary rounded-t-[3rem] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="flex flex-col bg-primary rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-contrast/5 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-contrast border border-contrast/20 inline-block px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest bg-secondary">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold text-contrast mb-4 line-clamp-2 group-hover:text-muted transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted mt-auto pt-6 border-t border-border font-medium uppercase tracking-wide">
                    <div className="flex items-center">
                      <User size={14} className="mr-2" /> {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" /> {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-contrast mb-16 tracking-tight">Content Questions</h2>
          <FAQ items={BLOG_PAGE_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Blog;