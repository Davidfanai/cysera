import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { SERVICED_REGIONS, ALL_SUBURBS } from '../data/suburbsData';

export const SuburbSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSuburbs = ALL_SUBURBS.filter(suburb =>
    suburb.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Local Melbourne Service Areas
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
          We Clean Across Bayswater North & Surrounding Suburbs
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Cysera provides fast, reliable residential & commercial cleaning services across Maroondah, Knox, Whitehorse, Manningham, and Yarra Ranges regions.
        </p>

        {/* Suburb Search Input */}
        <div className="relative mt-6 max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search your suburb (e.g. Ringwood, Croydon, Box Hill)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Search Result Feedback */}
      {searchTerm.trim() !== '' && (
        <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 max-w-xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <div className="text-sm font-bold">
                {filteredSuburbs.length > 0
                  ? `Great news! We service ${filteredSuburbs.length} matching area(s)`
                  : 'Area match in progress'}
              </div>
              <div className="text-xs text-emerald-700">
                {filteredSuburbs.length > 0
                  ? 'Our team can arrive at your property with zero travel surcharge.'
                  : 'We service all suburbs near Bayswater North & outer East. Call us to confirm!'}
              </div>
            </div>
          </div>
          <a
            href="tel:0400000000"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
        </div>
      )}

      {/* Regions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICED_REGIONS.map((regionGroup, idx) => {
          const groupMatchingSuburbs = regionGroup.suburbs.filter(s =>
            s.toLowerCase().includes(searchTerm.toLowerCase().trim())
          );

          if (searchTerm.trim() !== '' && groupMatchingSuburbs.length === 0) {
            return null;
          }

          return (
            <div
              key={idx}
              className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <h3 className="font-bold text-slate-900 text-base">{regionGroup.region}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {groupMatchingSuburbs.map((suburb, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-1.5 text-xs text-slate-700 font-medium hover:text-emerald-700 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    {suburb}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Don't see your exact suburb? We cover all 15km radius around Bayswater North.</span>
        </div>
        <span className="font-semibold text-emerald-700">
          📍 Base Headquarters: Bayswater North VIC 3153
        </span>
      </div>
    </div>
  );
};
