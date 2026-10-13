import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Wine, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [metro, setMetro] = useState('San Francisco');
  const [role, setRole] = useState('Founder ($1M - $10M ARR)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl border border-gold-500/40 bg-noir-950 p-6 sm:p-8 shadow-2xl shadow-gold-500/20 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-xs font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                FOUNDING HOST COHORT • 10 METRO SEATS
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight font-serif">
              Join Host & Member Advisory Board (CAB)
            </h3>

            {/* Verbatim Outreach Script */}
            <div className="mt-3 p-3.5 rounded-xl bg-noir-900 border border-white/10 text-xs text-slate-300 leading-relaxed font-sans italic">
              "We are assembling a 10-member Host Advisory Board (CAB) for TribeDinner across tier-1 tech metros to curate the highest-signal private salons in the industry. We are offering a 70% lifetime platform discount ($89/salon fee instead of $299) and dedicated concierge venue coordination."
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 font-sans">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-noir-900 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Full Name & LinkedIn</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-noir-900 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Metro</label>
                  <select
                    value={metro}
                    onChange={(e) => setMetro(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-noir-900 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                  >
                    <option value="San Francisco">San Francisco</option>
                    <option value="New York City">New York City</option>
                    <option value="Austin">Austin</option>
                    <option value="Boston">Boston</option>
                    <option value="London">London</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Current Role & Stage</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-noir-900 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                >
                  <option value="Founder ($500k - $2M ARR)">Founder ($500k - $2M ARR)</option>
                  <option value="Founder ($2M - $10M ARR)">Founder ($2M - $10M ARR)</option>
                  <option value="VP Eng / CTO (Scaleup)">VP Eng / CTO (Scaleup)</option>
                  <option value="Venture Capital Partner">Venture Capital Partner</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-gold-500/25 transition-all"
                >
                  <span>Claim 70% Lifetime Host Seat ($89/salon)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mx-auto mb-4 text-gold-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-serif">Welcome to Founding CAB!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-4 font-sans">
              Your host seat is locked at <span className="font-mono text-gold-400 font-bold">$89/salon lifetime</span>. Concierge briefing sent to <span className="font-mono text-white">{email}</span>.
            </p>
            <div className="p-3 rounded-xl bg-noir-900 border border-white/10 text-xs font-mono text-gold-300 mb-6">
              Assigned Seat: Founding Metro Curator #06 of 10 ({metro})
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all font-sans"
            >
              Return to Dinners
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
