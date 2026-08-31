import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DiscoveryCallModal({ isOpen, onClose, lang = 'de', t }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-09-02');
  const [selectedTime, setSelectedTime] = useState('11:00');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const dates = [
    { date: '2026-09-02', label: lang === 'de' ? 'Mittwoch, 2. Sep' : 'Çarşamba, 2 Eyl' },
    { date: '2026-09-03', label: lang === 'de' ? 'Donnerstag, 3. Sep' : 'Perşembe, 3 Eyl' },
    { date: '2026-09-04', label: lang === 'de' ? 'Freitag, 4. Sep' : 'Cuma, 4 Eyl' },
    { date: '2026-09-07', label: lang === 'de' ? 'Montag, 7. Sep' : 'Pazartesi, 7 Eyl' }
  ];

  const times = ['09:30', '11:00', '14:00', '15:30', '17:00'];

  const handleBook = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#F5D77F', '#10B981']
        });
      } catch (err) {}
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0e1017] border border-amber-500/30 rounded-3xl p-6 sm:p-8 gold-glow">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Video className="w-3.5 h-3.5" />
                {lang === 'de' ? '15-Min. Video-Erstgespräch' : '15 Dk. Online Tanışma Toplantısı'}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {lang === 'de' ? 'Wunschtermin auswählen' : 'Uygun Tarih ve Saat Seçin'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {lang === 'de' 
                  ? 'Sprechen Sie direkt mit unserem Management über Einsparpotenziale & Projektstarts.' 
                  : 'Projenizi ve maliyet avantajlarını değerlendirmek için online toplantı planlayın veya bizi doğrudan arayın:'}
              </p>
              
              <div className="mt-3 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between gap-3">
                <span className="text-xs text-amber-200 font-medium">
                  {lang === 'de' ? 'Oder jetzt direkt anrufen:' : 'Veya hemen bizi arayın:'}
                </span>
                <a
                  href="tel:+905448662909"
                  className="px-3 py-1 rounded-xl gold-button text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+90 544 866 29 09</span>
                </a>
              </div>
            </div>

            {/* Date selection */}
            <div className="mb-5">
              <label className="block text-xs font-medium text-slate-300 mb-2">
                {lang === 'de' ? '1. Datum wählen:' : '1. Tarih Seçin:'}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {dates.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      selectedDate === d.date
                        ? 'bg-amber-500/20 text-amber-200 border-2 border-amber-400'
                        : 'bg-black/40 border border-white/10 text-slate-300 hover:border-amber-500/30'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{d.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time selection */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-slate-300 mb-2">
                {lang === 'de' ? '2. Uhrzeit (CET / Deutsche Zeit):' : '2. Saat (Almanya Saati / CET):'}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {times.map((tVal) => (
                  <button
                    key={tVal}
                    onClick={() => setSelectedTime(tVal)}
                    className={`py-2 px-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer text-center ${
                      selectedTime === tVal
                        ? 'gold-gradient-bg text-black shadow-md'
                        : 'bg-black/40 border border-white/10 text-slate-300 hover:border-amber-500/30'
                    }`}
                  >
                    {tVal} Uhr
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 px-6 rounded-xl gold-button text-slate-950 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === 'de' ? 'Kontaktdaten eingeben' : 'İletişim Bilgilerine Geç'}</span>
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleBook} className="space-y-4">
            <div className="mb-4">
              <span className="text-xs text-amber-400 font-mono font-bold block mb-1">
                📅 {selectedDate} @ {selectedTime} Uhr (CET)
              </span>
              <h3 className="text-2xl font-bold text-white">
                {lang === 'de' ? 'Ihre Kontaktdaten' : 'İletişim Bilgileriniz'}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'de' ? 'Ihr Name *' : 'Adınız Soyadınız *'}
              </label>
              <input
                type="text"
                required
                placeholder="Max Mustermann"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'de' ? 'Geschäftliche E-Mail *' : 'Kurumsal E-Posta *'}
              </label>
              <input
                type="email"
                required
                placeholder="name@unternehmen.de"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {lang === 'de' ? 'Unternehmen *' : 'Şirket Adı *'}
              </label>
              <input
                type="text"
                required
                placeholder="Firma GmbH"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/5 cursor-pointer"
              >
                {lang === 'de' ? 'Zurück' : 'Geri'}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-6 rounded-xl gold-button text-slate-950 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{lang === 'de' ? 'Wird gebucht...' : 'Kaydediliyor...'}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{lang === 'de' ? 'Termin jetzt bestätigen' : 'Toplantıyı Onayla'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'de' ? 'Termin erfolgreich gebucht!' : 'Görüşmeniz Başarıyla Oluşturuldu!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
              {lang === 'de'
                ? `Eine Kalendereinladung (Google Meet / MS Teams) für den ${selectedDate} um ${selectedTime} Uhr wurde an ${formData.email} gesendet.`
                : `${selectedDate} saat ${selectedTime} için toplantı bağlantısı ${formData.email} adresinize gönderildi.`}
            </p>
            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="mt-4 py-3 px-8 rounded-xl gold-button text-slate-950 font-bold text-sm cursor-pointer"
            >
              {lang === 'de' ? 'Fertig' : 'Tamam'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

