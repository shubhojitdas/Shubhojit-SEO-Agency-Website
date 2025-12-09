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
    <div className="group relative bg-secondary border border-border rounded-2xl p-8 h-full transition-all duration-500 hover:border-contrast/30 hover:bg-secondary/80">
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-contrast group-hover:text-primary transition-all duration-300 text-contrast border border-border shadow-lg">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-2xl font-bold text-contrast mb-3 group-hover:translate-x-1 transition-transform">{title}</h3>
        
        <p className="text-muted mb-5 flex-grow leading-relaxed text-lg">
          {description}
        </p>
        
        <Link 
          to={slug} 
          className="inline-flex items-center text-sm font-bold text-contrast uppercase tracking-wider hover:underline underline-offset-4 mt-auto"
        >
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;