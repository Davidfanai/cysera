import React, { useState } from 'react';
import { Phone, Mail, ShieldCheck, Sparkles, Menu, X, MapPin, Tag } from 'lucide-react';
import { CyseraLogo } from './CyseraLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full shadow-md bg-white overflow-hidden">
      {/* Top Announcement Bar with Special Offer & ABN */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-3 sm:px-4 border-b border-slate-800 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <span className="bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] flex items-center gap-1 shrink-0">
              <Tag className="w-3 h-3" /> SPECIAL OFFER: 20% OFF YOUR FIRST CLEAN!
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> ABN: 50 471 908 668
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" /> Eastern Suburbs Melbourne
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs font-medium shrink-0">
            <a
              href="tel:0475436637"
              className="flex items-center gap-1 text-white hover:text-emerald-400 font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> 0475 436 637
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:0474780469"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white font-bold transition-colors"
            >
              0474 780 469
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="mailto:cyseracleaning@gmail.com"
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> cyseracleaning@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between w-full max-w-full">
        <button
          onClick={() => handleNavClick('home')}
          className="hover:opacity-90 transition-opacity text-left shrink-0"
        >
          <CyseraLogo variant="light" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map(item => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 font-extrabold shadow-xs'
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:0475436637"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 text-slate-700 hover:border-emerald-600 hover:text-emerald-700 text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" /> Call / SMS
          </a>
          <button
            onClick={onOpenQuoteModal}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" /> Get 20% Off Quote
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in w-full max-w-full overflow-hidden">
          <nav className="flex flex-col space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  currentPage === item.id
                    ? 'bg-emerald-50 text-emerald-700 font-extrabold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl shadow-md text-sm text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Get 20% Off Quote
            </button>
            <a
              href="tel:0475436637"
              className="w-full text-center py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" /> Call: 0475 436 637 / 0474 780 469
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
