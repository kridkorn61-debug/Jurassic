import React from 'react';
import { Clock, Ticket, AlertTriangle, ShieldCheck, HeartPulse, Bus, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface VisitorGuidePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const VisitorGuidePage: React.FC<VisitorGuidePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>OPERATIONAL TIMETABLE · TICKETING & SAFETY PROTOCOLS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            คู่มือการเข้าชมอุทยาน (Visitor Guide)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            ข้อมูลที่จำเป็นสำหรับการเตรียมตัวเข้าชมอุทยาน Jurassic World Thailand ตารางเวลารถทัวร์ซาฟารี อัตราค่าบริการบัตรผ่านประตู และระเบียบความปลอดภัยภายในเขตอนุรักษ์
          </p>
        </div>

        {/* Operating Hours & Safari Schedules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>เวลาเปิดให้บริการ</span>
            </div>
            <div className="text-2xl font-bold text-white font-jurassic">09:00 - 18:00 น.</div>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              เปิดบริการทุกวันไม่เว้นวันหยุดราชการ จุดจำหน่ายตั๋วปิดเวลา 16:30 น.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Bus className="w-4 h-4" />
              <span>รอบรถทัวร์ซาฟารี</span>
            </div>
            <div className="text-2xl font-bold text-white font-jurassic">ออกทุก 15 นาที</div>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              รอบแรกเวลา 09:15 น. และรอบสุดท้ายเวลา 17:00 น. (ใช้เวลาทัวร์รอบละประมาณ 45 นาที)
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <HeartPulse className="w-4 h-4" />
              <span>ความพร้อมทางการแพทย์</span>
            </div>
            <div className="text-2xl font-bold text-white font-jurassic">แพทย์ประจำ 24 ชม.</div>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              มีหน่วยปฐมพยาบาลเคลื่อนที่เร็วและรถพยาบาลฉุกเฉินพร้อมใช้งานตลอดเวลา
            </p>
          </div>
        </div>

        {/* Ticket Tier Pricing */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <h2 className="text-xl font-bold text-white font-jurassic flex items-center gap-2">
              <Ticket className="w-5 h-5 text-amber-500" />
              <span>อัตราค่าบัตรเข้าชมอุทยาน (Admission Rates)</span>
            </h2>
            <span className="text-xs text-stone-400">ราคาสุทธิรวมภาษีมูลค่าเพิ่ม</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Student Pass */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-amber-500/60 relative space-y-4 shadow-xl">
              <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded">
                สิทธิ์พิเศษนิสิต-นักศึกษา
              </div>
              <div className="text-xs uppercase text-amber-400 font-mono">ACADEMIC & STUDENT</div>
              <h3 className="text-xl font-bold text-white">บัตรนิสิต / นักเรียน</h3>
              <div className="text-3xl font-bold text-amber-300 font-mono">
                150 <span className="text-xs text-stone-400">บาท / ท่าน</span>
              </div>
              <ul className="text-xs text-stone-300 space-y-2 thai-prose">
                <li>✓ รวมการนั่งรถทัวร์ซาฟารี 1 รอบเต็ม</li>
                <li>✓ สิทธิ์เข้าชมห้องแล็บ Creation Lab</li>
                <li>✓ แสดงบัตรประจำตัวนิสิต/นักศึกษา ณ ทางเข้า</li>
              </ul>
              <button
                onClick={() => onNavigate('contact.html')}
                className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
              >
                ติดต่อขอรับโควตาหมู่คณะ
              </button>
            </div>

            {/* Standard Adult Pass */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="text-xs uppercase text-stone-400 font-mono">GENERAL ADMISSION</div>
              <h3 className="text-xl font-bold text-white">บุคคลทั่วไป (ผู้ใหญ่)</h3>
              <div className="text-3xl font-bold text-white font-mono">
                350 <span className="text-xs text-stone-400">บาท / ท่าน</span>
              </div>
              <ul className="text-xs text-stone-300 space-y-2 thai-prose">
                <li>✓ สิทธิ์เข้าชมทุกโซนจัดแสดงในอุทยาน</li>
                <li>✓ นั่งรถทัวร์ซาฟารีระบบอัตโนมัติ</li>
                <li>✓ หูฟังเสียงบรรยาย 2 ภาษา (ไทย/อังกฤษ)</li>
              </ul>
              <button
                onClick={() => onNavigate('contact.html')}
                className="w-full py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-colors cursor-pointer"
              >
                จองบัตรล่วงหน้า
              </button>
            </div>

            {/* VIP Expedition Pass */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="text-xs uppercase text-amber-500 font-mono">VIP EXPEDITION PASS</div>
              <h3 className="text-xl font-bold text-white">ทัวร์พิเศษ VIP Safari</h3>
              <div className="text-3xl font-bold text-amber-400 font-mono">
                750 <span className="text-xs text-stone-400">บาท / ท่าน</span>
              </div>
              <ul className="text-xs text-stone-300 space-y-2 thai-prose">
                <li>✓ รถทัวร์ส่วนตัวแบบ Gyrosphere ส่วนบุคคล</li>
                <li>✓ นักบรรพชีวินวิทยาผู้เชี่ยวชาญบรรยายพิเศษ</li>
                <li>✓ กิจกรรมสัมผัสฟอสซิลจริงในห้องแล็บวิจัย</li>
              </ul>
              <button
                onClick={() => onNavigate('contact.html')}
                className="w-full py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-colors cursor-pointer"
              >
                สอบถามแพ็กเกจ VIP
              </button>
            </div>

          </div>
        </div>

        {/* Safety Rules & Regulations (Mandatory In-Park Protocols) */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-lg text-white">กฎระเบียบและข้อปฏิบัติเพื่อความปลอดภัย</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
              <strong className="text-amber-300 block">1. ห้ามยื่นอวัยวะหรือสิ่งของออกนอกกระจกรถ</strong>
              <p className="thai-prose text-stone-400">ตัวรถทัวร์มีระบบซีลสุญญากาศและกระจกนิรภัย เพื่อป้องกันกลิ่นและเสียงที่อาจกระตุ้นไดโนเสาร์นักล่า</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
              <strong className="text-amber-300 block">2. ห้ามใช้แฟลชถ่ายรูปหรือส่งเสียงดังรบกวน</strong>
              <p className="thai-prose text-stone-400">แสงแฟลชอาจทำให้ไดโนเสาร์ตื่นตระหนกและพุ่งชนกระจกรถหรือรั้วไฟฟ้ากักกัน</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
              <strong className="text-amber-300 block">3. ห้ามให้อาหารไดโนเสาร์โดยเด็ดขาด</strong>
              <p className="thai-prose text-stone-400">อาหารทุกชนิดของไดโนเสาร์ได้รับการคำนวณสารอาหารและวิตามินจากนักโภชนาการในห้องแล็บ</p>
            </div>
            <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
              <strong className="text-amber-300 block">4. กรณีเกิดเหตุฉุกเฉิน ปฏิบัติตามคำสั่งเสียงอัตโนมัติ</strong>
              <p className="thai-prose text-stone-400">หากมีสัญญาณเตือนภัย ให้คงอยู่ในตัวรถทัวร์ซึ่งมีเกราะป้องกันระดับสูงสุด รถจะนำทางเข้าสู่บังเกอร์นิรภัยทันที</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
