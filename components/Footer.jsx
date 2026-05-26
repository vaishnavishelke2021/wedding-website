'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export default function WeddingFooterFiligree() {
  const darkTone = '#110500';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@200;300;400;500&display=swap');
        
        @keyframes darkGoldFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .dark-gold-bg {
          background: linear-gradient(
            135deg, 
            #8a6f27 0%, 
            #aa8f3c 25%, 
            #c5a85c 50%, 
            #967930 75%, 
            #8a6f27 90%
          );
          background-size: 400% 400%;
          animation: darkGoldFlow 9s ease infinite;
        }

        @keyframes continuousPulse {
          0% { transform: scale(0.96); opacity: 0.4; }
          50% { transform: scale(1.04); opacity: 0.8; }
          100% { transform: scale(0.96); opacity: 0.4; }
        }

        .filigree-heart {
          animation: continuousPulse 3.5s ease-in-out infinite;
        }
      `}</style>

      <footer className="dark-gold-bg w-full py-32 px-8 relative select-none flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-[6%] border pointer-events-none opacity-20" style={{ borderColor: darkTone }} />

        <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
          
          {/* ── Couple Branding ── */}
          <h3 
            className="font-light tracking-[0.06em] m-0 text-4xl sm:text-5xl mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#110500", fontWeight: 400 }}
          >
            Abhinav & Aalekhya
          </h3>

          {/* ── Wedding Date Subtitle Accent ── */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[0.5px]" style={{ backgroundColor: `${darkTone}55` }} />
            <span 
              className="text-[0.68rem] tracking-[0.4em] uppercase font-medium"
              style={{ fontFamily: "'Jost', sans-serif", color: darkTone }}
            >
              September 5 · 2026
            </span>
            <div className="w-8 h-[0.5px]" style={{ backgroundColor: `${darkTone}55` }} />
          </div>

          {/* ── Emotional Message ── */}
          <p 
            className="text-[1.18rem] font-light italic leading-relaxed m-0 max-w-md px-4 mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: darkTone, opacity: 0.92 }}
          >
            Made with love for our family and friends your blessings are our most precious gift.
          </p>

          {/* ── Visual Anchor Pinpoint Heart Filigree ── */}
          <div className="filigree-heart flex flex-col items-center gap-2">
            <div className="w-[1px] h-8" style={{ background: `linear-gradient(180deg, ${darkTone}66, transparent)` }} />
            <Heart size={15} strokeWidth={1} style={{ color: darkTone, fill: `${darkTone}11` }} />
          </div>

        </div>
      </footer>
    </>
  );
}