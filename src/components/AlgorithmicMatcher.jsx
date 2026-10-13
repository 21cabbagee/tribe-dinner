import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { MATCHING_CRITERIA_QUESTIONS } from '../data/mockTribeData';

export default function AlgorithmicMatcher({ onReserveMatchedSalon }) {
  const [role, setRole] = useState(MATCHING_CRITERIA_QUESTIONS.roles[0]);
  const [stage, setStage] = useState(MATCHING_CRITERIA_QUESTIONS.stages[1]);
  const [topic, setTopic] = useState(MATCHING_CRITERIA_QUESTIONS.topics[0]);
  const [metro, setMetro] = useState('San Francisco');
  const [matching, setMatching] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  const handleRunMatcher = (e) => {
    e.preventDefault();
    setMatching(true);

    setTimeout(() => {
      setMatching(false);
      setMatchResult({
        score: '98.8%',
        recommendedSalon: metro === 'New York City' ? 'Cross-Border Rails & Regulated Fintech Dinner' : 'AI Infrastructure & Agentic Compute Salon',
        venue: metro === 'New York City' ? 'SoHo Heritage Loft (Private Omakase)' : 'SoMa Private Speakeasy (5-Course Tasting)',
        metroTarget: metro,
        seatPrice: metro === 'New York City' ? 400 : 350,
        rationale: `High-signal clustering: At this table, 6 of 8 guests are running autonomous agents in production. You will be seated directly across from a Series B AI founder who recently unbundled an enterprise incumbent and a GP managing $120M AUM. Zero commercial pitches permitted under Chatham House Rule.`,
        peerTags: ["Series B Founder ($14M ARR)", "GP ($120M AUM)", "Ex-Anthropic Chief Architect"]
      });
    }, 700);
  };

  return (
    <section id="algorithmic-matcher" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
      <div className="rounded-3xl border border-gold-500/30 bg-gradient-to-b from-noir-900/90 to-noir-950 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Proprietary 8-Seat Peer Clustering Algorithm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif">
            Algorithmic Dinner & Table Matcher
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Tell us your current operational reality. Our clustering engine seats you at an 8-person table with founders at your exact stage facing the exact same architectural challenges.
          </p>
        </div>

        {/* Wizard Form & Interactive Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Side */}
          <form onSubmit={handleRunMatcher} className="lg:col-span-6 space-y-4 font-sans">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Primary Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
              >
                {MATCHING_CRITERIA_QUESTIONS.roles.map((r, i) => (
                  <option key={i} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Company / Revenue Scale</label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                >
                  {MATCHING_CRITERIA_QUESTIONS.stages.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Preferred Metro</label>
                <select
                  value={metro}
                  onChange={(e) => setMetro(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
                >
                  <option value="San Francisco">San Francisco (SoMa)</option>
                  <option value="New York City">New York City (SoHo)</option>
                  <option value="Austin">Austin (Downtown)</option>
                  <option value="Boston">Boston (Back Bay)</option>
                  <option value="London">London (Mayfair)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Primary Operational Bottleneck</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-noir-950 border border-gold-500/20 text-white text-xs font-mono focus:border-gold-400 outline-none"
              >
                {MATCHING_CRITERIA_QUESTIONS.topics.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={matching}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-400 text-noir-950 font-bold text-xs uppercase tracking-wider font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/25"
            >
              {matching ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-noir-950" />
                  <span>Clustering Peer Network Profiles...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4 text-noir-950" />
                  <span>Run Algorithmic Table Placement</span>
                </>
              )}
            </button>
          </form>

          {/* Results Side */}
          <div className="lg:col-span-6 rounded-2xl border border-gold-500/20 bg-noir-950/80 p-6 flex flex-col justify-between">
            {matchResult ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Algorithmic Match Found
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
                    {matchResult.score} Table Fit
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-500 block mb-1">Matched Salon</span>
                  <h4 className="text-lg font-bold text-white font-serif">{matchResult.recommendedSalon}</h4>
                  <p className="text-xs text-gold-400 font-mono mt-0.5">{matchResult.venue} • {matchResult.metroTarget}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-noir-900 border border-white/5 text-xs text-slate-300 leading-relaxed font-sans">
                  <span className="font-bold text-slate-200 block mb-1">Seating Rationale:</span>
                  {matchResult.rationale}
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-500 block mb-1.5">Confirmed Seat Neighbors:</span>
                  <div className="flex flex-wrap gap-2">
                    {matchResult.peerTags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-noir-850 border border-gold-500/30 text-gold-200 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onReserveMatchedSalon(matchResult)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-gold-600 to-amber-600 hover:from-gold-500 hover:to-amber-500 text-noir-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-gold-500/20"
                  >
                    <span>Confirm Matched Seat (${matchResult.seatPrice} Escrow)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">
                <Compass className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                <p className="text-sm">Configure your operational profile and click "Run Algorithmic Table Placement".</p>
                <p className="text-xs text-slate-600 mt-1">Our engine matches across stage, tech stack, and active enterprise bottlenecks.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
