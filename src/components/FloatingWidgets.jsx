import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';

export default function FloatingWidgets({ lang = 'de', onOpenContact, onOpenDiscovery }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Dynamic Gold Bubble */}
      {showTooltip && (
        <div className="relative p-3.5 rounded-2xl bg-[#0f1118]/95 border border-amber-500/40 shadow-2xl backdrop-blur-md max-w-xs animate-bounce hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold gold-gradient-text">
              {lang === 'de' ? 'Direktkontakt & WhatsApp' : 'Doğrudan İletişim & WhatsApp'}
            </span>
          </div>
          <p className="text-[11px] text-slate-300 mt-1">
            {lang === 'de' 
              ? 'Rufen Sie uns jetzt direkt an oder schreiben Sie uns per WhatsApp: +90 544 866 29 09' 
              : 'Bizi doğrudan arayın veya WhatsApp üzerinden hemen yazın: +90 544 866 29 09'}
          </p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center gap-2.5">
        {/* WhatsApp direct */}
        <a
          href="https://wa.me/905448662909?text=Merhaba,%20Calendra%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="WhatsApp ile İletişime Geçin"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>

        {/* Direct Call Button to +905448662909 */}
        <a
          href="tel:+905448662909"
          className="h-13 px-4 rounded-full gold-button text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
          title="Hemen Ara: +90 544 866 29 09"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">
            +90 (544) 866 29 09
          </span>
          <span className="sm:hidden">
            {lang === 'de' ? 'Anrufen' : 'Ara'}
          </span>
        </a>
      </div>
    </div>
  );
}


