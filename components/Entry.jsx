'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';

/* ── Deep South Indian Premium Fabric Styling ── */
const fabricLeft = {
  background: `
    repeating-linear-gradient(180deg, rgba(255,255,255,0.01) 0px, rgba(0,0,0,0.03) 3px, rgba(255,255,255,0.005) 6px),
    linear-gradient(108deg, #0f0501 0%, #240f04 25%, #3d1b07 45%, #592a0e 65%, #3d1b07 80%, #170902 100%)
  `.trim(),
};

const fabricRight = {
  background: `
    repeating-linear-gradient(180deg, rgba(255,255,255,0.01) 0px, rgba(0,0,0,0.03) 3px, rgba(255,255,255,0.005) 6px),
    linear-gradient(-108deg, #0f0501 0%, #240f04 25%, #3d1b07 45%, #592a0e 65%, #3d1b07 80%, #170902 100%)
  `.trim(),
};

/* ── South Indian Marigold Garland (Yellow & Orange Flowers) ── */
const GarlandSVG = () => (
  <svg
    viewBox="0 0 1200 90"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: 90, display: 'block' }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      {/* Golden Yellow Marigold Flower */}
      <g id="flower-yellow">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse
            key={i}
            cx={Math.cos((deg * Math.PI) / 180) * 7}
            cy={Math.sin((deg * Math.PI) / 180) * 7}
            rx="6" ry="4"
            fill="#F5B041"
            transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 7} ${Math.sin((deg * Math.PI) / 180) * 7})`}
            opacity="0.95"
          />
        ))}
        <circle cx="0" cy="0" r="4" fill="#D35400" />
        <circle cx="0" cy="0" r="1.5" fill="#F4D03F" opacity="0.8" />
      </g>

      {/* Bright Orange Marigold Flower */}
      <g id="flower-orange">
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg, i) => (
          <ellipse
            key={i}
            cx={Math.cos((deg * Math.PI) / 180) * 5.5}
            cy={Math.sin((deg * Math.PI) / 180) * 5.5}
            rx="5" ry="3.5"
            fill="#E67E22"
            transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 5.5} ${Math.sin((deg * Math.PI) / 180) * 5.5})`}
            opacity="0.95"
          />
        ))}
        <circle cx="0" cy="0" r="3" fill="#F4D03F" />
      </g>

      {/* Traditional Green Mango Leaf */}
      <g id="mango-leaf">
        <path d="M0,0 Q-4,-12 0,-24 Q4,-12 0,0" fill="#1E8449" opacity="0.85" />
        <path d="M0,0 Q-2,-10 0,-20" stroke="#145A32" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>
    </defs>

    {/* Traditional Garland Hanging Cord */}
    <path
      d="M0,18 Q150,54 300,22 Q450,54 600,18 Q750,54 900,22 Q1050,54 1200,18"
      stroke="#1E8449" strokeWidth="1.5" fill="none" opacity="0.4"
    />
    <path
      d="M0,18 Q150,54 300,22 Q450,54 600,18 Q750,54 900,22 Q1050,54 1200,18"
      stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3"
    />

    {/* Mango leaves layered beneath flowers */}
    {[45, 105, 150, 195, 255, 345, 405, 450, 495, 555, 645, 705, 750, 795, 855, 945, 1005, 1050, 1095, 1155].map((x, i) => {
      const t = x / 1200;
      const seg = Math.floor(t * 4);
      const segT = (t * 4) - seg;
      const swagY = (seg % 2 === 0)
        ? 18 + (54 - 18) * Math.sin(segT * Math.PI)
        : 54 + (18 - 54) * Math.sin(segT * Math.PI);
      return (
        <g key={i} transform={`translate(${x}, ${swagY + 2}) rotate(${i % 2 === 0 ? -15 : 15}) scale(0.9)`}>
          <use href="#mango-leaf" />
        </g>
      );
    })}

    {/* Alternating Main Marigold Flowers */}
    {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((x, i) => {
      const t = x / 1200;
      const seg = Math.floor(t * 4);
      const segT = (t * 4) - seg;
      const swagY = (seg % 2 === 0)
        ? 18 + (54 - 18) * Math.sin(segT * Math.PI)
        : 54 + (18 - 54) * Math.sin(segT * Math.PI);
      return (
        <g key={i} transform={`translate(${x}, ${swagY})`}>
          <use href={i % 2 === 0 ? "#flower-yellow" : "#flower-orange"} />
        </g>
      );
    })}

    {/* Subtle Inner Buds (White Jasmine Accents) */}
    {[75, 225, 375, 525, 675, 825, 975, 1125].map((x, i) => {
      const t = x / 1200;
      const seg = Math.floor(t * 4);
      const segT = (t * 4) - seg;
      const swagY = (seg % 2 === 0)
        ? 18 + (54 - 18) * Math.sin(segT * Math.PI)
        : 54 + (18 - 54) * Math.sin(segT * Math.PI);
      return (
        <g key={i} transform={`translate(${x}, ${swagY - 4})`}>
          <circle r="3" fill="#FFF" opacity="0.95" />
          <circle r="1.2" fill="#F4D03F" />
        </g>
      );
    })}

    {/* Gold Accent Bar Top Trim */}
    <rect x="0" y="0" width="1200" height="3" fill="url(#goldBarEntry)" opacity="0.95" />
    <defs>
      <linearGradient id="goldBarEntry" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a0b02" />
        <stop offset="15%" stopColor="#d4af37" />
        <stop offset="30%" stopColor="#f5d269" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="70%" stopColor="#f5d269" />
        <stop offset="85%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#1a0b02" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Entry() {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    const openTimer = setTimeout(() => setPhase('opening'), 600);
    const revealTimer = setTimeout(() => setPhase('revealed'), 2800);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <div style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      overflow: 'hidden', background: '#060200',
    }}>

      {/* Main Hero Backing Layer using dynamic bg1.png image path */}
            <div style={{
        position: 'absolute', inset: 0,
        opacity: phase === 'revealed' ? 1 : 0,
        transition: 'opacity 1.2s ease 0.3s',
        pointerEvents: phase === 'revealed' ? 'auto' : 'none',
      }}>
        <Hero />
      </div>

      {/* Festive Flower Garland Top Valance Frame */}
      <AnimatePresence>
        {phase !== 'revealed' && (
          <motion.div
            key="valance"
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeIn', delay: 0.15 }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              zIndex: 55,
              background: 'linear-gradient(180deg, #060200 0%, rgba(6,2,0,0.8) 65%, transparent 100%)',
              paddingBottom: 6,
            }}
          >
            <GarlandSVG />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Premium Curtain fabric panel */}
      <AnimatePresence>
        {phase !== 'revealed' && (
          <motion.div
            key="curtain-left"
            initial={{ x: '0%' }}
            animate={{ x: phase === 'opening' ? '-105%' : '0%' }}
            exit={{ x: '-105%' }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute', top: 0, bottom: 0, left: 0,
              width: '52%', zIndex: 50, overflow: 'hidden',
              ...fabricLeft,
            }}
          >
            {/* Fine texture simulation pleating rows */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.18) 12px, rgba(255,255,255,0.01) 24px, rgba(0,0,0,0.12) 36px, rgba(255,255,255,0.02) 48px)',
            }} />
            {/* South Indian Silk Sheen overlay reflection */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(245,176,65,0.08) 0%, transparent 60%, rgba(212,175,55,0.04) 100%)',
            }} />
            {/* Deep dimensional edge shadows */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent 40%, rgba(10,3,0,0.7) 100%)',
            }} />
            {/* Pure Zari Border edge highlight line */}
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: 0, width: 5,
              background: 'linear-gradient(180deg, transparent 0%, #d4af37 8%, #f5d269 25%, #d4af37 50%, #f5d269 75%, #d4af37 92%, transparent 100%)',
              opacity: 0.9,
              boxShadow: '0 0 10px rgba(212,175,55,0.3)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Premium Curtain fabric panel */}
      <AnimatePresence>
        {phase !== 'revealed' && (
          <motion.div
            key="curtain-right"
            initial={{ x: '0%' }}
            animate={{ x: phase === 'opening' ? '105%' : '0%' }}
            exit={{ x: '105%' }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute', top: 0, bottom: 0, right: 0,
              width: '52%', zIndex: 50, overflow: 'hidden',
              ...fabricRight,
            }}
          >
            {/* Fine texture simulation pleating rows */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.18) 12px, rgba(255,255,255,0.01) 24px, rgba(0,0,0,0.12) 36px, rgba(255,255,255,0.02) 48px)',
            }} />
            {/* South Indian Silk Sheen overlay reflection */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(225deg, rgba(245,176,65,0.08) 0%, transparent 60%, rgba(212,175,55,0.04) 100%)',
            }} />
            {/* Deep dimensional edge shadows */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(-90deg, transparent 40%, rgba(10,3,0,0.7) 100%)',
            }} />
            {/* Pure Zari Border edge highlight line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: 5,
              background: 'linear-gradient(180deg, transparent 0%, #d4af37 8%, #f5d269 25%, #d4af37 50%, #f5d269 75%, #d4af37 92%, transparent 100%)',
              opacity: 0.9,
              boxShadow: '0 0 10px rgba(212,175,55,0.3)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}