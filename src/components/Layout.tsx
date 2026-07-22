import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sun, Moon, Search, Smartphone, ChevronRight, 
  ArrowUp, Facebook, Twitter, Instagram, Linkedin, FileText, Youtube, Globe, Settings
} from 'lucide-react';
import { PAGES, getPagesByCategory, APP_NAME } from '../data';
import YebnasStudioLogo from './YebnasStudioLogo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return document.documentElement.classList.contains('dark');
  });

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const filteredPages = PAGES.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <header className="sticky top-0 z-50 w-full h-16 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <YebnasStudioLogo variant="header" size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}>Home</Link>
            <Link to="/apps" className={`text-sm font-medium transition-colors ${location.pathname === '/apps' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'}`}>Our Apps</Link>
            <Link to="/release-notes" className={`text-sm font-medium transition-colors ${location.pathname === '/release-notes' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'}`}>News & Updates</Link>
            <Link to="/legal-center" className={`text-sm font-medium transition-colors ${location.pathname === '/legal-center' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}>Legal Center</Link>
            <Link to="/about-us" className={`text-sm font-medium transition-colors ${location.pathname === '/about-us' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}>About Us</Link>
            <Link to="/faq" className={`text-sm font-medium transition-colors ${location.pathname === '/faq' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 pb-1 px-1' : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'}`}>FAQ</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4 bg-white/50 dark:bg-slate-900/50 p-1 rounded-full border border-slate-200 dark:border-white/5">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Search"
            >
              <Search size={16} />
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-1.5 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-4 py-6">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search for policies, help, guidelines..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery && (
                <div className="mt-4 max-h-60 overflow-y-auto">
                  {filteredPages.length > 0 ? (
                    <ul className="space-y-2">
                      {filteredPages.map(page => (
                        <li key={page.slug}>
                          <Link 
                            to={`/${page.slug}`}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                          >
                            <FileText size={16} className="text-purple-600 dark:text-purple-400" />
                            {page.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-500 dark:text-slate-400 py-4 text-center">No results found for "{searchQuery}"</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 absolute w-full shadow-2xl dark:shadow-purple-900/20"
          >
            <div className="flex flex-col px-4 py-4 space-y-2">
              <Link to="/" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">Home</Link>
              <Link to="/apps" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">Our Apps</Link>
              <Link to="/release-notes" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">News & Updates</Link>
              <Link to="/legal-center" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">Legal Center</Link>
              <Link to="/about-us" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">About Us</Link>
              <Link to="/faq" className="text-base font-medium text-slate-700 dark:text-slate-200 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900">FAQ</Link>
              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <Link to="/legal-center" className="text-sm font-medium text-purple-600 dark:text-purple-400 p-3 block">View all pages & documents &rarr;</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white pt-16 pb-8 mt-auto shrink-0 border-t border-slate-200 dark:border-white/5 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <YebnasStudioLogo variant="full" size="md" />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building international, innovative, and premium software solutions. Designed to scale with zero compromises on security and user experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5 opacity-50 hover:opacity-100" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5 opacity-50 hover:opacity-100" aria-label="X (Twitter)"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5 opacity-50 hover:opacity-100" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5 opacity-50 hover:opacity-100" aria-label="YouTube"><Youtube size={16} /></a>
              <a href="#" className="w-8 h-8 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5 opacity-50 hover:opacity-100" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Official Links</h3>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/apps" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Our Apps</Link></li>
              <li><Link to="/release-notes" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/legal-center" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Legal Center</Link></li>
              <li><Link to="/about-us" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/account-deletion" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Account Deletion</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Legal</h3>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/legal/general/privacy-policy" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/general/terms-and-conditions" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/general/community-guidelines" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Community Guidelines</Link></li>
              <li><Link to="/legal-center" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-colors">Copyright Notice</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-sm">Settings</h3>
            <ul className="space-y-3 text-[13px]">
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Globe size={14} /> English (US)
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Sun size={14} /> Light / Dark Mode
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Settings size={14} /> Accessibility Options
              </li>
              <li className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500">
                Website Version 1.0.0<br/>
                Updated: July 2026
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium tracking-wide">
            &copy; {year} YEBNAS STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-white/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5 shrink-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
          {pathnames.length > 0 && <ChevronRight size={14} className="mx-2 flex-shrink-0" />}
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const page = PAGES.find(p => p.slug === value);
            const title = page ? page.title : value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            return (
              <React.Fragment key={to}>
                {isLast ? (
                  <span className="text-slate-800 dark:text-slate-200" aria-current="page">
                    {title}
                  </span>
                ) : (
                  <>
                    <Link to={to} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {title}
                    </Link>
                    <ChevronRight size={14} className="mx-2 flex-shrink-0" />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header />
      <Breadcrumbs />
      <main className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
      <BackToTop />
    </div>
  );
}
