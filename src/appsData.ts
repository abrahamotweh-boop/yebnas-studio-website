import { Smartphone, Globe, Gamepad2, Wrench } from 'lucide-react';

export type AppCategory = 'Android App' | 'Web App' | 'Game' | 'Tool';
export type AppStatus = 'Available' | 'Coming Soon' | 'Beta' | 'Maintenance';

export interface AppFeature {
  title: string;
  description: string;
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: AppCategory;
  version: string;
  releaseDate: string;
  lastUpdated: string;
  status: AppStatus;
  platforms: string[];
  playStoreLink?: string;
  webAppLink?: string;
  icon: typeof Smartphone;
  colorFrom: string;
  colorTo: string;
  screenshots: string[];
  features: AppFeature[];
  faqs: AppFaq[];
}

export const APPS: AppItem[] = [
  {
    id: 'yebnas-fitness',
    name: 'Yebnas Fitness',
    description: 'Track your daily workouts, nutrition, and personal fitness goals with our comprehensive mobile companion.',
    longDescription: 'Yebnas Fitness is your ultimate companion for achieving your health goals. Whether you are aiming to build muscle, lose weight, or just stay active, our mobile app provides you with personalized workout plans, nutrition tracking, and detailed progress analytics. Designed with an intuitive interface, it makes staying healthy easier than ever.',
    category: 'Android App',
    version: 'v2.1.0',
    releaseDate: 'January 15, 2025',
    lastUpdated: 'July 1, 2026',
    status: 'Available',
    platforms: ['Android 8.0+'],
    playStoreLink: 'https://play.google.com/store',
    icon: Smartphone,
    colorFrom: 'from-orange-500',
    colorTo: 'to-rose-500',
    screenshots: [
      'https://images.unsplash.com/photo-1676302482354-9c0269fbbbc1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1676302482186-b485501ba160?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1676302482619-35a0d33e597c?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      { title: 'Personalized Plans', description: 'Get workout routines tailored to your specific goals and fitness level.' },
      { title: 'Nutrition Tracker', description: 'Log your meals and monitor your daily calorie and macronutrient intake.' },
      { title: 'Progress Analytics', description: 'Visualize your journey with detailed charts and achievement milestones.' }
    ],
    faqs: [
      { question: 'Is Yebnas Fitness free to use?', answer: 'Yes, the core features are completely free. We also offer a premium subscription for advanced analytics and personalized coaching.' },
      { question: 'Can I sync my wearable device?', answer: 'Currently, we support syncing with Google Fit and leading smartwatch brands.' }
    ]
  },
  {
    id: 'studio-dashboard',
    name: 'Studio Dashboard',
    description: 'A powerful web application for managing your account, subscriptions, and digital assets across all our products.',
    longDescription: 'The Studio Dashboard is the central hub for all Yebnas Studio users. It provides a seamless, unified experience for managing your profile, active subscriptions, and security settings across our entire ecosystem of apps and games. Built with modern web technologies, it ensures lightning-fast performance and robust data security.',
    category: 'Web App',
    version: 'v1.0.5',
    releaseDate: 'November 10, 2025',
    lastUpdated: 'June 28, 2026',
    status: 'Available',
    platforms: ['Web Browser'],
    webAppLink: 'https://dashboard.yebnas.com',
    icon: Globe,
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-500',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      { title: 'Unified Account', description: 'Manage your credentials and settings for all Yebnas Studio apps in one place.' },
      { title: 'Subscription Management', description: 'Easily view, upgrade, or cancel your active subscriptions.' },
      { title: 'Security Controls', description: 'Enable two-factor authentication and review your account activity logs.' }
    ],
    faqs: [
      { question: 'How do I access the dashboard?', answer: 'You can access the Studio Dashboard from any modern web browser using your standard Yebnas Studio credentials.' },
      { question: 'Is my data secure?', answer: 'Yes, we use industry-standard encryption and strict security protocols to protect all your personal information.' }
    ]
  },
  {
    id: 'cosmic-run',
    name: 'Cosmic Run',
    description: 'An endless runner set in a vibrant neon galaxy. Test your reflexes and compete on global leaderboards.',
    longDescription: 'Prepare for an interstellar adventure with Cosmic Run. Dodge asteroids, collect energy orbs, and navigate through stunning neon-lit galaxies in this fast-paced endless runner. With responsive controls, an electrifying synth-wave soundtrack, and competitive global leaderboards, Cosmic Run offers endless replayability.',
    category: 'Game',
    version: 'v1.0.0',
    releaseDate: 'TBA',
    lastUpdated: 'July 2, 2026',
    status: 'Coming Soon',
    platforms: ['Android', 'iOS'],
    icon: Gamepad2,
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-500',
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      { title: 'Endless Gameplay', description: 'Procedurally generated galaxies ensure no two runs are ever the same.' },
      { title: 'Synth-Wave Soundtrack', description: 'Immerse yourself with an exclusive, high-energy retro-futuristic soundtrack.' },
      { title: 'Global Leaderboards', description: 'Compete against players worldwide and climb the daily and weekly ranks.' }
    ],
    faqs: [
      { question: 'When will Cosmic Run be released?', answer: 'We are currently polishing the game for a release later this year. Stay tuned for announcements!' },
      { question: 'Will it support controllers?', answer: 'Yes, Cosmic Run will feature full support for popular Bluetooth game controllers.' }
    ]
  },
  {
    id: 'dev-toolkit',
    name: 'Dev Toolkit',
    description: 'A suite of essential utilities for developers, including JSON formatters, regex testers, and hashing tools.',
    longDescription: 'Dev Toolkit is a comprehensive suite of utilities designed by developers, for developers. It combines all the essential tools you need into a single, clean, and fast web application. Whether you need to format JSON, test regular expressions, generate secure hashes, or encode/decode data, Dev Toolkit handles it all locally in your browser for maximum privacy.',
    category: 'Tool',
    version: 'v0.9.0',
    releaseDate: 'March 5, 2026',
    lastUpdated: 'June 15, 2026',
    status: 'Beta',
    platforms: ['Web Browser'],
    webAppLink: 'https://tools.yebnas.com',
    icon: Wrench,
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-500',
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
    ],
    features: [
      { title: 'Local Processing', description: 'All tools run entirely in your browser; your data never leaves your device.' },
      { title: 'Instant Formatting', description: 'Instantly format, minify, and validate JSON, XML, and HTML.' },
      { title: 'RegEx Tester', description: 'Build and test regular expressions in real-time with syntax highlighting.' }
    ],
    faqs: [
      { question: 'Is Dev Toolkit free for commercial use?', answer: 'Yes, Dev Toolkit is completely free for both personal and commercial use.' },
      { question: 'Do you store any of the data I process?', answer: 'No. The tools operate entirely client-side, meaning your data is processed locally and never sent to our servers.' }
    ]
  }
];
