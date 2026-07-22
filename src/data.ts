export const APP_NAME = "Yebnas Studio";
export const APP_DESC = "Yebnas Studio is the official home of our mobile applications, web applications, games, and digital services.";

export type PageCategory = 'Company' | 'Legal' | 'Guidelines' | 'Support' | 'Actions' | 'Product';

export interface PageMeta {
  title: string;
  slug: string;
  category: PageCategory;
  lastUpdated: string;
}

export const PAGES: PageMeta[] = [
  // Company
  { title: "About Us", slug: "about-us", category: "Company", lastUpdated: "July 2026" },
  { title: "Our Mission", slug: "our-mission", category: "Company", lastUpdated: "July 2026" },
  { title: "Our Vision", slug: "our-vision", category: "Company", lastUpdated: "July 2026" },
  { title: "Careers", slug: "careers", category: "Company", lastUpdated: "July 2026" },
  { title: "Partners", slug: "partners", category: "Company", lastUpdated: "July 2026" },
  { title: "Press & Media", slug: "press-and-media", category: "Company", lastUpdated: "July 2026" },
  { title: "Blog", slug: "blog", category: "Company", lastUpdated: "July 2026" },
  { title: "News & Updates", slug: "news-and-updates", category: "Company", lastUpdated: "July 2026" },

  // Legal
  { title: "Privacy Policy", slug: "privacy-policy", category: "Legal", lastUpdated: "July 2026" },
  { title: "Terms and Conditions", slug: "terms-and-conditions", category: "Legal", lastUpdated: "July 2026" },
  { title: "User Agreement", slug: "user-agreement", category: "Legal", lastUpdated: "July 2026" },
  { title: "Cookie Policy", slug: "cookie-policy", category: "Legal", lastUpdated: "July 2026" },
  { title: "Copyright Policy", slug: "copyright-policy", category: "Legal", lastUpdated: "July 2026" },
  { title: "DMCA Policy", slug: "dmca-policy", category: "Legal", lastUpdated: "July 2026" },

  // Guidelines
  { title: "Community Guidelines", slug: "community-guidelines", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Content Policy", slug: "content-policy", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Creator Guidelines", slug: "creator-guidelines", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Advertiser Policy", slug: "advertiser-policy", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Monetization Policy", slug: "monetization-policy", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Payment Policy", slug: "payment-policy", category: "Guidelines", lastUpdated: "July 2026" },
  { title: "Refund Policy", slug: "refund-policy", category: "Guidelines", lastUpdated: "July 2026" },

  // Support
  { title: "Help Center", slug: "help-center", category: "Support", lastUpdated: "July 2026" },
  { title: "Frequently Asked Questions", slug: "faq", category: "Support", lastUpdated: "July 2026" },
  { title: "Contact Us", slug: "contact-us", category: "Support", lastUpdated: "July 2026" },
  { title: "Support Center", slug: "support-center", category: "Support", lastUpdated: "July 2026" },
  { title: "Trust & Safety", slug: "trust-and-safety", category: "Support", lastUpdated: "July 2026" },
  { title: "Safety Center", slug: "safety-center", category: "Support", lastUpdated: "July 2026" },
  { title: "Security Policy", slug: "security-policy", category: "Support", lastUpdated: "July 2026" },
  { title: "Accessibility", slug: "accessibility", category: "Support", lastUpdated: "July 2026" },

  // Actions
  { title: "Report Abuse", slug: "report-abuse", category: "Actions", lastUpdated: "July 2026" },
  { title: "Report Copyright Violation", slug: "report-copyright-violation", category: "Actions", lastUpdated: "July 2026" },
  { title: "Account Deletion", slug: "account-deletion", category: "Actions", lastUpdated: "July 2026" },
  { title: "Data Deletion Request", slug: "data-deletion-request", category: "Actions", lastUpdated: "July 2026" },

  // Product
  { title: "Downloads", slug: "downloads", category: "Product", lastUpdated: "July 2026" },
  { title: "App Updates", slug: "app-updates", category: "Product", lastUpdated: "July 2026" },
  { title: "Release Notes", slug: "release-notes", category: "Product", lastUpdated: "July 2026" },
  { title: "System Status", slug: "system-status", category: "Product", lastUpdated: "July 2026" },
  { title: "Sitemap", slug: "sitemap", category: "Product", lastUpdated: "July 2026" },
];

export const getPagesByCategory = () => {
  const grouped: Record<string, PageMeta[]> = {};
  PAGES.forEach((page) => {
    if (!grouped[page.category]) grouped[page.category] = [];
    grouped[page.category].push(page);
  });
  return grouped;
};

export const MAIN_FEATURES = [
  {
    title: "Official Apps",
    description: "Browse all Android apps and web applications developed by Yebnas Studio.",
    icon: "LayoutGrid",
    link: "/apps"
  },
  {
    title: "Legal Documentation",
    description: "Access Privacy Policies, Terms & Conditions, Community Guidelines, and other official legal documents.",
    icon: "FileText",
    link: "/legal-center"
  },
  {
    title: "Developer Updates",
    description: "Stay informed about new releases, improvements, and future updates.",
    icon: "Code",
    link: "/release-notes"
  },
  {
    title: "Trusted Platform",
    description: "Every document and product listed here is officially published and maintained by Yebnas Studio.",
    icon: "ShieldCheck",
    link: "/about-us"
  }
];

export const HOME_FAQS = [
  {
    question: "What is Yebnas Studio?",
    answer: "Yebnas Studio is an international software company dedicated to building innovative mobile applications, web applications, games, and digital services."
  },
  {
    question: "Where can I find your official apps?",
    answer: "You can explore all our official applications by visiting the 'Our Apps' section on this website, which provides direct links to verified downloads."
  },
  {
    question: "How do I access your legal documentation?",
    answer: "All official legal documents, including Privacy Policies and Terms & Conditions, are accessible through the Legal Center on this website."
  },
  {
    question: "How can I contact Yebnas Studio support?",
    answer: "You can reach our dedicated support team through the Contact Us page or by visiting our Help Center for general inquiries and assistance."
  }
];

export const ANNOUNCEMENTS = [
  {
    date: "July 3, 2026",
    title: "Welcome to our New Portal",
    excerpt: "We have officially launched the new Yebnas Studio website to serve as the central hub for all our digital products and official documentation."
  },
  {
    date: "June 20, 2026",
    title: "Updated Privacy Guidelines",
    excerpt: "Our Privacy Policy has been updated to provide greater transparency on how we manage user data across all our applications."
  }
];
