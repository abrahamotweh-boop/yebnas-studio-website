import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Scale, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { APPS } from '../appsData';
import { updateSEO } from '../utils';

const GENERAL_APP = { id: 'general', name: 'Yebnas Studio', version: 'Current', lastUpdated: 'July 1, 2026' };

export default function CommunityGuidelinesPage() {
  const { appId } = useParams();
  
  const app = APPS.find(a => a.id === appId) || GENERAL_APP;

  useEffect(() => {
    updateSEO(`Community Guidelines - ${app.name}`, `Community Guidelines for ${app.name} by Yebnas Studio.`);
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
            <span className="text-slate-900 dark:text-slate-200">Community Guidelines</span>
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
              <li><a href="#welcome" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">1. Welcome</a></li>
              <li><a href="#respect" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">2. Respect Others</a></li>
              <li><a href="#no-hate-speech" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">3. No Hate Speech</a></li>
              <li><a href="#no-harassment" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">4. No Harassment</a></li>
              <li><a href="#no-violence" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">5. No Violence</a></li>
              <li><a href="#no-illegal" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">6. No Illegal Activities</a></li>
              <li><a href="#no-fraud" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">7. No Fraud</a></li>
              <li><a href="#no-spam" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">8. No Spam</a></li>
              <li><a href="#content-rules" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">9. Content Rules</a></li>
              <li><a href="#reporting" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">10. Reporting Violations</a></li>
              <li><a href="#enforcement" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">11. Enforcement Actions</a></li>
              <li><a href="#appeals" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">12. Appeals Process</a></li>
              <li><a href="#updates" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">13. Updates to Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="flex-1 bg-white dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-sm">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Scale size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Community Guidelines
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
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Last Updated</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{app.lastUpdated}</span>
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-emerald-600 dark:prose-a:text-emerald-400">
            
            <h2 id="welcome">1. Welcome</h2>
            <p>
              Welcome to the <strong>{app.name}</strong> community. At Yebnas Studio, we strive to create a safe, 
              inclusive, and engaging environment for all users. These Community Guidelines are designed to help you 
              understand what is acceptable behavior and what is not on our platform.
            </p>

            <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-xl p-4 my-6 flex gap-4">
              <div className="mt-1 text-emerald-600 dark:text-emerald-400 shrink-0">
                <CheckCircle size={20} />
              </div>
              <p className="m-0 text-emerald-800 dark:text-emerald-200 text-sm">
                <strong>Our Core Principle:</strong> Treat others the way you want to be treated. Be kind, be helpful, and foster a positive community experience.
              </p>
            </div>

            <h2 id="respect">2. Respect Others</h2>
            <p>
              We are a diverse community with different backgrounds and beliefs. You must respect other users, 
              their opinions, and their right to use the platform. Disagreements are natural, but they must be 
              handled constructively.
            </p>

            <h2 id="no-hate-speech">3. No Hate Speech</h2>
            <p>
              We do not tolerate hate speech. This includes content that promotes violence, attacks, or diminishes 
              individuals or groups based on race, ethnicity, national origin, religion, sexual orientation, caste, 
              sex, gender, gender identity, or serious disease or disability.
            </p>

            <h2 id="no-harassment">4. No Harassment</h2>
            <p>
              Harassment, bullying, and intimidation are strictly prohibited. Do not engage in targeted attacks 
              against individuals, repeated unwanted contact, doxxing (sharing private information without consent), 
              or any behavior intended to distress or silence someone else.
            </p>

            <h2 id="no-violence">5. No Violence</h2>
            <p>
              Do not post content that encourages, glorifies, or incites violence. Threats of physical harm against 
              others or oneself are not allowed. Any content promoting terrorism or violent extremism will be immediately 
              removed and reported to relevant authorities.
            </p>

            <h2 id="no-illegal">6. No Illegal Activities</h2>
            <p>
              You may not use {app.name} to conduct or promote any illegal activities. This includes, but is not limited to, 
              the sale of illegal drugs, weapons, stolen goods, human trafficking, or child exploitation.
            </p>

            <h2 id="no-fraud">7. No Fraud</h2>
            <p>
              Do not engage in fraudulent behavior, scams, or deceptive practices. This includes impersonating others, 
              phishing attempts, creating fake accounts, or manipulating the platform for financial gain.
            </p>

            <h2 id="no-spam">8. No Spam</h2>
            <p>
              Keep our community clean. Do not post spam, repetitive content, unwanted commercial messages, or deceptive 
              links. Mass automated posting or artificially inflating engagement metrics is prohibited.
            </p>

            <h2 id="content-rules">9. Content Rules</h2>
            <p>
              When sharing content on {app.name}, ensure it aligns with our values:
            </p>
            <ul>
              <li><strong>NSFW Content:</strong> Sexually explicit content and extreme gore are not permitted.</li>
              <li><strong>Intellectual Property:</strong> Only share content you have the right to share. Do not infringe on copyrights or trademarks.</li>
              <li><strong>Misinformation:</strong> Do not maliciously share false information intended to mislead or cause harm.</li>
            </ul>

            <h2 id="reporting">10. Reporting Violations</h2>
            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl p-4 my-6 flex gap-4">
              <div className="mt-1 text-blue-600 dark:text-blue-400 shrink-0">
                <Info size={20} />
              </div>
              <p className="m-0 text-blue-800 dark:text-blue-200 text-sm">
                If you encounter content or behavior that violates these guidelines, please use the in-app reporting tools 
                or contact our support team immediately. We rely on our community to help keep the platform safe.
              </p>
            </div>

            <h2 id="enforcement">11. Enforcement Actions</h2>
            <p>
              We take these guidelines seriously. When a violation is confirmed, we may take various actions depending on 
              the severity and frequency of the offense. These actions may include:
            </p>
            <ul>
              <li>A warning and request to modify behavior.</li>
              <li>Removal of the offending content.</li>
              <li>Temporary suspension of the user's account.</li>
              <li>Permanent ban from {app.name} and all other Yebnas Studio services.</li>
            </ul>

            <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-4 my-6 flex gap-4">
              <div className="mt-1 text-amber-600 dark:text-amber-400 shrink-0">
                <AlertTriangle size={20} />
              </div>
              <p className="m-0 text-amber-800 dark:text-amber-200 text-sm">
                <strong>Zero Tolerance:</strong> For severe violations, such as child exploitation or credible threats of violence, 
                we will bypass warnings and immediately permanently ban the account.
              </p>
            </div>

            <h2 id="appeals">12. Appeals Process</h2>
            <p>
              If you believe an enforcement action was taken against your account in error, you have the right to appeal. 
              Please contact our support team with relevant details, and our moderation team will review the case.
            </p>

            <h2 id="updates">13. Updates to Guidelines</h2>
            <p>
              As our community grows and evolves, these guidelines may be updated. We will notify users of significant changes, 
              but it is your responsibility to periodically review this page to ensure you remain in compliance.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
