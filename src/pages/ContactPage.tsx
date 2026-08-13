import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Loader2, AlertCircle } from 'lucide-react';
import { ALL_SUBURBS } from '../data/suburbsData';
import { SERVICES_DATA } from '../data/servicesData';
import { SuburbSearch } from '../components/SuburbSearch';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../components/SocialIcons';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Bayswater North');
  const [service, setService] = useState<string>('residential-cleaning');
  const [date, setDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(val.trim());
  };

  const validateAustralianPhone = (val: string): boolean => {
    const digits = val.replace(/[\s\-\(\)]/g, '');
    const isAuMobile = /^(\+?61|0)4\d{8}$/.test(digits);
    const isAuLandline = /^(\+?61|0)[2378]\d{8}$/.test(digits);
    const isAuSpecial = /^(13\d{4}|1300\d{6}|1800\d{6})$/.test(digits);
    return isAuMobile || isAuLandline || isAuSpecial;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com.au).");
      return;
    }

    if (!validateAustralianPhone(phone)) {
      setErrorMessage("Please enter a valid Australian phone number (e.g. 0412 345 678 or 03 9800 0000).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "5a366eaa-2f7c-4638-88ac-d5439b2bfcc8");
      formData.append("subject", `New CYSERA Inquiry from ${name}`);
      formData.append("from_name", "CYSERA Cleaning Contact Page");
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("suburb", suburb);
      formData.append("service", SERVICES_DATA.find(s => s.id === service)?.title || service);
      formData.append("preferred_date", date || "Not specified");
      formData.append("message", message || "No additional message");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Fast Response Guarantee
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact CYSERA Cleaning Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions or need a fast, transparent quote? Reach out to our local Bayswater North team today.
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
                  <a href="mailto:contact@cysera.com.au" className="text-slate-900 font-bold hover:text-emerald-600 transition-colors text-sm sm:text-base">
                    contact@cysera.com.au
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon – Sat Email Support</p>
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
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold">Operating Hours</div>
                  <div className="text-slate-900 font-bold text-sm">Monday – Saturday: 7:00 AM – 8:00 PM</div>
                  <p className="text-xs text-slate-500 mt-0.5 text-rose-600 font-semibold">Closed on Sundays</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 uppercase mb-3">Official Social Media</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://www.facebook.com/share/19FJYRjeT6/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#166fe5] transition-colors shadow-sm text-center"
                  >
                    <FacebookIcon className="w-4 h-4 fill-current shrink-0" /> CYSERA Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/cyseracleaningservices?utm_source=qr&wa_status_inline=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white py-3 rounded-xl font-bold text-xs hover:opacity-95 transition-all shadow-sm text-center"
                  >
                    <InstagramIcon className="w-4 h-4 shrink-0" /> CYSERA Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Quote Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Our team will review your request and get back to you at <strong className="text-slate-900">{phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                  }}
                  className="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Send Us A Message</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill in your requirements and we will contact you directly.</p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
                      placeholder="john@example.com.au"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Suburb *</label>
                    <select
                      value={suburb}
                      onChange={e => setSuburb(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                    >
                      {ALL_SUBURBS.map((sub, i) => (
                        <option key={i} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Needed</label>
                    <select
                      value={service}
                      onChange={e => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                    >
                      {SERVICES_DATA.map(srv => (
                        <option key={srv.id} value={srv.id}>{srv.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Specs & Notes</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell us about your property (e.g. 3 bedrooms, 2 bathrooms, oven clean required)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Direct Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Suburb Search & Service Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <SuburbSearch />
      </section>
    </div>
  );
};
