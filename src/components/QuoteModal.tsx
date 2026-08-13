import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Calendar, MapPin, User, Phone, Mail, Loader2, AlertCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ALL_SUBURBS } from '../data/suburbsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceDetails?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceDetails
}) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Bayswater North');
  const [selectedService, setSelectedService] = useState<string>('residential-cleaning');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setNotes(initialServiceDetails || '');
    }
  }, [isOpen, initialServiceDetails]);

  if (!isOpen) return null;

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

  const todayString = new Date().toISOString().split('T')[0];

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

    if (preferredDate && preferredDate < todayString) {
      setErrorMessage("Preferred date cannot be in the past. Please select today or a future date.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "5a366eaa-2f7c-4638-88ac-d5439b2bfcc8");
      formData.append("subject", `New CYSERA Quote Request from ${name}`);
      formData.append("from_name", "CYSERA Cleaning Website");
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("suburb", suburb);
      formData.append("service", SERVICES_DATA.find(s => s.id === selectedService)?.title || selectedService);
      formData.append("preferred_date", preferredDate || "Not specified");
      formData.append("message", notes || "No additional notes");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || "Unable to send quote request right now. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  const inputStyle = "w-full max-w-full box-border px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all min-w-0";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in overflow-hidden">
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] my-auto">
        {/* Fixed Modal Header */}
        <div className="shrink-0 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-950 p-4 sm:p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 sm:mb-1">
              <Sparkles className="w-3 h-3 text-emerald-400" /> Free Quote & Booking
            </div>
            <h3 className="text-base sm:text-xl font-bold leading-snug">Request Your Free Cysera Quote</h3>
            <p className="text-[11px] sm:text-xs text-slate-300">Fast 30-minute response time across Bayswater North & surrounds</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">Quote Request Received!</h4>
              <p className="text-slate-600 text-xs sm:text-sm mb-5 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{name}</strong>. Our local Bayswater North team will call you at <strong className="text-slate-900">{phone}</strong> within 30 minutes with your tailored quote.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto mb-5 space-y-1">
                <div><strong>Suburb:</strong> {suburb}</div>
                <div><strong>Service:</strong> {SERVICES_DATA.find(s => s.id === selectedService)?.title || selectedService}</div>
                {preferredDate && <div><strong>Preferred Date:</strong> {preferredDate}</div>}
              </div>
              <button
                onClick={handleReset}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-2.5 rounded-xl transition-colors text-xs sm:text-sm shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-emerald-600" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Jane Smith"
                    className={inputStyle}
                  />
                </div>
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-600" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. 0412 345 678"
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-emerald-600" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jane@example.com.au"
                    className={inputStyle}
                  />
                </div>
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" /> Suburb *
                  </label>
                  <select
                    value={suburb}
                    onChange={e => setSuburb(e.target.value)}
                    className={inputStyle}
                  >
                    {ALL_SUBURBS.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                    className={inputStyle}
                  >
                    {SERVICES_DATA.map(srv => (
                      <option key={srv.id} value={srv.id}>{srv.title}</option>
                    ))}
                  </select>
                </div>
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-600" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    min={todayString}
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className={`${inputStyle} appearance-none`}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Property Notes / Specs
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="e.g., 3 bedrooms, 2 bathrooms, needs carpet steam clean in lounge..."
                  className={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm mt-1"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending Quote Request...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Free Quote Request
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 p-2.5 sm:p-3 bg-emerald-50 rounded-xl text-[11px] sm:text-xs text-emerald-900 border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully Insured ($5M) • Police Checked Staff • 100% Satisfaction Guarantee</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
