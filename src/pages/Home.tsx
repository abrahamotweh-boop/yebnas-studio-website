import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  ShieldCheck, 
  FileText, 
  Code,
  LayoutGrid,
  ArrowRight,
  Star
} from 'lucide-react';
import { APP_NAME, APP_DESC, MAIN_FEATURES, HOME_FAQS } from '../data';
import { updateSEO } from '../utils';
import FaqAccordion from '../components/FaqAccordion';
import YebnasStudioLogo from '../components/YebnasStudioLogo';

export default function Home() {
  useEffect(() => {
    updateSEO("Home", APP_DESC);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 font-bold text-xs uppercase tracking-widest mb-6 border border-purple-500/20 backdrop-blur-sm">
                <Star size={14} className="fill-purple-400 text-purple-400" />
                <span>OFFICIAL YEBNAS STUDIO HUB</span>
              </div>
              <YebnasStudioLogo variant="mark" size="xl" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-300% animate-gradient">
                {APP_NAME}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed"
            >
              {APP_DESC} Explore our products, access official legal documentation, read community guidelines, stay informed with company updates, and discover innovative digital experiences—all in one trusted destination.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <Link 
                to="/apps" 
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-500 hover:to-blue-500 transition-all w-full sm:w-auto justify-center shadow-lg shadow-purple-900/30"
              >
                Explore Our Apps
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/legal-center" 
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center"
              >
                Legal Center
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-white/5 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MAIN_FEATURES.map((feature, idx) => {
              const Icon = {
                'LayoutGrid': LayoutGrid,
                'FileText': FileText,
                'Code': Code,
                'ShieldCheck': ShieldCheck
              }[feature.icon] || ShieldCheck;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Link
                    to={feature.link}
                    className="bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-purple-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all group flex flex-col h-full shadow-xl shadow-slate-200/50 dark:shadow-black/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-transform shadow-inner border border-slate-200 dark:border-white/5">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1 text-sm">{feature.description}</p>
                    <div className="mt-6 flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </section>

      {/* Decorative gradient strip at bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-50 relative z-10"></div>
    </div>
  );
}
