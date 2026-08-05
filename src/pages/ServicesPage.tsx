import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesPageProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'bond', label: 'End of Lease' },
    { id: 'commercial', label: 'Commercial & Office' },
    { id: 'specialized', label: 'Specialized (Carpet, Tile, Window)' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Comprehensive Cleaning Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Professional Cleaning Services in Bayswater North & Surrounds
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            From regular domestic tidying to heavy-duty steam extraction, tile grout scrub, and real-estate approved bond cleans.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/30 scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-2xl transition-shadow"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {service.category}
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 mt-0.5">{service.title}</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{service.fullDesc}</p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Key Inclusions Checklist:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.popularFor && (
                  <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    💡 <strong>Ideal For:</strong> {service.popularFor}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Starting Rate</div>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1">{service.startingPrice}</div>
                  <p className="text-xs text-slate-400 mt-1">Includes GST, eco supplies, & insurance.</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Book {service.title} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
