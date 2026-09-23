import React, { useState } from 'react';
import { playVehicleStart, playParkChime } from '../utils/audio';
import { 
  ShieldCheck, 
  Cpu, 
  BatteryCharging, 
  Gauge, 
  Radio, 
  Sparkles, 
  Play, 
  CheckCircle2,
  Compass
} from 'lucide-react';
import { PageRoute } from '../types';

interface SafariCruiserPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const SafariCruiserPage: React.FC<SafariCruiserPageProps> = ({ onNavigate }) => {
  const [isSimulatingDrive, setIsSimulatingDrive] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [batteryLevel] = useState(96);
  const [hudMessage, setHudMessage] = useState('ระบบพร้อมทำงาน: รางแม่เหล็กเส้นทางซาฟารีปกติ');

  const startSimulation = () => {
    setIsSimulatingDrive(true);
    playVehicleStart();
    setHudMessage('กำลังออกตัวสู่เส้นทางธรรมชาติ: ประตูรั้วโซน A เปิดอัตโนมัติ');

    let curSpeed = 0;
    const interval = setInterval(() => {
      curSpeed += 5;
      if (curSpeed >= 40) {
        setSpeed(40);
        clearInterval(interval);
        setHudMessage('ความเร็วคงที่ 40 กม./ชม. ระบบหลบหลีกไดโนเสาร์เรดาร์ Lidar ทำงานเต็มประสิทธิภาพ');
        playParkChime();
      } else {
        setSpeed(curSpeed);
      }
    }, 150);
  };

  const stopSimulation = () => {
    setIsSimulatingDrive(false);
    setSpeed(0);
    setHudMessage('รถจอดเทียบชานชาลาสถานีปลอดภัย ดับเครื่องยนต์ขับเคลื่อน');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>AUTONOMOUS SAFARI EXPEDITION VEHICLES · SPECS & HUD</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            รถทัวร์ซาฟารีนำเที่ยว (Jurassic Tour Cruiser)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            สัมผัสยานพาหนะนำเที่ยวประจำเรื่อง Jurassic World ที่ออกแบบขึ้นเพื่อพานักท่องเที่ยวและนักวิจัยเดินทางลึกเข้าสู่ถิ่นอาศัยของไดโนเสาร์ไทย ด้วยเทคโนโลยีขับเคลื่อนอัตโนมัติ 100%
          </p>
        </div>

        {/* Feature Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 group">
              <img 
                src="/src/assets/images/jurassic_tour_cruiser_1790147105237.jpg" 
                alt="Jurassic Safari Cruiser" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-stone-950/80 border border-stone-700 text-amber-400 text-xs font-mono px-3 py-1 rounded backdrop-blur">
                MODEL: JURASSIC-CRUISER MK-IV (THAILAND EDITION)
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold text-white font-jurassic">
              มาตรฐานความปลอดภัยขั้นสูงสุด
            </h2>
            <p className="thai-prose text-stone-300 text-sm leading-relaxed">
              ตัวถังผลิตจากไททาเนียมคอมโพสิตผสานเส้นใยเคฟลาร์ ทนทานต่อแรงกระแทกของไดโนเสาร์ขนาดใหญ่ กระจกนิรภัยอะคริลิกใสหนา 50 มม. สามารถมองเห็นทัศนียภาพรอบด้านได้ 360 องศาโดยไม่สะท้อนแสงรบกวนสัตว์
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">กระจกนิรภัยกันกระแทกระดับ Extreme:</strong>
                  <span className="text-stone-400 block thai-prose">ทนต่อแรงกัดของฟันสยามโมไทรันนัสและแรงเหวี่ยงหางซอโรพอด</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">ระบบขับเคลื่อนเหนี่ยวนำแม่เหล็กไฟฟ้า:</strong>
                  <span className="text-stone-400 block thai-prose">ไร้เสียงรบกวนสมาธิของสัตว์ป่า และไม่ปล่อยไอเสียมลพิษในระบบนิเวศ</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">วิทยุฉุกเฉินและเซนเซอร์ความใกล้ชิด:</strong>
                  <span className="text-stone-400 block thai-prose">เบรกหยุดรถอัตโนมัติหากพบฝูงกินรีไมมัสตัดหน้าราง</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CABIN DASHBOARD SIMULATOR */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>จำลองคอนโซลคนขับเสมือนจริง (COCKPIT TELEMETRY)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                แผงควบคุมระบบขับเคลื่อนซาฟารี
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {!isSimulatingDrive ? (
                <button
                  onClick={startSimulation}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  <span>ทดลองสตาร์ทรถและเร่งเครื่องยนต์</span>
                </button>
              ) : (
                <button
                  onClick={stopSimulation}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs cursor-pointer shadow-lg"
                >
                  <span>เบรกฉุกเฉิน & จอดเทียบชานชาลา</span>
                </button>
              )}
            </div>
          </div>

          {/* Telemetry Gauge Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-center space-y-1">
              <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-amber-400" />
                <span>ความเร็วปัจจุบัน</span>
              </div>
              <div className="text-3xl font-mono font-bold text-amber-400 tabular-nums">
                {speed} <span className="text-xs text-stone-400">km/h</span>
              </div>
              <div className="text-[10px] text-stone-500">จำกัดความเร็ว 45 km/h</div>
            </div>

            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-center space-y-1">
              <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1">
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                <span>แบตเตอรี่โซลิดสเตต</span>
              </div>
              <div className="text-3xl font-mono font-bold text-emerald-400 tabular-nums">
                {batteryLevel}%
              </div>
              <div className="text-[10px] text-stone-500">วิ่งได้อีก 320 กม.</div>
            </div>

            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-center space-y-1">
              <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>เกราะสนามพลังป้องกัน</span>
              </div>
              <div className="text-3xl font-mono font-bold text-sky-400">
                ACTIVE
              </div>
              <div className="text-[10px] text-stone-500">รั้วไฟฟ้า 10,000V เชื่อมต่อ</div>
            </div>

            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-center space-y-1">
              <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>ระบบไกด์บรรยาย</span>
              </div>
              <div className="text-xl font-bold text-white mt-1">
                ไทย / ENG
              </div>
              <div className="text-[10px] text-stone-500">ซิงค์อัตโนมัติผ่าน GPS</div>
            </div>
          </div>

          {/* Real-time HUD Message Banner */}
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-stone-300">HUD DISPATCH:</span>
              <span className="text-amber-300 font-medium thai-prose">{hudMessage}</span>
            </div>
            <button
              onClick={() => onNavigate('park-map.html')}
              className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold cursor-pointer shrink-0 ml-4"
            >
              ดูตำแหน่งรถบนแผนผังจริง ➔
            </button>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white font-jurassic">
            ตารางข้อมูลทางเทคนิคของยานพาหนะ (Vehicle Technical Specifications)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              { title: 'ความจุผู้โดยสาร', val: '6 ท่านต่อคัน (พร้อมพื้นที่สำหรับผู้ใช้วีลแชร์)' },
              { title: 'ระบบขับเคลื่อน', val: 'มอเตอร์แม่เหล็กไฟฟ้าคู่ Mag-Drive อิสระ 4 ล้อ' },
              { title: 'ระบบตรวจจับรอบทิศ', val: 'LiDAR 360° สแกนสภาพแวดล้อม 50 ครั้งต่อวินาที' },
              { title: 'เกราะกระจก', val: 'โพลีคาร์บอเนตเคลือบผิวป้องกันกรดและความร้อน' },
              { title: 'ระบบเสียงภายใน', val: 'ระบบเสียงสเตอริโอรอบทิศ 7.1 แชนแนล' },
              { title: 'มาตรการฉุกเฉิน', val: 'แคปซูลนิรภัยส่งสัญญาณกู้ภัยดาวเทียมทันทีเมื่อถูกกระแทก' }
            ].map((spec, i) => (
              <div key={i} className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                <div className="text-stone-400">{spec.title}</div>
                <div className="text-amber-200 font-semibold text-sm thai-prose">{spec.val}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
