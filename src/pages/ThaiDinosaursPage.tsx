import React, { useState } from 'react';
import { THAI_DINOSAURS } from '../data/dinosaurs';
import { Dinosaur, DinosaurGroup } from '../types';
import { DinosaurModal } from '../components/DinosaurModal';
import { playDinosaurRoar } from '../utils/audio';
import { Search, Volume2, ArrowRight, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface ThaiDinosaursPageProps {
  onNavigateToMap?: (dinoId: string) => void;
}

export const ThaiDinosaursPage: React.FC<ThaiDinosaursPageProps> = ({ onNavigateToMap }) => {
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');

  const groups: { id: string; label: string }[] = [
    { id: 'all', label: 'ทุกกลุ่มสายพันธุ์ (All Groups)' },
    { id: 'Theropod', label: 'เทอโรพอด (Theropods นักล่า)' },
    { id: 'Sauropod', label: 'ซอโรพอด (Sauropods คอยาว)' },
    { id: 'Spinosaurid', label: 'สไปโนซอริด (Spinosaurids กินปลา)' },
    { id: 'Ornithomimosaur', label: 'ออร์นิโธมิโมซอร์ (นกกระจอกเทศ)' },
    { id: 'Iguanodontian', label: 'อิกัวโนดอนต์ (ปากเป็ดกินพืช)' },
    { id: 'Ankylosaur', label: 'แองคิโลซอร์ (หุ้มเกราะ)' },
  ];

  const provinces = ['all', 'ขอนแก่น', 'นครราชสีมา (โคราช)', 'ชัยภูมิ', 'หนองบัวลำภู'];

  const filtered = THAI_DINOSAURS.filter(dino => {
    const matchesSearch = 
      dino.nameThai.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dino.nameSci.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dino.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dino.summary.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGroup = selectedGroup === 'all' || dino.group === selectedGroup;
    const matchesProvince = selectedProvince === 'all' || dino.province.includes(selectedProvince.split(' ')[0]);

    return matchesSearch && matchesGroup && matchesProvince;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PALEONTOLOGICAL COMPENDIUM · THAILAND FOSSIL ARCHIVES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            สารานุกรมไดโนเสาร์ไทย (Thai Dinosaur Encyclopedia)
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            รวบรวมสายพันธุ์ไดโนเสาร์ที่ค้นพบในประเทศไทยอย่างครบถ้วน ได้รับการยอมรับในระดับนานาชาติ พร้อมข้อมูลกายวิภาค แหล่งขุดค้นในหมวดหินเสาขัวและโคกกรวด และระดับการดูแลความปลอดภัยในอุทยาน
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อไทย, ชื่อวิทยาศาสตร์, จังหวัด, หรือหมวดหิน..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Province Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 text-xs sm:text-sm focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="all">ทุกจังหวัดในไทย (All Provinces)</option>
                {provinces.filter(p => p !== 'all').map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Group Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 text-xs sm:text-sm focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {groups.map(g => (
                  <option key={g.id} value={g.id}>{g.label}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Stats Strip */}
          <div className="flex flex-wrap items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-800/80">
            <div>
              พบไดโนเสาร์ตรงตามเงื่อนไข: <strong className="text-amber-400 font-mono">{filtered.length}</strong> สายพันธุ์
            </div>
            <div className="text-[11px] text-stone-500">
              ข้อมูลทางวิทยาศาสตร์อ้างอิงจาก กรมทรัพยากรธรณีวิทยา กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม
            </div>
          </div>
        </div>

        {/* Dinosaur Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(dino => (
            <div
              key={dino.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                  <img
                    src={dino.image}
                    alt={dino.nameSci}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top indicators */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px]">
                    <span className="font-mono bg-black/70 backdrop-blur px-2.5 py-0.5 rounded text-amber-300 border border-stone-700">
                      {dino.province}
                    </span>
                    <span className={`px-2 py-0.5 rounded font-medium text-[10px] ${
                      dino.dangerLevel >= 4 
                        ? 'bg-red-950/80 text-red-300 border border-red-800' 
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                    }`}>
                      {dino.diet.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-mono">
                    {dino.period.split(' ')[0]} · {dino.formation.split(' ')[0]}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dino.nameThai}
                  </h3>
                  <div className="font-serif italic text-xs text-amber-200/80">
                    {dino.nameSci}
                  </div>
                  <p className="thai-prose text-xs text-stone-300 line-clamp-3 leading-relaxed">
                    {dino.summary}
                  </p>

                  {/* Micro stats table */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-800/80 text-[11px] text-center font-mono">
                    <div className="p-1.5 rounded bg-stone-950 border border-stone-800/60">
                      <div className="text-stone-500 text-[10px]">ยาว</div>
                      <div className="text-amber-400 font-bold">{dino.lengthMeters} ม.</div>
                    </div>
                    <div className="p-1.5 rounded bg-stone-950 border border-stone-800/60">
                      <div className="text-stone-500 text-[10px]">สูง</div>
                      <div className="text-amber-400 font-bold">{dino.heightMeters} ม.</div>
                    </div>
                    <div className="p-1.5 rounded bg-stone-950 border border-stone-800/60">
                      <div className="text-stone-500 text-[10px]">น้ำหนัก</div>
                      <div className="text-amber-400 font-bold">
                        {dino.weightTons >= 1 ? `${dino.weightTons} ตัน` : `${Math.round(dino.weightTons * 1000)} กก.`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-stone-800/80 mt-2">
                <button
                  onClick={() => setSelectedDino(dino)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>รายละเอียดสายพันธุ์</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => playDinosaurRoar(dino.dangerLevel)}
                  title="ฟังเสียงสังเคราะห์"
                  className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dinosaur Dossier Modal */}
      <DinosaurModal
        dinosaur={selectedDino}
        onClose={() => setSelectedDino(null)}
        onNavigateToDino={onNavigateToMap}
      />
    </div>
  );
};
