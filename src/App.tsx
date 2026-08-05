import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Sparkles } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteDetails, setQuoteDetails] = useState<string>('');

  const handleOpenQuoteModal = (details?: string) => {
    if (details) {
      setQuoteDetails(details);
    } else {
      setQuoteDetails('');
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'services':
        return <ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'pricing':
        return <PricingPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'gallery':
        return <GalleryPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} onOpenQuoteModal={handleOpenQuoteModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer
        onNavigate={setCurrentPage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceDetails={quoteDetails}
      />

      {/* Floating Mobile Quick Action Bar with Real Phone Number */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center gap-2 bg-slate-900/90 backdrop-blur-lg p-2.5 rounded-2xl border border-slate-700 shadow-2xl">
        <a
          href="tel:0475436637"
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-slate-700"
        >
          <Phone className="w-4 h-4 text-emerald-400" /> Call 0475 436 637
        </a>
        <button
          onClick={() => handleOpenQuoteModal()}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-4 h-4" /> 20% Off Quote
        </button>
      </div>
    </div>
  );
}

export default App;
