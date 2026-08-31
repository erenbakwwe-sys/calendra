import React from 'react';
import { Headphones, TrendingUp, MessageSquare, Bot, FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, PhoneCall, Sparkles } from 'lucide-react';

export default function ServicesPage({ lang = 'de', t, onOpenContact, onOpenDiscovery }) {
  const detailedServices = [
    {
      id: 'inbound',
      title: t.services.inbound.title,
      desc: t.services.inbound.desc,
      icon: Headphones,
      color: 'amber',
      sla: lang === 'de' ? '< 20 Sek. Annahmezeit | FCR > 90%' : '< 20 sn Yanıt | FCR > %90',
      points: t.services.inbound.points,
      benefits: lang === 'de' 
        ? ['24/7/365 Verfügbarkeit ohne Feiertagszuschläge', 'Nahtlose Eskalationspfade in Ihr 2nd-Level-Team', 'Echtzeit-Ticket-Sync in Zendesk, Salesforce & Jira']
        : ['7/24/365 kesintisiz destek ve nöbetçi ekipler', '2. seviye teknik ekiplerinize anında eskalasyon', 'Zendesk, Salesforce ve Jira ile anlık senkronizasyon']
    },
    {
      id: 'outbound',
      title: t.services.outbound.title,
      desc: t.services.outbound.desc,
      icon: TrendingUp,
      color: 'amber',
      sla: lang === 'de' ? 'Qualifizierte B2B-Termine mit Entscheidern' : 'Karar Vericilerle Nitelikli B2B Randevular',
      points: t.services.outbound.points,
      benefits: lang === 'de'
        ? ['Präzise Zielgruppen-Recherche & DSGVO-konforme Ansprache', 'Hohe Conversion-Raten durch muttersprachliche Vertriebsprofis', 'Transparente Lead-Übergabe direkt in Ihren Kalender']
        : ['Hedef kitle araştırması ve GDPR uyumlu arama stratejisi', 'Ana dili Almanca olan satış profesyonelleri ile yüksek dönüşüm', 'Doğrudan satış ekibinizin takvimine onaylı randevu girişi']
    },
    {
      id: 'omnichannel',
      title: t.services.omnichannel.title,
      desc: t.services.omnichannel.desc,
      icon: MessageSquare,
      color: 'amber',
      sla: lang === 'de' ? 'Chat-Antwortzeit < 45 Sek. | E-Mail < 2 Std.' : 'Canlı Sohbet < 45 sn | E-Posta < 2 saat',
      points: t.services.omnichannel.points,
      benefits: lang === 'de'
        ? ['Zentrales Dashboard für WhatsApp, Web-Chat & Instagram DMs', 'Gleichzeitige Bearbeitung mehrerer Chats pro Agent', 'Automatisierte Texterkennung & Makro-Vorlagen für schnelle Antworten']
        : ['WhatsApp, Web Chat ve Sosyal Medya için tek merkezden yönetim', 'Temsilci başına aynı anda çoklu sohbet yönetimi', 'Hızlı ve hatasız yazışma için akıllı şablon kütüphanesi']
    },
    {
      id: 'aiTech',
      title: t.services.aiTech.title,
      desc: t.services.aiTech.desc,
      icon: Bot,
      color: 'cyan',
      sla: lang === 'de' ? 'Echtzeit-Sentiment & 100% Transkription' : 'Anlık Duygu Analizi & %100 Transkript',
      points: t.services.aiTech.points,
      benefits: lang === 'de'
        ? ['KI schlägt dem Agenten während des Calls die beste Lösung vor', 'Automatische Erstellung strukturierter Zusammenfassungen im CRM', 'Erkennung von Abwanderungsrisiken noch während des Gesprächs']
        : ['Çağrı sırasında temsilciye anlık en doğru çözüm önerileri', 'Konuşma biter bitmez CRM\'e otomatik yapılandırılmış özet', 'Müşteri memnuniyetsizliği ve risklerin anında tespiti']
    },
    {
      id: 'backoffice',
      title: t.services.backoffice.title,
      desc: t.services.backoffice.desc,
      icon: FileText,
      color: 'amber',
      sla: lang === 'de' ? '99.8% Datengenauigkeit | 24h Bearbeitungszeit' : '%99.8 Veri Doğruluğu | 24 Saat Teslim',
      points: t.services.backoffice.points,
      benefits: lang === 'de'
        ? ['Vier-Augen-Prinzip bei sensiblen Datenerfassungen', 'Sichere Dokumentenprüfung (KYC) nach Banken-Standards', 'Entlastung Ihrer Kernmitarbeiter von zeitraubender Routine']
        : ['Hassas veri girişlerinde çift kontrol (Dört Göz) prensibi', 'Bankacılık standartlarında güvenli kimlik/evrak doğrulama', 'Şirket içi ekibinizin rutin iş yükünden tamamen kurtulması']
    },
    {
      id: 'quality',
      title: t.services.quality.title,
      desc: t.services.quality.desc,
      icon: Award,
      color: 'amber',
      sla: lang === 'de' ? '100% Mystery Calls & Wöchentliche Dashboards' : '%100 Kalite Denetimi & Haftalık Raporlar',
      points: t.services.quality.points,
      benefits: lang === 'de'
        ? ['Hauseigene Calendra Akademie mit Phonetik-Trainern', 'Live-Coaching & Screen-Monitoring nach ISO 18295-1', 'Monatliche gemeinsame Strategie- & Optimierungs-Reviews']
        : ['Kendi bünyemizde fonetik ve aksan eğitmenleri', 'ISO 18295-1 standartlarında canlı dinleme ve koçluk', 'Aylık düzenli strateji ve süreç iyileştirme toplantıları']
    }
  ];

  const slaMetrics = [
    { kpi: 'Average Speed of Answer (ASA)', target: '< 20 Sekunden', actual: '14.2 Sek.' },
    { kpi: 'First Contact Resolution (FCR)', target: '> 85%', actual: '91.4%' },
    { kpi: 'Customer Satisfaction (CSAT)', target: '> 95%', actual: '99.4%' },
    { kpi: 'Call Abandonment Rate', target: '< 3%', actual: '1.2%' },
    { kpi: 'DSGVO Data Privacy Audit', target: '100% Konform', actual: '100% Bestanden' }
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08090f]/85 border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.tag}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white text-contrast-shadow">
            {t.services.title}
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-contrast-shadow">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailedServices.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between border-amber-500/25 space-y-6"
            >
              <div className="space-y-6">
                {/* Top Title & SLA Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                      <srv.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {srv.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 self-start sm:self-auto">
                    {srv.sla}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {srv.desc}
                </p>

                {/* Scope Points */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/80 font-mono mb-3">
                    {lang === 'de' ? 'Leistungsumfang:' : 'Hizmet Kapsamı:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.points.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendra Advantage / Benefits */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {lang === 'de' ? 'Ihr Calendra Mehrwert:' : 'Calendra Avantajları:'}
                  </h4>
                  <ul className="space-y-1.5">
                    {srv.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenContact && onOpenContact({ service: srv.id, message: `Anfrage zu ${srv.title}` })}
                  className="py-3 px-5 rounded-xl gold-button text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'de' ? 'Projekt für diese Leistung anfragen' : 'Bu Hizmet İçin Teklif Al'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SLA & Quality Guarantee Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border-amber-500/30 gold-glow space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === 'de' ? 'Garantierte Service-Level' : 'Garantili Hizmet Seviyesi'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {lang === 'de' ? 'Unsere SLA- & Qualitätsgarantien' : 'SLA & Kalite Taahhütlerimiz'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              {lang === 'de'
                ? 'Wir messen alle Kennzahlen transparent in Echtzeit. Alle SLAs werden vertraglich garantiert.'
                : 'Tüm metrikleri gerçek zamanlı ve şeffaf olarak izliyor, sözleşmeyle garanti altına alıyoruz.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono">
                  <th className="py-3 px-4">{lang === 'de' ? 'Leistungskennzahl (KPI)' : 'Performans Göstergesi (KPI)'}</th>
                  <th className="py-3 px-4">{lang === 'de' ? 'Vertragliches SLA-Ziel' : 'Sözleşme Hedefi'}</th>
                  <th className="py-3 px-4">{lang === 'de' ? 'CALENDRA Ø Ist-Wert' : 'CALENDRA Fiili Başarı'}</th>
                  <th className="py-3 px-4 text-right">{lang === 'de' ? 'Status' : 'Durum'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200 font-medium">
                {slaMetrics.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">{row.kpi}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-400">{row.target}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-amber-300">{row.actual}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{lang === 'de' ? 'Übertroffen' : 'Hedef Üstü'}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Discovery Trigger CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#171510] via-[#1b1710] to-[#12141c] border border-amber-500/30 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            {lang === 'de' ? 'Individuelles Projekt unverbindlich besprechen?' : 'Size Özel Çağrı Merkezi Çözümünü Konuşalım'}
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            {lang === 'de' 
              ? 'Wählen Sie Ihren Wunschtermin für eine 15-minütige Beratung mit unserem Management.' 
              : 'Yönetim ekibimizle 15 dakikalık tanışma toplantısı için dilediğiniz saati seçin.'}
          </p>
          <button
            onClick={onOpenDiscovery}
            className="py-4 px-8 rounded-xl gold-button text-slate-950 font-bold text-sm sm:text-base inline-flex items-center gap-2 cursor-pointer shadow-xl"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.nav.bookCall}</span>
          </button>
        </div>
      </section>
    </div>
  );
}

