import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Compass, Menu, X, ChevronDown, Download } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenExport?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenExport
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems: { label: string; page: PageRoute }[] = [
    { label: 'หน้าแรก', page: 'index.html' },
    { label: 'แผนผังนำเที่ยว', page: 'park-map.html' },
    { label: 'ไดโนเสาร์ไทย', page: 'thai-dinosaurs.html' },
    { label: 'รถทัวร์ซาฟารี', page: 'safari-cruiser.html' },
    { label: 'ห้องแล็บพันธุกรรม', page: 'creation-lab.html' },
  ];

  const secondaryNavItems: { label: string; page: PageRoute }[] = [
    { label: 'แหล่งขุดค้นฟอสซิล', page: 'fossil-sites.html' },
    { label: 'โซนอุทยาน', page: 'park-zones.html' },
    { label: 'เกี่ยวกับนิทรรศการ', page: 'about-exhibition.html' },
    { label: 'คู่มือผู้เข้าชม', page: 'visitor-guide.html' },
    { label: 'ติดต่อ & สมาชิกกลุ่ม', page: 'contact.html' },
  ];

  const allNavItems = [...mainNavItems, ...secondaryNavItems];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#index.html" 
          onClick={(e) => { e.preventDefault(); handleNavClick('index.html'); }}
          className="flex items-center gap-2.5 font-jurassic text-lg font-bold tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
        >
          <span className="text-xl">🦖</span>
          <span className="uppercase">Jurassic World Thailand</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          {mainNavItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={`#${item.page}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.page); }}
                className={`transition-colors whitespace-nowrap pb-0.5 border-b-2 ${
                  isActive 
                    ? 'text-amber-400 border-amber-400 font-semibold' 
                    : 'text-stone-300 border-transparent hover:text-white hover:border-stone-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Curated Dropdown for Pages 6-10 */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>หมวดอื่นๆ</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {moreDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-stone-900 border border-stone-800 rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                {secondaryNavItems.map((item) => {
                  const isActive = currentPage === item.page;
                  return (
                    <a
                      key={item.page}
                      href={`#${item.page}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.page); }}
                      className={`block px-4 py-2 text-xs transition-colors ${
                        isActive 
                          ? 'bg-amber-500/10 text-amber-400 font-semibold' 
                          : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenExport && (
            <button
              onClick={onOpenExport}
              title="ดูโค้ดและส่งออกไฟล์ .html สำหรับส่งงานอาจารย์"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-300 hover:text-amber-300 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ไฟล์ HTML</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('park-map.html')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-4 h-4" />
            <span>เริ่มทัวร์เสมือนจริง</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
            aria-label="เปิดเมนูนำทาง"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-2 pb-6 space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-500 px-3 py-1">
            เว็บเพจทั้งหมด (8-10 หน้า HTML)
          </div>
          {allNavItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={`#${item.page}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.page); }}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive 
                    ? 'bg-amber-500/15 text-amber-400 font-semibold' 
                    : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('park-map.html')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-950 bg-amber-500 rounded-lg"
            >
              <Compass className="w-4 h-4" />
              <span>เข้าสู่แผนผังอุทยานเสมือนจริง</span>
            </button>
            {onOpenExport && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenExport(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs text-stone-300 bg-stone-900 border border-stone-700 rounded-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>ดูโครงสร้างและส่งออกไฟล์ HTML</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
