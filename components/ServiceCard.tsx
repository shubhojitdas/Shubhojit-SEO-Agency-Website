import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, slug }) => {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 group flex flex-col h-full">
      <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Link 
        to={slug} 
        className="inline-flex items-center text-sm font-semibold text-accent hover:text-accentHover transition-colors mt-auto"
      >
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;