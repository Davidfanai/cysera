import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface GalleryPageProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'oven', label: 'Oven Degreasing' },
    { id: 'carpet', label: 'Carpet Steam' },
    { id: 'bathroom', label: 'Tile & Bathroom' },
    { id: 'kitchen', label: 'Kitchen & Living' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Real Proof Of Quality Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interactive Before & After Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Drag the split handle on any image below to compare dirty vs sparkling clean surfaces across our recent Melbourne projects.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map(item => (
            <BeforeAfterSlider
              key={item.id}
              beforeImg={item.beforeImg}
              afterImg={item.afterImg}
              title={item.title}
              description={item.description}
              location={item.location}
              tags={item.tags}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl border border-emerald-500/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to See This Same Transformation In Your Home?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book your professional clean today or get an instant price estimate for your Bayswater North or Eastern Suburbs property.
          </p>
          <button
            onClick={() => onOpenQuoteModal("Gallery Transformation Quote")}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/40 transition-all inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Sparkles className="w-5 h-5" /> Book Your Transformation
          </button>
        </div>
      </section>
    </div>
  );
};
