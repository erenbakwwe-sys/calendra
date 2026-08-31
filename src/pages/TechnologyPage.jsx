import React from 'react';
import { Shield, Lock, Server, Cpu, Database, Network, CheckCircle2, Sparkles, Terminal, FileCode, ArrowRight, ShieldAlert } from 'lucide-react';

export default function TechnologyPage({ lang = 'de', t, onOpenContact }) {
  const crmIntegrations = [
    { name: 'Salesforce', category: 'Enterprise CRM', status: 'Native API & CTI' },
    { name: 'Zendesk', category: 'Helpdesk & Omnichannel', status: 'Two-Way Sync' },
    { name: 'HubSpot', category: 'Inbound & Sales Hub', status: 'Full Telephony CTI' },
    { name: 'Freshdesk', category: 'Customer Support', status: 'Instant Integration' },
    { name: 'SAP Service Cloud', category: 'ERP & Customer Care', status: 'Enterprise Connector' },
    { name: 'Aircall / Twilio / Genesys', category: 'Cloud Telephony', status: 'WebRTC SIP Trunk' },
    { name: 'Jira Service Management', category: 'Ticket Tracking', status: 'Automated Ticket Flow' },
    { name: 'Custom REST API / Webhooks', category: 'In-House Solutions', status: 'Custom Endpoints' }
  ];

  const securityMeasures = [
    {
      title: lang === 'de' ? 'Verschlüsselte Sprachübertragung' : 'Şifrelenmiş Ses İletimi',
      desc: lang === 'de' ? 'Alle VoIP-Gespräche sind per TLS 1.3 und SRTP gegen Abhören und Manipulation geschützt.' : 'Tüm VoIP görüşmeleri TLS 1.3 ve SRTP ile uçtan uca dinlemeye karşı tam korumalıdır.',
      badge: 'SRTP / TLS 1.3'
    },
    {
      title: lang === 'de' ? 'Georedundante Server in Deutschland' : 'Almanya Lokasyonlu Yedekli Sunucular',
      desc: lang === 'de' ? 'Verarbeitung und Speicherung ausschließlich in nach ISO 27001 zertifizierten Rechenzentren in Frankfurt am Main.' : 'Tüm veriler sadece Frankfurt lokasyonlu ISO 27001 sertifikalı veri merkezlerinde tutulur.',
      badge: 'ISO 27001 Frankfurt'
    },
    {
      title: lang === 'de' ? 'Art. 28 DSGVO Auftragsverarbeitung' : 'AB GDPR Madde 28 Veri Sözleşmesi',
      desc: lang === 'de' ? 'Rechtssichere AV-Verträge (AVV) inklusive technischer und organisatorischer Maßnahmen (TOMs).' : 'Teknik ve organizasyonel güvenlik önlemlerini (TOM) içeren yasal güvenceli DPA sözleşmeleri.',
      badge: 'EU-DSGVO Art. 28'
    },
    {
      title: lang === 'de' ? 'Clean-Desk & Zero-Local-Data Policy' : 'Temiz Masa & Sıfır Yerel Veri İlkesi',
      desc: lang === 'de' ? 'Agenten-PCs besitzen keine lokalen Speichermöglichkeiten. Strikte rollenbasierte Zugriffsrechte (RBAC).' : 'Temsilci bilgisayarlarında yerel depolama kapalıdır. Rol tabanlı erişim kontrolü uygulanır.',
      badge: 'RBAC Access'
    }
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08090f]/85 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.tech.tag}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white text-contrast-shadow">
            {t.tech.title}
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-contrast-shadow">
            {t.tech.subtitle}
          </p>
        </div>
      </section>

      {/* Cloud Telephony Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border-amber-500/30 gold-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold font-mono">
                <Network className="w-3.5 h-3.5" />
                <span>ENTERPRISE CLOUD PBX</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {t.tech.telephonyTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.tech.telephonyDesc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-lg font-mono font-bold text-amber-300 block">99.98%</span>
                  <span className="text-xs text-slate-400">{lang === 'de' ? 'Uptime SLA' : 'Kesintisizlik Oranı'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-lg font-mono font-bold text-emerald-400 block">&lt; 18 ms</span>
                  <span className="text-xs text-slate-400">{lang === 'de' ? 'Latenz nach DACH' : 'DACH Gecikme Süresi'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-black/70 border border-cyan-500/30 font-mono text-xs text-cyan-300 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
                <span>calendra-telecom-cluster: active</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Sync
                </span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p className="text-amber-300 font-semibold">[SIP-GATEWAY-DE01] Primary: Frankfurt AMX-1 (Up)</p>
                <p className="text-amber-300 font-semibold">[SIP-GATEWAY-DE02] Secondary: Munich MUC-2 (Standby)</p>
                <p className="text-slate-400">Codec: Opus HD Voice (48kHz) • SRTP TLSv1.3</p>
                <p className="text-slate-400">WebRTC Agent Endpoint: Encrypted Browser Softphone</p>
                <p className="text-emerald-400">Packet Loss: 0.00% • Jitter: 0.8ms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM & Tool Integrations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Database className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Kompatibilität' : 'Entegrasyonlar'}</span>
          </div>
          <h2 className="text-3xl font-black text-white">
            {t.tech.integrationsTitle}
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            {t.tech.integrationsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {crmIntegrations.map((tool, i) => (
            <div key={i} className="p-5 rounded-2xl glass-panel glass-panel-hover space-y-2 border-white/10">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">{tool.name}</h4>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-400">{tool.category}</p>
              <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {tool.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Data Protection & DSGVO / GDPR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101712] via-[#0d1217] to-[#14120a] border border-emerald-500/30 gold-glow space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase font-mono mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>DSGVO & ISO 27001 SICHERHEIT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {t.tech.securityTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              {lang === 'de'
                ? 'Europäische Datenschutzstandards sind für uns kein Marketing, sondern tägliche operative Verpflichtung.'
                : 'Avrupa veri koruma kanunlarına tam uyumluluk ve güvenli veri işleme süreçleri.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityMeasures.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

