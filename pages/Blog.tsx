import React from 'react';
import { Calendar, User } from 'lucide-react';
import FAQ from '../components/FAQ';
import { BLOG_POSTS, BLOG_PAGE_FAQS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">SEO Insights & News</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Stay updated with the latest trends in search engine optimization, digital marketing strategies, and industry updates.</p>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" /> {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" /> {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Blog & Content Questions</h2>
          <FAQ items={BLOG_PAGE_FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Blog;