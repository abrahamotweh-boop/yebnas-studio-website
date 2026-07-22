export const FAQ_CATEGORIES = [
  'General',
  'Applications',
  'Accounts',
  'Privacy',
  'Payments',
  'Subscriptions',
  'Downloads',
  'Web Apps',
  'Security',
  'Troubleshooting'
] as const;

export type FaqCategory = typeof FAQ_CATEGORIES[number];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
  isPopular?: boolean;
  isRecentlyUpdated?: boolean;
}

export const FAQS: FaqItem[] = [
  // General
  { id: 'g1', category: 'General', question: 'What is Yebnas Studio?', answer: 'Yebnas Studio is an international software company dedicated to building innovative mobile applications, web applications, games, and digital services.', isPopular: true },
  { id: 'g2', category: 'General', question: 'How can I contact Yebnas Studio support?', answer: 'You can reach our dedicated support team through the official support feature inside our applications.' },
  
  // Applications
  { id: 'a1', category: 'Applications', question: 'Where can I find your official apps?', answer: 'You can explore all our official applications by visiting the Apps section on this website, which provides direct links to verified downloads.', isPopular: true },
  { id: 'a2', category: 'Applications', question: 'How often do you update your applications?', answer: 'We strive to provide regular updates to improve performance, add new features, and ensure compatibility. Most apps receive updates on a monthly basis.' },

  // Accounts
  { id: 'ac1', category: 'Accounts', question: 'How do I create an account?', answer: 'You can create an account directly within any of our supported applications by selecting "Sign Up" and following the on-screen instructions.', isPopular: true },
  { id: 'ac2', category: 'Accounts', question: 'How can I delete my account?', answer: 'Account deletion can be requested directly through the settings menu of the respective application or via our Legal Center data deletion request form.', isRecentlyUpdated: true },

  // Privacy
  { id: 'p1', category: 'Privacy', question: 'How is my data protected?', answer: 'We implement industry-standard encryption and security protocols to protect your personal data. We do not sell your data to third parties.', isPopular: true },
  { id: 'p2', category: 'Privacy', question: 'How do I access my legal documentation?', answer: 'All official legal documents, including Privacy Policies and Terms & Conditions, are accessible through the Legal Center on this website.', isRecentlyUpdated: true },

  // Payments
  { id: 'pa1', category: 'Payments', question: 'What payment methods do you accept?', answer: 'We accept major credit cards, debit cards, and standard mobile payment methods through official app stores (Google Play, Apple App Store).' },
  { id: 'pa2', category: 'Payments', question: 'How do I request a refund?', answer: 'Refund requests must be processed through the platform where the purchase was made (e.g., Google Play or Apple App Store) according to their respective refund policies.' },

  // Subscriptions
  { id: 's1', category: 'Subscriptions', question: 'How do I cancel my subscription?', answer: 'You can manage and cancel your subscriptions through your device\'s app store settings (e.g., Google Play Subscriptions or Apple ID Subscriptions).' },
  
  // Downloads
  { id: 'd1', category: 'Downloads', question: 'Are your apps free to download?', answer: 'Many of our applications are free to download and use, with optional premium features available via in-app purchases or subscriptions.', isPopular: true },
  
  // Web Apps
  { id: 'w1', category: 'Web Apps', question: 'Do your web apps work on mobile browsers?', answer: 'Yes, all our web applications are fully responsive and optimized for a seamless experience on both mobile and desktop browsers.' },
  
  // Security
  { id: 'se1', category: 'Security', question: 'How do I report a security vulnerability?', answer: 'Please use the official support feature inside the app to report any security concerns directly to our engineering team.' },
  
  // Troubleshooting
  { id: 't1', category: 'Troubleshooting', question: 'The app keeps crashing, what should I do?', answer: 'Please ensure you are running the latest version of the app and your device\'s operating system. If the issue persists, clear the app cache or reinstall the application.' },
  { id: 't2', category: 'Troubleshooting', question: 'I forgot my password, how can I reset it?', answer: 'Use the "Forgot Password" link on the login screen of the application to receive a password reset link.' }
];

export const HELPFUL_ARTICLES = [
  { title: "Getting Started with Yebnas Studio", link: "/blog/1" },
  { title: "Understanding Your Privacy Settings", link: "/blog/2" },
  { title: "Managing Your Subscriptions", link: "/blog" }
];
