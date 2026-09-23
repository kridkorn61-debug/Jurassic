import React, { useState } from 'react';
import { Dinosaur } from '../types';
import { playDinosaurRoar } from '../utils/audio';
import { Volume2, MapPin, Compass, ShieldAlert, X, Sparkles, MoveRight } from 'lucide-react';

interface DinosaurModalProps {
  dinosaur: Dinosaur | null;
  onClose: () => void;
  onNavigateToDino?: (dinoId: string) => void;
}

export const DinosaurModal: React.FC<DinosaurModalProps> = ({
  dinosaur,
  onClose,
  onNavigateToDino
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  if (!dinosaur) return null;

  const handleRoar = () => {
    setIsPlayingSound(true);
    playDinosaurRoar(dinosaur.dangerLevel);
    setTimeout(() => setIsPlayingSound(false), 1400);
  };

  const getDangerLabel = (level: number) => {
    switch (level) {
      case 5: return { text: 'อันตรายสูงสุด (Level 5 - Apex Predator)', color: 'text-red-400 bg-red-950/60 border-red-800' };
      case 4: return { text: 'อันตรายสูง (Level 4 - Dangerous Predator)', color: 'text-amber-400 bg-amber-950/60 border-amber-800' };
      case 3: return { text: 'เฝ้าระวังปานกลาง (Level 3 - Moderate)', color: 'text-yellow-400 bg-yellow-950/60 border-yellow-800' };
      default: return { text: 'ปลอดภัย ควบคุมได้ (Level 1-2 - Docile)', color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800' };
    }
  };

  const danger = getDangerLabel(dinosaur.dangerLevel);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-stone-900 border border-stone-700/80 rounded-2xl shadow-2xl text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Strip */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-stone-900/95 backdrop-blur border-b border-stone-800">
          <div className="flex items-center gap-3">
            <span className="font-jurassic text-xs tracking-wider text-amber-500 uppercase">
              Jurassic World Thailand Paleontological Dossier
            </span>
            <span className="text-stone-500">/</span>
            <span className="text-xs text-stone-400">รหัสสายพันธุ์: JW-TH-{dinosaur.id.toUpperCase()}</span>
          </div>
          <button 
            onClick={onClose}
            aria-label="ปิดหน้าต่างข้อมูล"
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Main Title & Action Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-400 mb-1">
                {dinosaur.period} · {dinosaur.ageMillionYears}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {dinosaur.nameThai}
              </h2>
              <p className="font-serif italic text-lg text-amber-200/80 mt-1">
                {dinosaur.nameSci}
              </p>
              <p className="text-xs text-stone-400 mt-1">
                ความหมาย: &ldquo;{dinosaur.meaning}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleRoar}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isPlayingSound 
                    ? 'bg-amber-600 border-amber-500 text-white scale-95 shadow-lg shadow-amber-600/30' 
                    : 'bg-stone-800 hover:bg-stone-700 border-stone-700 text-amber-300'
                }`}
              >
                <Volume2 className={`w-4 h-4 ${isPlayingSound ? 'animate-bounce' : ''}`} />
                <span>{isPlayingSound ? 'กำลังส่งเสียงคำราม...' : 'ฟังเสียงร้องสังเคราะห์'}</span>
              </button>

              {onNavigateToDino && (
                <button
                  onClick={() => {
                    onNavigateToDino(dinosaur.id);
                    onClose();
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors cursor-pointer"
                >
                  <MoveRight className="w-4 h-4" />
                  <span>นำรถทัวร์ไปที่นี่</span>
                </button>
              )}
            </div>
          </div>

          {/* Visual Showcase & Vital Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Visual Box */}
            <div className="md:col-span-7 space-y-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-950 border border-stone-800">
                <img 
                  src={dinosaur.image} 
                  alt={dinosaur.nameSci} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder container
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-stone-900', 'to-amber-950');
                      parent.innerHTML = `<div class="p-8 text-center"><div class="text-4xl mb-2">🦖</div><div class="text-base font-bold text-amber-400">${dinosaur.nameSci}</div><div class="text-xs text-stone-400 mt-1">${dinosaur.nameThai}</div></div>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-300">
                  <span className="font-mono text-[11px] bg-black/60 backdrop-blur px-2 py-1 rounded">
                    ชั้นหิน: {dinosaur.formation}
                  </span>
                  <span className="bg-black/60 backdrop-blur px-2 py-1 rounded">
                    ค้นพบปี พ.ศ. {dinosaur.yearDiscovered + 543}
                  </span>
                </div>
              </div>

              {/* Security level badge */}
              <div className={`flex items-center gap-2 p-3 rounded-lg border text-xs ${danger.color}`}>
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>ระดับมาตรการควบคุมอุทยาน: <strong>{danger.text}</strong></span>
              </div>
            </div>

            {/* Vital Statistics Sidebar */}
            <div className="md:col-span-5 bg-stone-950/60 rounded-xl p-5 border border-stone-800 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-800 pb-2">
                ข้อมูลกายภาพและสรีรวิทยา (Physical Data)
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800/80">
                  <div className="text-stone-400">ความยาวลำตัว</div>
                  <div className="text-base font-bold text-amber-400 font-mono mt-0.5">{dinosaur.lengthMeters} ม.</div>
                </div>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800/80">
                  <div className="text-stone-400">ความสูง</div>
                  <div className="text-base font-bold text-amber-400 font-mono mt-0.5">{dinosaur.heightMeters} ม.</div>
                </div>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800/80">
                  <div className="text-stone-400">น้ำหนักประมาณ</div>
                  <div className="text-base font-bold text-amber-400 font-mono mt-0.5">
                    {dinosaur.weightTons >= 1 ? `${dinosaur.weightTons} ตัน` : `${Math.round(dinosaur.weightTons * 1000)} กก.`}
                  </div>
                </div>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800/80">
                  <div className="text-stone-400">ประเภทอาหาร</div>
                  <div className="text-xs font-medium text-amber-200 mt-1">{dinosaur.diet}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-stone-800">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400">แหล่งขุดค้น: </span>
                    <span className="text-stone-200 font-medium">{dinosaur.excavationSite} จ.{dinosaur.province}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Compass className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-stone-400">กลุ่มสายพันธุ์: </span>
                    <span className="text-stone-200 font-medium">{dinosaur.group}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-amber-200/90 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-amber-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>เกร็ดความรู้ Jurassic Fact</span>
                </div>
                <p className="thai-prose text-[12px]">{dinosaur.funFact}</p>
              </div>
            </div>
          </div>

          {/* Description & Paleontological Significance */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              ประวัติการค้นพบและความสำคัญทางบรรพชีวินวิทยา
            </h3>
            <p className="thai-prose text-stone-300 text-sm leading-relaxed">
              {dinosaur.description}
            </p>
          </div>

          {/* Key Fossil Anatomical Features */}
          <div className="space-y-3 pt-4 border-t border-stone-800">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              ลักษณะเด่นของชิ้นส่วนฟอสซิลที่ค้นพบในไทย
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {dinosaur.fossilFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-stone-950/40 border border-stone-800/60 text-stone-300">
                  <span className="font-mono text-amber-500 font-bold shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                  <span className="thai-prose">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery Credits */}
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 text-xs text-stone-400 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span className="text-stone-500">คณะผู้สำรวจค้นพบ: </span>
              <span className="text-stone-300 font-medium">{dinosaur.discoverer}</span>
            </div>
            <div className="shrink-0 text-stone-500 font-mono text-[11px]">
              ข้อมูลรับรองโดย กรมทรัพยากรธรณีวิทยา & Jurassic World Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
