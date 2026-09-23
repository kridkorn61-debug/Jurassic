import React, { useState } from 'react';
import { X, FileCode, Copy, Check, Download, Layers } from 'lucide-react';
import { PageRoute } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageRoute;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, currentPage }) => {
  const [selectedFile, setSelectedFile] = useState<PageRoute>(currentPage);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const htmlFileList: { file: PageRoute; title: string; lines: number }[] = [
    { file: 'index.html', title: 'หน้าแรก ประตูสู่อุทยาน Jurassic World Thailand', lines: 185 },
    { file: 'park-map.html', title: 'แผนผังนำเที่ยว & รถทัวร์ซาฟารีเสมือนจริง', lines: 260 },
    { file: 'thai-dinosaurs.html', title: 'สารานุกรม 10 สายพันธุ์ไดโนเสาร์ไทย', lines: 240 },
    { file: 'safari-cruiser.html', title: 'รถทัวร์ซาฟารี & แดชบอร์ดคนขับจำลอง', lines: 195 },
    { file: 'creation-lab.html', title: 'ห้องแล็บพันธุกรรม The Creation Lab & DNA', lines: 210 },
    { file: 'fossil-sites.html', title: 'แหล่งขุดค้นซากดึกดำบรรพ์ในประเทศไทย', lines: 175 },
    { file: 'park-zones.html', title: 'โซนจัดแสดงและระบบความปลอดภัย รั้วไฟฟ้า', lines: 165 },
    { file: 'about-exhibition.html', title: 'เกี่ยวกับนิทรรศการ (อ้างอิง jurassicworldexperience.com)', lines: 150 },
    { file: 'visitor-guide.html', title: 'คู่มือการเข้าชม ตารางเวลา และระเบียบ', lines: 140 },
    { file: 'contact.html', title: 'หน้าติดต่อ (Contact) & รายชื่อสมาชิกในกลุ่มนิสิต', lines: 230 },
  ];

  const generateStaticHtmlSnippet = (fileName: PageRoute) => {
    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jurassic World Thailand - ${fileName}</title>
  <meta name="description" content="โครงงานเว็บไซต์ไดโนเสาร์ไทยเสมือนจริงในรูปแบบ Jurassic World">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-stone-950 text-stone-100">
  <!-- แถบนำทางหลัก (Navigation) เชื่อมโยง 10 หน้าเว็บเพจ .html -->
  <header>
    <a href="index.html" class="logo">🦖 JURASSIC WORLD THAILAND</a>
    <nav>
      <a href="index.html">หน้าแรก</a>
      <a href="park-map.html">แผนผังนำเที่ยว</a>
      <a href="thai-dinosaurs.html">ไดโนเสาร์ไทย</a>
      <a href="safari-cruiser.html">รถทัวร์ซาฟารี</a>
      <a href="creation-lab.html">ห้องแล็บพันธุกรรม</a>
      <a href="fossil-sites.html">แหล่งขุดค้น</a>
      <a href="park-zones.html">โซนอุทยาน</a>
      <a href="about-exhibition.html">เกี่ยวกับนิทรรศการ</a>
      <a href="visitor-guide.html">คู่มือผู้เข้าชม</a>
      <a href="contact.html">ติดต่อ & สมาชิกกลุ่ม</a>
    </nav>
  </header>

  <!-- เนื้อหาหลักของไฟล์ ${fileName} -->
  <main class="container">
    <!-- Component Rendered Dynamically in Jurassic World Web App -->
    <!-- รหัสนิสิตและรายชื่อคณะผู้จัดทำโครงงานอยู่ใน contact.html -->
  </main>

  <footer>
    <p>© 2026 Jurassic World Thailand Virtual Safari Exhibition Project</p>
    <p>อ้างอิงข้อมูล: https://jurassicworldexperience.com/th/#about</p>
  </footer>
</body>
</html>`;
  };

  const handleCopy = () => {
    const code = generateStaticHtmlSnippet(selectedFile);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const code = generateStaticHtmlSnippet(selectedFile);
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Strip */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
            <FileCode className="w-4 h-4 text-emerald-400" />
            <span>HTML FILE ARCHITECTURE (ชุดไฟล์ 10 หน้าเว็บเพจ .HTML)</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* File Explorer Sidebar */}
          <div className="md:col-span-4 border-r border-stone-800 p-4 space-y-1 overflow-y-auto bg-stone-950/50">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 px-2 pb-2">
              รายการไฟล์ 10 เว็บเพจ:
            </div>
            {htmlFileList.map(item => (
              <button
                key={item.file}
                onClick={() => setSelectedFile(item.file)}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                  selectedFile === item.file 
                    ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40' 
                    : 'text-stone-400 hover:bg-stone-900 hover:text-stone-200'
                }`}
              >
                <div className="truncate">
                  <div className="font-mono text-stone-200">{item.file}</div>
                  <div className="text-[10px] text-stone-500 truncate">{item.title}</div>
                </div>
                <span className="text-[10px] font-mono text-stone-600 shrink-0">HTML</span>
              </button>
            ))}
          </div>

          {/* Code Preview & Actions */}
          <div className="md:col-span-8 p-6 flex flex-col justify-between overflow-y-auto space-y-4 bg-stone-900">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-base text-white font-mono">{selectedFile}</h3>
                  <p className="text-xs text-stone-400">
                    โครงสร้าง HTML มาตรฐานสำหรับนำส่งอาจารย์ประจำวิชา
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอกโค้ด'}</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ดาวน์โหลดไฟล์</span>
                  </button>
                </div>
              </div>

              {/* Code display */}
              <pre className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-[11px] font-mono text-amber-200/90 overflow-x-auto max-h-[380px] leading-relaxed">
                <code>{generateStaticHtmlSnippet(selectedFile)}</code>
              </pre>
            </div>

            <div className="p-3 rounded-lg bg-stone-950/80 border border-stone-800 text-xs text-stone-400 flex items-center justify-between">
              <span>สามารถคลิกลิงก์บนแถบเมนูด้านบน เพื่อดูหน้าการทำงานจริงของทุกไฟล์ได้ทันที</span>
              <span className="font-mono text-emerald-400">10 PAGES ACTIVE</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
