import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const ContentPage = React.lazy(() => import('./pages/ContentPage'));
const LegalCenter = React.lazy(() => import('./pages/LegalCenter'));
const AppsPage = React.lazy(() => import('./pages/AppsPage'));
const AppDetailsPage = React.lazy(() => import('./pages/AppDetailsPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsAndConditionsPage = React.lazy(() => import('./pages/TermsAndConditionsPage'));
const CommunityGuidelinesPage = React.lazy(() => import('./pages/CommunityGuidelinesPage'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'));
const FaqCenterPage = React.lazy(() => import('./pages/FaqCenterPage'));
const ReleaseNotes = React.lazy(() => import('./pages/ReleaseNotes'));
const LegalAdminPage = React.lazy(() => import('./pages/LegalAdminPage'));

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="apps" element={<AppsPage />} />
            <Route path="apps/:appId" element={<AppDetailsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogPostPage />} />
            <Route path="legal-center" element={<LegalCenter />} />
            <Route path="legal" element={<Navigate to="/legal-center" replace />} />
            <Route path="legal/:appId" element={<Navigate to="/legal-center" replace />} />
            <Route path="contact-us" element={<ContactUsPage />} />
            <Route path="faq" element={<FaqCenterPage />} />
            <Route path="help-center" element={<FaqCenterPage />} />
            <Route path="release-notes" element={<ReleaseNotes />} />
            <Route path="admin/legal" element={<LegalAdminPage />} />
            <Route path="legal/:appId/:docId" element={<ContentPage />} />
            <Route path=":slug" element={<ContentPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

