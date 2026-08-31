import React from 'react';
import { ShieldCheck, Lock, MapPin, Mail, Phone, ArrowUpRight, Headphones, Sparkles, Heart } from 'lucide-react';

export default function Footer({ setCurrentRoute, lang = 'de', t, onOpenContact, onOpenDiscovery }) {
  const handleNav = (id) => {
    setCurrentRoute(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060609] border-t border-amber-500/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <div className="absolute -inset-1 bg-amber-500/30 rounded-2xl blur-sm" />
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden p-1 bg-black/80 border-2 border-amber-400/50 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                  <img
                    src="/logo.png"
                    alt="CALENDRA"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-2xl font-black tracking-widest gold-gradient-text">
                  CALENDRA
                </span>
                <span className="text-[10px] tracking-[0.2em] text-amber-300/80 font-mono block -mt-1">
                  {t.footer.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            {/* Trust Certifications */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-amber-500/30 text-xs text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO 27001</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-emerald-500/30 text-xs text-emerald-300">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% DSGVO / GDPR</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-amber-500/30 text-xs text-amber-200">
                <Headphones className="w-3.5 h-3.5 text-amber-400" />
                <span>Nearshore Hubs</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300/90 font-mono">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.nav.technology}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-amber-300 transition-colors cursor-pointer text-amber-300 font-semibold flex items-center gap-1">
                  <span>{t.nav.careers}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300/90 font-mono">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Inbound Kundenservice
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Outbound B2B Sales
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Omnichannel & WhatsApp
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  KI-Speech Analytics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Backoffice & KYC
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dual Hub Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300/90 font-mono">
              {lang === 'de' ? 'Standorte' : 'Ofislerimiz'}
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              {/* Turkey Operations Hub */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white flex items-center gap-1 text-xs">
                  🇹🇷 {lang === 'de' ? 'Operations & Service Hub (Türkei)' : 'Türkiye Operasyon Merkezi'}
                </span>
                <p className="text-slate-300 text-[11px] font-medium">
                  İstiklal Mah. No: 6, Atakum / Samsun
                </p>
                <div className="pt-1 flex flex-col gap-0.5 font-mono text-[11px]">
                  <a href="tel:+905448662909" className="text-amber-400 font-medium hover:underline">
                    +90 (544) 866 29 09
                  </a>
                  <a href="mailto:calendra-group@outlook.com" className="text-amber-300/80 hover:underline">
                    calendra-group@outlook.com
                  </a>
                </div>
              </div>

              {/* Germany */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-white flex items-center gap-1 text-xs">
                  🇩🇪 Frankfurt am Main
                </span>
                <p className="text-slate-400 text-[11px]">
                  Mainzer Landstraße 180, 60327 Frankfurt am Main
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CALENDRA Group. {t.footer.rights}</p>

          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">
              {t.footer.imprint}
            </button>
            <span>•</span>
            <button onClick={() => handleNav('technology')} className="hover:text-amber-300 transition-colors">
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

