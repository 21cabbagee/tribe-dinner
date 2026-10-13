import React from 'react';
import { Wine, Shield, Compass, Heart } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  return (
    <footer className="border-t border-gold-500/20 bg-noir-950/90 pt-12 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                <Wine className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white font-serif">
                Tribe<span className="text-gold-400">Dinner</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Curated high-niche micro-salons and private dinners for founders, executives, and operators. Zero noisy conferences. 100% peer density guaranteed by algorithmic matching.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              Canonical URL: <span className="text-gold-300">/salons/curated-founder-dinner-network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Metros & Formats
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li><span className="text-slate-300">San Francisco (SoMa)</span></li>
              <li><span className="text-slate-300">New York City (SoHo)</span></li>
              <li><span className="text-slate-300">Austin (Downtown)</span></li>
              <li><span className="text-slate-300">Boston & London</span></li>
              <li><span className="text-slate-500">Chatham House Rule Enforced</span></li>
            </ul>
          </div>

          {/* SEO Matrix */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
              Target Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-default">curated founder private dinners</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">invite-only micro salons</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">tech executive dining collective</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">algorithmic guest matching salon</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TribeDinner Inc. All rights reserved. Zero-inventory private dining coordination.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCab}
              className="text-gold-400 hover:text-gold-300 font-semibold"
            >
              Host Advisory Board (CAB)
            </button>
            <span>•</span>
            <span className="text-slate-600">Built for High-Signal Founders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
