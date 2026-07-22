import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Mail, 
  HelpCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { updateSEO } from '../utils';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    updateSEO("Contact Us", "Get in touch with Yebnas Studio for support, inquiries, or feedback.");
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) newErrors.subject = 'Please select a subject';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen pb-24 bg-white dark:bg-slate-950">
      
      {/* Header Section */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6 shadow-sm">
            <MessageSquare size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, feedback, or need support? We're here to help. Reach out to our team below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Contact Info - Left Side */}
            <div className="lg:w-1/3 space-y-8">
              <div className="prose prose-slate dark:prose-invert">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  We strive to respond to all inquiries within 24-48 hours. For app-specific issues, please use the in-app support feature for faster resolution.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Help Center</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Browse our extensive knowledge base for immediate answers.</p>
                    <a href="/help-center" className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline">Visit Help Center &rarr;</a>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">General Inquiries</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Fill out the form to send us a message directly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Right Side */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-900/80 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h3>
                
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center py-16"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h4>
                      <p className="text-slate-600 dark:text-slate-400 max-w-md">
                        Thank you for reaching out. We have received your message and our support team will get back to you shortly.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 px-6 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-slate-50 dark:bg-slate-800 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-purple-500'} rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow placeholder:text-slate-400`}
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-slate-50 dark:bg-slate-800 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-purple-500'} rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow placeholder:text-slate-400`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                        <div className="relative">
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full appearance-none bg-slate-50 dark:bg-slate-800 border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-purple-500'} rounded-xl pl-4 pr-10 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow ${!formData.subject ? 'text-slate-400' : ''}`}
                          >
                            <option value="" disabled>Select a topic</option>
                            <option value="app-support">App Support & Troubleshooting</option>
                            <option value="billing">Billing & Subscriptions</option>
                            <option value="feedback">Feedback & Suggestions</option>
                            <option value="business">Business & Partnerships</option>
                            <option value="other">Other Inquiry</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                            <ChevronDown size={16} />
                          </div>
                        </div>
                        {errors.subject && (
                          <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={`w-full bg-slate-50 dark:bg-slate-800 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-white/10 focus:ring-purple-500'} rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-shadow placeholder:text-slate-400 resize-none`}
                          placeholder="How can we help you today?"
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
