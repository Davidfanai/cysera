import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Tag } from 'lucide-react';
import { ALL_SUBURBS } from '../data/suburbsData';
import { SERVICES_DATA } from '../data/servicesData';
import { SuburbSearch } from '../components/SuburbSearch';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Bayswater North');
  const [service, setService] = useState<string>('residential-cleaning');
  const [date, setDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Contact Header */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
            <Tag className="w-4 h-4 fill-slate-950" /> SPECIAL OFFER: 20% OFF YOUR FIRST CLEAN!
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact CYSERA Cleaning Services
          </h1>
          <p className="text-emerald-300 font-serif italic text-base sm:text-lg">
            "Everything Beautiful in Its Time" <span className="text-slate-400 text-xs font-sans font-normal">(Ecclesiastes 3:11)</span>
          </p>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Making your home beautiful again. Contact us today for Home Cleaning, Office Cleaning, Steam Cleaning, or End of Lease services across Melbourne's Eastern Suburbs.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quick Contact Info Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Call / WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-950 to-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CALL / WHATSAPP DIRECT</h3>
                  <p className="text-xs text-emerald-300">Speak directly with our local team</p>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <a href="tel:0475436637" className="text-2xl sm:text-3xl font-black text-white hover:text-emerald-400 block transition-colors">
                  0475 436 637
                </a>
                <a href="https://wa.me/61474780469" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl font-black text-white hover:text-emerald-400 block transition-colors">
                  0474 780 469
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:0475436637"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-center text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4" /> Call 0475 436 637
                </a>
                <a
                  href="https://wa.me/61474780469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-extrabold py-3 rounded-xl text-center text-xs transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp 0474 780 469
                </a>
              </div>
            </div>

            {/* Email & Address Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Email Address</div>
                  <a href="mailto:cyseracleaning@gmail.com" className="text-slate-900 font-bold hover:text-emerald-600 transition-colors text-sm sm:text-base">
                    cyseracleaning@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Checked 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Service Area</div>
                  <div className="text-slate-900 font-bold text-sm">Eastern Suburbs, Melbourne</div>
                  <p className="text-xs text-slate-500 mt-0.5">Bayswater, Ringwood, Croydon, Box Hill, Rowville & surrounds.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Operating Hours</div>
                  <div className="text-slate-900 font-bold text-sm">Monday – Sunday: 7:00 AM – 8:00 PM</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase mb-3">Direct Social Channels</div>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-xl font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" /> Facebook Page
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2.5 rounded-xl font-bold text-xs hover:from-pink-500 hover:to-purple-500 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" /> Instagram Direct
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black text-slate-900 mb-1">Claim 20% Off Your First Clean</h2>
            <p className="text-slate-600 text-sm mb-6">
              Fill out the form below to receive your discount quote or book your cleaning service.
            </p>

            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Our CYSERA team has received your message and will call you back shortly at <strong>{phone}</strong> with your 20% off discount.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="0475 436 637"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="cyseracleaning@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Suburb *</label>
                    <select
                      value={suburb}
                      onChange={e => setSuburb(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {ALL_SUBURBS.map((sub, i) => (
                        <option key={i} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                    <select
                      value={service}
                      onChange={e => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Property Details</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about your cleaning needs, number of bedrooms, carpet areas, special requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5" /> Submit & Get 20% Off
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SuburbSearch />
      </section>
    </div>
  );
};
