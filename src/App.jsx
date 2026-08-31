import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWidgets from './components/FloatingWidgets.jsx';
import DiscoveryCallModal from './components/DiscoveryCallModal.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TechnologyPage from './pages/TechnologyPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import { translations } from './translations/translations.js';


function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [lang, setLang] = useState('de');
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [inquiryData, setInquiryData] = useState(null);

  const t = translations[lang] || translations.de;

  // Handle inquiry trigger from other pages / calculators
  const handleOpenContactWithData = (data) => {
    setInquiryData(data);
    setCurrentRoute('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            lang={lang}
            t={t}
            setCurrentRoute={setCurrentRoute}
            onOpenDiscovery={() => setIsDiscoveryOpen(true)}
            onOpenCareers={() => {
              setCurrentRoute('careers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={handleOpenContactWithData}
          />
        );
      case 'services':
        return (
          <ServicesPage
            lang={lang}
            t={t}
            onOpenContact={handleOpenContactWithData}
            onOpenDiscovery={() => setIsDiscoveryOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            lang={lang}
            t={t}
            onOpenDiscovery={() => setIsDiscoveryOpen(true)}
          />
        );
      case 'technology':
        return (
          <TechnologyPage
            lang={lang}
            t={t}
            onOpenContact={handleOpenContactWithData}
          />
        );
      case 'careers':
        return (
          <CareersPage
            lang={lang}
            t={t}
          />
        );
      case 'contact':
        return (
          <ContactPage
            lang={lang}
            t={t}
            onOpenDiscovery={() => setIsDiscoveryOpen(true)}
            initialInquiry={inquiryData}
          />
        );
      default:
        return (
          <HomePage
            lang={lang}
            t={t}
            setCurrentRoute={setCurrentRoute}
            onOpenDiscovery={() => setIsDiscoveryOpen(true)}
            onOpenContact={handleOpenContactWithData}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080C] text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Dynamic Luxury Ambient Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
        onOpenCareers={() => {
          setCurrentRoute('careers');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Page Content (Elevated above background canvas) */}
      <main className="relative z-10 flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setCurrentRoute={setCurrentRoute}
        lang={lang}
        t={t}
        onOpenContact={handleOpenContactWithData}
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
      />

      {/* Quick Floating Communication Buttons */}
      <FloatingWidgets
        lang={lang}
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
      />

      {/* 15-Minute Discovery Call Modal */}
      <DiscoveryCallModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        lang={lang}
        t={t}
      />
    </div>
  );
}

export default App;

