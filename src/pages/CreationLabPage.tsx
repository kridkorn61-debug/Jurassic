import React, { useState } from 'react';
import { Sparkles, Dna, TestTube2, Microscope, CheckCircle2, RefreshCw } from 'lucide-react';
import { PageRoute } from '../types';

interface CreationLabPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const CreationLabPage: React.FC<CreationLabPageProps> = ({ onNavigate }) => {
  const [activeDnaDino, setActiveDnaDino] = useState<'siamotyrannus' | 'phuwiangosaurus' | 'kinnareemimus'>('siamotyrannus');
  const [isSequencing, setIsSequencing] = useState(false);
  const [sequencingProgress, setSequencingProgress] = useState(100);

  const triggerResequence = () => {
    setIsSequencing(true);
    setSequencingProgress(15);
    const interval = setInterval(() => {
      setSequencingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSequencing(false);
          return 100;
        }
        return prev + 17;
      });
    }, 200);
  };

  const dinoDnaData = {
    siamotyrannus: {
      name: 'สยามโมไทรันนัส อีสานเอนซิส',
      sci: 'Siamotyrannus isanensis',
      genomeCompleteness: '94.8%',
      extractedSource: 'ตัวอย่างคอลลาเจนกระดูกสะโพก หลุมขุดค้นที่ 9 ภูเวียง',
      basePairs: '3.1 พันล้านคู่เบส (Base Pairs)',
      gapFillDonor: 'นกอีมูออสเตรเลีย และจระเข้น้ำจืดไทย (Crocodylus siamensis)',
      traits: 'แรงกัดขากรรไกร 35,000 นิวตัน, ผิวเกล็ดเคราตินหนา, สายตาตรวจจับการเคลื่อนไหว'
    },
    phuwiangosaurus: {
      name: 'ภูเวียงโกซอรัส สิรินธรเน',
      sci: 'Phuwiangosaurus sirindhornae',
      genomeCompleteness: '97.2%',
      extractedSource: 'กระดูกคอและฟอสซิลไข่ดึกดำบรรพ์ ภูกุ้มข้าว',
      basePairs: '4.8 พันล้านคู่เบส (Base Pairs)',
      gapFillDonor: 'เต่าอัลดาบรา (Aldabrachelys gigantea) และนกกระจอกเทศแอฟริกัน',
      traits: 'หัวใจ 4 ห้องขนาดมหึมา, ปอดโพรงอากาศคู่, อุณหภูมิร่างกายคงที่ (Mesothermic)'
    },
    kinnareemimus: {
      name: 'กินรีไมมัส ขอนแก่นเอนซิส',
      sci: 'Kinnareemimus khonkaenensis',
      genomeCompleteness: '92.4%',
      extractedSource: 'กระดูกฝ่าเท้า Arctometatarsus หมวดหินเสาขัว',
      basePairs: '2.4 พันล้านคู่เบส (Base Pairs)',
      gapFillDonor: 'นกกระจอกเทศ (Struthio camelus) และนกกาฮังไทย',
      traits: 'เส้นใยขนดึกดำบรรพ์ (Proto-feathers), กล้ามเนื้อสะโพกความเร็ว 65 km/h'
    }
  };

  const currentDna = dinoDnaData[activeDnaDino];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Dna className="w-3.5 h-3.5" />
            <span>THE HAMMOND CREATION LAB · THAILAND GENOMICS DIVISION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            ห้องแล็บเพาะพันธุ์พันธุกรรม (The Creation Lab)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            สัมผัสเบื้องหลังความมหัศจรรย์ทางวิทยาศาสตร์ อ้างอิงจาก Jurassic World Experience สถานที่ซึ่งซากฟอสซิลและรหัสพันธุกรรมดึกดำบรรพ์ของไดโนเสาร์ไทยได้รับการถอดรหัสและคืนชีพขึ้นมาอีกครั้ง
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900">
          <img 
            src="/src/assets/images/jurassic_creation_lab_1790147091305.jpg" 
            alt="The Creation Lab Thailand" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-amber-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur">
                FACILITY LEVEL: BIOSAFETY LEVEL 4 (PREHISTORIC)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                ตู้เพาะฟักไข่ไดโนเสาร์และเครื่องเรียงลำดับเบสระดับโมเลกุล
              </h2>
            </div>
            <button
              onClick={() => onNavigate('park-map.html')}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer shadow-md shrink-0"
            >
              ไปดูไดโนเสาร์ตัวจริงในอุทยาน ➔
            </button>
          </div>
        </div>

        {/* INTERACTIVE DNA SEQUENCING SCANNER */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="text-xs font-mono text-amber-400">
                GENOMIC ANALYSIS WORKSTATION
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                การถอดรหัสจีโนมไดโนเสาร์ไทย
              </h2>
            </div>

            {/* Segmented Dinosaur Selector */}
            <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-xl border border-stone-800">
              {(['siamotyrannus', 'phuwiangosaurus', 'kinnareemimus'] as const).map(key => (
                <button
                  key={key}
                  onClick={() => setActiveDnaDino(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeDnaDino === key 
                      ? 'bg-amber-500 text-stone-950 font-bold' 
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {key === 'siamotyrannus' ? 'สยามโมไทรันนัส' : key === 'phuwiangosaurus' ? 'ภูเวียงโกซอรัส' : 'กินรีไมมัส'}
                </button>
              ))}
            </div>
          </div>

          {/* DNA Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Data points */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">{currentDna.name}</h3>
                <div className="font-serif italic text-sm text-amber-300">{currentDna.sci}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-stone-400 text-[11px]">ความสมบูรณ์ของสาย DNA</div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono mt-0.5">{currentDna.genomeCompleteness}</div>
                </div>
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-stone-400 text-[11px]">จำนวนคู่เบสพันธุกรรม</div>
                  <div className="text-sm font-bold text-amber-300 font-mono mt-2">{currentDna.basePairs}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-stone-300 pt-2 border-t border-stone-800">
                <div>
                  <span className="text-stone-500 block text-[11px]">แหล่งสกัดโมเลกุลตั้งต้น:</span>
                  <span className="text-stone-200 font-medium thai-prose">{currentDna.extractedSource}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">สิ่งมีชีวิตเติมเต็มช่องว่าง DNA (Gap Filling Gene):</span>
                  <span className="text-amber-200 font-medium thai-prose">{currentDna.gapFillDonor}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">ลักษณะทางสรีรวิทยาเด่น:</span>
                  <span className="text-stone-300 thai-prose">{currentDna.traits}</span>
                </div>
              </div>

              <button
                onClick={triggerResequence}
                disabled={isSequencing}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-semibold transition-colors cursor-pointer border border-stone-700"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSequencing ? 'animate-spin' : ''}`} />
                <span>{isSequencing ? 'กำลังประมวลผลสาย DNA...' : 'จำลองการเรียงลำดับเบสใหม่อีกครั้ง'}</span>
              </button>
            </div>

            {/* Right Column: Visual DNA Helix Code HUD */}
            <div className="md:col-span-5 bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-stone-400 border-b border-stone-800 pb-2">
                <span>DNA HELIX SCANNER</span>
                <span className="text-emerald-400">STATUS: {sequencingProgress}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-900 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-300"
                  style={{ width: `${sequencingProgress}%` }}
                />
              </div>

              {/* Synthetic Nucleotide Sequence Stream */}
              <div className="p-3 bg-stone-900/80 rounded-lg text-[11px] leading-relaxed text-stone-400 overflow-hidden font-mono">
                <div className="text-emerald-400 font-bold mb-1">-- NUCLEOTIDE READOUT --</div>
                <div className="break-all tracking-wider text-stone-300">
                  A-T-G-C-C-G-T-A-A-T-T-G-C-A-T-G-A-A-C-G-T-A-T-C-G-A-T-T-C-C-A-T-G-C-G-A-T-T-A-C-G-A-A-T-C-G-T
                </div>
                <div className="text-[10px] text-amber-400 mt-2">
                  ✓ มาร์กเกอร์โครโมโซมสายพันธุ์ไทยตรวจสอบเรียบร้อย
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Laboratory Stations Guide */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white font-jurassic">
            ขั้นตอนการทำงานภายในศูนย์เพาะพันธุ์ Creation Lab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              {
                step: '01',
                title: 'การขุดเจาะอำพัน & สกัดฟอสซิล',
                desc: 'นำชิ้นส่วนอำพันดึกดำบรรพ์และโพรงกระดูกไดโนเสาร์จากชั้นหินเสาขัวมาสกัดรหัสพันธุกรรม'
              },
              {
                step: '02',
                title: 'การประกอบรหัสพันธุกรรม',
                desc: 'ใช้ซูเปอร์คอมพิวเตอร์เปรียบเทียบลำดับเบสและเติมเต็มรอยต่อด้วย DNA นกและสัตว์เลื้อยคลาน'
              },
              {
                step: '03',
                title: 'การเพาะฟักในตู้เทียม (Incubation)',
                desc: 'ควบคุมอุณหภูมิและความชื้นสัมพัทธ์ในตู้กระจกสุญญากาศให้ตรงกับสภาพอากาศยุคครีเทเชียส'
              },
              {
                step: '04',
                title: 'ศูนย์อนุบาลและปรับตัว',
                desc: 'ดูแลไดโนเสาร์วัยแรกเกิดอย่างใกล้ชิด ก่อนปล่อยตัวเข้าสู่พื้นที่ธรรมชาติของอุทยาน'
              }
            ].map(item => (
              <div key={item.step} className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                <div className="text-lg font-jurassic font-black text-amber-500">{item.step}.</div>
                <div className="font-bold text-sm text-stone-200">{item.title}</div>
                <p className="thai-prose text-stone-400 leading-relaxed text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
