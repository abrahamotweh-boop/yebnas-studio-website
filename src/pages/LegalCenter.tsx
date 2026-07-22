import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  Cookie, 
  AlertTriangle, 
  Copyright, 
  UserX,
  ChevronDown,
  ArrowRight,
  Landmark,
  Globe,
  FileCheck,
  LifeBuoy
} from 'lucide-react';
import { updateSEO } from '../utils';
import { APPS } from '../appsData';
import { getLegalDocuments } from '../lib/legalStore';

const GENERAL_APP = { id: 'general', name: 'Yebnas Studio (General)' };
const ALL_APPS = [GENERAL_APP, ...APPS];

const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'privacy': return ShieldCheck;
    case 'terms': return FileText;
    case 'guidelines': return Scale;
    case 'policy': return FileCheck;
    case 'safety': return LifeBuoy;
    case 'legal': return Copyright;
    default: return FileText;
  }
};

const getColorForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'privacy': return { from: 'from-blue-500', to: 'to-indigo-500' };
    case 'terms': return { from: 'from-purple-500', to: 'to-pink-500' };
    case 'guidelines': return { from: 'from-emerald-500', to: 'to-teal-500' };
    case 'policy': return { from: 'from-amber-500', to: 'to-orange-500' };
    case 'safety': return { from: 'from-rose-500', to: 'to-red-500' };
    case 'legal': return { from: 'from-cyan-500', to: 'to-blue-500' };
    default: return { from: 'from-slate-500', to: 'to-slate-700' };
  }
};

export default function LegalCenter() {
  const [selectedAppId, setSelectedAppId] = useState<string>('royals-kitchen');
  const [allDocs, setAllDocs] = useState(getLegalDocuments());

  useEffect(() => {
    updateSEO("Legal Center", "Official legal documentation and policies for Yebnas Studio applications.");
    setAllDocs(getLegalDocuments());
  }, []);

  const currentAppDocs = useMemo(() => {
    return allDocs.filter(d => d.appId === selectedAppId && d.isPublished);
  }, [allDocs, selectedAppId]);

  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      {/* Header Section */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6 shadow-sm">
            <Landmark size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Center</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The official documentation hub for every product published by Yebnas Studio. Select an application to view its specific policies, terms, and guidelines.
          </p>

          {/* Application Selector */}
          <div className="max-w-md mx-auto flex flex-col items-center">
            <label htmlFor="global-app-select" className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-3">
              Select Application
            </label>
            <div className="relative w-full shadow-lg shadow-purple-900/10 rounded-2xl">
              <select
                id="global-app-select"
                value={selectedAppId}
                onChange={(e) => setSelectedAppId(e.target.value)}
                className="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl pl-6 pr-12 py-4 text-lg font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 cursor-pointer transition-all hover:border-purple-300 dark:hover:border-purple-700"
              >
                {ALL_APPS.map(app => (
                  <option key={app.id} value={app.id} className="font-semibold">
                    {app.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none text-purple-500">
                <ChevronDown size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAppId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentAppDocs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentAppDocs.map((doc, idx) => {
                    const Icon = getIconForCategory(doc.category);
                    const colors = getColorForCategory(doc.category);
                    
                    return (
                      <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="group bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-xl dark:shadow-black/20 hover:shadow-md dark:hover:shadow-black/40 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all flex flex-col h-full relative"
                      >
                        <div className={`h-1.5 w-full bg-gradient-to-r ${colors.from} ${colors.to}`}></div>
                        
                        <div className="p-8 flex-1 flex flex-col">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors.from} ${colors.to} shadow-lg shadow-black/10 mb-6 group-hover:scale-105 transition-transform`}>
                            <Icon size={28} className="text-white" />
                          </div>
                          
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h3>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-8 line-clamp-3">
                            Official {doc.title.toLowerCase()} for {ALL_APPS.find(a => a.id === selectedAppId)?.name}. Last updated on {doc.updatedAt}.
                          </p>
                          
                          <div className="pt-6 border-t border-slate-100 dark:border-white/5 mt-auto">
                            <Link
                              to={`/legal/${selectedAppId}/${doc.id}`}
                              className="flex items-center justify-center w-full gap-2 px-4 py-3.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors group/btn"
                            >
                              Read Document
                              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mb-4">
                    <FileText size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No Documents Available</h3>
                  <p className="text-slate-600 dark:text-slate-400">Legal documents for this application are currently being updated or drafted.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
