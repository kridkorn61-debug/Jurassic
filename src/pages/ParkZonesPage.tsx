import React from 'react';
import { PARK_ZONES } from '../data/parkZones';
import { THAI_DINOSAURS } from '../data/dinosaurs';
import { ShieldAlert, Zap, Lock, AlertTriangle, Compass, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface ParkZonesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ParkZonesPage: React.FC<ParkZonesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            <span>CONTAINMENT PROTOCOLS & PARK SECTOR SECURITY GRID</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            โซนจัดแสดงและระบบความปลอดภัย (Park Zones)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            ระบบความปลอดภัยและเทคโนโลยีกักกันสัตว์ดึกดำบรรพ์ของ Jurassic World Thailand ออกแบบตามมาตรฐาน InGen และกรมทรัพยากรธรณี เพื่อให้การรับชมไดโนเสาร์มีชีวิตเป็นไปอย่างปลอดภัยสูงสุด
          </p>
        </div>

        {/* Security Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800 flex items-center justify-center text-red-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">รั้วไฟฟ้าแรงสูง 10,000 โวลต์</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              ติดตั้งรอบเขตสันเขานักล่า (Apex Predator Ridge) สยามโมไทรันนัส และเมกะแรปเตอร์ พร้อมระบบจ่ายไฟสำรอง 3 ชุดอัตโนมัติ
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">คูเมืองและแนวคันดินธรรมชาติ</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              ในหุบเขาซอโรพอด ใช้คูน้ำลึก 12 เมตรและผาหินธรรมชาติแบ่งเขต เพื่อให้ไดโนเสาร์กินพืชคอยาวใช้ชีวิตเสมือนอยู่ในป่าดึกดำบรรพ์
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white">หลุมหลบภัยคอนกรีตเสริมเหล็ก</h3>
            <p className="thai-prose text-xs text-stone-400 leading-relaxed">
              บังเกอร์นิรภัย 12 จุดรอบเส้นทางซาฟารี มีเสบียงอาหาร ระบบกรองอากาศบริสุทธิ์ และวิทยุสื่อสารตรงสู่ศูนย์ควบคุม Dispatch Center
            </p>
          </div>
        </div>

        {/* 5 Park Zones Detailed Listing */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <h2 className="text-xl font-bold text-white font-jurassic">
              รายละเอียดเขตนิเวศจัดแสดงทั้ง 5 โซน
            </h2>
            <button
              onClick={() => onNavigate('park-map.html')}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>ดูพิกัดบนแผนผังนำเที่ยว</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {PARK_ZONES.map(zone => {
              const residentDinos = THAI_DINOSAURS.filter(d => zone.primarySpecies.includes(d.id));

              return (
                <div 
                  key={zone.id}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4 hover:border-stone-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-stone-950 text-amber-400 border border-stone-800">
                        {zone.code}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{zone.nameThai}</h3>
                        <div className="text-xs text-stone-400 font-serif italic">{zone.nameEng}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded font-medium ${
                        zone.hazardLevel === 'Extreme' ? 'bg-red-950 text-red-300 border border-red-800' :
                        zone.hazardLevel === 'High' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                        'bg-emerald-950 text-emerald-300 border border-emerald-800'
                      }`}>
                        ความเสี่ยง: ระดับ {zone.hazardLevel}
                      </span>
                    </div>
                  </div>

                  <p className="thai-prose text-sm text-stone-300 leading-relaxed">
                    {zone.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-stone-400 mb-2">
                      สิ่งมีชีวิตดึกดำบรรพ์ประจำโซน:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {residentDinos.map(d => (
                        <div 
                          key={d.id}
                          className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 flex items-center gap-2"
                        >
                          <span className="text-amber-400 font-bold">🦕</span>
                          <span className="font-medium">{d.nameThai}</span>
                          <span className="text-[11px] text-stone-500 italic">({d.nameSci})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
