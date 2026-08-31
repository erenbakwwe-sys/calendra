import React, { useState } from 'react';
import { X, Send, CheckCircle2, UploadCloud, Mic, ShieldCheck, Sparkles, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JobApplicationModal({ isOpen, onClose, lang = 'de', t, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    cvText: '',
    voiceNoteReady: false,
    gdprAgree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');
  const [recordingState, setRecordingState] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.gdprAgree) {
      alert(lang === 'de' ? 'Bitte stimmen Sie den Datenschutzbestimmungen zu.' : 'Lütfen KVKK/GDPR onayını işaretleyiniz.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'CAL-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#F5D77F', '#10B981']
        });
      } catch (err) {}
    }, 1200);
  };

  const handleSimulateVoice = () => {
    setRecordingState(true);
    setTimeout(() => {
      setRecordingState(false);
      setFormData(prev => ({ ...prev, voiceNoteReady: true }));
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0e1017] border border-amber-500/30 rounded-3xl p-6 sm:p-8 gold-glow my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'de' ? 'Direktbewerbung' : 'Hızlı Başvuru'}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.jobForm.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {t.jobForm.subtitle}
              </p>
            </div>

            {/* Candidate Pre-Screening Summary Badge if answered */}
            {initialData && (
              <div className="p-3 mb-5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between text-xs text-amber-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {lang === 'de' ? 'Vorab-Check Profil verknüpft' : 'Ön Eleme Bilgileri Bağlandı'}
                </span>
                <span className="font-mono font-bold bg-amber-500/20 px-2 py-0.5 rounded">
                  {initialData.germanLevel?.toUpperCase()} • {initialData.department || 'Inbound'}
                </span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.jobForm.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.jobForm.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.jobForm.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.jobForm.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.jobForm.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.jobForm.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.jobForm.city}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.jobForm.cityPlaceholder}
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.jobForm.cvText}
                </label>
                <textarea
                  rows="3"
                  placeholder={t.jobForm.cvPlaceholder}
                  value={formData.cvText}
                  onChange={(e) => setFormData({ ...formData, cvText: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-sm resize-none"
                />
              </div>

              {/* Optional Voice Note Intro */}
              <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <Mic className="w-3.5 h-3.5" />
                      {t.jobForm.voiceNoteLabel}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.jobForm.voiceNoteDesc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateVoice}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      formData.voiceNoteReady
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : recordingState
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
                        : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                    }`}
                  >
                    {formData.voiceNoteReady ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{lang === 'de' ? 'Sprachprobe bereit' : 'Ses Kaydı Eklendi'}</span>
                      </>
                    ) : recordingState ? (
                      <span>{lang === 'de' ? 'Wird aufgenommen...' : 'Kaydediliyor...'}</span>
                    ) : (
                      <>
                        <Mic className="w-3.5 h-3.5" />
                        <span>{lang === 'de' ? 'Aufnehmen' : 'Kayıt Yap'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="gdprAgree"
                  required
                  checked={formData.gdprAgree}
                  onChange={(e) => setFormData({ ...formData, gdprAgree: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-slate-700 bg-black/60 text-amber-500 focus:ring-amber-400"
                />
                <label htmlFor="gdprAgree" className="text-xs text-slate-400 leading-snug cursor-pointer">
                  {t.jobForm.gdprAgree}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl gold-button text-slate-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
              >
                {isSubmitting ? (
                  <span>{t.jobForm.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.jobForm.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success View */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                {t.jobForm.successTitle}
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                {t.jobForm.successDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-amber-500/30 inline-block">
              <span className="text-xs text-slate-400 block mb-1">{t.jobForm.refNumber}</span>
              <span className="text-xl font-mono font-bold text-amber-300">{refId}</span>
            </div>

            <div>
              <button
                onClick={onClose}
                className="py-3 px-8 rounded-xl gold-button text-slate-950 font-bold text-sm cursor-pointer"
              >
                {lang === 'de' ? 'Schließen' : 'Kapat'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

