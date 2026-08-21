import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Star,
  ArrowRight,
  Leaf,
  MapPin,
  Clock,
  Award,
  ThumbsUp,
  Users
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { SuburbSearch } from '../components/SuburbSearch';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenQuoteModal: (details?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pb-0 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-10 sm:pt-16 pb-24 sm:pb-36">
        {/* Soft Blurry Sunlit Background Photo Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="CYSERA Professional Cleaning Service"
            className="w-full h-full object-cover object-center brightness-105 blur-md scale-105"
          />
          {/* Translucent Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/70 to-slate-950/85"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-4">
          {/* Top Promo Pill (Positioned Higher Up) */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              20% OFF YOUR FIRST CLEAN
            </div>
          </div>

          {/* 3-Line Formatted Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto space-y-1 sm:space-y-2 pt-1">
            <span className="block">Professional</span>
            <span className="block text-emerald-300">Residential & Commercial</span>
            <span className="block">Cleaning Services</span>
          </h1>

          {/* Slogan */}
          <p className="font-motto italic text-emerald-200 text-sm sm:text-base font-normal pt-1">
            "Everything Beautiful in Its Time" <span className="text-slate-300 text-xs font-sans not-italic">(Ecclesiastes 3:11)</span>
          </p>

          <p className="text-slate-200 text-xs sm:text-sm max-w-lg mx-auto font-normal text-slate-300">
            Serving Bayswater North, Ringwood, Croydon, Box Hill, and Melbourne's Eastern Suburbs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-sm mx-auto">
            <button
              onClick={() => onOpenQuoteModal("20% OFF First Clean Special")}
              className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-black/30 hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:0475436637"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call 0475 436 637
            </a>
          </div>

          {/* 4 Glassmorphic Trust Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md px-3.5 py-3 rounded-xl border border-white/15 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-emerald-400" /> 5.0★ Rated
              </div>
              <div className="text-slate-300 text-[11px]">Verified Customer Reviews</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3.5 py-3 rounded-xl border border-white/15 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Fully Insured
              </div>
              <div className="text-slate-300 text-[11px]">& Police Checked Cleaners</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3.5 py-3 rounded-xl border border-white/15 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <Leaf className="w-3.5 h-3.5" /> Eco-Friendly
              </div>
              <div className="text-slate-300 text-[11px]">Non-Toxic & Safe Products</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-3.5 py-3 rounded-xl border border-white/15 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" /> Local Service
              </div>
              <div className="text-slate-300 text-[11px]">Eastern Suburbs Melbourne</div>
            </div>
          </div>
        </div>

        {/* Organic Curvy Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-8 sm:h-12 lg:h-14 text-white fill-current"
          >
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. Full-Width White Background: Trust Metric Stat Cards Bar */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 shadow-lg text-center space-y-2 sm:space-y-3 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-3xl font-black text-slate-900 whitespace-nowrap">5.0★</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Top Rated Service</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 shadow-lg text-center space-y-2 sm:space-y-3 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-3xl font-black text-slate-900 whitespace-nowrap">10+ Years</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Local Experience</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 shadow-lg text-center space-y-2 sm:space-y-3 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-3xl font-black text-slate-900 whitespace-nowrap">100%</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Bond Guarantee</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl border-2 border-emerald-500 shadow-lg text-center space-y-2 sm:space-y-3 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-xl sm:text-3xl font-black text-slate-900 whitespace-nowrap">Mon – Sat</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Opening Days</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Infinite Marquee Ticker Bar */}
      <MarqueeTicker />

      {/* 4. Full-Width Dark Slate Background: Our Services Section */}
      <section className="w-full bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Our Professional Cleaning Services
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
                From high-rise apartments to expansive commercial spaces across Melbourne's Eastern Suburbs, we deliver exceptional cleaning solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <ScrollReveal key={service.id} delayMs={idx * 100}>
                <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 font-medium">Starting from</span>
                      <div className="text-lg font-black text-slate-900">{service.startingPrice}</div>
                    </div>
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={300}>
            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-4 rounded-2xl transition-all text-sm hover:scale-105 shadow-xl"
              >
                Explore All Detailed Services & Inclusions <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Full-Width White Background: Why Choose Cysera? */}
      <section className="w-full bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Why Choose <span className="text-emerald-600">CYSERA</span>?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Your trusted partner for maintaining a spotless, healthy environment across Eastern Suburbs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delayMs={0}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-md hover:shadow-xl transition-all h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Local Melbourne Team</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our professionals are Melbourne-based, fully insured, and undergo rigorous police background checks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-md hover:shadow-xl transition-all h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Eco-Friendly & Safe</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We use non-toxic, eco-friendly products that are safe for your family, your pets, and the environment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={200}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-md hover:shadow-xl transition-all h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Flexible Scheduling</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Book at your convenience with Monday – Saturday availability for urgent cleaning needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={300}>
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500 shadow-md hover:shadow-xl transition-all h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">100% Satisfaction</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We stand by our work. If you aren't 100% satisfied, we'll re-clean it right at no extra cost.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Full-Width Vibrant Emerald Green Background: Verified Customer Reviews */}
      <section className="w-full bg-emerald-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                Verified Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                What Customers Say About CYSERA
              </h2>
              <div className="flex items-center justify-center gap-1 text-amber-300 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-300" />
                ))}
                <span className="text-white font-bold ml-1.5 text-sm">5.0 / 5</span>
              </div>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">
                Verified reviews from satisfied homeowners across Eastern Suburbs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS_DATA.map((rev, rIdx) => (
              <ScrollReveal key={rev.id} delayMs={rIdx * 150}>
                <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl hover:-translate-y-1.5 transition-transform flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm italic mb-6 leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{rev.name}</div>
                      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">{rev.suburb}</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Full-Width White Background: Suburb Search & Coverage */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SuburbSearch />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
