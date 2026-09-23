import React, { useState, useEffect } from 'react';
import { INITIAL_STUDENTS, PARK_CONTACT_INFO } from '../data/students';
import { StudentMember } from '../types';
import { 
  Users, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Edit3, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [students, setStudents] = useState<StudentMember[]>(() => {
    const saved = localStorage.getItem('jurassic_students_roster');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_STUDENTS;
      }
    }
    return INITIAL_STUDENTS;
  });

  const [isEditingRoster, setIsEditingRoster] = useState(false);
  const [editFormData, setEditFormData] = useState<StudentMember[]>(students);

  // Contact form state
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('จองตั๋วทัศนศึกษาโรงเรียน / มหาวิทยาลัย');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('jurassic_students_roster', JSON.stringify(students));
  }, [students]);

  const handleSaveRoster = (e: React.FormEvent) => {
    e.preventDefault();
    setStudents(editFormData);
    setIsEditingRoster(false);
  };

  const handleUpdateStudent = (index: number, field: keyof StudentMember, value: string) => {
    const updated = [...editFormData];
    updated[index] = { ...updated[index], [field]: value };
    setEditFormData(updated);
  };

  const handleAddStudent = () => {
    const newStudent: StudentMember = {
      id: `std-${Date.now()}`,
      studentId: '660101262000' + (editFormData.length + 1),
      fullName: 'ชื่อ-นามสกุล นิสิตใหม่',
      nickname: 'ชื่อเล่น',
      role: 'ร่วมพัฒนาโครงงานและค้นคว้าข้อมูล',
      department: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
      faculty: 'คณะวิทยาศาสตร์และเทคโนโลยีสารสนเทศ',
      email: 'student@university.ac.th',
      quote: 'ร่วมพัฒนาเว็บไซต์อุทยานเสมือนจริง'
    };
    setEditFormData([...editFormData, newStudent]);
  };

  const handleRemoveStudent = (index: number) => {
    if (editFormData.length <= 1) return;
    setEditFormData(editFormData.filter((_, i) => i !== index));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    const ticketNumber = 'JW-TH-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedMessage(`ส่งข้อมูลสำเร็จ! รหัสคำขอติดต่อของท่านคือ ${ticketNumber} ทีมงานอุทยานจะติดต่อกลับไปยัง ${senderEmail} โดยเร็วที่สุด`);
    
    // Reset form
    setSenderName('');
    setSenderOrg('');
    setSenderEmail('');
    setSenderPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="border-b border-stone-800 pb-8 text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-mono flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>CONTACT & PROJECT ROSTER DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-jurassic">
            ติดต่ออุทยาน & คณะผู้จัดทำนิสิต
          </h1>
          <p className="thai-prose text-stone-400 text-sm sm:text-base leading-relaxed">
            หน้าเว็บเพจสำหรับการติดต่อ (Contact) พร้อมรายชื่อคณะนิสิตผู้พัฒนาโครงงาน รหัสประจำตัวนิสิต และแบบฟอร์มติดต่อสอบถามนิทรรศการไดโนเสาร์ไทย จูราสสิค เวิลด์
          </p>
        </div>

        {/* SECTION 1: คณะผู้จัดทำโครงงาน (STUDENT GROUP MEMBERS & STUDENT IDS) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  รายชื่อสมาชิกในกลุ่มและรหัสประจำตัวนิสิต
                </h2>
              </div>
              <p className="text-xs text-stone-400 mt-0.5 thai-prose">
                คณะผู้พัฒนาโครงงานเว็บไซต์การเรียนรู้บรรพชีวินวิทยาเสมือนจริง Jurassic World Thailand
              </p>
            </div>

            <button
              onClick={() => {
                setEditFormData(students);
                setIsEditingRoster(true);
              }}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 hover:border-amber-500/60 transition-colors self-start sm:self-center cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>แก้ไข / ปรับแต่งรายชื่อและรหัสนิสิต</span>
            </button>
          </div>

          {/* Student Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {students.map((std, idx) => (
              <div 
                key={std.id}
                className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 space-y-4 hover:border-amber-500/50 transition-all duration-300 shadow-lg group relative overflow-hidden"
              >
                {/* Number Watermark */}
                <div className="absolute top-3 right-4 text-3xl font-jurassic font-black text-stone-800 pointer-events-none group-hover:text-stone-700 transition-colors">
                  0{idx + 1}
                </div>

                <div className="space-y-1 relative z-10">
                  <div className="text-[11px] font-mono text-amber-400 tracking-wider">
                    รหัสนิสิต (STUDENT ID)
                  </div>
                  <div className="font-mono text-lg font-bold text-white tracking-wider bg-stone-950/80 px-2.5 py-1 rounded border border-stone-800/80 inline-block text-amber-300">
                    {std.studentId}
                  </div>
                </div>

                <div className="space-y-1 relative z-10">
                  <h3 className="font-bold text-base text-white group-hover:text-amber-200 transition-colors">
                    {std.fullName}
                  </h3>
                  <div className="text-xs text-stone-400">
                    ชื่อเล่น: <strong className="text-stone-300">{std.nickname}</strong>
                  </div>
                </div>

                <div className="text-xs space-y-2 pt-2 border-t border-stone-800/80 text-stone-300">
                  <div>
                    <span className="text-stone-500 block text-[11px]">หน้าที่ในโครงงาน:</span>
                    <span className="text-amber-300 font-medium thai-prose">{std.role}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[11px]">ภาควิชา / คณะ:</span>
                    <span className="text-stone-300">{std.department}</span>
                    <div className="text-stone-400 text-[11px]">{std.faculty}</div>
                  </div>
                  {std.email && (
                    <div className="text-stone-400 truncate text-[11px]">
                      ✉️ {std.email}
                    </div>
                  )}
                </div>

                {std.quote && (
                  <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800/60 text-[11px] italic text-stone-400 thai-prose">
                    &ldquo;{std.quote}&rdquo;
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Academic Notice Banner */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-amber-200/90 text-xs flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-base">🎓</span>
              <span>
                โครงงานเว็บไซต์นี้พัฒนาขึ้นเพื่อวัตถุประสงค์ทางการศึกษาและการนำเสนอคุณค่าของไดโนเสาร์ในประเทศไทย
              </span>
            </div>
            <div className="text-stone-400 text-[11px]">
              จำนวนสมาชิกในกลุ่ม: <strong className="text-white">{students.length} คน</strong>
            </div>
          </div>
        </section>

        {/* SECTION 2: แบบฟอร์มติดต่อ (CONTACT INQUIRY FORM) & ข้อมูลอุทยาน */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-stone-800">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-400" />
                <span>แบบฟอร์มส่งข้อความติดต่อ (Contact Form)</span>
              </h2>
              <p className="thai-prose text-stone-400 text-xs mt-1">
                สำหรับผู้ที่สนใจเยี่ยมชมนิทรรศการ จองรอบทัวร์หมู่คณะ หรือสอบถามข้อมูลทางธรณีวิทยา
              </p>
            </div>

            {submittedMessage && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="thai-prose font-medium">{submittedMessage}</div>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-stone-300 font-medium">ชื่อ-นามสกุล *</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="เช่น ดร.วรวุฒิ นภาดล"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-stone-300 font-medium">สถาบัน / โรงเรียน / องค์กร</label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="เช่น โรงเรียนสาธิตฯ / มหาวิทยาลัย"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-stone-300 font-medium">อีเมลติดต่อกลับ *</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-stone-300 font-medium">หมายเลขโทรศัพท์</label>
                  <input
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="08X-XXX-XXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-stone-300 font-medium">หัวข้อเรื่องที่ติดต่อ</label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option>จองตั๋วทัศนศึกษาโรงเรียน / มหาวิทยาลัย (School Expedition)</option>
                  <option>สอบถามข้อมูลทางวิชาการและซากดึกดำบรรพ์ไทย (Paleontology Inquiry)</option>
                  <option>การเข้าชมพิเศษ VIP Safari Tour & ห้อง Creation Lab</option>
                  <option>ข้อเสนอแนะและติดต่อคณะผู้จัดทำโครงงาน</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-stone-300 font-medium">รายละเอียดข้อความ *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="ระบุจำนวนผู้เข้าชม วันที่ต้องการเยี่ยมชม หรือข้อคำถามที่ต้องการให้ทางอุทยานชี้แจง..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 resize-none thai-prose"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>ส่งข้อความติดต่อ (Submit Inquiry)</span>
              </button>
            </form>
          </div>

          {/* Right Column: Park & Dispatch Center Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-5">
              <h3 className="font-bold text-base text-white border-b border-stone-800 pb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>ศูนย์บริการข้อมูลอุทยาน (Park Dispatch Center)</span>
              </h3>

              <div className="space-y-3.5 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">ที่ตั้งศูนย์วิจัยและอุทยาน:</span>
                    <span className="thai-prose text-stone-300">{PARK_CONTACT_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">เวลาทำการ:</span>
                    <span className="thai-prose text-stone-300">{PARK_CONTACT_INFO.operatingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">สายด่วนจองบัตร & สอบถาม:</span>
                    <span className="font-mono text-amber-300">{PARK_CONTACT_INFO.ticketHotline}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">อีเมลฝ่ายประสานงาน:</span>
                    <span className="font-mono text-stone-300">{PARK_CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Reference Box */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500">
                  อ้างอิงข้อมูลต้นฉบับ (OFFICIAL REFERENCE)
                </div>
                <p className="text-xs text-stone-400 thai-prose">
                  ข้อมูลการนำเสนออ้างอิงและได้รับแรงบันดาลใจจาก Jurassic World: The Exhibition
                </p>
                <a
                  href={PARK_CONTACT_INFO.referenceOfficial}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
                >
                  <span>เยี่ยมชม jurassicworldexperience.com/th/#about</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Travel Guide Tip Card */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 text-xs text-stone-400 space-y-2">
              <div className="font-bold text-stone-200">
                🚆 การเดินทางมายังศูนย์วิจัยไดโนเสาร์ภูเวียง-โคราช
              </div>
              <p className="thai-prose leading-relaxed">
                สามารถเดินทางโดยเครื่องบินลงที่ท่าอากาศยานขอนแก่น ต่อรถตู้หรือรถโดยสารประจำทางสู่ อ.ภูเวียง ระยะทางประมาณ 80 กิโลเมตร หรือเดินทางสู่สถาบันวิจัยไม้กลายเป็นทรายและทรัพยากรธรณี จ.นครราชสีมา มีป้ายบอกทางชัดเจนตลอดเส้นทาง
              </p>
            </div>
          </div>

        </section>

      </div>

      {/* ROSTER EDIT MODAL (Allows user to customize student names & IDs for their actual university group submission) */}
      {isEditingRoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-stone-900 border border-stone-700 rounded-2xl p-6 space-y-6 text-stone-100 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div>
                <h3 className="font-bold text-lg text-white">แก้ไขข้อมูลสมาชิกกลุ่ม & รหัสนิสิต</h3>
                <p className="text-xs text-stone-400">กรอกชื่อ-นามสกุล และรหัสนิสิตจริงของกลุ่มท่านเพื่อใช้ส่งงานอาจารย์</p>
              </div>
              <button
                onClick={() => setIsEditingRoster(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg text-xs"
              >
                ✕ ปิด
              </button>
            </div>

            <form onSubmit={handleSaveRoster} className="space-y-4">
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                {editFormData.map((std, idx) => (
                  <div key={std.id} className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-3">
                    <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                      <span>สมาชิกคนที่ {idx + 1}</span>
                      {editFormData.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStudent(idx)}
                          className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer text-[11px]"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>ลบ</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-stone-400 block mb-1">รหัสนิสิต *</label>
                        <input
                          type="text"
                          required
                          value={std.studentId}
                          onChange={(e) => handleUpdateStudent(idx, 'studentId', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">ชื่อ-นามสกุล *</label>
                        <input
                          type="text"
                          required
                          value={std.fullName}
                          onChange={(e) => handleUpdateStudent(idx, 'fullName', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">ชื่อเล่น</label>
                        <input
                          type="text"
                          value={std.nickname}
                          onChange={(e) => handleUpdateStudent(idx, 'nickname', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">บทบาท / หน้าที่</label>
                        <input
                          type="text"
                          value={std.role}
                          onChange={(e) => handleUpdateStudent(idx, 'role', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">สาขาวิชา</label>
                        <input
                          type="text"
                          value={std.department}
                          onChange={(e) => handleUpdateStudent(idx, 'department', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 block mb-1">คณะ</label>
                        <input
                          type="text"
                          value={std.faculty}
                          onChange={(e) => handleUpdateStudent(idx, 'faculty', e.target.value)}
                          className="w-full px-3 py-1.5 rounded bg-stone-900 border border-stone-700 text-stone-100 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={handleAddStudent}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-medium cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>เพิ่มสมาชิกใหม่</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingRoster(false)}
                    className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs cursor-pointer"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer shadow-md"
                  >
                    บันทึกข้อมูลสมาชิก
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
