import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  Star, 
  Clock, 
  BookOpen, 
  MessageSquare,
  LifeBuoy
} from 'lucide-react';
import { updateSEO } from '../utils';
import { FAQS, FAQ_CATEGORIES, FaqCategory, HELPFUL_ARTICLES } from '../faqData';
import { Link } from 'react-router-dom';

export default function FaqCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'All'>('All');
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    updateSEO("FAQ Center", "Find answers to frequently asked questions about Yebnas Studio products and services.");
  }, []);

  const popularFaqs = useMemo(() => FAQS.filter(faq => faq.isPopular), []);
  const recentFaqs = useMemo(() => FAQS.filter(faq => faq.isRecentlyUpdated), []);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const filteredFaqs = useMemo(() => {
    let filtered = FAQS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(q) || 
        faq.answer.toLowerCase().includes(q)
      );
    } else if (activeCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }
    return filtered;
  }, [searchQuery, activeCategory]);

  const renderAccordionItem = (faq: typeof FAQS[0]) => {
    const isOpen = openItem === faq.id;
    return (
      <div 
        key={faq.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden mb-4 ${
          isOpen 
            ? 'bg-white dark:bg-slate-900 border-purple-500/30 shadow-lg shadow-purple-900/10' 
            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
        }`}
      >
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        >
          <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}>
            {faq.question}
          </span>
          <div 
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}
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
                {searchQuery.trim() && (
                  <div className="mt-4 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-lg">
                    {faq.category}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full min-h-screen pb-24 bg-white dark:bg-slate-950">
      
      {/* Header Section */}
      <section className="relative pt-20 pb-16 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 mb-8 shadow-xl shadow-purple-900/10 border border-slate-200 dark:border-white/5">
            <HelpCircle size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">help?</span>
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-10">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-400">
              <Search size={24} />
            </div>
            <input
              type="text"
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl pl-16 pr-6 py-5 text-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-xl shadow-slate-200/50 dark:shadow-black/20 placeholder:text-slate-400"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                
                {/* Categories */}
                {!searchQuery && (
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-white/5">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Categories</h3>
                    <ul className="space-y-1.5">
                      <li>
                        <button
                          onClick={() => setActiveCategory('All')}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                            activeCategory === 'All' 
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          All Categories
                        </button>
                      </li>
                      {FAQ_CATEGORIES.map(category => (
                        <li key={category}>
                          <button
                            onClick={() => setActiveCategory(category)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                              activeCategory === category 
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Helpful Articles */}
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> Helpful Articles
                  </h3>
                  <ul className="space-y-4">
                    {HELPFUL_ARTICLES.map((article, idx) => (
                      <li key={idx}>
                        <Link 
                          to={article.link}
                          className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-start gap-2"
                        >
                          <span className="text-purple-500 mt-0.5">•</span>
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* FAQs List */}
            <div className="lg:w-3/4">
              
              {!searchQuery && activeCategory === 'All' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-6 flex items-center gap-3">
                      <Star size={24} className="text-amber-500" />
                      Popular Questions
                    </h3>
                    <div className="space-y-4">
                      {popularFaqs.slice(0, 4).map(renderAccordionItem)}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-6 flex items-center gap-3">
                      <Clock size={24} className="text-blue-500" />
                      Recently Updated
                    </h3>
                    <div className="space-y-4">
                      {recentFaqs.slice(0, 4).map(renderAccordionItem)}
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  {searchQuery ? 'Search Results' : (activeCategory === 'All' ? 'All FAQs' : `${activeCategory} FAQs`)}
                  <span className="text-sm font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">
                    {filteredFaqs.length}
                  </span>
                </h2>

                {filteredFaqs.length > 0 ? (
                  <div className="space-y-2">
                    {filteredFaqs.map(renderAccordionItem)}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4 text-slate-400">
                      <Search size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      We couldn't find any FAQs matching your search query. Try using different keywords or browse by category.
                    </p>
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="mt-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-xl shadow-purple-900/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[50px] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 shadow-lg">
                    <LifeBuoy size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Still need help?
                  </h3>
                  <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
                    If you couldn't find the answer to your question, our support team is ready to assist you.
                  </p>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-slate-50 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                    <MessageSquare size={20} className="text-purple-600" />
                    Open Support Inside the App
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
