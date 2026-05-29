'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-09-04T18:00:00');

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days:  Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins:  Math.floor((diff % 3600000)  / 60000),
    secs:  Math.floor((diff % 60000)    / 1000),
  };
}

const Cell = ({ value, label, pad = 2 }) => (
  <div className="relative bg-black/35 border border-white/5 backdrop-blur-sm pt-4 pb-3 px-2 text-center overflow-hidden rounded-sm">
    {/* Fine gold top accent line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
    
    <span 
      className="text-neutral-100 font-light block leading-none tracking-wide text-2xl sm:text-3xl md:text-4xl"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {String(value).padStart(pad, '0')}
    </span>
    
    <span 
      className="block uppercase tracking-[0.25em] text-[0.55rem] sm:text-[0.6rem] text-[#f3e3dc]/60 font-light mt-1.5"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {label}
    </span>
  </div>
);

export default function WeddingTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-lg mx-auto"
    >
      {/* 4-Column Time Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        <Cell value={time.days}  label="Days"    pad={2}/>
        <Cell value={time.hours} label="Hours"   pad={2}/>
        <Cell value={time.mins}  label="Minutes" pad={2}/>
        <Cell value={time.secs}  label="Seconds" pad={2}/>
      </div>
    </motion.div>
  );
}