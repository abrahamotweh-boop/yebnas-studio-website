import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Rocket, 
  Target, 
  Smartphone, 
  Globe, 
  Gamepad2, 
  Layers, 
  Cpu, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  Users,
  CheckCircle2,
  Milestone
} from 'lucide-react';
import YebnasStudioLogo from '../components/YebnasStudioLogo';
import { updateSEO } from '../utils';

export default function AboutUsPage() {
  useEffect(() => {
    updateSEO("About Us", "Learn about Yebnas Studio, an international software company dedicated to building innovative digital solutions.");
  }, []);

  const products = [
    { name: "Android Applications", icon: Smartphone, color: "from-green-500 to-emerald-500" },
    { name: "Web Applications", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { name: "Games", icon: Gamepad2, color: "from-purple-500 to-pink-500" },
    { name: "Digital Platforms", icon: Layers, color: "from-indigo-500 to-blue-500" },
    { name: "Productivity Tools", icon: Zap, color: "from-amber-500 to-orange-500" },
    { name: "Educational Solutions", icon: BookOpen, color: "from-teal-500 to-emerald-500" },
    { name: "Future AI-powered technologies", icon: Cpu, color: "from-rose-500 to-red-500" }
  ];

  const reasons = [
    { title: "Innovation", description: "Constantly exploring new technologies and paradigms to build forward-thinking solutions.", icon: Sparkles },
    { title: "Security", description: "Implementing robust security measures to protect user data and ensure privacy at all times.", icon: ShieldCheck },
    { title: "User Experience", description: "Crafting intuitive, accessible, and beautiful interfaces that people love to use.", icon: Users },
    { title: "Continuous Improvement", description: "Iterating based on feedback and analytics to constantly refine and enhance our products.", icon: LineChart },
    { title: "Global Accessibility", description: "Designing software that breaks down barriers and serves a diverse international audience.", icon: Globe }
  ];

  const timeline = [
    { year: "Phase 1", title: "Foundation & Core Ecosystem", description: "Establishing our primary suite of applications and solidifying the Yebnas Studio brand." },
    { year: "Phase 2", title: "Platform Expansion", description: "Scaling our infrastructure and introducing interconnected digital platforms for seamless user experiences." },
    { year: "Phase 3", title: "Advanced Technologies", description: "Integrating cutting-edge AI and machine learning to deliver intelligent, predictive software solutions." },
    { year: "Phase 4", title: "Global Community Integration", description: "Fostering a worldwide community of users and developers around the Yebnas Studio ecosystem." }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pb-24 bg-white dark:bg-slate-950">
      
      {/* Hero / Overview Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-8"
            >
              <YebnasStudioLogo variant="mark" size="xl" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Yebnas Studio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              We are an international software company dedicated to engineering digital excellence. 
              Our focus is on building premium, robust, and innovative software solutions that empower 
              users and businesses around the globe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900/80 p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-black/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 relative z-10">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-lg">
                To develop high-quality, accessible software that solves real-world problems. We strive to bridge 
                the gap between complex technology and everyday usability, ensuring our products bring genuine 
                value to our users' lives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-900/80 p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-black/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 relative z-10">
                <Rocket size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 text-lg">
                To become a globally recognized leader in digital innovation. We envision a future where 
                Yebnas Studio products seamlessly integrate into daily routines, fostering productivity, 
                entertainment, and connection on an international scale.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              What We Build
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our expertise spans across multiple domains, allowing us to deliver comprehensive solutions tailored for modern digital ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:shadow-black/20 flex items-center gap-4 transition-all group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{product.name}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Why Choose Yebnas Studio
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We hold ourselves to the highest standards. Here are the core pillars that define our approach to software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl dark:shadow-xl dark:shadow-black/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center mb-6 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{reason.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Future Goals & Timeline */}
      <section className="py-24 bg-slate-900 text-white relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6 backdrop-blur-sm border border-white/10">
              <Milestone size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Future Goals
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We are constantly looking ahead. Our roadmap is defined by ambitious milestones designed to push the boundaries of what our software can achieve.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 md:top-6 w-14 h-14 bg-slate-900 border-4 border-purple-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 md:translate-y-0 z-10 shadow-xl shadow-purple-900/50 text-white">
                      <CheckCircle2 size={24} />
                    </div>

                    <div className="ml-16 md:ml-0 md:w-1/2 relative">
                      <div className={`md:px-12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-purple-300 mb-4 tracking-wide uppercase">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
