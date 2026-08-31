import React, { useState } from 'react';
import { Calculator, TrendingDown, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SavingsCalculator({ lang = 'de', t, onOpenContact }) {
  const [agents, setAgents] = useState(5);
  const [dachCost, setDachCost] = useState(3800); // Average DACH cost per FTE
  const calendraCost = 1650; // Calendra all-inclusive nearshore rate per FTE

  const monthlyDach = agents * dachCost;
  const monthlyCalendra = agents * calendraCost;
  const monthlySavings = monthlyDach - monthlyCalendra;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / monthlyDach) * 100);

  const formatEUR = (num) => {
    return new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'tr-TR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-amber-500/25 gold-glow my-8">
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            {t.calculator.tag}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {t.calculator.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {t.calculator.desc}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/40 text-amber-200 font-bold text-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{t.calculator.roiBadge}</span>
        </div>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Agent Count */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-slate-300">
                {t.calculator.agentsCount}
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-lg">
                {agents} {lang === 'de' ? 'Agenten' : 'Temsilci'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={agents}
              onChange={(e) => setAgents(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>1</span>
              <span>10</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          {/* Slider 2: DACH In-House Cost Benchmark */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-slate-300">
                {t.calculator.avgGermanySalary}
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold text-base">
                {formatEUR(dachCost)} / {lang === 'de' ? 'Monat' : 'Ay'}
              </span>
            </div>
            <input
              type="range"
              min="2800"
              max="5000"
              step="100"
              value={dachCost}
              onChange={(e) => setDachCost(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>€2.800</span>
              <span>€3.800 (Ø DACH)</span>
              <span>€5.000</span>
            </div>
          </div>

          {/* Key Trust Perks */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'de' ? 'Inklusive Hardware & Software' : 'Donanım & Yazılım Dahil'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'de' ? 'Inklusive Teamleitung & QA' : 'Takım Liderliği & QA Dahil'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{lang === 'de' ? 'Keine versteckten Nebenkosten' : 'Gizli Ek Maliyet Yok'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{lang === 'de' ? '100% DSGVO & ISO 27001' : '%100 GDPR & ISO 27001'}</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#12141d] to-[#1c1a14] border border-amber-500/40 shadow-2xl relative">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {lang === 'de' ? 'Kostenvergleich' : 'Maliyet Kıyaslaması'}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                -{savingsPercent}% {lang === 'de' ? 'Günstiger' : 'Avantaj'}
              </span>
            </div>

            {/* Cost Comparison Bars */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>{lang === 'de' ? 'In-House DACH Kosten:' : 'Almanya İçi Maliyet:'}</span>
                  <span className="font-mono text-slate-200 line-through">{formatEUR(monthlyDach)} / {lang === 'de' ? 'M.' : 'Ay'}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600 rounded-full w-full opacity-60" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-amber-300 mb-1">
                  <span className="font-bold">CALENDRA Nearshore:</span>
                  <span className="font-mono font-bold text-amber-300">{formatEUR(monthlyCalendra)} / {lang === 'de' ? 'M.' : 'Ay'}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full gold-gradient-bg rounded-full transition-all duration-300"
                    style={{ width: `${(monthlyCalendra / monthlyDach) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Big Savings Numbers */}
            <div className="pt-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                <span className="text-xs text-amber-200/80 block uppercase tracking-wider font-semibold">
                  {t.calculator.monthlySavings}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold gold-gradient-text font-mono">
                  {formatEUR(monthlySavings)}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                <span className="text-xs text-emerald-200/80 block uppercase tracking-wider font-semibold">
                  {t.calculator.annualSavings}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {formatEUR(annualSavings)}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenContact && onOpenContact({ service: 'custom', message: `Interesse an ${agents} Agenten via Kostenrechner (${formatEUR(annualSavings)} Ersparnis/Jahr)` })}
            className="mt-6 w-full py-3.5 px-6 rounded-xl gold-button text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.calculator.requestQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

