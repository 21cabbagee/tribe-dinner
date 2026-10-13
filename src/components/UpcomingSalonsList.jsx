import React, { useState } from 'react';
import { MapPin, Calendar, Users, Wine, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function UpcomingSalonsList({ salons, onSelectSalon, onReserveSeat }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const metros = ['ALL', 'San Francisco', 'New York City', 'Austin'];

  const filteredSalons = selectedFilter === 'ALL'
    ? salons
    : salons.filter(s => s.metro === selectedFilter);

  return (
    <section id="upcoming-salons" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Wine className="w-3.5 h-3.5" />
            <span>Curated Micro-Salons • 8-Seat Private Dining Rooms</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif">
            Active Private Dinners & Salons
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Every table is strictly limited to 8 guests. Algorithmic peer screening guarantees 100% peer density.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {metros.map(metro => (
            <button
              key={metro}
              onClick={() => setSelectedFilter(metro)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedFilter === metro
                  ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-bold'
                  : 'bg-noir-900/60 text-slate-400 border border-white/5 hover:text-slate-200'
              }`}
            >
              {metro}
            </button>
          ))}
        </div>
      </div>

      {/* Salons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => {
          const seatsLeft = salon.totalSeats - salon.confirmedGuests;

          return (
            <div
              key={salon.id}
              className="rounded-2xl border border-gold-500/20 bg-noir-900/80 p-6 flex flex-col justify-between hover:border-gold-500/40 transition-all shadow-xl hover:shadow-gold-500/10 group backdrop-blur-md"
            >
              <div>
                {/* Meta Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-noir-950 border border-gold-500/30 text-gold-400 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{salon.metro}</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {seatsLeft > 0 ? `${seatsLeft} Seat${seatsLeft > 1 ? 's' : ''} Left` : 'SOLD OUT'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-serif tracking-tight group-hover:text-gold-200 transition-colors">
                  {salon.title}
                </h3>

                {/* Neighborhood & Date */}
                <div className="mt-3 space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{salon.neighborhood}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{salon.date}</span>
                  </div>
                </div>

                {/* Dining Ambiance */}
                <div className="mt-4 p-3 rounded-xl bg-noir-950/70 border border-white/5 text-xs text-slate-300 italic font-serif">
                  "{salon.vibe}"
                </div>

                {/* Focus Topic */}
                <div className="mt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Table Discussion Core:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {salon.tableFocus}
                  </p>
                </div>

                {/* Confirmed Peer Profiles */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                    Confirmed Guests at Table ({salon.confirmedGuests}/{salon.totalSeats}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {salon.attendeeProfiles.map((guest, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-noir-800 text-[11px] text-slate-300 border border-white/10 font-mono flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                        <span>{guest.name}</span>
                        <span className="text-gold-400/80 font-semibold">({guest.tag})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">All-Inclusive Seat</span>
                  <span className="text-lg font-bold font-mono text-gold-400">${salon.seatPrice}</span>
                  <span className="text-[10px] text-slate-500 font-mono"> (Escrow ticket)</span>
                </div>

                <button
                  onClick={() => onReserveSeat(salon)}
                  disabled={seatsLeft === 0}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-gold-600 via-amber-600 to-gold-700 hover:from-gold-500 hover:to-amber-500 text-noir-950 font-sans transition-all flex items-center gap-1.5 shadow-md shadow-gold-500/20 disabled:opacity-50"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{seatsLeft > 0 ? 'Request Seat' : 'Waitlist Table'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
