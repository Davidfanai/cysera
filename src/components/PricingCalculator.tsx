import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Tag } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [serviceType, setServiceType] = useState<string>('residential');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    oven: false,
    carpet: false,
    windows: false,
    balcony: false,
    cabinets: false
  });

  const basePrices: Record<string, number> = {
    residential: 90,
    bond: 240,
    deep: 180,
    carpet: 79,
    commercial: 100
  };

  const calculateEstimate = () => {
    let total = basePrices[serviceType] || 90;
    
    if (bedrooms > 1) {
      total += (bedrooms - 1) * 30;
    }
    if (bathrooms > 1) {
      total += (bathrooms - 1) * 35;
    }

    if (addOns.oven) total += 45;
    if (addOns.carpet) total += 69;
    if (addOns.windows) total += 35;
    if (addOns.balcony) total += 30;
    if (addOns.cabinets) total += 25;

    return total;
  };

  const toggleAddOn = (key: string) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const estimatedTotal = calculateEstimate();

  const handleBookEstimate = () => {
    const summary = `${serviceType.toUpperCase()} Clean (${bedrooms} Bed, ${bathrooms} Bath) - Est. $${estimatedTotal} (Guaranteed $10+ Lower Rate)`;
    onOpenQuoteModal(summary);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-500/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-700/60 pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Instant Estimate Tool
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" /> At Least $10 Cheaper Than Market Rates
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Transparent Price Estimator
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            Calculate your customized cleaning cost. Guaranteed at least $10 lower than competitor rates + 20% off your first clean!
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 shrink-0">
          <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
          <div>
            <div className="text-xs text-slate-300">Best Price Guarantee</div>
            <div className="text-sm font-bold text-white">$10+ Cheaper Rate</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              1. Select Service Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'residential', label: 'Home Cleaning' },
                { id: 'bond', label: 'End of Lease (Bond)' },
                { id: 'deep', label: 'Deep Spring Clean' },
                { id: 'carpet', label: 'Carpet Steam Clean' },
                { id: 'commercial', label: 'Office Cleaning' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setServiceType(item.id)}
                  className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left border ${
                    serviceType === item.id
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-900/50 scale-[1.02]'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Property Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                2. Bedrooms
              </label>
              <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    onClick={() => setBedrooms(num)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                      bedrooms === num
                        ? 'bg-emerald-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {num === 5 ? '5+' : num}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                3. Bathrooms
              </label>
              <div className="flex items-center gap-1.5 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
                {[1, 2, 3, 4].map(num => (
                  <button
                    key={num}
                    onClick={() => setBathrooms(num)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
                      bathrooms === num
                        ? 'bg-emerald-500 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {num === 4 ? '4+' : num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              4. Optional Extra Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'oven', label: 'Deep Oven Interior Degreasing', price: '+$45' },
                { id: 'carpet', label: 'Carpet Steam Clean (2 Rooms)', price: '+$69' },
                { id: 'windows', label: 'Interior Glass & Window Tracks', price: '+$35' },
                { id: 'balcony', label: 'Balcony / Patio Pressure Clean', price: '+$30' },
                { id: 'cabinets', label: 'Inside Kitchen Cabinets Wipe', price: '+$25' }
              ].map(addon => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                    addOns[addon.id]
                      ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md'
                      : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${addOns[addon.id] ? 'text-emerald-400' : 'text-slate-600'}`} />
                    {addon.label}
                  </span>
                  <span className="font-bold text-emerald-400">{addon.price}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Total Card Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-inner">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Estimated Quote</span>
              <span className="bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> $10+ Below Competitors
              </span>
            </div>

            <div className="mb-6">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${estimatedTotal}
                <span className="text-sm font-normal text-slate-400 ml-2">AUD (inc. GST)</span>
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-2">
                ⚡ Guaranteed at least $10 lower than standard market rates!
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-700/60 pt-4 mb-6">
              <div className="flex items-center justify-between">
                <span>Selected Service:</span>
                <span className="font-semibold text-white capitalize">{serviceType.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Property Size:</span>
                <span className="font-semibold text-white">{bedrooms} Bed, {bathrooms} Bath</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Active Extras:</span>
                <span className="font-semibold text-emerald-400">
                  {Object.values(addOns).filter(Boolean).length} selected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>First Clean Special:</span>
                <span className="font-semibold text-amber-400">20% Off Applies</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleBookEstimate}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              Lock In This Guaranteed Low Rate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[11px] text-center text-slate-400">
              📞 Call/SMS: 0475 436 637 / 0474 780 469
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
