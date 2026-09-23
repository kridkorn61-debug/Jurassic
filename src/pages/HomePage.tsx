import React, { useState } from 'react';
import { PageRoute, Dinosaur } from '../types';
import { THAI_DINOSAURS } from '../data/dinosaurs';
import { DinosaurModal } from '../components/DinosaurModal';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  ShieldAlert, 
  Calendar, 
  ArrowRight, 
  Check, 
  Volume2
} from 'lucide-react';
import { playDinosaurRoar } from '../utils/audio';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null);

  const heroDino = THAI_DINOSAURS[0]; // Siamotyrannus
  const sauropodDino = THAI_DINOSAURS[1]; // Phuwiangosaurus

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      
      {/* HERO SECTION: The Grand Jurassic Gates of Thailand */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_jurassic_thailand_1790147044814.jpg" 
            alt="Jurassic World Thailand Prehistoric Gates" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/90" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>นิทรรศการอุทยานไดโนเสาร์ไทยเสมือนจริงระดับโลก</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-jurassic leading-tight max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
            JURASSIC WORLD <span className="text-amber-400 block sm:inline">THAILAND</span>
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-amber-100/90 max-w-3xl mx-auto">
            &ldquo;สัมผัสแผ่นดินเกิดแห่งราชาไดโนเสาร์สยาม ย้อนเวลาสู่มหาอาณาจักรครีเทเชียส 130 ล้านปี&rdquo;
          </p>

          <p className="thai-prose text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ก้าวเข้าสู่ประตูอุทยานจำลองขนาดใหญ่ สำรวจเส้นทางซาฟารีด้วยรถทัวร์อัตโนมัติประจำเรื่อง ชมฟอสซิลมีชีวิตของไดโนเสาร์ไทย 10 สายพันธุ์เด่น และศึกษาเบื้องหลังพันธุวิศวกรรมในห้อง Creation Lab
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('park-map.html')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>เข้าสู่แผนผังอุทยานเสมือนจริง (Park Safari Map)</span>
            </button>

            <button
              onClick={() => onNavigate('thai-dinosaurs.html')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-200 text-sm font-semibold backdrop-blur transition-colors cursor-pointer"
            >
              <span>สารานุกรมไดโนเสาร์ไทย</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Operational Quick Strip */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>สถานะอุทยาน: เปิดบริการตามปกติ</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>ที่ตั้ง: ภูเวียง ขอนแก่น & ที่ราบสูงโคราช</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>รอบรถซาฟารี: ออกทุก 15 นาที</span>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURE SPOTLIGHT: Siamotyrannus vs Phuwiangosaurus */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono">
            PALEONTOLOGICAL DISCOVERIES OF THAILAND
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-jurassic">
            สองสายพันธุ์ผู้พลิกประวัติศาสตร์โลก
          </h2>
          <p className="thai-prose text-stone-400 text-sm">
            การค้นพบซากดึกดำบรรพ์ที่ภูเวียง ขอนแก่น พิสูจน์ว่าประเทศไทยเป็นศูนย์กลางวิวัฒนาการไดโนเสาร์ที่สำคัญที่สุดในเอเชีย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Siamotyrannus Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img 
                  src="/src/assets/images/thai_dino_siamotyrannus_1790147061468.jpg" 
                  alt={heroDino.nameSci} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-red-950/80 border border-red-800 text-red-300 text-xs px-2.5 py-1 rounded backdrop-blur">
                  นักล่าอันดับหนึ่ง (Apex Predator)
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-widest text-stone-400">
                  {heroDino.period} · {heroDino.province}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {heroDino.nameThai}
                </h3>
                <div className="font-serif italic text-sm text-amber-200/90">
                  {heroDino.nameSci}
                </div>
                <p className="thai-prose text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {heroDino.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-800/80 mt-4">
              <button
                onClick={() => setSelectedDino(heroDino)}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>ดูแฟ้มประวัติฉบับเต็ม</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => playDinosaurRoar(5)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>คำราม</span>
              </button>
            </div>
          </div>

          {/* Phuwiangosaurus Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img 
                  src="/src/assets/images/thai_dino_phuwiangosaurus_1790147077638.jpg" 
                  alt={sauropodDino.nameSci} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs px-2.5 py-1 rounded backdrop-blur">
                  ยักษ์ใหญ่คอยาว (Giant Sauropod)
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs uppercase tracking-widest text-stone-400">
                  {sauropodDino.period} · {sauropodDino.province}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {sauropodDino.nameThai}
                </h3>
                <div className="font-serif italic text-sm text-amber-200/90">
                  {sauropodDino.nameSci}
                </div>
                <p className="thai-prose text-stone-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {sauropodDino.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-800/80 mt-4">
              <button
                onClick={() => setSelectedDino(sauropodDino)}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>ดูแฟ้มประวัติฉบับเต็ม</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => playDinosaurRoar(2)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>เสียงร้อง</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* TOUR VEHICLE & SAFARI HIGHLIGHT BENTO BANNER */}
      <section className="bg-stone-900/60 border-y border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-widest text-amber-500 font-mono">
                THE TOUR VEHICLE EXPERIENCE
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-jurassic">
                ท่องอุทยานด้วยรถทัวร์ซาฟารีไร้คนขับ
              </h2>
              <p className="thai-prose text-stone-300 text-sm leading-relaxed">
                รถนำเที่ยว Jurassic Tour Vehicle ติดตั้งระบบรางแม่เหล็กอัตโนมัติ กระจกนิรภัยกันกระแทกเกรดเดียวกับกระจกเครื่องบินรบ และจอ HUD สรุปข้อมูลสายพันธุ์แบบเรียลไทม์ พร้อมพาผู้เข้าชมแล่นผ่าน 5 เขตนิเวศอย่างใกล้ชิดและปลอดภัยสูงสุด
              </p>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ระบบนำทางขับเคลื่อนอัตโนมัติตามรางแม่เหล็ก 9 สถานี</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>เสียงบรรยายทางธรณีวิทยาภาษาไทยและอังกฤษตามจุดพิกัด GPS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>เกราะป้องกันแรงกระแทกระดับ Extreme จากไดโนเสาร์เทอโรพอด</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('safari-cruiser.html')}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  ศึกษาระบบรถทัวร์นำเที่ยว (Safari Cruiser Specs)
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] bg-stone-950">
                <img 
                  src="/src/assets/images/jurassic_tour_cruiser_1790147105237.jpg" 
                  alt="Jurassic World Tour Vehicle" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-mono bg-black/60 px-2.5 py-1 rounded backdrop-blur">
                    Autonomous Guided Cruiser
                  </span>
                  <span className="bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded">
                    พร้อมให้บริการ
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10 WEBPAGES DIRECTORY SHOWCASE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono">
            WEBSITE DIRECTORY & ACADEMIC DELIVERABLES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-jurassic">
            โครงสร้างเว็บเพจทั้ง 10 หน้าของโครงการ
          </h2>
          <p className="thai-prose text-stone-400 text-xs sm:text-sm">
            สามารถคลิกเพื่อเข้าชมแต่ละหน้าเว็บเพจ (.html) ได้โดยตรงอย่างครบถ้วน
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { page: 'index.html', title: '01. หน้าแรกอุทยาน', desc: 'ประตูสู่อุทยานไดโนเสาร์ไทย & แนะนำประสบการณ์', icon: '🦖' },
            { page: 'park-map.html', title: '02. แผนผังนำเที่ยว & รถทัวร์', desc: 'แผนผังซาฟารี รถทัวร์ขับเคลื่อนอัตโนมัติ และจุดพบไดโนเสาร์', icon: '🗺️' },
            { page: 'thai-dinosaurs.html', title: '03. สารานุกรมไดโนเสาร์ไทย', desc: '10+ สายพันธุ์สำคัญของไทย บันทึกประวัติและกายวิภาค', icon: '🦕' },
            { page: 'safari-cruiser.html', title: '04. รถทัวร์ซาฟารี & ยานพาหนะ', desc: 'เทคโนโลยีระบบขับเคลื่อนอัตโนมัติ แดชบอร์ดคนขับ', icon: '🚙' },
            { page: 'creation-lab.html', title: '05. ห้องแล็บ Creation Lab', desc: 'การเพาะพันธุ์พันธุวิศวกรรมยีนส์ไดโนเสาร์และการสกัด DNA', icon: '🧬' },
            { page: 'fossil-sites.html', title: '06. แหล่งขุดค้นฟอสซิลในไทย', desc: 'ภูเวียง ขอนแก่น, ภูกุ้มข้าว กาฬสินธุ์, โคราช, ชัยภูมิ', icon: '⛏️' },
            { page: 'park-zones.html', title: '07. โซนจัดแสดงและความปลอดภัย', desc: 'รั้วไฟฟ้า 10,000V และมาตรการกักกันสัตว์ดึกดำบรรพ์', icon: '⚡' },
            { page: 'about-exhibition.html', title: '08. เกี่ยวกับนิทรรศการ', desc: 'อ้างอิง jurassicworldexperience.com/th/#about และพันธกิจ', icon: '🏛️' },
            { page: 'visitor-guide.html', title: '09. คู่มือการเข้าชม & ระเบียบ', desc: 'ตารางเวลา ค่าบัตรเข้าชม และกฎความปลอดภัย', icon: '📋' },
            { page: 'contact.html', title: '10. ติดต่อ & สมาชิกกลุ่มนิสิต', desc: 'รายชื่อสมาชิกในกลุ่มพร้อมรหัสประจำตัวนิสิต & แบบฟอร์มติดต่อ', icon: '🎓' },
          ].map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onNavigate(item.page as PageRoute);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/60 text-left transition-all duration-200 group cursor-pointer space-y-2 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[11px] font-mono text-stone-500 group-hover:text-amber-400">
                  {item.page}
                </span>
              </div>
              <h3 className="font-bold text-sm text-stone-100 group-hover:text-amber-300">
                {item.title}
              </h3>
              <p className="thai-prose text-xs text-stone-400 leading-relaxed">
                {item.desc}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Dinosaur Dossier Modal */}
      <DinosaurModal 
        dinosaur={selectedDino} 
        onClose={() => setSelectedDino(null)}
        onNavigateToDino={() => onNavigate('park-map.html')}
      />

    </div>
  );
};
