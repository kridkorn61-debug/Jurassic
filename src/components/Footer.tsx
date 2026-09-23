import React from 'react';
import { PageRoute } from '../types';
import { ExternalLink, Compass, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const pages: { label: string; page: PageRoute; desc: string }[] = [
    { label: '01. หน้าแรกอุทยาน', page: 'index.html', desc: 'ประตูสู่อุทยานไดโนเสาร์ไทย' },
    { label: '02. แผนผังนำเที่ยว & รถทัวร์', page: 'park-map.html', desc: 'ระบบรถซาฟารีและจุดพบไดโนเสาร์' },
    { label: '03. สารานุกรมไดโนเสาร์ไทย', page: 'thai-dinosaurs.html', desc: '10+ สายพันธุ์สำคัญของไทย' },
    { label: '04. รถทัวร์ซาฟารี & ยานพาหนะ', page: 'safari-cruiser.html', desc: 'เทคโนโลยีระบบขับเคลื่อนอัตโนมัติ' },
    { label: '05. ห้องแล็บพันธุกรรม Creation Lab', page: 'creation-lab.html', desc: 'สกัด DNA ยุคดึกดำบรรพ์' },
    { label: '06. แหล่งขุดค้นฟอสซิลในไทย', page: 'fossil-sites.html', desc: 'ภูเวียง กาฬสินธุ์ โคราช ชัยภูมิ' },
    { label: '07. โซนจัดแสดงและความปลอดภัย', page: 'park-zones.html', desc: 'รั้วไฟฟ้าและระบบกักกันความปลอดภัย' },
    { label: '08. เกี่ยวกับ Jurassic World Experience', page: 'about-exhibition.html', desc: 'อ้างอิงนิทรรศการระดับโลก' },
    { label: '09. คู่มือการเข้าชม & ระเบียบ', page: 'visitor-guide.html', desc: 'ตารางเวลาและข้อปฏิบัติ' },
    { label: '10. ติดต่อ & รายชื่อคณะผู้จัดทำนิสิต', page: 'contact.html', desc: 'รายชื่อสมาชิกในกลุ่มและรหัสนิสิต' },
  ];

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Top Institutional Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-jurassic text-xl font-bold tracking-wider">
              <span>🦖</span>
              <span>JURASSIC WORLD THAILAND</span>
            </div>
            <p className="thai-prose text-stone-400 text-sm leading-relaxed max-w-md">
              ศูนย์การเรียนรู้เสมือนจริงที่ผสานความตื่นเต้นระดับโลกของ Jurassic World เข้ากับคุณค่าทางประวัติศาสตร์บรรพชีวินวิทยาของประเทศไทย สำรวจซากดึกดำบรรพ์และไดโนเสาร์สายพันธุ์ไทยแท้ผ่านเทคโนโลยีจำลองอุทยาน
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>โครงการจัดทำเว็บไซต์วิชาการโดยนิสิตมหาวิทยาลัย</span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-3">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-3">
              สารบัญเว็บเพจทั้งหมด (10 HTML Pages Directory)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pages.map((p) => (
                <button
                  key={p.page}
                  onClick={() => {
                    onNavigate(p.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-start gap-2 p-2 rounded-lg bg-stone-900/50 hover:bg-stone-900 border border-stone-800/80 hover:border-amber-500/50 text-left transition-all group cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-stone-300 group-hover:text-amber-300 text-xs">
                      {p.label}
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">
                      {p.page}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reference & Academic Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 Jurassic World Thailand Virtual Safari Exhibition Project</span>
            <span>·</span>
            <a 
              href="https://jurassicworldexperience.com/th/#about" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-stone-400 hover:text-amber-400 transition-colors"
            >
              <span>อ้างอิงข้อมูล: Jurassic World: The Exhibition (Official)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <span>ความร่วมมือทางวิชาการ: กรมทรัพยากรธรณี</span>
          </div>

          <div className="text-stone-400">
            จัดทำเพื่อการศึกษา · รายชื่อสมาชิกกลุ่มและรหัสนิสิตอยู่ในหน้า Contact
          </div>
        </div>

      </div>
    </footer>
  );
};
