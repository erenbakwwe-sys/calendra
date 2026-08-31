import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, ArrowRight, ShieldCheck, Headphones, MessageCircle } from 'lucide-react';

export default function Navbar({ currentRoute, setCurrentRoute, lang, setLang, t, onOpenDiscovery, onOpenCareers }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'technology', label: t.nav.technology },
    { id: 'careers', label: t.nav.careers, badge: lang === 'de' ? 'Jobs' : 'Kariyer' },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id) => {
    setCurrentRoute(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#08080c]/95 backdrop-blur-xl border-b border-amber-500/25 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
        : 'bg-gradient-to-b from-[#08080c]/95 via-[#08080c]/85 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Enhanced Brand / Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            {/* Prominent Gold Halo Logo Container */}
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-yellow-400/30 to-amber-600/40 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden p-1 bg-black/80 border-2 border-amber-400/60 shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-105 group-hover:border-amber-300 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="CALENDRA Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest gold-gradient-text drop-shadow-sm">
                CALENDRA
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-amber-300/80 font-mono -mt-1 font-semibold hidden sm:block">
                CONNECTING • AUTOMATING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/50 px-3.5 py-1.5 rounded-full border border-amber-500/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-slate-950 font-bold gold-gradient-bg shadow-md'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && !isActive && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Direct Call CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Call Link */}
            <a
              href="tel:+905448662909"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold transition-colors"
              title="Direkt anrufen"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>+90 (544) 866 29 09</span>
            </a>

            {/* Language Switcher Toggle */}
            <div className="flex items-center p-1 rounded-full bg-black/60 border border-amber-500/25">
              <button
                onClick={() => setLang('de')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'de'
                    ? 'gold-gradient-bg text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'tr'
                    ? 'gold-gradient-bg text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                🇹🇷 TR
              </button>
            </div>

            {/* Quick Action: Call to Action to +905448662909 / Apply */}
            <a
              href="tel:+905448662909"
              className="py-2 px-4 rounded-xl gold-button text-slate-950 font-bold text-xs tracking-wide flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 transition-transform"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'de' ? 'Jetzt Anrufen' : 'Hemen Ara'}</span>
            </a>
          </div>

          {/* Mobile Menu & Lang Switch */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              onClick={() => setLang(lang === 'de' ? 'tr' : 'de')}
              className="px-2.5 py-1 rounded-lg bg-black/60 border border-amber-500/30 text-amber-300 text-xs font-bold"
            >
              {lang === 'de' ? '🇩🇪 DE' : '🇹🇷 TR'}
            </button>

            {/* Direct Mobile Call Icon */}
            <a
              href="tel:+905448662909"
              className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300"
              title="Ara"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-amber-300 hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#08080c]/98 border-b border-amber-500/30 px-6 py-6 space-y-4 backdrop-blur-2xl animate-fadeIn">
          {/* Mobile Logo Spotlight */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <img src="/logo.png" alt="CALENDRA" className="w-10 h-10 object-contain rounded-xl border border-amber-500/40" />
            <div>
              <span className="font-cinzel text-lg font-black gold-gradient-text block">CALENDRA</span>
              <a href="tel:+905448662909" className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1">
                <Phone className="w-3 h-3" /> +90 (544) 866 29 09
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'gold-gradient-bg text-black font-bold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-amber-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+905448662909"
              className="w-full py-3.5 rounded-xl gold-button text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'de' ? 'Direkt anrufen: +90 544 866 29 09' : 'Hemen Ara: +90 544 866 29 09'}</span>
            </a>

            <a
              href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Destek</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


