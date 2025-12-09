import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`text-xl font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-contrast' : 'text-muted group-hover:text-contrast'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'bg-contrast text-primary border-contrast rotate-180' : 'bg-transparent text-muted border-border group-hover:border-contrast group-hover:text-contrast'}`}>
            <ChevronDown size={20} />
        </div>
      </button>
      
      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-muted leading-relaxed pb-8 text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  items: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;