import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  Scale, 
  HelpCircle,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Info
} from 'lucide-react';
import { APPS } from '../appsData';
import { updateSEO } from '../utils';

import FaqAccordion from '../components/FaqAccordion';

export default function AppDetailsPage() {
  const { appId } = useParams();
  const app = APPS.find(a => a.id === appId);

  useEffect(() => {
    if (app) {
      updateSEO(`${app.name} - Yebnas Studio`, app.description);
    }
  }, [app]);

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  const Icon = app.icon;

  return (
    <div className="flex flex-col w-full min-h-screen pb-24 bg-white dark:bg-slate-950">
      
      {/* Hero Header */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${app.colorFrom} ${app.colorTo} opacity-10 rounded-full blur-[100px] pointer-events-none`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            to="/apps" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Applications
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
            
            {/* App Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center bg-gradient-to-br ${app.colorFrom} ${app.colorTo} shadow-2xl shadow-black/20 shrink-0 relative`}
            >
              <div className="absolute inset-0 bg-white/20 rounded-3xl mix-blend-overlay"></div>
              <Icon size={64} className="text-white drop-shadow-md relative z-10" />
            </motion.div>

            {/* Title & Description */}
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-4"
              >
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {app.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                  {app.status}
                </span>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400 font-medium">
                  {app.version}
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
              >
                {app.name}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-8"
              >
                {app.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                {app.category === 'Android App' && app.playStoreLink && app.status !== 'Coming Soon' && (
                  <a 
                    href={app.playStoreLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
                  >
                    <Download size={20} />
                    Download on Google Play
                  </a>
                )}

                {(app.category === 'Web App' || app.category === 'Tool') && app.webAppLink && app.status !== 'Coming Soon' && (
                  <a 
                    href={app.webAppLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${app.colorFrom} ${app.colorTo} text-white rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-purple-900/20`}
                  >
                    <ExternalLink size={20} />
                    Open Web App
                  </a>
                )}

                {app.status === 'Coming Soon' && (
                  <div className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 rounded-xl font-bold cursor-not-allowed">
                    <Clock size={20} />
                    Coming Soon
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details & Screenshots */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Info size={24} className="text-purple-500" />
                About {app.name}
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none prose-lg text-slate-600 dark:text-slate-300">
                <p>{app.longDescription}</p>
              </div>
            </div>

            {/* Screenshots */}
            {app.screenshots && app.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <Layers size={24} className="text-purple-500" />
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.screenshots.map((screenshot, index) => (
                    <img 
                      key={index} 
                      src={screenshot} 
                      alt={`${app.name} screenshot ${index + 1}`} 
                      className={`rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md ${app.category === 'Android App' ? 'aspect-[9/16] object-cover' : 'aspect-video object-cover'}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Main Features */}
            {app.features && app.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-purple-500" />
                  Main Features
                </h2>
                <div className="grid gap-4">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {app.faqs && app.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <HelpCircle size={24} className="text-purple-500" />
                  Frequently Asked Questions
                </h2>
                <FaqAccordion faqs={app.faqs} title="" />
              </div>
            )}
            
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            
            {/* App Info Card */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200 dark:border-white/5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                Application Info
              </h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Developer</span>
                  <span className="text-slate-900 dark:text-white font-medium text-sm">Yebnas Studio</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Version</span>
                  <span className="text-slate-900 dark:text-white font-medium text-sm">{app.version}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Release Date</span>
                  <span className="text-slate-900 dark:text-white font-medium text-sm">{app.releaseDate}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Last Updated</span>
                  <span className="text-slate-900 dark:text-white font-medium text-sm">{app.lastUpdated}</span>
                </li>
                <li className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Supported Platforms</span>
                </li>
                <li>
                  <div className="flex flex-wrap gap-2">
                    {app.platforms.map(platform => (
                      <span key={platform} className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700">
                        {platform}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* Legal Documents */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200 dark:border-white/5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                Legal Documents
              </h3>
              
              <div className="space-y-3">
                <Link to={`/legal/${app.id}/privacy-policy`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Privacy Policy</span>
                </Link>

                <Link to={`/legal/${app.id}/terms-and-conditions`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Terms & Conditions</span>
                </Link>

                <Link to={`/legal/${app.id}/community-guidelines`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Scale size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Community Guidelines</span>
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200 dark:border-white/5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                Need Help?
              </h3>
              
              <div className="space-y-4">
                <Link to="/help-center" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <HelpCircle size={18} />
                  Visit Help Center
                </Link>
                <Link to="/contact-us" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                  <MessageCircle size={18} />
                  Contact Support
                </Link>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2 leading-relaxed">
                  For the fastest response, use the support feature inside the application.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
