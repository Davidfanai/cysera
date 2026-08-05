import React from 'react';
import { CheckCircle2, Tag } from 'lucide-react';

interface PricingPageProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
            <Tag className="w-4 h-4 fill-slate-950" /> SPECIAL OFFER: 20% OFF YOUR FIRST CLEAN!
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Transparent & Affordable Cleaning Rates
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            CYSERA provides high-end Home, Office, & Steam Cleaning with transparent pricing and zero hidden fees. Claim 20% OFF your first clean today!
          </p>
        </div>
      </section>

      {/* Pricing Comparison Table Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Standard Pricing Tiers
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Flat rate guarantees and transparent pricing for peace of mind across all Melbourne Eastern Suburbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">
                Hourly Maintenance Clean
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Home Cleaning</h3>
              <div className="text-3xl font-black text-slate-900 my-4">
                $35 <span className="text-sm font-normal text-slate-500">/ hr per cleaner</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Affordable, thorough domestic cleaning for Melbourne families.</p>
              <ul className="space-y-3 text-xs text-slate-700 font-medium border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Minimum 2 hours per visit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> All eco cleaning products included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Same regular trusted cleaner
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Flexible cancellation policy
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Domestic Clean ($35/hr)")}
              className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Book Home Clean ($35/hr)
            </button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-gradient-to-b from-emerald-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow">
              Best Value Bond Clean
            </span>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Bond Back Guarantee</span>
              <h3 className="text-2xl font-bold text-white mt-1">End of Lease Clean</h3>
              <div className="text-3xl font-black text-white my-4">
                From $240 <span className="text-sm font-normal text-slate-400">fixed flat rate</span>
              </div>
              <p className="text-xs text-emerald-300 font-bold mb-4">⚡ 100% Bond return guarantee following REIV checklists.</p>
              <ul className="space-y-3 text-xs text-slate-300 font-medium border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Bond Back Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Deep oven, rangehood & tracks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free 72-hour re-clean safety net
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Official agent invoice provided
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal("End of Lease Package (From $240)")}
              className="w-full mt-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs transition-colors shadow-lg"
            >
              Book Bond Clean (From $240)
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Commercial</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Office & Business</h3>
              <div className="text-3xl font-black text-slate-900 my-4">
                From $100 <span className="text-sm font-normal text-slate-500">/ visit</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Tailored commercial schedule for offices, clinics & retail.</p>
              <ul className="space-y-3 text-xs text-slate-700 font-medium border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> After-hours & weekend shifts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sanitization & touch point disinfection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Monthly tax invoicing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Key-holder clearance & police checked
                </li>
              </ul>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Commercial Office Quote")}
              className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Request Business Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
