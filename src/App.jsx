import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingSalonsList from './components/UpcomingSalonsList';
import AlgorithmicMatcher from './components/AlgorithmicMatcher';
import OutcomeChart from './components/OutcomeChart';
import CabModal from './components/CabModal';
import Footer from './components/Footer';
import { UPCOMING_SALONS } from './data/mockTribeData';

export default function App() {
  const [salons, setSalons] = useState(UPCOMING_SALONS);
  const [isCabOpen, setIsCabOpen] = useState(false);
  const [reservationNotice, setReservationNotice] = useState(null);

  const handleReserveSeat = (salon) => {
    setSalons(prev =>
      prev.map(s => {
        if (s.id === salon.id && s.confirmedGuests < s.totalSeats) {
          return {
            ...s,
            confirmedGuests: s.confirmedGuests + 1
          };
        }
        return s;
      })
    );

    setReservationNotice({
      title: salon.title,
      metro: salon.metro,
      venue: salon.neighborhood,
      price: salon.seatPrice
    });
  };

  const scrollToSalons = () => {
    const el = document.getElementById('upcoming-salons');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMatcher = () => {
    const el = document.getElementById('algorithmic-matcher');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-noir-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* Sticky Header */}
      <Header
        onOpenCab={() => setIsCabOpen(true)}
        onScrollToSalons={scrollToSalons}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCab={() => setIsCabOpen(true)}
          onScrollToMatcher={scrollToMatcher}
          onScrollToSalons={scrollToSalons}
        />

        {/* Bklit UI + Julien Bek $1 vs $6 Sequoia Framework */}
        <OutcomeChart onCtaClick={() => setIsCabOpen(true)} />

        {/* Algorithmic Matcher Sandbox */}
        <AlgorithmicMatcher
          onReserveMatchedSalon={(matchResult) => {
            const target = salons.find(s => s.metro === matchResult.metroTarget) || salons[0];
            handleReserveSeat(target);
          }}
        />

        {/* Active Salons List */}
        <UpcomingSalonsList
          salons={salons}
          onReserveSeat={handleReserveSeat}
        />
      </main>

      {/* Reservation Notification Toast */}
      {reservationNotice && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-2xl bg-noir-900 border border-gold-500/50 shadow-2xl shadow-gold-500/20 text-xs animate-fadeIn font-sans">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="font-bold text-gold-400 block mb-0.5">Seat Escrow Confirmed!</span>
              <p className="text-slate-200">
                Reserved 1 seat at <span className="font-bold text-white">{reservationNotice.title}</span> ({reservationNotice.venue}).
              </p>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Host briefing & dietary intake dispatched to your inbox.
              </p>
            </div>
            <button
              onClick={() => setReservationNotice(null)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenCab={() => setIsCabOpen(true)} />

      {/* Host Advisory Board (CAB) Modal */}
      <CabModal
        isOpen={isCabOpen}
        onClose={() => setIsCabOpen(false)}
      />
    </div>
  );
}
