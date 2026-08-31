import React, { useState } from 'react';
import { Building2, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, BarChart3, Users, Zap, Clock, Award, Sparkles } from 'lucide-react';

export default function CaseStudySimulator({ lang = 'de', t, onOpenDiscovery }) {
  const [activeTab, setActiveTab] = useState(1);

  const cases = [
    {
      id: 1,
      tabTitle: t.caseStudies.tab1,
      tag: 'E-Commerce & Retail',
      ...t.caseStudies.case1
    },
    {
      id: 2,
      tabTitle: t.caseStudies.tab2,
      tag: 'FinTech & Banking',
      ...t.caseStudies.case2
    },
    {
      id: 3,
      tabTitle: t.caseStudies.tab3,
      tag: 'B2B Enterprise SaaS',
      ...t.caseStudies.case3
    }
  ];

  const currentCase = cases.find(c => c.id === activeTab) || cases[0];

  const dialectMatrix = [
    { region: lang === 'de' ? 'Deutschland (Bundesweit / Hochdeutsch)' : 'Almanya (Genel / Standart Yüksek Almanca)', level: 'C2 Muttersprachlich', desc: lang === 'de' ? 'Akzentfreies Standard-Deutsch für Kundenservice & anspruchsvollen B2B-Dialog.' : 'Tüm Almanya genelinde müşteri hizmetleri ve B2B satış için standart kusursuz diksiyon.' },
    { region: lang === 'de' ? 'Österreich (Wien, Graz, Linz)' : 'Avusturya (Viyana, Graz, Linz)', level: 'C1/C2 Vertrautheit', desc: lang === 'de' ? 'Spezifisches Vokabular und regionale Höflichkeitsformen für den österreichischen Markt.' : 'Avusturya iş kültürüne uygun yerel terminoloji ve hitap kurallarına tam hakimiyet.' },
    { region: lang === 'de' ? 'Schweiz (Deutschschweiz / Zürich, Basel)' : 'İsviçre (Zürih, Basel, Bern)', level: 'C1 Hörverständnis', desc: lang === 'de' ? 'Perfektes passives Verständnis für Schweizerdeutsch, professionelle Antwort auf Hochdeutsch.' : 'İsviçre Almancasını anlama ve kurumsal Hochdeutsch ile profesyonel yanıtlama yetkinliği.' }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-amber-500/20 my-8">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            {t.caseStudies.tag}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.caseStudies.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.caseStudies.desc}
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 p-1.5 rounded-2xl bg-black/50 border border-white/10">
        {cases.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveTab(c.id)}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === c.id
                ? 'gold-gradient-bg text-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {c.tabTitle}
          </button>
        ))}
      </div>

      {/* Active Case Study Content Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 space-y-6">
        {/* Top Header of Case */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs text-amber-400 font-mono font-bold block mb-1">
              {currentCase.industry} • {currentCase.client}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {currentCase.headline}
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold self-start sm:self-auto border border-amber-500/20">
            {currentCase.tag}
          </span>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-[#0e1017] border border-white/5 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              {currentCase.challengeTitle}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentCase.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121620] to-[#16130d] border border-amber-500/30 space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {currentCase.solutionTitle}
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentCase.solution}
            </p>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
            {currentCase.resultsTitle}
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {currentCase.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/60 border border-amber-500/20 text-center space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold gold-gradient-text font-mono block">
                  {m.value}
                </span>
                <span className="text-xs text-white font-medium block">
                  {m.label}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language Competence Matrix */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/90 font-mono mb-4">
          {lang === 'de' ? 'Linguistische Standards & DACH-Sprachkompetenz:' : 'Dil ve Bölgesel Aksan Standartlarımız (DACH):'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dialectMatrix.map((d, i) => (
            <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{d.region}</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                  {d.level}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

