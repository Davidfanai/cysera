import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Calendar, MapPin, User, Phone, Mail } from 'lucide-react';
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

  useEffect(() => {
    if (initialServiceDetails) {
      setNotes(prev => (prev ? `${prev} | ${initialServiceDetails}` : initialServiceDetails));
    }
  }, [initialServiceDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-emerald-950 p-6 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Free Quote & Booking
            </div>
            <h3 className="text-xl font-bold">Request Your Free Cysera Quote</h3>
            <p className="text-xs text-slate-300">Fast 30-minute response time across Bayswater North & surrounds</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success Confirmation */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h4>
              <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{name}</strong>. Our local Bayswater North team will call you at <strong className="text-slate-900">{phone}</strong> within 30 minutes with your tailored quote.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto mb-6 space-y-1">
                <div><strong>Suburb:</strong> {suburb}</div>
                <div><strong>Service:</strong> {SERVICES_DATA.find(s => s.id === selectedService)?.title || selectedService}</div>
                {preferredDate && <div><strong>Preferred Date:</strong> {preferredDate}</div>}
              </div>
              <button
                onClick={handleReset}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-emerald-600" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Jane Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. 0412 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-emerald-600" /> Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="jane@example.com.au"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Suburb *
                  </label>
                  <select
                    value={suburb}
                    onChange={e => setSuburb(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    {ALL_SUBURBS.map((sub, i) => (
                      <option key={i} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Required
                  </label>
                  <select
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    {SERVICES_DATA.map(srv => (
                      <option key={srv.id} value={srv.id}>{srv.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Property Notes / Specs
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="e.g., 3 bedrooms, 2 bathrooms, needs carpet steam clean in lounge..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl text-xs text-emerald-900 border border-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Fully Insured ($10M) • Police Checked Staff • 100% Satisfaction Guarantee</span>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
              >
                <Send className="w-4 h-4" /> Send Free Quote Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
