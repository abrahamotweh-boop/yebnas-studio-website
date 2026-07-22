import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText } from 'lucide-react';
import { APPS } from '../appsData';
import { updateSEO } from '../utils';

const GENERAL_APP = { id: 'general', name: 'Yebnas Studio', version: 'Current', lastUpdated: 'July 1, 2026' };

export default function TermsAndConditionsPage() {
  const { appId } = useParams();
  
  const app = APPS.find(a => a.id === appId) || GENERAL_APP;
  const isGeneral = app.id === 'general';

  useEffect(() => {
    updateSEO(`Terms & Conditions - ${app.name}`, `Terms & Conditions for ${app.name} by Yebnas Studio.`);
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
            <span className="text-slate-900 dark:text-slate-200">Terms & Conditions</span>
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
              <li><a href="#user-responsibilities" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">2. User Responsibilities</a></li>
              <li><a href="#acceptable-use" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">3. Acceptable Use</a></li>
              <li><a href="#user-accounts" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">4. User Accounts</a></li>
              {!isGeneral && <li><a href="#purchases" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">5. Purchases & Subscriptions</a></li>}
              <li><a href="#intellectual-property" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '6.' : '5.'} Intellectual Property</a></li>
              <li><a href="#prohibited-activities" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '7.' : '6.'} Prohibited Activities</a></li>
              <li><a href="#user-generated-content" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '8.' : '7.'} User Generated Content</a></li>
              <li><a href="#service-availability" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '9.' : '8.'} Service Availability</a></li>
              <li><a href="#limitation-of-liability" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '10.' : '9.'} Limitation of Liability</a></li>
              <li><a href="#account-termination" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '11.' : '10.'} Account Termination</a></li>
              <li><a href="#updates-to-terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '12.' : '11.'} Updates to Terms</a></li>
              <li><a href="#governing-law" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '13.' : '12.'} Governing Law</a></li>
              <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">{!isGeneral ? '14.' : '13.'} Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Main Document Content */}
        <div className="flex-1 bg-white dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/5 shadow-sm">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 flex items-center justify-center shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Terms & Conditions
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
              These Terms & Conditions ("Terms") govern your use of <strong>{app.name}</strong> (the "Service"), 
              operated by Yebnas Studio ("us", "we", or "our"). By accessing or using the Service, you agree 
              to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 id="user-responsibilities">2. User Responsibilities</h2>
            <p>
              As a user of {app.name}, you are responsible for your own communications and for any consequences thereof. 
              Your use of the Service is subject to all applicable local, state, national and international laws and regulations.
            </p>

            <h2 id="acceptable-use">3. Acceptable Use</h2>
            <p>
              You agree to use {app.name} only for lawful purposes and in a way that does not infringe the rights of, 
              restrict or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing 
              or causing distress or inconvenience to any other user, transmitting obscene or offensive content or 
              disrupting the normal flow of dialogue within {app.name}.
            </p>

            <h2 id="user-accounts">4. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current 
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination 
              of your account on our Service. You are responsible for safeguarding the password that you use to access 
              the Service and for any activities or actions under your password.
            </p>

            {!isGeneral && (
              <>
                <h2 id="purchases">5. Purchases & Subscriptions</h2>
                <p>
                  If you wish to purchase any product or service made available through {app.name} ("Purchase"), 
                  you may be asked to supply certain information relevant to your Purchase including, without limitation, 
                  your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                </p>
                <p>
                  Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in 
                  advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the 
                  type of subscription plan you select when purchasing the Subscription.
                </p>
              </>
            )}

            <h2 id="intellectual-property">{!isGeneral ? '6.' : '5.'} Intellectual Property</h2>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of 
              Yebnas Studio and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
              country and foreign countries. Our trademarks and trade dress may not be used in connection with any product 
              or service without the prior written consent of Yebnas Studio.
            </p>

            <h2 id="prohibited-activities">{!isGeneral ? '7.' : '6.'} Prohibited Activities</h2>
            <p>
              You may not access or use the Service for any purpose other than that for which we make the Service available. 
              The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <ul>
              <li>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Service.</li>
            </ul>

            <h2 id="user-generated-content">{!isGeneral ? '8.' : '7.'} User Generated Content</h2>
            <p>
              We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, 
              or broadcast content and materials to us or on the Service, including but not limited to text, writings, video, 
              audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
            </p>

            <h2 id="service-availability">{!isGeneral ? '9.' : '8.'} Service Availability</h2>
            <p>
              We reserve the right to modify, suspend or discontinue, temporarily or permanently, the Service or any service 
              to which it connects, with or without notice and without liability to you. We may experience hardware, software, 
              or other problems or need to perform maintenance related to the Service, resulting in interruptions, delays, or errors.
            </p>

            <h2 id="limitation-of-liability">{!isGeneral ? '10.' : '9.'} Limitation of Liability</h2>
            <p>
              In no event shall Yebnas Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or 
              inability to access or use the Service; (ii) any conduct or content of any third party on the Service; 
              (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>

            <h2 id="account-termination">{!isGeneral ? '11.' : '10.'} Account Suspension or Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>

            <h2 id="updates-to-terms">{!isGeneral ? '12.' : '11.'} Updates to the Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
              we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change 
              will be determined at our sole discretion.
            </p>

            <h2 id="governing-law">{!isGeneral ? '13.' : '12.'} Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions. 
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 id="contact">{!isGeneral ? '14.' : '13.'} Contact Through Official In-App Support</h2>
            <p>
              If you have any questions about these Terms, please contact us using the official support feature inside {app.name} 
              or by visiting the Yebnas Studio Help Center.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
