import { ParkZone, TourStation } from '../types';

export const PARK_ZONES: ParkZone[] = [
  {
    id: 'zone-sauropod',
    code: 'ZONE-A',
    nameThai: 'หุบเขาซอโรพอดคอยาว (Sauropod Valley)',
    nameEng: 'Valley of the Giants',
    description: 'พื้นที่ลุ่มชื้นแม่น้ำโบราณที่มีต้นสน ปรง และเฟิร์นยักษ์ เป็นถิ่นอาศัยของยักษ์ใหญ่ใจดี ภูเวียงโกซอรัส และอีสานโนซอรัส',
    hazardLevel: 'Low',
    primarySpecies: ['phuwiangosaurus', 'isanosaurus'],
    trackStopNumber: 1,
    color: '#059669' // Emerald
  },
  {
    id: 'zone-khorat',
    code: 'ZONE-B',
    nameThai: 'ที่ราบโบราณโคราช (Khorat Cretaceous Plain)',
    nameEng: 'Khorat Prehistoric Plains',
    description: 'ทุ่งโล่งกึ่งแห้งแล้งและพงหญ้าโบราณ แหล่งหากินของฝูงสิรินธรนา สยามโมดอน และรถถังมีชีวิต สยามเพลตา',
    hazardLevel: 'Low',
    primarySpecies: ['sirindhorna', 'siamodon', 'siampelta'],
    trackStopNumber: 2,
    color: '#d97706' // Amber
  },
  {
    id: 'zone-carnivore',
    code: 'ZONE-C',
    nameThai: 'สันเขานักล่าสายฟ้า (Apex Carnivore Enclosure)',
    nameEng: 'Siamotyrannus Apex Ridge',
    description: 'พื้นที่กักกันรั้วไฟฟ้าแรงสูง 10,000 โวลต์ ถิ่นครองอำนาจของ สยามโมไทรันนัส, ภูเวียงเวเนเตอร์ และฝูงวายุแรปเตอร์',
    hazardLevel: 'Extreme',
    primarySpecies: ['siamotyrannus', 'phuwiangvenator', 'vayuraptor'],
    trackStopNumber: 3,
    color: '#dc2626' // Red
  },
  {
    id: 'zone-wetland',
    code: 'ZONE-D',
    nameThai: 'ลุ่มน้ำนักล่าสไปโนซอร์ (Spinosaurid Lagoon)',
    nameEng: 'Prehistoric River Basin',
    description: 'แม่น้ำและบึงน้ำลึกที่เต็มไปด้วยปลาดึกดำบรรพ์และสัตว์เลื้อยคลานน้ำ อาณาเขตล่าของ สยามโมซอรัส สุธีธรนี',
    hazardLevel: 'High',
    primarySpecies: ['siamosaurus'],
    trackStopNumber: 4,
    color: '#0284c7' // Sky
  },
  {
    id: 'zone-savannah',
    code: 'ZONE-E',
    nameThai: 'ทุ่งสปีดกินรีไมมัส (Ornithomimus Run)',
    nameEng: 'Gallimimus Safari Plains',
    description: 'ลานทุ่งกว้างเปิดโล่งที่ขนานไปกับรางรถทัวร์ซาฟารี สามารถพบเห็นฝูงกินรีไมมัสวิ่งแข่งขันไปพร้อมกับขบวนรถ',
    hazardLevel: 'Low',
    primarySpecies: ['kinnareemimus'],
    trackStopNumber: 5,
    color: '#84cc16' // Lime
  }
];

export const TOUR_STATIONS: TourStation[] = [
  {
    stopNumber: 1,
    name: 'Phuwiang Sauropod Sanctuary',
    thaiName: 'สถานีที่ 1: เขตสงวนพันธุ์ซอโรพอดภูเวียง',
    x: 26,
    y: 38,
    dinosaurId: 'phuwiangosaurus',
    audioGuideThai: 'ยินดีต้อนรับสู่หุบเขาซอโรพอด ด้านซ้ายมือของขบวนรถคือ ภูเวียงโกซอรัส สิรินธรเน ยักษ์ใหญ่คอยาวกว่า 19 เมตรที่สง่างามที่สุดของสยาม'
  },
  {
    stopNumber: 2,
    name: 'Triassic Primordial Woods',
    thaiName: 'สถานีที่ 2: ไพรโบราณยุคไทรแอสสิก ชัยภูมิ',
    x: 18,
    y: 58,
    dinosaurId: 'isanosaurus',
    audioGuideThai: 'เรากำลังย้อนเวลากลับไป 210 ล้านปี พบกับ อีสานโนซอรัส อรรถวิภัชน์ชี หนึ่งในบรรพบุรุษซอโรพอดที่เก่าแก่ที่สุดในประวัติศาสตร์โลก'
  },
  {
    stopNumber: 3,
    name: 'Kinnaree Sprint Plains',
    thaiName: 'สถานีที่ 3: ทุ่งสปีดฝูงกินรีไมมัส',
    x: 35,
    y: 72,
    dinosaurId: 'kinnareemimus',
    audioGuideThai: 'โปรดสังเกตทุ่งหญ้าทางขวา กินรีไมมัส ไดโนเสาร์นกกระจอกเทศกำลังเร่งฝีเท้าเคียงคู่รถทัวร์ ด้วยความเร็วสูงถึง 65 กม./ชม.'
  },
  {
    stopNumber: 4,
    name: 'Spinosaurid Mangrove Reserve',
    thaiName: 'สถานีที่ 4: บึงน้ำนักล่าสยามโมซอรัส',
    x: 48,
    y: 55,
    dinosaurId: 'siamosaurus',
    audioGuideThai: 'ลดความเร็วขบวนรถ... ในบึงน้ำเบื้องหน้าคือ สยามโมซอรัส สุธีธรนี ฟันจระเข้รูปกรวยยาวของมันกำลังจ้องจับปลาโบราณขนาดยักษ์'
  },
  {
    stopNumber: 5,
    name: 'Khorat Armored & Hadrosaur Haven',
    thaiName: 'สถานีที่ 5: ทุ่งปากเป็ดและรถถังเกราะโคราช',
    x: 58,
    y: 78,
    dinosaurId: 'siampelta',
    audioGuideThai: 'พบกับ สยามเพลตา ไดโนเสาร์หุ้มเกราะแองคิโลซอร์ชนิดแรกของไทย ที่มีเกราะหนาประดุจรถถังธรรมชาติ'
  },
  {
    stopNumber: 6,
    name: 'Siamodon Herbivore Outpost',
    thaiName: 'สถานีที่ 6: ด่านสังเกตการณ์สิรินธรนา & สยามโมดอน',
    x: 50,
    y: 22,
    dinosaurId: 'sirindhorna',
    audioGuideThai: 'ทางตอนเหนือของที่ราบโคราช สิรินธรนา โคราชเอนซิส กำลังเล็มยอดไม้อย่างเพลิดเพลิน ด้วยกะโหลกฟันบดพืชที่สมบูรณ์ที่สุด'
  },
  {
    stopNumber: 7,
    name: 'Wind Raptor Paddock',
    thaiName: 'สถานีที่ 7: กรงกักกันวายุแรปเตอร์ หนองบัวลำภู',
    x: 82,
    y: 74,
    dinosaurId: 'vayuraptor',
    audioGuideThai: 'เข้าสู่เขตความปลอดภัยระดับสูง วายุแรปเตอร์ แรปเตอร์สายลมที่รวดเร็วและปราดเปรียว สังเกตการณ์อย่างระมัดระวัง'
  },
  {
    stopNumber: 8,
    name: 'Megaraptor Forest Sector',
    thaiName: 'สถานีที่ 8: เขตพงไพรภูเวียงเวเนเตอร์',
    x: 78,
    y: 52,
    dinosaurId: 'phuwiangvenator',
    audioGuideThai: 'ภูเวียงเวเนเตอร์ แย้มนิยมมี เมกะแรปเตอร์กรงเล็บเคียวยักษ์ที่เพิ่งค้นพบใหม่ มีความฉลาดและคล่องตัวสูงอย่างยิ่ง'
  },
  {
    stopNumber: 9,
    name: 'Siamotyrannus Apex Enclosure',
    thaiName: 'สถานีที่ 9: สุดยอดเขตหวงห้าม สยามโมไทรันนัส',
    x: 68,
    y: 32,
    dinosaurId: 'siamotyrannus',
    audioGuideThai: 'สัญญาณเตือนภัยสีแดง... ท่านกำลังประจันหน้ากับ สยามโมไทรันนัส อีสานเอนซิส นักล่าอันดับหนึ่งและบรรพบุรุษทีเร็กซ์แห่งสยาม!'
  }
];
