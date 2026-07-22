import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { updateSEO } from '../utils';
import articlesData from '../articles.json';

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
}

export default function BlogPostPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const found = (articlesData as Article[]).find(a => a.id === id);
    if (found) {
      setArticle(found);
      updateSEO(found.title, found.excerpt);
    }
  }, [id]);

  if (!articlesData.find((a: any) => a.id === id)) {
    return <Navigate to="/blog" replace />;
  }

  if (!article) return null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-950 pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <Link to="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Blog & News</Link>
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold truncate max-w-[200px] sm:max-w-none">{article.title}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        
        {/* Header */}
        <header className="mb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-lg uppercase tracking-wide">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 dark:border-white/5 text-sm font-medium text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <User size={16} className="text-slate-500" />
              </div>
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              {article.date}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

      </article>
    </div>
  );
}
