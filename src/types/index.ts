export type PageRoute = 
  | 'index.html'
  | 'park-map.html'
  | 'thai-dinosaurs.html'
  | 'safari-cruiser.html'
  | 'creation-lab.html'
  | 'fossil-sites.html'
  | 'park-zones.html'
  | 'about-exhibition.html'
  | 'visitor-guide.html'
  | 'contact.html';

export type DietType = 'กินเนื้อ (Carnivore)' | 'กินพืช (Herbivore)' | 'กินปลา/สัตว์น้ำ (Piscivore)' | 'กินทั้งพืชและสัตว์ (Omnivore)';

export type DinosaurGroup = 'Theropod' | 'Sauropod' | 'Spinosaurid' | 'Ornithomimosaur' | 'Iguanodontian' | 'Ankylosaur';

export interface Dinosaur {
  id: string;
  nameThai: string;
  nameSci: string;
  meaning: string;
  period: string;
  ageMillionYears: string;
  excavationSite: string;
  province: string;
  formation: string;
  discoverer: string;
  yearDiscovered: number;
  diet: DietType;
  group: DinosaurGroup;
  lengthMeters: number;
  heightMeters: number;
  weightTons: number;
  dangerLevel: 1 | 2 | 3 | 4 | 5;
  zoneId: string;
  mapCoords: { x: number; y: number }; // Percentage 0 - 100 on park map
  summary: string;
  description: string;
  fossilFeatures: string[];
  image: string;
  funFact: string;
}

export interface StudentMember {
  id: string;
  studentId: string; // รหัสนิสิต เช่น 6601012345
  fullName: string; // ชื่อ-นามสกุล
  nickname: string; // ชื่อเล่น
  role: string; // บทบาทในโครงงาน
  department: string; // สาขาวิชา
  faculty: string; // คณะ
  email: string; // อีเมลนิสิต
  avatarUrl?: string;
  quote?: string;
}

export interface ParkZone {
  id: string;
  code: string;
  nameThai: string;
  nameEng: string;
  description: string;
  hazardLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  primarySpecies: string[];
  trackStopNumber: number;
  color: string;
}

export interface TourStation {
  stopNumber: number;
  name: string;
  thaiName: string;
  x: number;
  y: number;
  dinosaurId: string;
  audioGuideThai: string;
}
