import React from 'react';
import { ShieldCheck, Sparkles, Leaf } from 'lucide-react';
import { FacebookIcon } from '../components/SocialIcons';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  onOpenQuoteModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="space-y-16 pb-16">
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            About CYSERA Cleaning Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Melbourne's Trusted Local Cleaning Professionals
          </h1>
          <p className="text-emerald-300 font-serif italic text-base sm:text-lg">
            "Everything Beautiful in Its Time" <span className="text-slate-400 text-xs font-sans font-normal">(Ecclesiastes 3:11)</span>
          </p>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Making your home beautiful again. Based in Bayswater North & servicing Eastern Suburbs, CYSERA was built on providing top-tier cleaning with uncompromised reliability and transparent pricing.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" /> Our Professional Standards
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              We Take Pride In Delivering Spotless Homes & Workspaces
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At CYSERA, cleaning isn't just a chore — it's an art of transformation. Founded to serve Melbourne's Eastern Suburbs, our team brings meticulous attention to detail to every home, apartment, office, and commercial space we touch.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We understand that letting cleaners into your home requires trust. That's why every CYSERA team member undergoes background checks, police checks, and comprehensive hands-on training before stepping onto any job site.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Leaf className="w-4 h-4 text-emerald-600" /> 100% Eco-Friendly
                </div>
                <p className="text-xs text-slate-500">Non-toxic, plant-based detergents safe for children, pets, & allergy sufferers.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Fully Insured & ABN Verified
                </div>
                <p className="text-xs text-slate-500">Official Australian Business Number (ABN 50 471 908 668) & Public Liability Coverage.</p>
              </div>
            </div>

            {/* Official Facebook Social Media Link */}
            <div className="pt-2">
              <a
                href="https://www.facebook.com/share/19FJYRjeT6/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg transition-all hover:scale-105 text-sm"
              >
                <FacebookIcon className="w-5 h-5 fill-current" />
                <span>Visit & Follow CYSERA on Facebook</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="CYSERA Pristine Home Cleaning"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Official Company Credentials</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">CYSERA Cleaning Services</div>
                <div className="text-xs text-slate-600 mt-1 flex flex-col gap-1">
                  <span>📍 Service Area: Eastern Suburbs, Melbourne</span>
                  <span>📜 ABN: 50 471 908 668</span>
                  <span>📞 Call / WhatsApp: 0475 436 637 / 0474 780 469</span>
                  <a
                    href="https://www.facebook.com/share/19FJYRjeT6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] font-bold hover:underline inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 fill-current" /> Facebook: CYSERA Cleaning Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400">100%</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">Bond Return Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400">10+ Years</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">Local Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400">20%</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">Off Your First Clean</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-emerald-400">25+</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">Suburbs Serviced Daily</div>
          </div>
        </div>
      </section>
    </div>
  );
};
