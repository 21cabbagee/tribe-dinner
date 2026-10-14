import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Zap, DollarSign, CheckCircle2, Users, Wine } from 'lucide-react';

/**
 * OutcomeChart for TribeDinner (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $5,000+ noisy tech conference tickets, sponsor booths, and SDR badge scans ($6 vanity marketing) with High-Signal Algorithmic Private Salons ($1 outcome matching).
 */
export default function OutcomeChart({
  serviceName = "Executive Dinner Matching & High-Signal Founder Salons",
  defaultExecutiveTeamSize = 4,
  onCtaClick
}) {
  const [teamSize, setTeamSize] = useState(defaultExecutiveTeamSize);

  // Traditional conference & agency roadshows cost ~$4,200 per attendee (flight, ticket, hotel, booth)
  const legacyAnnualConferenceSpend = teamSize * 4200 * 2; // 2 conferences a year
  // TribeDinner: $180/seat × 6 intimate peer dinners a year
  const tribeDinnerAnnualSpend = teamSize * 180 * 6;
  const netFounderSavings = legacyAnnualConferenceSpend - tribeDinnerAnnualSpend;
  const savingsPercent = Math.round(((legacyAnnualConferenceSpend - tribeDinnerAnnualSpend) / legacyAnnualConferenceSpend) * 100);

  const maxCost = Math.max(legacyAnnualConferenceSpend, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((tribeDinnerAnnualSpend / maxCost) * 100), 12);

  return (
    <div className="relative rounded-2xl border border-gold-500/30 bg-noir-900/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-noir-950 border-gold-500/40 text-gold-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs Vanity Conference Boondoggles ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight font-serif">
            Executive Networking Economics: <span className="text-gold-400">{savingsPercent}% Budget Reclaimed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Legacy B2B founders burn $35k+ a year attending 500-person hotel ballrooms and collecting useless business cards. We replace noisy vanity conferences with algorithmic 8-seat Chatham House dinners with your exact target partners.
          </p>
        </div>

        <div className="text-right bg-noir-950/80 border border-gold-500/30 rounded-xl p-3 px-4 min-w-[190px]">
          <span className="text-[11px] text-slate-400 block font-medium">Annual Travel & Sponsorship Saved</span>
          <span className="text-2xl md:text-3xl font-black text-gold-400">
            ${netFounderSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-gold-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 100% Peer Density
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Users className="w-4 h-4 text-gold-400" />
            Executive & Lead Operator Seats:
          </label>
          <span className="text-base font-bold text-white bg-noir-950 px-3 py-1 rounded-lg border border-gold-500/30 font-mono">
            {teamSize} Leaders (${tribeDinnerAnnualSpend.toLocaleString()} Annual Allocation)
          </span>
        </div>
        <input 
          type="range" 
          min={1} 
          max={16} 
          step={1}
          value={teamSize}
          onChange={(e) => setTeamSize(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>1 Solo Founder</span>
          <span>4 Executive Suite</span>
          <span>16 Multi-Metro Leadership Team</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-noir-950 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Annual Networking Capital</span>
            <span className="text-[10px] text-slate-500">Conference vs Salons</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Conferences, Flights & Sponsor Booths ($6)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyAnnualConferenceSpend.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gold-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                  TribeDinner Curated Salons ($1)
                </span>
                <span className="font-mono font-bold text-gold-300">${tribeDinnerAnnualSpend.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-gold-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-gold-500 to-amber-400 transition-all duration-300 rounded-lg shadow-lg shadow-gold-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Net Founder Capital Saved:</span>
            <span className="text-sm font-bold text-gold-400">+${netFounderSavings.toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-noir-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif">Algorithmic Stage & Bottleneck Matching</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Never sit next to a vendor trying to pitch you insurance. Guests are algorithmically curated by ARR tier, engineering stack, and active growth challenge.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-noir-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
              <Wine className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif">Chatham House Rule Confidentiality</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                No cameras, no social media tags, no public recordings. Real executive discussions regarding term sheets, hiring failures, and board tensions.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-noir-950/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif">Zero-Fluff High Signal Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                If your table doesn't generate at least 2 actionable operational breakthroughs, your dinner fee is refunded immediately in full.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
