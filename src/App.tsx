import { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ParkMapPage } from './pages/ParkMapPage';
import { ThaiDinosaursPage } from './pages/ThaiDinosaursPage';
import { SafariCruiserPage } from './pages/SafariCruiserPage';
import { CreationLabPage } from './pages/CreationLabPage';
import { FossilSitesPage } from './pages/FossilSitesPage';
import { ParkZonesPage } from './pages/ParkZonesPage';
import { AboutExhibitionPage } from './pages/AboutExhibitionPage';
import { VisitorGuidePage } from './pages/VisitorGuidePage';
import { ContactPage } from './pages/ContactPage';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validPages: PageRoute[] = [
        'index.html',
        'park-map.html',
        'thai-dinosaurs.html',
        'safari-cruiser.html',
        'creation-lab.html',
        'fossil-sites.html',
        'park-zones.html',
        'about-exhibition.html',
        'visitor-guide.html',
        'contact.html'
      ];
      if (validPages.includes(hash)) {
        return hash;
      }
    }
    return 'index.html';
  });

  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Sync hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (hash) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'index.html':
        return <HomePage onNavigate={navigateTo} />;
      case 'park-map.html':
        return <ParkMapPage />;
      case 'thai-dinosaurs.html':
        return <ThaiDinosaursPage onNavigateToMap={(dinoId) => {
          navigateTo('park-map.html');
        }} />;
      case 'safari-cruiser.html':
        return <SafariCruiserPage onNavigate={navigateTo} />;
      case 'creation-lab.html':
        return <CreationLabPage onNavigate={navigateTo} />;
      case 'fossil-sites.html':
        return <FossilSitesPage onNavigate={navigateTo} />;
      case 'park-zones.html':
        return <ParkZonesPage onNavigate={navigateTo} />;
      case 'about-exhibition.html':
        return <AboutExhibitionPage onNavigate={navigateTo} />;
      case 'visitor-guide.html':
        return <VisitorGuidePage onNavigate={navigateTo} />;
      case 'contact.html':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <ExportModal 
        isOpen={isExportModalOpen} 
        onClose={() => setIsExportModalOpen(false)}
        currentPage={currentPage}
      />
    </div>
  );
}
