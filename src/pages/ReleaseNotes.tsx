import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Calendar, Tag, ChevronDown, CheckCircle2, ShieldAlert, Sparkles, Wrench, Zap, Bug } from 'lucide-react';
import { RELEASE_NOTES, AppCategory, UpdateType } from '../releaseNotesData';

const categories: ('All Updates' | AppCategory)[] = ['All Updates', 'Android Apps', 'Web Apps', 'Games', 'Security Updates'];

const updateTypeIcons: Record<UpdateType, React.ElementType> = {
  'Major Update': Sparkles,
  'Minor Update': Zap,
  'Bug Fix': Bug,
  'Security Update': ShieldAlert,
  'New Feature': Sparkles,
};

const updateTypeColors: Record<UpdateType, string> = {
  'Major Update': 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30',
  'Minor Update': 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
  'Bug Fix': 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30',
  'Security Update': 'text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30',
  'New Feature': 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30',
};

export default function ReleaseNotes() {
  const [activeCategory, setActiveCategory] = useState<'All Updates' | AppCategory>('All Updates');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = useMemo(() => {
    return RELEASE_NOTES.filter((note) => {
      const matchesCategory = activeCategory === 'All Updates' || note.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        note.appName.toLowerCase().includes(query) ||
        note.version.toLowerCase().includes(query) ||
        note.updateType.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 min-h-screen pb-24">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              News & Release Notes
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Stay up-to-date with the latest features, improvements, and security updates across all Yebnas Studio products.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          
          <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 w-full md:w-auto space-x-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-900/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-white/10 rounded-xl leading-5 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-colors"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Release Notes Feed */}
        <div className="space-y-8">
          <AnimatePresence>
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note, index) => {
                const Icon = note.appIcon;
                const TypeIcon = updateTypeIcons[note.updateType];
                const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = new Date(note.releaseDate).toLocaleDateString(undefined, dateOptions);

                return (
                  <motion.div
                    key={note.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white dark:bg-slate-950 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-white/5 relative overflow-hidden group"
                  >
                    {/* Header line */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 flex items-center justify-center shrink-0">
                          <Icon size={24} className={note.iconColor} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                            {note.appName}
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                              {note.version}
                            </span>
                          </h2>
                          <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formattedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${updateTypeColors[note.updateType]} shrink-0 self-start sm:self-auto`}>
                        <TypeIcon size={14} />
                        {note.updateType}
                      </div>
                    </div>

                    {/* Changes Section */}
                    <div className="space-y-6">
                      {note.changes.newFeatures && (
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Sparkles size={16} className="text-purple-500" />
                            New Features
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.newFeatures.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {note.changes.improvements && (
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Zap size={16} className="text-blue-500" />
                            Improvements
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.improvements.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {note.changes.performance && (
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Wrench size={16} className="text-emerald-500" />
                            Performance Enhancements
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.performance.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {note.changes.bugFixes && (
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Bug size={16} className="text-amber-500" />
                            Bug Fixes
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.bugFixes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {note.changes.security && (
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <ShieldAlert size={16} className="text-rose-500" />
                            Security Improvements
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.security.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {note.changes.knownIssues && (
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-200/50 dark:border-amber-900/30">
                          <h3 className="text-sm font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <ShieldAlert size={16} />
                            Known Issues
                          </h3>
                          <ul className="space-y-2">
                            {note.changes.knownIssues.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-white/5"
              >
                <Tag size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No updates found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  We couldn't find any release notes matching your current filters. Try adjusting your search query or category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
