import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search,
  ExternalLink,
  Download,
  Info,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { updateSEO } from '../utils';
import { APPS } from '../appsData';

const CATEGORIES = ['All', 'Android Apps', 'Web Apps', 'Games', 'Tools'];

export default function AppsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    updateSEO("Our Apps", "Explore the official application directory of Yebnas Studio.");
  }, []);

  const filteredApps = APPS.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory === 'Android Apps') matchesCategory = app.category === 'Android App';
    else if (selectedCategory === 'Web Apps') matchesCategory = app.category === 'Web App';
    else if (selectedCategory === 'Games') matchesCategory = app.category === 'Game';
    else if (selectedCategory === 'Tools') matchesCategory = app.category === 'Tool';
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      {/* Header Section */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6 shadow-sm">
            <Layers size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Applications</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover our entire ecosystem of mobile apps, web platforms, games, and tools engineered for excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search and Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            
            {/* Search Bar */}
            <div className="relative w-full md:max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-shadow shadow-sm dark:shadow-none"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/20' 
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredApps.map((app, index) => {
                  const Icon = app.icon;
                  
                  // Status Badge Styling
                  let statusClass = '';
                  if (app.status === 'Available') statusClass = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20';
                  else if (app.status === 'Coming Soon') statusClass = 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20';
                  else if (app.status === 'Beta') statusClass = 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20';
                  else if (app.status === 'Maintenance') statusClass = 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20';

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      key={app.id}
                      className="group bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-xl dark:shadow-black/20 hover:shadow-lg dark:hover:shadow-black/40 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all flex flex-col h-full relative"
                    >
                      {/* Top Accent Line */}
                      <div className={`h-1.5 w-full bg-gradient-to-r ${app.colorFrom} ${app.colorTo}`}></div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${app.colorFrom} ${app.colorTo} shadow-lg shadow-black/10 group-hover:scale-105 transition-transform`}>
                            <Icon size={28} className="text-white" />
                          </div>
                          
                          <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${statusClass}`}>
                            {app.status}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {app.name}
                          </h3>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                            {app.version}
                          </span>
                        </div>
                        
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                          {app.category}
                        </p>

                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                          {app.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                          
                          {app.category === 'Android App' && app.playStoreLink && app.status !== 'Coming Soon' && (
                            <a 
                              href={app.playStoreLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                            >
                              <Download size={16} />
                              Google Play
                            </a>
                          )}

                          {app.category === 'Web App' && app.webAppLink && app.status !== 'Coming Soon' && (
                            <a 
                              href={app.webAppLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                            >
                              <ExternalLink size={16} />
                              Open App
                            </a>
                          )}

                          {app.category === 'Tool' && app.webAppLink && app.status !== 'Coming Soon' && (
                            <a 
                              href={app.webAppLink} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                            >
                              <ExternalLink size={16} />
                              Open Tool
                            </a>
                          )}

                          {(app.status === 'Coming Soon' || (!app.playStoreLink && !app.webAppLink)) && (
                            <button 
                              disabled
                              className="flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl font-semibold cursor-not-allowed"
                            >
                              {app.status === 'Coming Soon' ? 'Coming Soon' : 'Unavailable'}
                            </button>
                          )}
                          
                          <Link 
                            to={`/apps/${app.id}`}
                            className="flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-transparent transition-colors"
                          >
                            <Info size={16} />
                            Details
                          </Link>

                        </div>

                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5"
            >
              <Search size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No applications found</h3>
              <p className="text-slate-500 dark:text-slate-400">
                We couldn't find any applications matching "{searchQuery}" in {selectedCategory}.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}
