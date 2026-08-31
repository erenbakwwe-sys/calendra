import React, { useState } from 'react';
import { Award, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, HelpCircle, Check, Flame, Shield, Globe, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JobSurveyWizard({ lang = 'de', t, onCompleteSurvey }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    germanLevel: null,
    experience: null,
    department: null,
    workModel: null,
    equipment: null
  });
  const [isFinished, setIsFinished] = useState(false);
  const totalSteps = 5;

  const questions = [
    {
      id: 'germanLevel',
      title: t.survey.q1,
      desc: t.survey.q1_desc,
      icon: Globe,
      options: [
        { id: 'c2', label: t.survey.q1_opt1, points: 40, badge: '⭐ Top Match' },
        { id: 'c1', label: t.survey.q1_opt2, points: 35, badge: '✨ Sehr gut' },
        { id: 'b2', label: t.survey.q1_opt3, points: 20, badge: '👍 Geeignet' },
        { id: 'b1', label: t.survey.q1_opt4, points: 10, badge: '📚 Basis' }
      ]
    },
    {
      id: 'experience',
      title: t.survey.q2,
      desc: t.survey.q2_desc,
      icon: PhoneCall,
      options: [
        { id: 'exp_high', label: t.survey.q2_opt1, points: 25, badge: '🚀 Senior' },
        { id: 'exp_mid', label: t.survey.q2_opt2, points: 20, badge: '⚡ Erfahren' },
        { id: 'exp_sales', label: t.survey.q2_opt3, points: 15, badge: '💼 Quereinsteiger' },
        { id: 'exp_none', label: t.survey.q2_opt4, points: 10, badge: '🌱 Junior' }
      ]
    },
    {
      id: 'department',
      title: t.survey.q3,
      desc: t.survey.q3_desc,
      icon: Flame,
      options: [
        { id: 'inbound', label: t.survey.q3_opt1, points: 15 },
        { id: 'outbound', label: t.survey.q3_opt2, points: 20, badge: '💰 Höchste Boni' },
        { id: 'omnichannel', label: t.survey.q3_opt3, points: 15 },
        { id: 'leadership', label: t.survey.q3_opt4, points: 20, badge: '👔 Management' }
      ]
    },
    {
      id: 'workModel',
      title: t.survey.q4,
      desc: t.survey.q4_desc,
      icon: Shield,
      options: [
        { id: 'remote', label: t.survey.q4_opt1, points: 10 },
        { id: 'office', label: t.survey.q4_opt2, points: 10 },
        { id: 'hybrid', label: t.survey.q4_opt3, points: 10 },
        { id: 'part_time', label: t.survey.q4_opt4, points: 5 }
      ]
    },
    {
      id: 'equipment',
      title: t.survey.q5,
      desc: t.survey.q5_desc,
      icon: Sparkles,
      options: [
        { id: 'ready', label: t.survey.q5_opt1, points: 10, badge: '⚡ Sofortstart' },
        { id: 'need_laptop', label: t.survey.q5_opt2, points: 10 },
        { id: 'prefer_office', label: t.survey.q5_opt3, points: 10 },
        { id: 'evaluating', label: t.survey.q5_opt4, points: 5 }
      ]
    }
  ];

  const currentQ = questions[currentStep - 1];

  const handleSelectOption = (optionId) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsFinished(true);
      // Trigger gold celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F5D77F', '#ffffff', '#AA7C11']
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Compute match score
  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      const selectedId = answers[q.id];
      const opt = q.options.find(o => o.id === selectedId);
      if (opt && opt.points) score += opt.points;
    });
    return Math.min(score, 100);
  };

  const matchScore = calculateScore();
  const getScoreBadge = () => {
    if (matchScore >= 85) return { text: t.survey.scoreExcellent, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
    if (matchScore >= 70) return { text: t.survey.scoreGood, color: 'text-amber-300', bg: 'bg-amber-500/10 border-amber-500/30' };
    return { text: t.survey.scoreModerate, color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-500/30' };
  };

  return (
    <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-amber-500/30 gold-glow my-8">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {!isFinished ? (
        <div>
          {/* Header & Step progress */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {t.careers.surveyBadge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.careers.surveyTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 self-start sm:self-auto px-3 py-1.5 rounded-lg bg-black/50 border border-amber-500/20">
              <span>{t.survey.stepOf} {currentStep} {t.survey.of} {totalSteps}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-8">
            <div
              className="h-full gold-gradient-bg transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>

          {/* Question Box */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <currentQ.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {currentQ.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {currentQ.desc}
                </p>
              </div>
            </div>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-3.5 mt-6">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-2 border-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.25)] text-white'
                        : 'bg-black/40 border border-white/10 hover:border-amber-500/40 hover:bg-[#13151f] text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                        isSelected ? 'bg-amber-400 border-amber-400 text-black' : 'border-slate-600 bg-black/40'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <span className="text-sm sm:text-base font-medium">{opt.label}</span>
                    </div>

                    {opt.badge && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0 ml-2">
                        {opt.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`py-3 px-5 rounded-xl border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                currentStep === 1
                  ? 'opacity-30 cursor-not-allowed text-slate-500'
                  : 'hover:bg-white/5 text-slate-300 cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.survey.btnPrev}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className={`py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                !answers[currentQ.id]
                  ? 'opacity-40 bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'gold-button text-slate-950'
              }`}
            >
              <span>{currentStep === totalSteps ? t.survey.btnFinish : t.survey.btnNext}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="text-center py-6 sm:py-8 max-w-2xl mx-auto space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500/20 to-amber-400/30 border-2 border-amber-400 flex items-center justify-center mx-auto gold-glow">
            <Award className="w-10 h-10 text-amber-300" />
          </div>

          <div className="space-y-3">
            <div className={`inline-block px-4 py-1.5 rounded-full border text-sm font-bold ${getScoreBadge().bg} ${getScoreBadge().color}`}>
              {getScoreBadge().text}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === 'de' ? 'Herzlichen Glückwunsch!' : 'Tebrikler!'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.survey.resultDesc}
            </p>
          </div>

          {/* Quick Summary of Candidate Selections */}
          <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/20 text-left grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-500 block">{lang === 'de' ? 'Sprachlevel:' : 'Dil Seviyesi:'}</span>
              <span className="text-amber-300 font-semibold">{answers.germanLevel?.toUpperCase() || 'C1/C2'}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'de' ? 'Wunschbereich:' : 'Tercih Edilen Alan:'}</span>
              <span className="text-amber-300 font-semibold">{answers.department || 'Inbound Care'}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'de' ? 'Arbeitsmodell:' : 'Çalışma Modeli:'}</span>
              <span className="text-amber-300 font-semibold">{answers.workModel || 'Home-Office'}</span>
            </div>
            <div>
              <span className="text-slate-500 block">{lang === 'de' ? 'Eignungsscore:' : 'Uyum Puanı:'}</span>
              <span className="text-emerald-400 font-bold">{matchScore}% Match</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                if (onCompleteSurvey) {
                  onCompleteSurvey(answers);
                }
              }}
              className="py-4 px-8 rounded-xl gold-button text-slate-950 font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <span>{lang === 'de' ? 'Jetzt Bewerbungsformular öffnen' : 'Başvuru Formunu Aç'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setIsFinished(false);
                setCurrentStep(1);
              }}
              className="py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium text-xs sm:text-sm cursor-pointer"
            >
              {lang === 'de' ? 'Test wiederholen' : 'Testi Yeniden Çöz'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

