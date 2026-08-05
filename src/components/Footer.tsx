import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Award, ArrowUp, Tag } from 'lucide-react';
import { ALL_SUBURBS } from '../data/suburbsData';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { CyseraLogo } from './CyseraLogo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <CyseraLogo variant="dark" />

            <p className="text-emerald-400 font-serif italic text-base">
              "Everything Beautiful in Its Time" <span className="text-slate-400 text-xs font-sans font-normal">(Ecclesiastes 3:11)</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Making your home beautiful again. Residential & Commercial cleaning, Home Cleaning, Office Cleaning, and Carpet Steam Cleaning across Eastern Suburbs.
            </p>

            <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-xl text-amber-300 text-xs font-bold flex items-center gap-2">
              <Tag className="w-4 h-4 text-amber-400 shrink-0" />
              <span>SPECIAL OFFER: 20% OFF YOUR FIRST CLEAN!</span>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>ABN: 50 471 908 668 • Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Home • Office • Steam Cleaning Specialists</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'services', label: 'Our Services' },
                { id: 'pricing', label: 'Pricing & Rates' },
                { id: 'about', label: 'About Cysera' },
                { id: 'gallery', label: 'Before & After Gallery' },
                { id: 'contact', label: 'Contact Us' }
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cleaning Services Offered */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services Offered</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Home Cleaning</li>
              <li>Office Cleaning</li>
              <li>Steam Cleaning (Carpet & Upholstery)</li>
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>End of Lease (Bond Back) Clean</li>
              <li>Tile & Grout Cleaning</li>
            </ul>
          </div>

          {/* Col 4: Real Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:0475436637" className="font-bold text-white hover:text-emerald-400 transition-colors block">
                      0475 436 637
                    </a>
                    <a href="tel:0474780469" className="font-bold text-white hover:text-emerald-400 transition-colors block">
                      0474 780 469
                    </a>
                    <div className="text-xs text-slate-500">Call / SMS (7 AM - 8 PM)</div>
                  </div>
                </div>
              </div>

              <a href="mailto:cyseracleaning@gmail.com" className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold">cyseracleaning@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Service Area: Eastern Suburbs, Melbourne</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md transition-colors"
            >
              Claim 20% Off First Clean
            </button>
          </div>
        </div>

        {/* Suburbs Tag Cloud for SEO */}
        <div className="py-8 border-b border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            Local Melbourne Eastern Suburbs
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {ALL_SUBURBS.map((suburb, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md"
              >
                {suburb} Cleaning
              </span>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CYSERA Cleaning Services. ABN 50 471 908 668. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={scrollToTop} className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors">
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
