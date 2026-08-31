import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Headphones, Zap, TrendingUp, Users, CheckCircle2, Star, Sparkles, Phone, MessageSquare, Award, Lock, BarChart3, Flame, Clock, HeartHandshake, Laptop, DollarSign } from 'lucide-react';
import AudioWaveVisualizer from '../components/AudioWaveVisualizer.jsx';
import JobSurveyWizard from '../components/JobSurveyWizard.jsx';
import JobApplicationModal from '../components/JobApplicationModal.jsx';
import CaseStudySimulator from '../components/CaseStudySimulator.jsx';


export default function HomePage({ lang = 'de', t, setCurrentRoute, onOpenDiscovery, onOpenCareers, onOpenContact }) {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [surveyResults, setSurveyResults] = useState(null);

  const handleSurveyComplete = (data) => {
    setSurveyResults(data);
    setIsAppModalOpen(true);
  };

  const agentPerks = [
    {
      title: lang === 'de' ? '100% Home-Office Option' : '%100 Home-Office Özgürlüğü',
      desc: lang === 'de' ? 'Arbeite flexibel von zu Hause aus der gesamten Türkei oder vor Ort in unseren Büros in Istanbul & Izmir.' : 'Türkiye’nin her yerinden evinizden çalışın veya İstanbul/İzmir modern ofislerimizi tercih edin.',
      icon: Laptop
    },
    {
      title: lang === 'de' ? 'Pünktliches Euro/TL Gehalt' : 'Zamanında Net Maaş + Limitsiz Prim',
      desc: lang === 'de' ? 'Sichere, überdurchschnittliche Vergütung ohne Verzögerungen, plus ungedeckte monatliche Leistungsboni.' : 'Gecikmesiz düzenli net maaş, limitsiz satış/performans primleri ve motivasyon ödülleri.',
      icon: DollarSign
    },
    {
      title: lang === 'de' ? 'Deutsches Qualitätsmanagement' : 'Alman Kurumsal Yönetim Kültürü',
      desc: lang === 'de' ? 'Flache Hierarchien, professionelle Teamleiter auf Augenhöhe und wertschätzender Umgang.' : 'Mobbingden uzak, saygılı, adil ve profesyonel Alman çalışma standartları.',
      icon: HeartHandshake
    },
    {
      title: lang === 'de' ? 'Calendra Karriere-Akademie' : '3 Haftalık Ücretli Dil & Fonetik Eğitimi',
      desc: lang === 'de' ? 'Kontinuierliche Weiterbildung, professionelles Phonetik-Coaching und Aufstiegschancen zum Team Lead.' : 'İşe başlarken ve sonrasında kariyer gelişimi, takım liderliği fırsatları ve eğitim desteği.',
      icon: Award
    }
  ];

  const agentReviews = [
    {
      name: 'Emre K.',
      role: lang === 'de' ? 'Inbound Customer Care (Home-Office, Izmir)' : 'Inbound Müşteri Temsilcisi (Home-Office, İzmir)',
      quote: lang === 'de'
        ? 'Ich bin in Stuttgart aufgewachsen und lebe jetzt in Izmir. CALENDRA bietet mir deutsche Arbeitskultur mit pünktlicher Bezahlung und super netten Kollegen. Die Home-Office Ausstattung war top!'
        : 'Stuttgart doğumluyum ve şu an İzmir’deyim. CALENDRA tam aradığım Alman çalışma disiplinini ve yüksek kazanç imkanını sağladı. Maaşlar bir gün bile aksamadan yatıyor.',
      rating: 5,
      badge: 'C2 Muttersprachler'
    },
    {
      name: 'Melis T.',
      role: lang === 'de' ? 'B2B Sales Pro (Home-Office, Istanbul)' : 'B2B Satış Temsilcisi (Home-Office, İstanbul)',
      quote: lang === 'de'
        ? 'Die ungedeckten Boni im B2B-Bereich sind unschlagbar. Wenn man motiviert ist und fließend Deutsch spricht, kann man hier außergewöhnlich gut verdienen.'
        : 'Limitsiz prim sistemi gerçekten harika. Almancanıza güveniyorsanız ve satış motivasyonunuz varsa Türkiye şartlarının çok üzerinde kazanabiliyorsunuz.',
      rating: 5,
      badge: 'Top Performer 2026'
    },
    {
      name: 'Canan A.',
      role: lang === 'de' ? 'Team Lead / Coach (Office Maslak)' : 'Takım Lideri & Kalite Koçu (Maslak Ofis)',
      quote: lang === 'de'
        ? 'Bei uns steht der Mensch im Mittelpunkt. Wir unterstützen jeden Agenten durch individuelles Sprachtraining und klare Aufstiegschancen.'
        : 'Burada her çalışan değerli bir ekip üyesidir. Yeni başlayan arkadaşlarımızı yoğun bir oryantasyonla hazırlayıp kısa sürede takım liderliğine taşıyoruz.',
      rating: 5,
      badge: 'Calendra Academy Coach'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section - Tailored for Candidates & Worker Recruitment */}
      <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fadeIn">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Grand Luxury Logo Spotlight */}
            <div className="relative my-4 group">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/40 via-yellow-400/30 to-amber-600/40 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 rounded-3xl blur-md opacity-70" />
              
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-3xl p-3 bg-gradient-to-b from-[#181a24] via-[#0d0e14] to-[#08080c] border-2 border-amber-400/70 shadow-[0_0_50px_rgba(212,175,55,0.45)] group-hover:scale-105 group-hover:shadow-[0_0_70px_rgba(212,175,55,0.7)] group-hover:border-amber-300 transition-all duration-500 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="CALENDRA Luxury Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.7)]"
                />
              </div>
            </div>

            {/* Big Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
              <span className="block text-slate-100">{t.hero.title1}</span>
              <span className="block gold-gradient-text">{t.hero.title2}</span>
              <span className="block text-slate-200 text-3xl sm:text-5xl lg:text-6xl font-serif mt-1">
                {t.hero.title3}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Candidate Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => setIsAppModalOpen(true)}
                className="w-full sm:w-auto py-4 px-8 rounded-2xl gold-button text-slate-950 font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-2xl hover:scale-105 transition-transform"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.ctaApply}</span>
              </button>

              <a
                href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20iş%20başvurusu%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'de' ? 'WhatsApp Bewerbung (+90 544 866 29 09)' : 'WhatsApp Başvuru (+90 544 866 29 09)'}</span>
              </a>
            </div>

            {/* Live Real-Time Canvas Audio Wave Visualizer */}
            <div className="w-full pt-8">
              <AudioWaveVisualizer height={160} />
            </div>
          </div>

          {/* Candidate Value Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
            <div className="p-6 rounded-2xl glass-panel text-center border-amber-500/20 hover:border-amber-500/40 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold gold-gradient-text font-mono">
                {t.hero.stat1Val}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block font-medium">
                {t.hero.stat1Label}
              </span>
            </div>

            <div className="p-6 rounded-2xl glass-panel text-center border-amber-500/20 hover:border-amber-500/40 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-white font-mono">
                {t.hero.stat2Val}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block font-medium">
                {t.hero.stat2Label}
              </span>
            </div>

            <div className="p-6 rounded-2xl glass-panel text-center border-amber-500/20 hover:border-amber-500/40 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                {t.hero.stat3Val}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block font-medium">
                {t.hero.stat3Label}
              </span>
            </div>

            <div className="p-6 rounded-2xl glass-panel text-center border-amber-500/20 hover:border-amber-500/40 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono">
                {t.hero.stat4Val}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1 block font-medium">
                {t.hero.stat4Label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Pre-Screening Survey Wizard (Centerpiece of the Homepage) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? '60-SEKUNDEN EIGNUNGSTEST' : '60 SANİYELİK ÖN DEĞERLENDİRME'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {lang === 'de' ? 'Finde dein passendes Call Center Projekt' : 'Almanca Seviyenize ve Tercihinize Uygun Pozisyonu Bulun'}
          </h2>
        </div>

        <JobSurveyWizard
          lang={lang}
          t={t}
          onCompleteSurvey={handleSurveyComplete}
        />
      </section>

      {/* 3. Candidate Perks & Why Work at CALENDRA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'DEINE VORTEILE BEI CALENDRA' : 'NEDEN CALENDRA?'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {lang === 'de' ? 'Mehr als nur ein Call Center Job' : 'Sıradan Bir Çağrı Merkezinden Çok Daha Fazlası'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {lang === 'de'
              ? 'Wir bieten dir erstklassige Rahmenbedingungen, faire Behandlung und herausragende Verdienstmöglichkeiten.'
              : 'Emeğinizin tam karşılığını aldığınız, güvenli, huzurlu ve yüksek kazançlı bir kariyer ortamı.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agentPerks.map((perk, i) => (
            <div key={i} className="p-7 rounded-3xl glass-panel glass-panel-hover space-y-4 border-amber-500/20">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <perk.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{perk.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Real Case Studies & Operational Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudySimulator
          lang={lang}
          t={t}
          onOpenDiscovery={() => setIsAppModalOpen(true)}
        />
      </section>

      {/* 5. Team Testimonials / Agent Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'STIMMEN AUS DEM TEAM' : 'EKİBİMİZ NELER SÖYLÜYOR?'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {lang === 'de' ? 'Erfahrungen unserer Mitarbeiter' : 'Temsilcilerimizin Deneyimleri'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agentReviews.map((testi, i) => (
            <div key={i} className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 border-white/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {testi.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  „{testi.quote}“
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                <p className="text-xs text-amber-400/80 mt-0.5">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. High-Converting Recruitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#171510] via-[#1f1a10] to-[#12141c] border border-amber-500/40 p-8 sm:p-14 text-center space-y-6 gold-glow">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-200 text-xs font-bold tracking-wider uppercase">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>CALENDRA RECRUITING 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            {lang === 'de' 
              ? 'Bereit für deine Karriere bei CALENDRA?' 
              : 'Almancanızı Yüksek Kazanca Dönüştürün!'}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'de'
              ? 'Fülle jetzt das 60-Sekunden-Formular aus oder schreib uns direkt per WhatsApp. Unser Recruiting-Team meldet sich innerhalb von 24 Stunden bei dir!'
              : 'Hemen 60 saniyede ön başvurunuzu gönderin veya WhatsApp üzerinden bizimle iletişime geçin. İşe alım uzmanlarımız 24 saat içinde sizinle görüşsün!'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => setIsAppModalOpen(true)}
              className="py-4 px-8 rounded-xl gold-button text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'de' ? 'Jetzt in 60 Sek. bewerben' : '60 Saniyede Hemen Başvur'}</span>
            </button>

            <a
              href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20iş%20başvurusu%20için%20yazıyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Başvuru (+90 544 866 29 09)</span>
            </a>

            <a
              href="tel:+905448662909"
              className="py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Ara</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Application Modal */}
      <JobApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        lang={lang}
        t={t}
        initialData={surveyResults}
      />
    </div>
  );
}



