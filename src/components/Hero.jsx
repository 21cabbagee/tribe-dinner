import React from 'react';
import { Wine, Users, Sparkles, Shield, ArrowRight, CheckCircle2, TrendingUp, Compass } from 'lucide-react';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero({ onOpenCab, onScrollToMatcher, onScrollToSalons }) {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden">
      {/* Interactive WebGL / Casberry Canvas Simulation */}
      <ParticlesCanvas color="245, 158, 11" particleCount={50} connectionDistance={120} />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-amber-600/15 via-gold-500/10 to-wine-700/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900/90 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-6 shadow-sm shadow-gold-500/10 font-mono">
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-ping" />
            <span className="tracking-wide">High-Signal Micro-Salons & Private Dining Network</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Strictly 8 Seats</span>
          </div>

          {/* Exact Specification H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif leading-[1.15]">
            Curated Private Dinner Salons for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-300 to-gold-400">
              High-Impact Founders
            </span>{' '}
            & Operators
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Zero noisy 500-person conferences. Zero sponsored keynote sales pitches. Algorithmic guest-matching that seats you at an 8-person table with the exact peers solving your current operational bottleneck.
          </p>

          {/* Key Value Prop Matrix */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-noir-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">8-Seat Tables</span>
              </div>
              <p className="text-xs text-slate-400">Intimate Chatham House format with zero vanity panels</p>
            </div>

            <div className="p-3.5 rounded-xl bg-noir-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Algorithmic Match</span>
              </div>
              <p className="text-xs text-slate-400">Guests matched by stage, stack, and active bottleneck</p>
            </div>

            <div className="p-3.5 rounded-xl bg-noir-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-wine-400 mb-1">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">Zero Sales Pitches</span>
              </div>
              <p className="text-xs text-slate-400">Strict no-pitch rule; strictly peer founders & leads</p>
            </div>

            <div className="p-3.5 rounded-xl bg-noir-900/80 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-mono font-bold">$750M TAM</span>
              </div>
              <p className="text-xs text-slate-400">50k metro clusters × 50 dinners/yr × $300 spread</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToMatcher}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-noir-950 hover:text-black shadow-lg shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Run Algorithmic Table Matcher</span>
            </button>

            <button
              onClick={onScrollToSalons}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-noir-900/90 border border-gold-500/30 text-white hover:bg-noir-850 hover:border-gold-400/50 transition-all flex items-center justify-center gap-2"
            >
              <Wine className="w-4 h-4 text-gold-400" />
              <span>Browse Active Metros & Tables</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              San Francisco • New York • Austin • Boston • London
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              Escrow-Protected Ticket Reservations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
