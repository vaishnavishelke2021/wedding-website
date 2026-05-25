// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Hero from '@/components/Hero';

// const fabricLeft = {
//   background: `
//     repeating-linear-gradient(180deg, rgba(255,255,255,0.015) 0px, rgba(0,0,0,0.025) 3px, rgba(255,255,255,0.01) 6px),
//     linear-gradient(108deg, #4a3728 0%, #6b4423 20%, #8b6b6b 40%, #d4a5a5 60%, #e8c4c4 75%, #d4a5a5 85%, #6b4423 100%)
//   `.trim(),
// };

// const fabricRight = {
//   background: `
//     repeating-linear-gradient(180deg, rgba(255,255,255,0.015) 0px, rgba(0,0,0,0.025) 3px, rgba(255,255,255,0.01) 6px),
//     linear-gradient(-108deg, #4a3728 0%, #6b4423 20%, #8b6b6b 40%, #d4a5a5 60%, #e8c4c4 75%, #d4a5a5 85%, #6b4423 100%)
//   `.trim(),
// };

// // SVG floral garland repeated as a data URI for the valance
// const GarlandSVG = () => (
//   <svg
//     viewBox="0 0 1200 90"
//     xmlns="http://www.w3.org/2000/svg"
//     style={{ width: '100%', height: 90, display: 'block' }}
//     preserveAspectRatio="xMidYMid slice"
//   >
//     <defs>
//       <g id="flower">
//         {/* Petals */}
//         {[0, 60, 120, 180, 240, 300].map((deg, i) => (
//           <ellipse
//             key={i}
//             cx={Math.cos((deg * Math.PI) / 180) * 7}
//             cy={Math.sin((deg * Math.PI) / 180) * 7}
//             rx="5" ry="3"
//             fill="#e8c4c4"
//             transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 7} ${Math.sin((deg * Math.PI) / 180) * 7})`}
//             opacity="0.9"
//           />
//         ))}
//         {/* Center */}
//         <circle cx="0" cy="0" r="3.5" fill="#d4af37" />
//         <circle cx="0" cy="0" r="1.5" fill="#fff8f3" opacity="0.7" />
//       </g>
//       <g id="small-flower">
//         {[0, 72, 144, 216, 288].map((deg, i) => (
//           <ellipse
//             key={i}
//             cx={Math.cos((deg * Math.PI) / 180) * 5}
//             cy={Math.sin((deg * Math.PI) / 180) * 5}
//             rx="3.5" ry="2"
//             fill="#d4a5a5"
//             transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 5} ${Math.sin((deg * Math.PI) / 180) * 5})`}
//             opacity="0.85"
//           />
//         ))}
//         <circle cx="0" cy="0" r="2.5" fill="#d4af37" opacity="0.9" />
//       </g>
//       <g id="leaf">
//         <ellipse cx="0" cy="-5" rx="3" ry="6" fill="#7a9e6e" opacity="0.6" />
//       </g>
//     </defs>

//     {/* Swag rope */}
//     <path
//       d="M0,18 Q150,52 300,22 Q450,52 600,18 Q750,52 900,22 Q1050,52 1200,18"
//       stroke="#8b6b6b" strokeWidth="1.5" fill="none" opacity="0.5"
//     />
//     <path
//       d="M0,18 Q150,52 300,22 Q450,52 600,18 Q750,52 900,22 Q1050,52 1200,18"
//       stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.4"
//     />

//     {/* Leaves along swag */}
//     {[30,80,130,180,230,270,320,370,420,470,510,560,610,660,710,760,810,850,900,950,1000,1050,1100,1150].map((x, i) => {
//       const t = (x / 1200);
//       const seg = Math.floor(t * 4);
//       const segT = (t * 4) - seg;
//       const swagY = (seg % 2 === 0)
//         ? 18 + (52 - 18) * Math.sin(segT * Math.PI)
//         : 52 + (18 - 52) * Math.sin(segT * Math.PI);
//       return (
//         <g key={i} transform={`translate(${x}, ${swagY - 6}) rotate(${i % 2 === 0 ? -20 : 20})`}>
//           <use href="#leaf" />
//         </g>
//       );
//     })}

//     {/* Large flowers at peaks (top of each swag) */}
//     {[0, 300, 600, 900, 1200].map((x, i) => (
//       <g key={i} transform={`translate(${x}, 18)`}>
//         <use href="#flower" />
//       </g>
//     ))}

//     {/* Small flowers along swag bottom */}
//     {[150, 450, 750, 1050].map((x, i) => (
//       <g key={i} transform={`translate(${x}, 48)`}>
//         <use href="#small-flower" />
//       </g>
//     ))}

//     {/* Extra small filler flowers */}
//     {[75, 225, 375, 525, 675, 825, 975, 1125].map((x, i) => {
//       const t = x / 1200;
//       const seg = Math.floor(t * 4);
//       const segT = (t * 4) - seg;
//       const swagY = (seg % 2 === 0)
//         ? 18 + (52 - 18) * Math.sin(segT * Math.PI)
//         : 52 + (18 - 52) * Math.sin(segT * Math.PI);
//       return (
//         <g key={i} transform={`translate(${x}, ${swagY})`}>
//           <circle r="2.5" fill="#e8d5b6" opacity="0.7" />
//           <circle r="1" fill="#d4af37" opacity="0.8" />
//         </g>
//       );
//     })}

//     {/* Gold accent bar at very top */}
//     <rect x="0" y="0" width="1200" height="3"
//       fill="url(#goldBar)" opacity="0.8" />
//     <defs>
//       <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#4a3728" />
//         <stop offset="15%" stopColor="#d4af37" />
//         <stop offset="30%" stopColor="#f0d080" />
//         <stop offset="50%" stopColor="#d4af37" />
//         <stop offset="70%" stopColor="#f0d080" />
//         <stop offset="85%" stopColor="#d4af37" />
//         <stop offset="100%" stopColor="#4a3728" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// export default function Entry() {
//   const [phase, setPhase] = useState('idle');

//   useEffect(() => {
//     const openTimer = setTimeout(() => setPhase('opening'), 600);
//     const revealTimer = setTimeout(() => setPhase('revealed'), 2800);
//     return () => {
//       clearTimeout(openTimer);
//       clearTimeout(revealTimer);
//     };
//   }, []);

//   return (
//     <div style={{
//       position: 'relative', width: '100%', minHeight: '100vh',
//       overflow: 'hidden', background: '#faf7f2',
//     }}>

//       {/* Hero */}
      // <div style={{
      //   position: 'absolute', inset: 0,
      //   opacity: phase === 'revealed' ? 1 : 0,
      //   transition: 'opacity 1.2s ease 0.3s',
      //   pointerEvents: phase === 'revealed' ? 'auto' : 'none',
      // }}>
      //   <Hero />
      // </div>

//       {/* Floral valance */}
//       <AnimatePresence>
//         {phase !== 'revealed' && (
//           <motion.div
//             key="valance"
//             exit={{ y: '-100%', opacity: 0 }}
//             transition={{ duration: 0.6, ease: 'easeIn', delay: 0.2 }}
//             style={{
//               position: 'absolute', top: 0, left: 0, right: 0,
//               zIndex: 55,
//               background: 'linear-gradient(180deg, #faf7f2 0%, rgba(250,247,242,0.85) 70%, transparent 100%)',
//               paddingBottom: 4,
//             }}
//           >
//             <GarlandSVG />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Left curtain */}
//       <AnimatePresence>
//         {phase !== 'revealed' && (
//           <motion.div
//             key="curtain-left"
//             initial={{ x: '0%' }}
//             animate={{ x: phase === 'opening' ? '-105%' : '0%' }}
//             exit={{ x: '-105%' }}
//             transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
//             style={{
//               position: 'absolute', top: 0, bottom: 0, left: 0,
//               width: '52%', zIndex: 50, overflow: 'hidden',
//               ...fabricLeft,
//             }}
//           >
//             {/* Fabric pleats */}
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(0,0,0,0.06) 10px, rgba(255,255,255,0.03) 20px, rgba(0,0,0,0.04) 30px, rgba(255,255,255,0.06) 40px)',
//             }} />
//             {/* Soft sheen */}
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'linear-gradient(135deg, rgba(255,248,243,0.12) 0%, transparent 50%, rgba(212,175,55,0.06) 100%)',
//             }} />
//             {/* Edge shadow toward center */}
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'linear-gradient(90deg, transparent 50%, rgba(74,55,40,0.45) 100%)',
//             }} />
//             {/* Gold trim edge */}
//             <div style={{
//               position: 'absolute', top: 0, right: 0, bottom: 0, width: 4,
//               background: 'linear-gradient(180deg, transparent 0%, #d4af37 8%, #f0d080 25%, #d4af37 50%, #f0d080 75%, #d4af37 92%, transparent 100%)',
//               opacity: 0.8,
//             }} />
//             {/* Rose highlight line */}
//             <div style={{
//               position: 'absolute', top: 0, right: 4, bottom: 0, width: 1,
//               background: 'linear-gradient(180deg, transparent, rgba(232,196,196,0.4), transparent)',
//             }} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Right curtain */}
//       <AnimatePresence>
//         {phase !== 'revealed' && (
//           <motion.div
//             key="curtain-right"
//             initial={{ x: '0%' }}
//             animate={{ x: phase === 'opening' ? '105%' : '0%' }}
//             exit={{ x: '105%' }}
//             transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
//             style={{
//               position: 'absolute', top: 0, bottom: 0, right: 0,
//               width: '52%', zIndex: 50, overflow: 'hidden',
//               ...fabricRight,
//             }}
//           >
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(0,0,0,0.06) 10px, rgba(255,255,255,0.03) 20px, rgba(0,0,0,0.04) 30px, rgba(255,255,255,0.06) 40px)',
//             }} />
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'linear-gradient(225deg, rgba(255,248,243,0.12) 0%, transparent 50%, rgba(212,175,55,0.06) 100%)',
//             }} />
//             <div style={{
//               position: 'absolute', inset: 0,
//               background: 'linear-gradient(-90deg, transparent 50%, rgba(74,55,40,0.45) 100%)',
//             }} />
//             <div style={{
//               position: 'absolute', top: 0, left: 0, bottom: 0, width: 4,
//               background: 'linear-gradient(180deg, transparent 0%, #d4af37 8%, #f0d080 25%, #d4af37 50%, #f0d080 75%, #d4af37 92%, transparent 100%)',
//               opacity: 0.8,
//             }} />
//             <div style={{
//               position: 'absolute', top: 0, left: 4, bottom: 0, width: 1,
//               background: 'linear-gradient(180deg, transparent, rgba(232,196,196,0.4), transparent)',
//             }} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }


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