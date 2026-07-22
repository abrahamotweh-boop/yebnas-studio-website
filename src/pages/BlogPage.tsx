import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, User, Search, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { updateSEO } from '../utils';
import articlesData from '../articles.json';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
  popular?: boolean;
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    updateSEO("Blog & News", "Official articles, company news, and developer insights from Yebnas Studio.");
    setArticles(articlesData as Article[]);
  }, []);

  const categories = ['All', 'Company News', 'Development Updates', 'Product Announcements', 'Tutorials', 'Security Tips', 'Technology', 'Behind the Scenes'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => articles.find(a => a.featured), [articles]);
  const popularArticles = useMemo(() => articles.filter(a => a.popular).slice(0, 3), [articles]);
  const recentArticles = useMemo(() => {
    // Exclude featured from recent if displaying both
    return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).filter(a => a.id !== featuredArticle?.id).slice(0, 6);
  }, [articles, featuredArticle]);

  return (
    <div className="flex flex-col w-full min-h-screen pb-24 bg-slate-50 dark:bg-slate-900">
      
      {/* Header Section */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 mb-6 shadow-sm border border-slate-200 dark:border-white/5">
              <BookOpen size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Developer Blog & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Company News</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Official articles, educational content, feature announcements, and development progress from Yebnas Studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search and Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 w-full md:w-auto space-x-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                      : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-white/10 rounded-full leading-5 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors shadow-sm"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Featured Article Section (Only show if 'All' category and no search) */}
          {selectedCategory === 'All' && !searchQuery && featuredArticle && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="text-purple-500" size={24} /> Featured Article
              </h2>
              <Link to={`/blog/${featuredArticle.id}`} className="group block">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:shadow-xl dark:shadow-black/20 transition-all grid grid-cols-1 md:grid-cols-2 group"
                >
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={featuredArticle.imageUrl} 
                      alt={featuredArticle.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-purple-600 dark:text-purple-400 text-xs font-bold rounded-full uppercase tracking-wide">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5"><User size={16} />{featuredArticle.author}</div>
                        <div className="flex items-center gap-1.5"><Calendar size={16} />{featuredArticle.date}</div>
                        <div className="hidden sm:flex items-center gap-1.5"><Clock size={16} />{featuredArticle.readTime}</div>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-2 transition-transform">
                        Read More <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          )}

          {/* Split Content: Recent (Left) & Popular (Right) only when All & no search, otherwise just grid */}
          {selectedCategory === 'All' && !searchQuery ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Recent Articles */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="text-blue-500" size={24} /> Recent Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentArticles.map((article, idx) => (
                    <ArticleCard key={article.id} article={article} index={idx} />
                  ))}
                </div>
              </div>

              {/* Popular Articles */}
              <div className="lg:col-span-1 space-y-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="text-orange-500" size={24} /> Popular Articles
                </h2>
                <div className="flex flex-col gap-6">
                  {popularArticles.map((article, idx) => (
                    <Link key={article.id} to={`/blog/${article.id}`} className="group bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex gap-4 items-center">
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden relative">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">{article.category}</span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Calendar size={12}/> {article.date}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Standard Grid for Search & Filters */
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Articles`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredArticles.map((article, idx) => (
                    <ArticleCard key={article.id} article={article} index={idx} />
                  ))}
                </AnimatePresence>
              </div>
              {filteredArticles.length === 0 && (
                <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-white/5">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                  <p className="text-slate-600 dark:text-slate-400">Try selecting a different category or adjusting your search.</p>
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article, index }: { article: Article, index: number, key?: React.Key }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/40 transition-all h-full"
    >
      <div className="relative h-56 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2 leading-tight">
          <Link to={`/blog/${article.id}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3 flex-1 text-sm">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/5 space-y-4">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5"><User size={14} />{article.author}</div>
            <div className="flex items-center gap-1.5"><Calendar size={14} />{article.date}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Clock size={14} />{article.readTime}
            </div>
            <Link 
              to={`/blog/${article.id}`}
              className="flex items-center gap-1 text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors"
            >
              Read More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
