import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 text-center tracking-tight">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-white dark:bg-slate-900 border-purple-500/30 shadow-lg shadow-purple-900/10' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <div 
                  className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full bg-slate-100 dark:bg-white/5 mb-4"></div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
