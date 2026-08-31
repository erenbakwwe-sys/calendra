import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, CheckCircle2, Clock, Calendar, Sparkles, Building, Search } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ lang = 'de', t, onOpenDiscovery, initialInquiry = null }) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: initialInquiry?.service || 'inbound',
    message: initialInquiry?.message || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5D77F', '#10B981']
        });
      } catch (err) {}
    }, 1000);
  };

  return (
    <div className="pt-32 sm:pt-40 pb-20 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.contact.tag}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white max-w-4xl mx-auto">
          {t.contact.title}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t.contact.subtitle}
        </p>
      </section>

      {/* Main Grid: Contact Form + Dual Hub Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border-amber-500/25 gold-glow">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.contact.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.serviceInterest}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#11131c] border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                  >
                    <option value="inbound">{t.contact.serviceOpts.inbound}</option>
                    <option value="outbound">{t.contact.serviceOpts.outbound}</option>
                    <option value="omnichannel">{t.contact.serviceOpts.omnichannel}</option>
                    <option value="ai">{t.contact.serviceOpts.ai}</option>
                    <option value="custom">{t.contact.serviceOpts.custom}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.contact.message}
                  </label>
                  <textarea
                    rows="4"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl gold-button text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? (
                    <span>{lang === 'de' ? 'Wird übermittelt...' : 'Gönderiliyor...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submit}</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {lang === 'de' ? 'Anfrage erfolgreich versendet!' : 'Talebiniz Başarıyla Alındı!'}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {t.contact.success}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/10 cursor-pointer"
                >
                  {lang === 'de' ? 'Weitere Nachricht senden' : 'Yeni Mesaj Gönder'}
                </button>
              </div>
            )}
          </div>

          {/* Direct Contact & Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Discovery Call Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-amber-500/15 via-black/60 to-black/80 border border-amber-500/30 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase font-mono">
                <Phone className="w-3.5 h-3.5" />
                <span>DIREKTKONTAKT & HOTLINE</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {lang === 'de' ? 'Lieber direkt persönlich sprechen?' : 'Birebir Görüşmeyi mi Tercih Edersiniz?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'de'
                  ? 'Rufen Sie uns jetzt direkt an oder schreiben Sie uns per WhatsApp für eine sofortige Beratung:'
                  : 'Uzman proje direktörümüzle hemen görüşmek için bizi arayın veya WhatsApp ile yazın:'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+905448662909"
                  className="flex-1 py-3 px-5 rounded-xl gold-button text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  <Phone className="w-4 h-4" />
                  <span>+90 (544) 866 29 09</span>
                </a>

                <a
                  href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20ile%20projemiz%20hakkında%20görüşmek%20istiyoruz."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Germany HQ */}
            <div className="p-6 rounded-2xl glass-panel space-y-3 border-amber-500/20">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Building className="w-4 h-4 text-amber-400" />
                <span>{t.contact.hqGermany}</span>
              </div>
              <p className="text-xs text-slate-400">
                {t.contact.hqAddressDE}
              </p>
              <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                <p className="text-slate-300">
                  <span className="text-slate-500">{t.contact.phoneLabel}</span>{' '}
                  <a href="tel:+905448662909" className="text-amber-400 font-mono font-semibold hover:underline">
                    +90 (544) 866 29 09
                  </a>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-500">{t.contact.emailLabel}</span>{' '}
                  <a href="mailto:frankfurt@calendra-cc.com" className="text-amber-400 font-mono font-semibold hover:underline">
                    frankfurt@calendra-cc.com
                  </a>
                </p>
              </div>
            </div>

            {/* Turkey Hubs */}
            <div className="p-6 rounded-2xl glass-panel space-y-3 border-amber-500/20">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{t.contact.hubTurkey}</span>
              </div>
              <p className="text-xs text-slate-400">
                {t.contact.hubAddressTR}
              </p>
              <p className="text-xs text-slate-400">
                {t.contact.hubAddressIzmir}
              </p>
              <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                <p className="text-slate-300">
                  <span className="text-slate-500">{t.contact.phoneLabel}</span>{' '}
                  <a href="tel:+905448662909" className="text-amber-400 font-mono font-semibold hover:underline">
                    +90 (544) 866 29 09
                  </a>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-500">{t.contact.emailLabel}</span>{' '}
                  <a href="mailto:operations@calendra-cc.com" className="text-amber-400 font-mono font-semibold hover:underline">
                    operations@calendra-cc.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.faq.tag}</span>
          </div>
          <h2 className="text-3xl font-black text-white">
            {t.faq.title}
          </h2>
        </div>

        {/* FAQ Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={lang === 'de' ? 'Frage suchen (z.B. DSGVO, Sprachen, Vorlaufzeit)...' : 'Soru ara (Örn: Almanca, GDPR, Entegrasyon)...'}
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
          />
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel overflow-hidden border border-white/10 transition-all duration-200"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

