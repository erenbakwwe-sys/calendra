import React from 'react';
import { Award, GraduationCap, MapPin, Target, ShieldCheck, Users, CheckCircle, Sparkles, Building2, Globe } from 'lucide-react';

export default function AboutPage({ lang = 'de', t, onOpenDiscovery }) {
  const values = [
    {
      title: t.about.v1,
      desc: t.about.v1Desc,
      icon: Target
    },
    {
      title: t.about.v2,
      desc: t.about.v2Desc,
      icon: Award
    },
    {
      title: t.about.v3,
      desc: t.about.v3Desc,
      icon: ShieldCheck
    }
  ];

  const milestones = [
    { year: '2021', title: lang === 'de' ? 'Gründung in Frankfurt' : "Frankfurt'ta Kuruluş", desc: lang === 'de' ? 'Start mit Fokus auf hochqualitative B2B-Telefonie für Technologieunternehmen in DACH.' : 'DACH bölgesindeki teknoloji şirketleri için yüksek kaliteli B2B telefon çözümleriyle başlangıç.' },
    { year: '2023', title: lang === 'de' ? 'Nearshore Hub Istanbul & Izmir' : 'Nearshore Hub İstanbul & İzmir', desc: lang === 'de' ? 'Eröffnung moderner Operationszentren mit über 120 muttersprachlichen Agenten.' : '120+ ana dili Almanca temsilciyle modern operasyon merkezlerinin açılışı.' },
    { year: '2025', title: lang === 'de' ? 'KI-Suite & ISO 27001' : 'Yapay Zeka & ISO 27001', desc: lang === 'de' ? 'Einführung von Speech Analytics und automatisierten Gesprächszusammenfassungen.' : 'Ses analitiği ve otomatik CRM özet yapay zeka modüllerinin entegrasyonu.' },
    { year: '2026', title: lang === 'de' ? '500k+ Monatsvolumen' : '500B+ Aylık Hacim', desc: lang === 'de' ? 'Führender Partner für DACH-Unternehmen mit garantierter Spitzenqualität.' : 'Garantili yüksek kalite ile DACH şirketlerinin lider çözüm ortağı.' }
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.about.tag}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white max-w-4xl mx-auto">
          {t.about.title}
        </h1>
      </section>

      {/* Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.about.storyTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.about.story1}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.about.story2}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20">
                <span className="block text-2xl sm:text-3xl font-bold gold-gradient-text font-mono">100%</span>
                <span className="text-xs text-slate-300">{lang === 'de' ? 'Deutsches Management' : 'Alman Yönetim Standardı'}</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20">
                <span className="block text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">-60%</span>
                <span className="text-xs text-slate-300">{lang === 'de' ? 'Kosteneffizienz' : 'Maliyet Tasarrufu'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel p-8 border-amber-500/30 gold-glow space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'de' ? 'Die deutsch-türkische Synergie' : 'Almanya-Türkiye Stratejik Köprüsü'}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono">Frankfurt ⇄ Istanbul / Izmir</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'de' ? 'Keine Zeitverschiebung zu Deutschland (nur 1–2 Std.)' : 'Sıfır saat farkı etkisi ve DACH çalışma saatlerine tam uyum'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'de' ? 'Über 5 Millionen zweisprachige Fachkräfte im Talentpool' : 'Geniş iki dilli nitelikli ve motivasyonu yüksek yetenek havuzu'}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{lang === 'de' ? 'Europäische Arbeitsethik und lückenlose DSGVO-Verträge' : 'Avrupa iş ahlakı ve AB GDPR standartlarında veri koruma sözleşmeleri'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendra Academy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#141620] via-[#101218] to-[#18150e] border border-amber-500/30 gold-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase font-mono">
                <GraduationCap className="w-4 h-4" />
                <span>CALENDRA ACADEMY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {t.about.academyTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.about.academyDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5 text-center">
                  <span className="text-lg font-bold text-amber-300 block">3 Wochen</span>
                  <span className="text-[11px] text-slate-400">{lang === 'de' ? 'Intensivtraining' : 'Yoğun Oryantasyon'}</span>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5 text-center">
                  <span className="text-lg font-bold text-amber-300 block">100%</span>
                  <span className="text-[11px] text-slate-400">{lang === 'de' ? 'Phonetik-Check' : 'Fonetik & Aksan Testi'}</span>
                </div>
                <div className="p-4 rounded-xl bg-black/50 border border-white/5 text-center">
                  <span className="text-lg font-bold text-amber-300 block">DSGVO</span>
                  <span className="text-[11px] text-slate-400">{lang === 'de' ? 'Datenschutzzertifikat' : 'Veri Güvenliği Sertifikası'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-amber-500/20 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-amber-300 font-mono">
                {lang === 'de' ? 'Ausbildungsschwerpunkte:' : 'Eğitim Modülleri:'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'de' ? 'Phonetik & regionale Sprachnuancen (DACH)' : 'Bölgesel Almanca aksan ve tonlama çalışmaları'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'de' ? 'Aktives Zuhören & Deeskalationstechniken' : 'Aktif dinleme ve itiraz karşılama teknikleri'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'de' ? 'CRM-Exzellenz: Salesforce, Zendesk & Hubspot' : 'Kurumsal CRM sistemlerinde hızlı ve hatasız kayıt'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'de' ? 'DSGVO-Verhaltensregeln & Clean Desk' : 'GDPR / KVKK veri gizliliği ve güvenlik protokolleri'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-white">
            {t.about.valuesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-3xl glass-panel glass-panel-hover space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{v.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border-amber-500/20 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            {lang === 'de' ? 'Unsere Meilensteine' : 'Gelişim Yolculuğumuz'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-xl font-mono font-extrabold gold-gradient-text block">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

