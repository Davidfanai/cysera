import React from 'react';
import { Sparkles, ShieldCheck, Tag, Award, CheckCircle2, MapPin } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    { icon: <Tag className="w-4 h-4 text-amber-400" />, text: "20% OFF YOUR FIRST CLEAN" },
    { icon: <Sparkles className="w-4 h-4 text-emerald-400" />, text: "TRANSPARENT & AFFORDABLE RATES" },
    { icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />, text: "FULLY INSURED & POLICE CHECKED" },
    { icon: <Award className="w-4 h-4 text-amber-400" />, text: "100% BOND BACK GUARANTEE" },
    { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, text: "HOME & OFFICE CLEANING" },
    { icon: <MapPin className="w-4 h-4 text-rose-400" />, text: "EASTERN SUBURBS MELBOURNE" },
    { icon: <Sparkles className="w-4 h-4 text-teal-400" />, text: "CARPET & UPHOLSTERY STEAM CLEANING" },
    { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />, text: '"EVERYTHING BEAUTIFUL IN ITS TIME"' }
  ];

  return (
    <div className="bg-slate-950 text-white py-3.5 border-y border-slate-800 overflow-hidden relative shadow-inner">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 bg-slate-900/90 px-4 py-1.5 rounded-full border border-slate-800 shrink-0 text-xs font-bold text-slate-200 uppercase tracking-wider hover:border-emerald-500 transition-colors"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
