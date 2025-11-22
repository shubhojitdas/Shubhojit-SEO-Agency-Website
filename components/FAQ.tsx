import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
        onClick={toggle}
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-accent' : 'text-slate-800'} transition-colors`}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
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
    <div className="max-w-3xl mx-auto">
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