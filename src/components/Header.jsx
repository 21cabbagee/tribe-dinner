import React from 'react';
import { Wine, Sparkles, MapPin, Users, Shield } from 'lucide-react';

export default function Header({ onOpenCab, onScrollToSalons }) {
  return (
    <header className="sticky top-0 z-40 border-b border-gold-500/20 bg-noir-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 to-amber-700 flex items-center justify-center shadow-lg shadow-gold-500/20 border border-gold-400/30">
            <Wine className="w-5 h-5 text-noir-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-serif">
                Tribe<span className="text-gold-400">Dinner</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 font-mono">
                Private Salons
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Algorithmic 8-Seat Private Dinners for Founders & Operators
            </p>
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onScrollToSalons}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Upcoming Salons</span>
          </button>

          <button
            onClick={onOpenCab}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-gold-600 via-amber-600 to-gold-700 text-noir-950 hover:text-black shadow-md shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all font-sans font-bold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Host CAB (70% Off)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
