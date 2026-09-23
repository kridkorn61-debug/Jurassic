import React from 'react';
import { ExternalLink, Sparkles, Globe, Award, ShieldCheck, Heart } from 'lucide-react';
import { PageRoute } from '../types';

interface AboutExhibitionPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutExhibitionPage: React.FC<AboutExhibitionPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL EXHIBITION BACKGROUND & MISSION STATEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            เกี่ยวกับนิทรรศการ (About The Exhibition)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            อ้างอิงและได้รับแรงบันดาลใจจากปรากฏการณ์ระดับโลก Jurassic World: The Exhibition ถ่ายทอดความมหัศจรรย์ของไดโนเสาร์ผ่านการผสานศาสตร์บรรพชีวินวิทยาไทยเข้ากับเทคโนโลยีจำลองสถานการณ์เสมือนจริง
          </p>
        </div>

        {/* Official Reference Feature Callout */}
        <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              OFFICIAL INSPIRATION & BENCHMARK
            </div>
            <h2 className="text-xl font-bold text-white">
              Jurassic World: The Exhibition (Thailand Experience)
            </h2>
            <p className="thai-prose text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              การจัดแสดงนิทรรศการเสมือนจริงนี้สร้างขึ้นเพื่อต่อยอดความสำเร็จของนิทรรศการสากล โดยเน้นการนำเสนอคุณค่าและความภาคภูมิใจของซากดึกดำบรรพ์ที่ขุดค้นพบในแผ่นดินไทยอย่างถูกต้องตามหลักวิชาการ
            </p>
          </div>

          <a
            href="https://jurassicworldexperience.com/th/#about"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors shrink-0 shadow-md cursor-pointer"
          >
            <span>เข้าชมเว็บไซต์ต้นฉบับ (Official Site)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Core Pillars of the Exhibition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">ประสบการณ์เสมือนจริง 360 องศา</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              จำลองบรรยากาศสภาพแวดล้อม แสง เสียงคำรามสังเคราะห์ และภูมิประเทศป่าดึกดำบรรพ์ยุคครีเทเชียสของไทย เพื่อให้ผู้เข้าชมรู้สึกเหมือนได้นั่งรถทัวร์ซาฟารีเข้าไปในป่าไดโนเสาร์จริง
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">ความถูกต้องทางบรรพชีวินวิทยา</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              ข้อมูลสายพันธุ์ ขนาด สรีระ และแหล่งที่พบ ได้รับการตรวจสอบและอ้างอิงจากงานวิจัยของกรมทรัพยากรธรณีวิทยา สถาบันวิจัยไม้กลายเป็นทรายฯ และพิพิธภัณฑ์สิรินธร
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white">แรงบันดาลใจสำหรับเยาวชน</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              จุดประกายความฝันและส่งเสริมความรู้ด้านธรณีวิทยา วิทยาศาสตร์ และการอนุรักษ์มรดกทางธรรมชาติของชาติไทยให้แก่เด็ก เยาวชน และนิสิตนักศึกษา
            </p>
          </div>
        </div>

        {/* Narrative & History Section */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-jurassic">
            จากตำนานระดับโลกสู่ผืนแผ่นดินดึกดำบรรพ์ไทย
          </h2>
          <div className="thai-prose text-stone-300 text-sm leading-relaxed space-y-4">
            <p>
              ย้อนกลับไปเมื่อกว่า 130 ล้านปีก่อน ในยุคครีเทเชียสตอนต้น ดินแดนที่ราบสูงโคราชและภาคตะวันออกเฉียงเหนือของประเทศไทยในปัจจุบัน เคยเป็นระบบนิเวศลุ่มแม่น้ำโบราณที่มีความอุดมสมบูรณ์สูงสุดแห่งหนึ่งของโลก ต้นสน ปรงโบราณ และเฟิร์นยักษ์แผ่กิ่งก้านเป็นอาหารให้แก่ฝูงซอโรพอดคอยาวอย่าง <em>Phuwiangosaurus</em> ในขณะที่ยอดนักล่าอย่าง <em>Siamotyrannus</em> ปกครองผืนป่า
            </p>
            <p>
              โครงการเว็บไซต์เสมือนจริง <strong>Jurassic World Thailand</strong> เกิดขึ้นจากความตั้งใจของกลุ่มนิสิต ในการนำรูปแบบการนำเสนอและสุนทรียศาสตร์ของ Jurassic World: The Exhibition มาประยุกต์เข้ากับเรื่องราวของไดโนเสาร์ไทย เพื่อเปลี่ยนข้อมูลฟอสซิลที่ซับซ้อนให้กลายเป็นประสบการณ์อินเทอร์แอกทีฟที่เข้าถึงง่าย ตื่นตาตื่นใจ และมีชีวิตชีวา
            </p>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>โครงการพัฒนาสื่อการเรียนรู้ดิจิทัลระดับอุดมศึกษา</span>
            </div>

            <button
              onClick={() => onNavigate('contact.html')}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
            >
              ดูรายชื่อคณะผู้จัดทำนิสิตในหน้า Contact ➔
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
