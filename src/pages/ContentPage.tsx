import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { FileText, ArrowLeft, Clock, Printer, Link as LinkIcon, Share2, ChevronUp } from 'lucide-react';
import { updateSEO } from '../utils';
import { getDocumentById } from '../lib/legalStore';
import { APPS } from '../appsData';

export default function ContentPage() {
  const { appId, docId, slug } = useParams();
  
  // Backwards compatibility for old slug routing if needed, but focus on legal/appId/docId
  const effectiveAppId = appId || 'general';
  const effectiveDocId = docId || slug;

  const doc = effectiveDocId ? getDocumentById(effectiveAppId, effectiveDocId) : undefined;
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (doc) {
      updateSEO(`${doc.title} - ${effectiveAppId}`, `Official ${doc.title} document for Yebnas Studio.`);
    } else {
      updateSEO("Page Not Found");
    }
  }, [doc, effectiveAppId]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleShare = async () => {
    if (navigator.share && doc) {
      try {
        await navigator.share({
          title: doc.title,
          text: `Read the ${doc.title} on Yebnas Studio Legal Center`,
          url: window.location.href,
        });
      } catch (e) {
        console.error("Error sharing:", e);
      }
    } else {
      handleCopyLink();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!doc) {
    return (
      <div className="flex-grow flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">The document could not be found.</p>
          <Link to="/legal-center" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors">
            <ArrowLeft size={20} /> Back to Legal Center
          </Link>
        </div>
      </div>
    );
  }

  const appName = effectiveAppId === 'general' ? 'Yebnas Studio' : APPS.find(a => a.id === effectiveAppId)?.name || effectiveAppId;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      
      {/* Utility Rail (Sticky) */}
      <div className="hidden lg:flex flex-col gap-3 absolute -left-16 top-16 sticky top-24 pt-4">
        <button onClick={handlePrint} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group relative" aria-label="Print">
          <Printer size={20} />
          <span className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">Print Document</span>
        </button>
        <button onClick={handleCopyLink} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group relative" aria-label="Copy Link">
          <LinkIcon size={20} />
          <span className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">Copy Link</span>
        </button>
        <button onClick={handleShare} className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group relative" aria-label="Share">
          <Share2 size={20} />
          <span className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">Share</span>
        </button>
      </div>

      <div className="mb-8">
        <Link to="/legal-center" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium transition-colors">
          <ArrowLeft size={16} /> Back to Legal Center
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <FileText size={14} />
            <span>{doc.category} for {appName}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
            <span>Version {doc.version}</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          {doc.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Last Updated: <strong>{doc.updatedAt}</strong></span>
          </div>
          <div>Published by: <strong>{doc.updatedBy}</strong></div>
        </div>
        
        {/* Mobile Action Buttons */}
        <div className="flex lg:hidden gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <button onClick={handlePrint} className="flex items-center justify-center gap-2 flex-1 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Printer size={18} /> Print
          </button>
          <button onClick={handleShare} className="flex items-center justify-center gap-2 flex-1 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Share2 size={18} /> Share
          </button>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-li:my-2">
        <Markdown>{doc.content}</Markdown>
      </article>

      {/* Version History Footer */}
      {doc.history && doc.history.length > 0 && (
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Revision History</h3>
          <div className="space-y-4">
            {doc.history.map((rev, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 gap-4">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Version {rev.version}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{rev.changes}</div>
                </div>
                <div className="text-sm text-slate-500 text-left sm:text-right">
                  <div>{rev.date}</div>
                  <div>by {rev.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-purple-600 text-white rounded-full shadow-xl hover:bg-purple-700 transition-all z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>

    </div>
  );
}
