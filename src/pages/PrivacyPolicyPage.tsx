import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { APPS } from '../appsData';
import { updateSEO } from '../utils';

const GENERAL_APP = { id: 'general', name: 'Yebnas Studio', version: 'Current', lastUpdated: 'July 1, 2026' };

export default function PrivacyPolicyPage() {
  const { appId } = useParams();
  
  const app = APPS.find(a => a.id === appId) || GENERAL_APP;
  const isGeneral = app.id === 'general';

  useEffect(() => {
    updateSEO(`Privacy Policy - ${app.name}`, `Privacy Policy for ${app.name} by Yebnas Studio.`);
  }, [app]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      
      {/* Breadcrumb Header */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/50 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <Link to="/legal-center" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Legal Center</Link>
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <span className="text-slate-900 dark:text-slate-200">Privacy Policy</span>
            <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">{app.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 flex flex-col md:flex-row gap-12 relative">
        
        {/* Floating Table of Contents */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-[160px] bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Contents</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><a href="#introduction" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">1. Introduction</a></li>
              <li><a href="#information-we-collect" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">2. Information We Collect</a></li>
              <li><a href="#how-information-is-used" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">3. How Information Is Used</a></li>
              {!isGeneral && <li><a href="#permissions" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">4. Permissions Requested</a></li>}
              <li><a href="#data-security" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '5.' : '4.'} Data Security</a></li>
              <li><a href="#childrens-privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '6.' : '5.'} Children's Privacy</a></li>
              <li><a href="#third-party" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '7.' : '6.'} Third-Party Services</a></li>
              <li><a href="#cookies" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '8.' : '7.'} Cookies</a></li>
              <li><a href="#changes" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '9.' : '8.'} Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '10.' : '9.'} Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="flex-1 bg-white dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-sm">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                For <span className="text-slate-900 dark:text-white">{app.name}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-y border-slate-100 dark:border-white/5 mb-10">
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Developer</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Yebnas Studio</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Application</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{app.name}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Version</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{app.version}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Last Updated</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{app.lastUpdated}</span>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-purple-600 dark:prose-a:text-purple-400">
            
            <h2 id="introduction">1. Introduction</h2>
            <p>
              Welcome to <strong>{app.name}</strong>, a product developed and maintained by Yebnas Studio. 
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy 
              will inform you as to how we look after your personal data when you use {app.name} and tell you 
              about your privacy rights and how the law protects you.
            </p>

            <h2 id="information-we-collect">2. Information We Collect</h2>
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you depending on how you use {app.name}.
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system and platform.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our application, products and services.</li>
            </ul>

            <h2 id="how-information-is-used">3. How Information Is Used</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            {!isGeneral && (
              <>
                <h2 id="permissions">4. Permissions Requested</h2>
                <p>
                  To provide the full functionality of {app.name}, we may request certain permissions from your device. These may include:
                </p>
                <ul>
                  <li><strong>Storage / Media:</strong> To save your preferences, app data, or downloaded content directly to your device.</li>
                  <li><strong>Network / Internet:</strong> To communicate with Yebnas Studio servers, fetch updates, and sync data.</li>
                  <li><strong>Notifications:</strong> To send you alerts, reminders, or updates related to your account and app activity.</li>
                </ul>
                <p>You can revoke these permissions at any time through your device's system settings, though this may limit some functionality of {app.name}.</p>
              </>
            )}

            <h2 id="data-security">{!isGeneral ? '5.' : '4.'} Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>

            <h2 id="childrens-privacy">{!isGeneral ? '6.' : '5.'} Children's Privacy</h2>
            <p>
              Our application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>

            <h2 id="third-party">{!isGeneral ? '7.' : '6.'} Third-Party Services</h2>
            <p>
              {app.name} may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our application, we encourage you to read the privacy notice of every website or application you visit.
            </p>

            <h2 id="cookies">{!isGeneral ? '8.' : '7.'} Cookies</h2>
            <p>
              We may use cookies and similar tracking technologies to track the activity on our application and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser or device to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 id="changes">{!isGeneral ? '9.' : '8.'} Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via a prominent notice on {app.name}, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.
            </p>

            <h2 id="contact">{!isGeneral ? '10.' : '9.'} Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please use the official support feature inside {app.name} or visit the Yebnas Studio Help Center.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
