import React, { useState } from 'react';
import { MapPin, Pickaxe, Landmark, Compass, Calendar, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface FossilSitesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const FossilSitesPage: React.FC<FossilSitesPageProps> = ({ onNavigate }) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>('phuwiang');

  const sites = [
    {
      id: 'phuwiang',
      name: 'อุทยานแห่งชาติภูเวียง',
      province: 'จังหวัดขอนแก่น',
      significance: 'จุดเริ่มต้นประวัติศาสตร์การค้นพบไดโนเสาร์แห่งแรกในประเทศไทย',
      discoveredYear: 'พ.ศ. 2519 (ค.ศ. 1976)',
      formations: 'หมวดหินเสาขัว (Sao Khua Formation) ยุคครีเทเชียสตอนต้น 130 ล้านปี',
      keyFossils: [
        'สยามโมไทรันนัส อีสานเอนซิส (หลุมขุดค้นที่ 9)',
        'ภูเวียงโกซอรัส สิรินธรเน (หลุมขุดค้นที่ 1 และ 2)',
        'สยามโมซอรัส สุธีธรนี (ฟันไดโนเสาร์กินปลาแห่งแรกในเอเชีย)',
        'กินรีไมมัส ขอนแก่นเอนซิส (ไดโนเสาร์นกกระจอกเทศ)',
        'ภูเวียงเวเนเตอร์ แย้มนิยมมี (เมกะแรปเตอร์ตัวแรก)'
      ],
      description: 'เทือกเขาภูเวียงมีลักษณะเป็นแอ่งก้นกะทะล้อมรอบด้วยหน้าผาสูงชัน ในปี 2519 คุณสุธรรม แย้มนิยม ได้ค้นพบกระดูกท่อนปลายขาหลังชิ้นแรกของไทยขณะสำรวจแร่ยูเรเนียม นำไปสู่การร่วมมือระหว่างกรมทรัพยากรธรณีและนักวิทยาศาสตร์ชาวฝรั่งเศส ปัจจุบันมีหลุมขุดค้นเปิดให้นักท่องเที่ยวเข้าศึกษาถึง 9 หลุมหลัก'
    },
    {
      id: 'phukumkhao',
      name: 'ภูกุ้มข้าว (พิพิธภัณฑ์สิรินธร)',
      province: 'อำเภอสหัสขันธ์ จังหวัดกาฬสินธุ์',
      significance: 'แหล่งกระดูกไดโนเสาร์กินพืชที่สมบูรณ์และหนาแน่นที่สุดในเอเชียตะวันออกเฉียงใต้',
      discoveredYear: 'พ.ศ. 2537 (ค.ศ. 1994)',
      formations: 'หมวดหินภูกระดึง (Phu Kradung Formation) ยุคจูราสสิกตอนปลายถึงครีเทเชียส',
      keyFossils: [
        'โครงกระดูกภูเวียงโกซอรัส สิรินธรเน มากกว่า 800 ชิ้นจากอย่างน้อย 7 ตัว',
        'กระดูกสะโพก กระดูกสันหลัง และกระดูกขาที่ฝังตัวในแนวดิ่งดั้งเดิม',
        'ฟอสซิลปลาเลปิโดเทสและฟันจระเข้โบราณเคียงคู่กัน'
      ],
      description: 'ค้นพบโดยพระครูวิจิตรสหัสคุณ เจ้าอาวาสวัดสักกะวัน ก่อนที่ทีมนักธรณีวิทยาจะเข้าขุดค้นและพบโครงกระดูกไดโนเสาร์ซอโรพอดนอนทับถมกันอยู่เป็นจำนวนมาก เป็นหลุมขุดค้นในร่มที่มีการอนุรักษ์ชิ้นส่วนฟอสซิลไว้ในสภาพจริงตามธรรมชาติ และพัฒนาเป็นพิพิธภัณฑ์สิรินธร ศูนย์วิจัยและพิพิธภัณฑ์ไดโนเสาร์ที่ใหญ่ที่สุดในอาเซียน'
    },
    {
      id: 'khorat',
      name: 'แหล่งฟอสซิลที่ราบสูงโคราช (สถาบันวิจัยไม้กลายเป็นทรายฯ)',
      province: 'อำเภอเมือง และ อ.เฉลิมพระเกียรติ จังหวัดนครราชสีมา',
      significance: 'เมืองหลวงแห่งฟอสซิลสัตว์เลี้ยงลูกด้วยนมและไดโนเสาร์ปากเป็ดไทย',
      discoveredYear: 'พ.ศ. 2548 เป็นต้นมา',
      formations: 'หมวดหินโคกกรวด (Khok Kruat Formation) อายุ 115 ล้านปี',
      keyFossils: [
        'สิรินธรนา โคราชเอนซิส (อิกัวโนดอนต์กะโหลกสมบูรณ์ที่สุด)',
        'สยามโมดอน นิ่มงามมิ (ฟันบดพืชโบราณ)',
        'ราชสีมาซอรัส สุรนารีเอ (Ratchasimasaurus suranareae)',
        'สยามเพลตา นครราชสีมาเอนซิส (แองคิโลซอร์หุ้มเกราะตัวแรก)'
      ],
      description: 'พื้นที่ลุ่มแม่น้ำมูลโบราณในจังหวัดนครราชสีมา อุดมไปด้วยฟอสซิลหลากหลายยุค ทั้งไดโนเสาร์ยุคครีเทเชียส ไม้กลายเป็นทราย และช้างดึกดำบรรพ์ยุคซีโนโซอิก ได้รับการรับรองให้เป็น Khorat UNESCO Global Geopark ในระดับสากล'
    },
    {
      id: 'nongbualamphu',
      name: 'แหล่งขุดค้นภูวัด',
      province: 'อำเภอเมือง จังหวัดหนองบัวลำภู',
      significance: 'แหล่งค้นพบไดโนเสาร์นักล่าสายพันธุ์ใหม่ระดับโลก วายุแรปเตอร์',
      discoveredYear: 'พ.ศ. 2551',
      formations: 'หมวดหินเสาขัว (Sao Khua Formation)',
      keyFossils: [
        'วายุแรปเตอร์ หนองบัวลำภูเอนซิส (Vayuraptor)',
        'ฟอสซิลกะโหลกสัตว์เลื้อยคลานและเกล็ดปลาดึกดำบรรพ์'
      ],
      description: 'ภูวัดเป็นเนินเขาหินทรายและหินโคลนสีแดง การศึกษากระดูกข้อเท้าและชิ้นส่วนขาหลังที่พบ ณ แหล่งนี้ ทำให้ค้นพบว่าในยุคครีเทเชียสตอนต้น ดินแดนภาคอีสานของไทยมีนักล่าขนาดกลางสายพันธุ์ใหม่ที่อาศัยอยู่ร่วมกับสยามโมไทรันนัส'
    },
    {
      id: 'chaiyaphum',
      name: 'แหล่งฟอสซิลภูพานคำ หนองบัวแดง',
      province: 'จังหวัดชัยภูมิ',
      significance: 'แหล่งกำเนิดไดโนเสาร์ซอโรพอดคอยาวที่เก่าแก่ที่สุดในโลกยุคไทรแอสสิก 210 ล้านปี',
      discoveredYear: 'พ.ศ. 2541 (ค.ศ. 1998)',
      formations: 'หมวดหินน้ำพอง (Nam Phong Formation) ยุคไทรแอสสิกตอนปลาย',
      keyFossils: [
        'อีสานโนซอรัส อรรถวิภัชน์ชี (Isanosaurus attavipachi)'
      ],
      description: 'กระดูกโคนขาขนาดยักษ์ที่พบในหมวดหินน้ำพอง จังหวัดชัยภูมิ ทำให้วงการบรรพชีวินวิทยาต้องเขียนตำราวิวัฒนาการใหม่ เนื่องจากแสดงให้เห็นว่าไดโนเสาร์ตระกูลคอยาวขนาดยักษ์ได้เริ่มเดินสี่ขาบนแผ่นดินอีสานของไทยตั้งแต่ยุคไทรแอสสิก ก่อนหน้ายุคจูราสสิกที่โลกเคยเข้าใจ'
    }
  ];

  const currentSite = sites.find(s => s.id === selectedSiteId) || sites[0];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center gap-2">
            <Pickaxe className="w-3.5 h-3.5" />
            <span>PALEONTOLOGICAL EXCAVATION SITES · KINGDOM OF THAILAND</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            แหล่งขุดค้นซากดึกดำบรรพ์ในประเทศไทย
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            สำรวจประวัติศาสตร์การค้นพบฟอสซิลไดโนเสาร์บนที่ราบสูงโคราชและภาคอีสานของไทย จากหลุมขุดค้นภูเวียงสู่พิพิธภัณฑ์ระดับโลก แหล่งอ้างอิงข้อมูลทางธรณีวิทยาที่ใช้จำลองอุทยาน Jurassic World Thailand
          </p>
        </div>

        {/* Site Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-800">
          {sites.map(site => (
            <button
              key={site.id}
              onClick={() => setSelectedSiteId(site.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedSiteId === site.id 
                  ? 'bg-amber-500 text-stone-950 font-bold shadow' 
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {site.name} ({site.province.replace('จังหวัด', '')})
            </button>
          ))}
        </div>

        {/* Detailed Site Profile Box */}
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{currentSite.province} · {currentSite.discoveredYear}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentSite.name}
              </h2>
              <p className="text-xs text-stone-300 font-serif italic mt-0.5">
                {currentSite.significance}
              </p>
            </div>

            <div className="text-xs font-mono bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-800 text-stone-400">
              หมวดหิน: {currentSite.formations.split(' ')[0]}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                ประวัติศาสตร์และความสำคัญทางธรณีวิทยา
              </h3>
              <p className="thai-prose text-stone-300 text-sm leading-relaxed">
                {currentSite.description}
              </p>
              
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs">
                <span className="text-stone-400 block font-semibold">ชั้นหินทางธรณีวิทยา (Geological Strata):</span>
                <span className="text-amber-200 thai-prose">{currentSite.formations}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-800 pb-2 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>สายพันธุ์ไดโนเสาร์และฟอสซิลเด่นที่พบ</span>
              </h3>

              <div className="space-y-2">
                {currentSite.keyFossils.map((fossil, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 p-2 rounded bg-stone-900/60 border border-stone-800/80">
                    <span className="font-mono text-amber-500 font-bold shrink-0">0{idx + 1}.</span>
                    <span className="thai-prose">{fossil}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('park-map.html')}
                  className="w-full py-2.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>ดูตำแหน่งบนแผนผังนำเที่ยวอุทยาน</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
