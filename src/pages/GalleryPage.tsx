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
    { id: 'bathroom', label: 'Tile & Bathroom' },
    { id: 'kitchen', label: 'Kitchen & Exhaust' },
    { id: 'oven', label: 'Oven Degreasing' }
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
              location={item.location}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white py-12 px-4 rounded-3xl max-w-7xl mx-auto text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Want Your Property To Look Like This?</h2>
        <p className="text-emerald-100 text-sm max-w-xl mx-auto">
          Get in touch today for a free, transparent quote. We cover all suburbs in Melbourne's Eastern region.
        </p>
        <button
          onClick={() => onOpenQuoteModal("Gallery CTA Request")}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-colors text-sm inline-flex items-center gap-2 shadow-lg"
        >
          <Sparkles className="w-4 h-4" /> Request Your Free Quote
        </button>
      </section>
    </div>
  );
};
