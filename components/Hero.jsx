'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import WeddingTimer from './WeddingTimer';

/* ─── Animation Configs ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay },
});

const scaleIn = (delay = 0) => ({
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Ultra-Minimalist Fine Dotted Garland ─── */
const MinimalGarland = () => {
  const nodeCount = 24; // More nodes over the span makes them look smaller and delicate
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start px-2 pointer-events-none select-none opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
      {[...Array(nodeCount)].map((_, i) => {
        const isAlternate = i % 3 === 0;
        return (
          <div key={i} className="flex flex-col items-center -space-y-0.5 flex-1 justify-center">
            {/* Tiny Minimal Leaf Point */}
            {isAlternate && (
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="opacity-80">
                <path d="M4,0 C6,4 8,8 7,11 C6,13 5,14 4,14 C3,14 2,13 1,11 C0,8 2,4 4,0 Z" fill="#1B4D3E" />
              </svg>
            )}
            {/* Micro Marigold Bead */}
            <div className={`w-3.5 h-3.5 rounded-full ${isAlternate ? 'bg-gradient-to-r from-[#FF9F1C] to-[#E65F00]' : 'bg-gradient-to-r from-[#FFBF00] to-[#FF9F1C]'}`} />
          </div>
        );
      })}
    </div>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], [0, -60]);
  const contentY = useTransform(scrollY, [0, 600], [0, 15]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@200;300;400&display=swap');
        
        .gold-shimmer-text {
          background: linear-gradient(90deg, #d4af37 0%, #ffeaa7 30%, #f1c40f 50%, #ffeaa7 70%, #d4af37 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShimmer 6s linear infinite;
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24 bg-[#120905]">
        
        {/* ── HIGH VISIBILITY TEMPLE BACKGROUND LAYER ── */}
        <motion.div style={{ y: bgY }} className="absolute inset-[-1%_0_-1%_0] z-0">
          <div 
            className="absolute inset-0 scale-[1.2] bg-cover bg-center no-repeat opacity-65 brightness-[0.75] contrast-[1.05]"
            style={{ backgroundImage: "url('/images/bg1.png')", backgroundPosition: 'center 40%' }}
          />
          {/* Subtle translucent night gradient to protect readability without washing out the template */}
          <div className="absolute inset-0 scale-[1.2] bg-gradient-to-b from-[#120905]/60 via-[#1a1126]/30 to-[#120905]/45" />
          <div className="absolute inset-0 scale-[1.2] bg-[radial-gradient(circle_at_20%_110%,transparent_10%,#120905_180%)]" />
        </motion.div>
        
        {/* ── MINIMAL TOP GARLAND LINE ── */}
        <MinimalGarland />

        <motion.div style={{ y: contentY }} className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          
          {/* Couple Names */}
          <motion.p 
            {...fadeUp(0.1)} 
            className=" gold-shimmer-text tracking-[0.025] leading-none m-0 text-[3rem] sm:text-[3.9rem] md:text-[4.5rem]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Abhinav{' '}
            <span className="gold-shimmer-text italic font-light px-0.5" >&amp;</span>
            {' '}Aalekhya
          </motion.p>

          {/* Invitation Text */}
          <motion.div {...fadeUp(0.25)} className="mt-6 mb-8 space-y-1">
            <p 
              className="font-light italic text-[#f3e3dc] tracking-[0.15em] text-sm md:text-base m-0 opacity-95"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Together with their families
            </p>
            <p 
              className="font-light italic text-[#f3e3dc] tracking-[0.15em] text-sm md:text-base m-0 opacity-95"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              request the honour of your presence
            </p>
          </motion.div>

          {/* Clean Geometric Accent Line */}
          <motion.div {...fadeIn(0.35)} className="flex items-center justify-center gap-2 w-full mb-10">
            <motion.div {...scaleIn(0.4)} className="w-12 h-[0.5px] bg-gradient-to-r from-transparent to-[#FFD700]/60" />
            <div className="w-1 h-1 bg-[#FFBF00] rotate-45 transform opacity-70" />
            <motion.div {...scaleIn(0.4)} className="w-12 h-[0.5px] bg-gradient-to-r from-[#FFD700]/60 to-transparent" />
          </motion.div>

          {/* Frameless Glass Event Details Card */}
          {/* <motion.div 
            {...fadeIn(0.45)} 
            className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center bg-black/35 backdrop-blur-sm rounded-sm w-full mb-10 border border-white/5 py-4 px-2"
          >
            {[
              { label: 'Wedding Date', value: '5 September 2026', icon: Calendar },
              { label: 'The Venue', value: 'Dwaraka Tirumala, Andhra Pradesh', icon: MapPin },
              { label: 'Auspicious Time', value: 'Evening · Midnight', icon: Clock },
            ].map(({ label, value, icon: Icon }, i) => (
              <div 
                key={i} 
                className={`py-2 px-4 flex flex-col items-center justify-center text-center ${
                  i > 0 ? 'border-t sm:border-t-0 sm:border-l border-white/5' : ''
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#FFBF00]/80 mb-1.5" strokeWidth={1.5} />
                <p 
                  className="font-light text-[0.58rem] tracking-[0.2em] text-[#f3e3dc]/60 uppercase mb-0.5"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {label}
                </p>
                <p 
                  className="font-light text-[0.9rem] text-neutral-200 tracking-wide m-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div> */}

          {/* Countdown Clock Module */}
          <WeddingTimer />

        </motion.div>
      </section>
    </>
  );
}