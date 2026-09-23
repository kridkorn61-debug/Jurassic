import { StudentMember } from '../types';

export const INITIAL_STUDENTS: StudentMember[] = [
  {
    id: 'std-1',
    studentId: '6601012620001',
    fullName: 'นายกฤษกร รัตนวงศ์พาณิชย์',
    nickname: 'กฤษ',
    role: 'หัวหน้ากลุ่ม & พัฒนาระบบ Interactive Park Map',
    department: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    faculty: 'คณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศ',
    email: 'kridkorn.r@student.ac.th',
    quote: 'มุ่งมั่นสร้างสรรค์ประสบการณ์การเรียนรู้ไดโนเสาร์ไทยผ่านเทคโนโลยีเว็บเสมือนจริง'
  },
  {
    id: 'std-2',
    studentId: '6601012620002',
    fullName: 'นางสาวธันยพร ศิริปัญญากุล',
    nickname: 'เมย์',
    role: 'นักออกแบบ UI/UX & รวบรวมข้อมูลสายพันธุ์ไดโนเสาร์',
    department: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    faculty: 'คณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศ',
    email: 'thanyaporn.s@student.ac.th',
    quote: 'รวบรวมข้อมูลฟอสซิลและบรรพชีวินวิทยาไทยให้เข้าถึงง่ายและน่าตื่นตาตื่นใจ'
  },
  {
    id: 'std-3',
    studentId: '6601012620003',
    fullName: 'นายภูริณัฐ พงษ์สิทธิศักดิ์',
    nickname: 'ภู',
    role: 'พัฒนาระบบ Safari Cruiser & เสียงสังเคราะห์ Web Audio',
    department: 'สาขาวิชาวิศวกรรมซอฟต์แวร์',
    faculty: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี',
    email: 'phurinat.p@student.ac.th',
    quote: 'ถ่ายทอดบรรยากาศ Jurassic World ผสานวิทยาการธรณีวิทยาไทยสู่หน้าจอ'
  },
  {
    id: 'std-4',
    studentId: '6601012620004',
    fullName: 'นางสาวกนกวรรณ จันทร์ประเสริฐ',
    nickname: 'น้ำ',
    role: 'พัฒนาหน้าเว็บ Creation Lab, Fossil Sites & สื่อมัลติมีเดีย',
    department: 'สาขาวิชาเทคโนโลยีสารสนเทศ',
    faculty: 'คณะวิทยาการสารสนเทศ',
    email: 'kanokwan.j@student.ac.th',
    quote: 'เชื่อมโยงอดีตยุคดึกดำบรรพ์กับจินตนาการระดับโลกด้วยความถูกต้องทางวิชาการ'
  }
];

export const PARK_CONTACT_INFO = {
  parkNameThai: 'อุทยานจูราสสิค เวิลด์ ประเทศไทย (ศูนย์จำลองการเรียนรู้ไดโนเสาร์สยาม)',
  parkNameEng: 'Jurassic World Thailand: Thai Dinosaurs Virtual Safari Experience',
  location: 'ศูนย์ศึกษาและอนุรักษ์ซากดึกดำบรรพ์ ที่ราบสูงโคราช-ภูเวียง อำเภอภูเวียง จังหวัดขอนแก่น 40150',
  operatingHours: 'เปิดบริการทุกวัน 09:00 - 18:00 น. (รอบสุดท้ายสำหรับรถทัวร์ซาฟารี 17:00 น.)',
  ticketHotline: '043-438-2026, 043-438-2027',
  emergencyRadio: 'Jurassic Park Dispatch Center: คลื่นความถี่ 144.950 MHz',
  email: 'safari-reserve@jurassicworld-thailand.org',
  lineId: '@jurassicthailand',
  facebook: 'Jurassic World Thailand Dinosaur Safari',
  referenceOfficial: 'https://jurassicworldexperience.com/th/#about'
};
