import React, { useState, useEffect, useRef } from 'react';
import { THAI_DINOSAURS } from '../data/dinosaurs';
import { TOUR_STATIONS, PARK_ZONES } from '../data/parkZones';
import { Dinosaur } from '../types';
import { DinosaurModal } from '../components/DinosaurModal';
import { playVehicleStart, playParkChime } from '../utils/audio';
import { 
  Compass, 
  Volume2, 
  Play, 
  Pause, 
  RotateCcw, 
  Info, 
  ShieldCheck, 
  Radio, 
  Layers
} from 'lucide-react';

export const ParkMapPage: React.FC = () => {
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null);
  const [hoveredDino, setHoveredDino] = useState<Dinosaur | null>(null);
  const [currentStationIndex, setCurrentStationIndex] = useState<number>(0);
  const [isAutoTouring, setIsAutoTouring] = useState<boolean>(false);
  const [isVehicleMoving, setIsVehicleMoving] = useState<boolean>(false);
  const [vehiclePos, setVehiclePos] = useState<{ x: number; y: number }>({ x: 26, y: 38 });
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showZonesOverlay, setShowZonesOverlay] = useState<boolean>(true);
  const autoTourIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentStation = TOUR_STATIONS[currentStationIndex];
  const currentDino = THAI_DINOSAURS.find(d => d.id === currentStation.dinosaurId);

  // Animate vehicle to destination coordinates
  const moveVehicleTo = (targetX: number, targetY: number, stationIdx: number) => {
    setIsVehicleMoving(true);
    playVehicleStart();

    // Smooth step animation
    const startX = vehiclePos.x;
    const startY = vehiclePos.y;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease in-out
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setVehiclePos({
        x: startX + (targetX - startX) * ease,
        y: startY + (targetY - startY) * ease
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsVehicleMoving(false);
        setCurrentStationIndex(stationIdx);
        playParkChime();
      }
    };

    requestAnimationFrame(animate);
  };

  const handleStationClick = (stationIdx: number) => {
    const station = TOUR_STATIONS[stationIdx];
    moveVehicleTo(station.x, station.y, stationIdx);
  };

  const handleDinosaurClick = (dino: Dinosaur) => {
    setSelectedDino(dino);
    // Find matching station index if exists
    const stIdx = TOUR_STATIONS.findIndex(s => s.dinosaurId === dino.id);
    if (stIdx !== -1) {
      setCurrentStationIndex(stIdx);
      setVehiclePos({ x: dino.mapCoords.x, y: dino.mapCoords.y });
    }
  };

  // Auto Tour Loop
  useEffect(() => {
    if (isAutoTouring) {
      autoTourIntervalRef.current = setInterval(() => {
        setCurrentStationIndex((prev) => {
          const nextIdx = (prev + 1) % TOUR_STATIONS.length;
          const nextStation = TOUR_STATIONS[nextIdx];
          moveVehicleTo(nextStation.x, nextStation.y, nextIdx);
          return nextIdx;
        });
      }, 7000);
    } else {
      if (autoTourIntervalRef.current) {
        clearInterval(autoTourIntervalRef.current);
      }
    }
    return () => {
      if (autoTourIntervalRef.current) {
        clearInterval(autoTourIntervalRef.current);
      }
    };
  }, [isAutoTouring, vehiclePos]);

  // Filter dinosaurs
  const filteredDinosaurs = THAI_DINOSAURS.filter(d => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'carnivore') return d.diet.includes('เนื้อ') || d.diet.includes('ปลา');
    if (activeFilter === 'herbivore') return d.diet.includes('พืช');
    if (activeFilter === 'omnivore') return d.diet.includes('ทั้งพืช');
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>JURASSIC WORLD THAILAND · GPS DISPATCH SYSTEM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1">
              แผนผังนำเที่ยวอุทยานไดโนเสาร์เสมือนจริง
            </h1>
            <p className="thai-prose text-stone-400 text-sm mt-1 max-w-2xl">
              สำรวจแหล่งที่อยู่ของไดโนเสาร์ไทย 10 สายพันธุ์เด่น นำทางด้วยรถทัวร์ซาฟารีอัตโนมัติ (Jurassic Tour Vehicle) คลิกที่ตัวไดโนเสาร์เพื่อเปิดแฟ้มข้อมูลวิทยาศาสตร์
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsAutoTouring(!isAutoTouring)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                isAutoTouring 
                  ? 'bg-amber-500 border-amber-400 text-stone-950 font-bold' 
                  : 'bg-stone-900 border-stone-700 hover:border-amber-500/60 text-stone-200'
              }`}
            >
              {isAutoTouring ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoTouring ? 'หยุดทัวร์อัตโนมัติ' : 'เริ่มทัวร์อัตโนมัติ (Auto Tour)'}</span>
            </button>

            <button
              onClick={() => {
                setIsAutoTouring(false);
                handleStationClick(0);
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="รีเซ็ตตำแหน่งรถไปยังสถานีแรก"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>รีเซ็ตรถ</span>
            </button>

            <button
              onClick={() => setShowZonesOverlay(!showZonesOverlay)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border transition-colors cursor-pointer ${
                showZonesOverlay 
                  ? 'bg-amber-950/40 border-amber-800/80 text-amber-300' 
                  : 'bg-stone-900 border-stone-800 text-stone-400'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showZonesOverlay ? 'ซ่อนโซน' : 'แสดงโซน'}</span>
            </button>
          </div>
        </div>

        {/* Filter bar (Zero-Pill interactive controls with single-line layout) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-stone-900/60 border border-stone-800/80 p-3 rounded-xl">
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <span className="text-xs text-stone-400 mr-2 shrink-0">กรองสายพันธุ์:</span>
            {[
              { id: 'all', label: 'ทั้งหมด (All Species)' },
              { id: 'carnivore', label: 'นักล่ากินเนื้อ (Theropods)' },
              { id: 'herbivore', label: 'กินพืช (Sauropods/Hadrosaurs)' },
              { id: 'omnivore', label: 'กินพืชและสัตว์ (Omnivores)' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === f.id 
                    ? 'bg-amber-500 text-stone-950 font-bold' 
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-400 flex items-center gap-2 self-end sm:self-center">
            <span>แสดง <strong>{filteredDinosaurs.length}</strong> จาก <strong>{THAI_DINOSAURS.length}</strong> สายพันธุ์</span>
          </div>
        </div>

        {/* The Main Interactive Map Canvas */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-950 rounded-2xl border-2 border-stone-800 overflow-hidden shadow-2xl select-none">
          
          {/* SVG Map Terrain, Track & Boundaries */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 625">
            <defs>
              {/* Grid pattern for high-tech park blueprint */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
              
              {/* Linear Gradients for zones */}
              <linearGradient id="wetlandWater" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.15" />
              </linearGradient>

              <linearGradient id="apexGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#450a0a" stopOpacity="0.1" />
              </linearGradient>

              {/* Glow filter for headlights & active dinosaur */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Blueprint Grid */}
            <rect width="1000" height="625" fill="url(#grid)" />

            {/* Geographical terrain contours */}
            {/* Ancient Lake / Wetland Basin */}
            <path 
              d="M 380 260 C 440 240, 560 300, 540 420 C 520 500, 420 480, 360 410 C 320 360, 340 280, 380 260 Z" 
              fill="url(#wetlandWater)" 
              stroke="#0284c7" 
              strokeWidth="1.5" 
              strokeDasharray="4 2" 
              opacity="0.8" 
            />

            {/* Apex Ridge high-danger sector */}
            {showZonesOverlay && (
              <path 
                d="M 600 120 C 720 100, 920 150, 900 320 C 880 420, 720 380, 640 320 C 590 260, 560 160, 600 120 Z" 
                fill="url(#apexGlow)" 
                stroke="#dc2626" 
                strokeWidth="1.5" 
                strokeDasharray="6 3" 
                opacity="0.7" 
              />
            )}

            {/* Sauropod Valley */}
            {showZonesOverlay && (
              <path 
                d="M 80 180 C 180 140, 340 180, 320 320 C 300 420, 160 480, 100 400 C 60 340, 40 220, 80 180 Z" 
                fill="#059669" 
                fillOpacity="0.08" 
                stroke="#059669" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
              />
            )}

            {/* Paved Safari Route Track */}
            {/* The automated electric rail connecting all stations */}
            <path 
              d="M 260 237 L 180 362 L 350 450 L 480 343 L 580 487 L 820 462 L 780 325 L 680 200 L 500 137 L 380 112 Z" 
              fill="none" 
              stroke="#f59e0b" 
              strokeWidth="3.5" 
              strokeDasharray="8 6" 
              strokeLinecap="round"
              strokeLinejoin="round" 
              opacity="0.85" 
            />
            
            {/* Secondary Track Rail Bed */}
            <path 
              d="M 260 237 L 180 362 L 350 450 L 480 343 L 580 487 L 820 462 L 780 325 L 680 200 L 500 137 L 380 112 Z" 
              fill="none" 
              stroke="#78350f" 
              strokeWidth="8" 
              strokeOpacity="0.3" 
              strokeLinecap="round"
              strokeLinejoin="round" 
            />

            {/* Perimeter Main Security Fence with 10,000V high-voltage warning */}
            <rect 
              x="20" y="20" width="960" height="585" rx="16" 
              fill="none" 
              stroke="#57534e" 
              strokeWidth="2" 
              strokeDasharray="12 4" 
            />

            {/* Zone Labels directly on SVG */}
            <text x="140" y="240" fill="#10b981" fontSize="13" fontFamily="Cinzel" letterSpacing="2" opacity="0.6">
              ZONE A: SAUROPOD VALLEY
            </text>
            <text x="400" y="380" fill="#38bdf8" fontSize="13" fontFamily="Cinzel" letterSpacing="2" opacity="0.6">
              ZONE D: SPINOSAURID BASIN
            </text>
            <text x="700" y="160" fill="#f87171" fontSize="13" fontFamily="Cinzel" letterSpacing="2" opacity="0.7">
              ZONE C: APEX RIDGE (10,000V)
            </text>
            <text x="460" y="90" fill="#fbbf24" fontSize="13" fontFamily="Cinzel" letterSpacing="2" opacity="0.6">
              ZONE B: KHORAT RESERVES
            </text>
          </svg>

          {/* Interactive Dinosaur Markers */}
          {filteredDinosaurs.map((dino) => {
            const isHovered = hoveredDino?.id === dino.id;
            const isSelected = selectedDino?.id === dino.id;
            const isVehicleHere = Math.abs(vehiclePos.x - dino.mapCoords.x) < 4 && Math.abs(vehiclePos.y - dino.mapCoords.y) < 4;

            return (
              <div
                key={dino.id}
                style={{
                  left: `${dino.mapCoords.x}%`,
                  top: `${dino.mapCoords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-20 cursor-pointer group"
                onClick={() => handleDinosaurClick(dino)}
                onMouseEnter={() => setHoveredDino(dino)}
                onMouseLeave={() => setHoveredDino(null)}
              >
                {/* Ping animation if car is targeting this dino */}
                {isVehicleHere && (
                  <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping" />
                )}

                {/* Dinosaur Marker Node */}
                <div className={`relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-300 shadow-lg ${
                  isSelected
                    ? 'bg-amber-500 border-white scale-125 ring-4 ring-amber-500/50'
                    : isHovered
                    ? 'bg-amber-600 border-amber-300 scale-115'
                    : dino.dangerLevel >= 4
                    ? 'bg-red-950/90 border-red-500 text-red-300'
                    : 'bg-stone-900/90 border-amber-500 text-amber-300'
                }`}>
                  <span className="text-base sm:text-lg">
                    {dino.dangerLevel >= 4 ? '🦖' : dino.diet.includes('พืช') ? '🦕' : '🦴'}
                  </span>

                  {/* Danger pulse dot */}
                  <span className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-full border border-stone-900 ${
                    dino.dangerLevel >= 4 ? 'bg-red-500' : 'bg-emerald-500'
                  }`} />
                </div>

                {/* Quiet Marker Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap pointer-events-none">
                  <div className="px-2 py-0.5 rounded bg-stone-950/90 border border-stone-800 text-[10px] sm:text-xs font-medium text-stone-200 shadow-md">
                    {dino.nameThai.split(' ')[0]}
                  </div>
                </div>

                {/* Hover Quick Card */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-stone-900/95 border border-amber-500/70 rounded-xl shadow-2xl z-30 pointer-events-none animate-in fade-in zoom-in-90 duration-150">
                    <div className="text-[10px] uppercase tracking-wider text-amber-400 font-mono">
                      {dino.period.split(' ')[0]} · {dino.province}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {dino.nameThai}
                    </div>
                    <div className="text-xs font-serif italic text-amber-200/90">
                      {dino.nameSci}
                    </div>
                    <div className="mt-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300 flex items-center justify-between">
                      <span>ยาว {dino.lengthMeters} ม.</span>
                      <span className="text-amber-400">คลิกเพื่ออ่านประวัติ ➔</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* THE JURASSIC TOUR VEHICLE (รถภายในเรื่อง Jurassic Tour Cruiser) */}
          <div
            style={{
              left: `${vehiclePos.x}%`,
              top: `${vehiclePos.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: isVehicleMoving ? 'none' : 'transform 0.2s ease-out',
            }}
            className="absolute z-30 pointer-events-none"
          >
            {/* Headlights illumination cones */}
            <div className="relative">
              <div 
                className="absolute top-1/2 left-full -translate-y-1/2 w-28 h-16 pointer-events-none opacity-40 bg-gradient-to-r from-amber-300/80 via-amber-200/20 to-transparent"
                style={{ clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)' }}
              />

              {/* Vehicle Body Representation */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 via-amber-500 to-yellow-500 border-2 border-white shadow-2xl text-stone-950 font-bold text-xs">
                <span className="text-sm">🚙</span>
                <span className="font-mono text-[11px] font-extrabold tracking-tight">TOUR-01</span>
                {isVehicleMoving && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                )}
              </div>

              {/* Status flag bubble */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-stone-950/90 text-amber-300 border border-amber-500/50 shadow">
                  {isVehicleMoving ? 'กำลังขับเคลื่อน...' : `สถานีที่ ${currentStation.stopNumber}`}
                </span>
              </div>
            </div>
          </div>

          {/* Compass Rose */}
          <div className="absolute top-4 right-4 pointer-events-none flex flex-col items-center opacity-60">
            <div className="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center text-[10px] font-mono text-amber-400">
              N
            </div>
            <div className="text-[9px] font-mono text-stone-500 mt-0.5">ภูเวียง-โคราช</div>
          </div>

        </div>

        {/* ON-BOARD TOUR VEHICLE DASHBOARD & AUDIO GUIDE HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl">
          
          {/* Left HUD: Audio Guide & Vehicle Status */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>วิทยุสื่อสารประจำรถทัวร์ (JURASSIC TOUR DISPATCH AUDIO)</span>
              </div>
              <div className="text-xs font-mono text-stone-400">
                ตำแหน่ง: <strong>{currentStation.x}% N, {currentStation.y}% E</strong>
              </div>
            </div>

            <div>
              <div className="text-xs text-amber-500 font-semibold mb-1">
                {currentStation.thaiName}
              </div>
              <p className="thai-prose text-stone-200 text-sm md:text-base leading-relaxed bg-stone-950 p-4 rounded-xl border border-stone-800/80">
                &ldquo;{currentStation.audioGuideThai}&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {currentDino && (
                <button
                  onClick={() => setSelectedDino(currentDino)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                  <span>เปิดแฟ้มประวัติ: {currentDino.nameThai}</span>
                </button>
              )}

              <button
                onClick={() => playParkChime()}
                className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>ทดสอบสัญญาณเตือนอุทยาน</span>
              </button>

              <div className="text-xs text-stone-400 flex items-center gap-1.5 ml-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>สถานะรถ: พร้อมให้บริการอัตโนมัติ 100%</span>
              </div>
            </div>
          </div>

          {/* Right HUD: Station Jump List */}
          <div className="lg:col-span-4 bg-stone-950/60 rounded-xl p-4 border border-stone-800/80 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-300 pb-2 border-b border-stone-800">
              <span>สถานีนำเที่ยวรอบอุทยาน (9 จุด)</span>
              <span className="text-stone-500 font-mono">SELECT STOP</span>
            </div>

            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {TOUR_STATIONS.map((station, idx) => {
                const isActive = currentStationIndex === idx;
                const dino = THAI_DINOSAURS.find(d => d.id === station.dinosaurId);

                return (
                  <button
                    key={station.stopNumber}
                    onClick={() => handleStationClick(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500/20 border border-amber-500/80 text-amber-300 font-semibold' 
                        : 'bg-stone-900/60 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-transparent'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="truncate">{station.thaiName}</div>
                      <div className="text-[10px] text-stone-500 italic">{dino?.nameSci}</div>
                    </div>
                    <span className="text-[11px] font-mono shrink-0 px-1.5 py-0.5 rounded bg-stone-950 text-stone-400">
                      0{station.stopNumber}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Zone Reference Cards */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-500" />
              <span>โซนระบบนิเวศและพื้นที่กักกันความปลอดภัย (Safari Enclosures)</span>
            </h2>
            <span className="text-xs text-stone-400">5 โซนควบคุมหลัก</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {PARK_ZONES.map(zone => (
              <div 
                key={zone.id}
                className="bg-stone-900 border border-stone-800 rounded-xl p-4 space-y-2 hover:border-stone-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-amber-400">{zone.code}</span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                    zone.hazardLevel === 'Extreme' ? 'bg-red-950 text-red-400 border border-red-800' :
                    zone.hazardLevel === 'High' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                    'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}>
                    {zone.hazardLevel} Hazard
                  </span>
                </div>
                <div className="font-bold text-sm text-stone-100">{zone.nameThai}</div>
                <p className="text-xs text-stone-400 line-clamp-3 thai-prose">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Dinosaur Dossier Modal */}
      <DinosaurModal 
        dinosaur={selectedDino} 
        onClose={() => setSelectedDino(null)}
        onNavigateToDino={(dinoId) => {
          const stIdx = TOUR_STATIONS.findIndex(s => s.dinosaurId === dinoId);
          if (stIdx !== -1) {
            handleStationClick(stIdx);
          }
        }}
      />
    </div>
  );
};
