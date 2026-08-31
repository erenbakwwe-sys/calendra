import React, { useState } from 'react';
import { Briefcase, DollarSign, Home, HeartHandshake, Laptop, Sparkles, ArrowRight, CheckCircle2, Star, Flame, Trophy, MessageCircle, Phone, Clock, Zap } from 'lucide-react';
import JobSurveyWizard from '../components/JobSurveyWizard.jsx';
import JobApplicationModal from '../components/JobApplicationModal.jsx';

export default function CareersPage({ lang = 'de', t }) {
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [surveyResults, setSurveyResults] = useState(null);

  const perks = [
    { text: t.careers.b1, icon: DollarSign },
    { text: t.careers.b2, icon: Home },
    { text: t.careers.b3, icon: HeartHandshake },
    { text: t.careers.b4, icon: Laptop },
    { text: t.careers.b5, icon: Trophy }
  ];

  const jobs = [
    {
      id: 'inbound_spec',
      title: t.careers.job1Title,
      type: t.careers.job1Type,
      desc: t.careers.job1Desc,
      badge: lang === 'de' ? '🔥 Sofortiger Start (5 Plätze frei)' : '🔥 Hemen Başlama (5 Açık Kontenjan)',
      actionHighlight: lang === 'de' ? '24h Express-Rückmeldung • C1/C2 Deutsch' : '24 Saatte Hızlı Dönüş • C1/C2 Almanca',
      tags: ['C1/C2 Deutsch', 'Inbound Care', '100% Home-Office / Office']
    },
    {
      id: 'outbound_pro',
      title: t.careers.job2Title,
      type: t.careers.job2Type,
      desc: t.careers.job2Desc,
      badge: lang === 'de' ? '🚀 Top-Verdienst & Limitsiz Prim' : '🚀 Yüksek Gelir & Limitsiz Prim',
      actionHighlight: lang === 'de' ? 'Uncapped Boni • B2B Sales Profis' : 'Limitsiz Performans Primi • B2B Satış',
      tags: ['B2B Sales', 'Kaltakquise', 'Verhandlungssicher']
    },
    {
      id: 'team_lead',
      title: t.careers.job3Title,
      type: t.careers.job3Type,
      desc: t.careers.job3Desc,
      badge: lang === 'de' ? '⭐ Führungsposition' : '⭐ Yönetici Pozisyonu',
      actionHighlight: lang === 'de' ? 'Direkte Festanstellung • Teamführung' : 'Doğrudan Sözleşme • Ekip Yönetimi',
      tags: ['Teamführung', 'Call Coaching', 'KPI-Steuerung']
    }
  ];

  const handleSurveyComplete = (data) => {
    setSurveyResults(data);
    setIsAppModalOpen(true);
  };

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20">
      {/* Header with high-energy recruitment headline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08090f]/85 border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider animate-fadeIn">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{lang === 'de' ? 'WIR STELLEN EIN • DEUTSCHSPRACHIGE AGENTS GESUCHT' : 'İŞE ALIM BAŞLADI • ALMANCA BİLEN TEMSİLCİLER ARANIYOR'}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white text-contrast-shadow tracking-tight">
            {lang === 'de' ? (
              <>
                Werde Teil des <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">CALENDRA</span> Teams
              </>
            ) : (
              <>
                <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">CALENDRA</span> Ekibine Katılın
              </>
            )}
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-contrast-shadow">
            {lang === 'de'
              ? 'Arbeite im Home-Office oder vor Ort in Istanbul/Izmir mit überdurchschnittlichem Gehalt, ungedeckten Boni und echtem deutschem Teamgeist. Bewirb dich jetzt in unter 60 Sekunden!'
              : 'Home-Office veya İstanbul/İzmir ofislerimizde yüksek Euro/TL maaş, limitsiz primler ve güvenli kurumsal standartlarla çalışın. 60 saniyede hemen başvurun!'}
          </p>

          {/* Quick Hotline Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+905448662909"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-mono font-bold hover:bg-amber-500/20 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{lang === 'de' ? 'Bewerber-Hotline:' : 'Aday Başvuru Hattı:'} +90 (544) 866 29 09</span>
            </a>

            <a
              href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20iş%20başvurusu%20için%20yazıyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs sm:text-sm font-bold hover:bg-[#25D366]/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'de' ? 'Direkt per WhatsApp bewerben' : 'WhatsApp ile Hızlı Başvuru'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Pre-Screening Survey Wizard (Centerpiece) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobSurveyWizard
          lang={lang}
          t={t}
          onCompleteSurvey={handleSurveyComplete}
        />
      </section>

      {/* Open Positions List with Action-Driven CTAs (NO "Vergütung" label!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Aktuelle Vakanzen' : 'Açık Kontenjanlar'}</span>
          </div>
          <h2 className="text-3xl font-black text-white">
            {t.careers.jobsTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-amber-500/25"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {job.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action Actions Area (NO "Vergütung" text!) */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-between gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 min-w-[240px]">
                <div className="text-left lg:text-right pb-1">
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {job.actionHighlight}
                  </span>
                </div>

                {/* Primary CTA: Apply Now (opens modal) */}
                <button
                  onClick={() => setIsAppModalOpen(true)}
                  className="w-full py-3.5 px-6 rounded-xl gold-button text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'de' ? 'Jetzt in 60 Sek. bewerben' : '60 Saniyede Hemen Başvur'}</span>
                </button>

                {/* Secondary CTA: WhatsApp Quick Apply */}
                <a
                  href={`https://wa.me/905448662909?text=Merhaba,%20${encodeURIComponent(job.title)}%20pozisyonu%20için%20başvurmak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'de' ? 'WhatsApp Schnellbewerbung' : 'WhatsApp ile Hızlı Başvur'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks & Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border-amber-500/25 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.careers.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/5 flex items-start gap-4 hover:border-amber-500/30 transition-all">
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 shrink-0">
                  <p.icon className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
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


