// 'use client';

// import { motion } from 'framer-motion';
// import WeddingTimer from './WeddingTimer';

// /* ─── Animation helpers ─── */
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 22 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
// });
// const fadeIn = (delay = 0) => ({
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   transition: { duration: 0.9, delay },
// });
// const scaleIn = (delay = 0) => ({
//   initial: { scaleX: 0, opacity: 0 },
//   animate: { scaleX: 1, opacity: 1 },
//   transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
// });

// /* ─── Corner SVG ornament ─── */
// const Corner = () => (
//   <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
//     <path d="M8 102 Q8 8 102 8"  stroke="#d4af37" strokeWidth="0.8" opacity="0.55"/>
//     <path d="M8 78  Q8 8 78  8"  stroke="#e8c4c4" strokeWidth="0.6" opacity="0.60"/>
//     <path d="M8 56  Q8 8 56  8"  stroke="#d4a5a5" strokeWidth="0.4" opacity="0.45"/>
//     <circle cx="8" cy="8" r="4" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.6"/>
//     <circle cx="8" cy="8" r="2" fill="#d4af37" opacity="0.75"/>
//     <line x1="8"  y1="28" x2="13" y2="28" stroke="#d4af37" strokeWidth="0.7" opacity="0.5"/>
//     <line x1="8"  y1="48" x2="11" y2="48" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
//     <line x1="28" y1="8"  x2="28" y2="13" stroke="#d4af37" strokeWidth="0.7" opacity="0.5"/>
//     <line x1="48" y1="8"  x2="48" y2="11" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
//     <g transform="translate(8,8)">
//       <ellipse cx="0" cy="-9" rx="2.5" ry="4.5" fill="#e8c4c4" opacity="0.55" transform="rotate(0)"/>
//       <ellipse cx="0" cy="-9" rx="2.5" ry="4.5" fill="#e8c4c4" opacity="0.55" transform="rotate(90)"/>
//       <ellipse cx="0" cy="-9" rx="2.5" ry="4.5" fill="#d4a5a5" opacity="0.40" transform="rotate(45)"/>
//       <ellipse cx="0" cy="-9" rx="2.5" ry="4.5" fill="#d4a5a5" opacity="0.40" transform="rotate(135)"/>
//       <circle cx="0" cy="0" r="3"   fill="#d4af37" opacity="0.80"/>
//       <circle cx="0" cy="0" r="1.3" fill="#fff8f3" opacity="0.70"/>
//     </g>
//     <g transform="translate(8,54)">
//       <rect x="-2" y="-2" width="4" height="4" fill="#d4af37" opacity="0.40" transform="rotate(45)"/>
//     </g>
//     <g transform="translate(54,8)">
//       <rect x="-2" y="-2" width="4" height="4" fill="#d4af37" opacity="0.40" transform="rotate(45)"/>
//     </g>
//     <path d="M18 8 Q14 14 8 18" stroke="#c4a882" strokeWidth="0.6" fill="none" opacity="0.35"/>
//     <path d="M32 8 Q24 18 8 32" stroke="#c4a882" strokeWidth="0.5" fill="none" opacity="0.22"/>
//     <circle cx="26" cy="14" r="1"   fill="#e8c4c4" opacity="0.45"/>
//     <circle cx="14" cy="26" r="1"   fill="#e8c4c4" opacity="0.45"/>
//     <circle cx="20" cy="17" r="0.7" fill="#d4af37" opacity="0.35"/>
//     <circle cx="17" cy="20" r="0.7" fill="#d4af37" opacity="0.35"/>
//   </svg>
// );

// /* ─── Large flower at garland peaks ─── */
// const BigFlower = ({ color1 = '#e8c4c4', color2 = '#d4a5a5' }) => (
//   <>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color1} opacity="0.85"/>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color1} opacity="0.85" transform="rotate(60)"/>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color2} opacity="0.7"  transform="rotate(120)"/>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color2} opacity="0.7"  transform="rotate(180)"/>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color1} opacity="0.85" transform="rotate(240)"/>
//     <ellipse cx="0" cy="-11" rx="4" ry="7.5" fill={color2} opacity="0.7"  transform="rotate(300)"/>
//     <circle cx="0" cy="0" r="5"   fill="#d4af37"/>
//     <circle cx="0" cy="0" r="2.5" fill="#fff8f3" opacity="0.75"/>
//   </>
// );

// /* ─── Small flower at swag bottoms ─── */
// const SmallFlower = () => (
//   <>
//     <ellipse cx="0" cy="-7" rx="2.8" ry="5" fill="#fde8ec" opacity="0.9" transform="rotate(0)"/>
//     <ellipse cx="0" cy="-7" rx="2.8" ry="5" fill="#fde8ec" opacity="0.9" transform="rotate(72)"/>
//     <ellipse cx="0" cy="-7" rx="2.8" ry="5" fill="#f4c8d0" opacity="0.8" transform="rotate(144)"/>
//     <ellipse cx="0" cy="-7" rx="2.8" ry="5" fill="#f4c8d0" opacity="0.8" transform="rotate(216)"/>
//     <ellipse cx="0" cy="-7" rx="2.8" ry="5" fill="#fde8ec" opacity="0.9" transform="rotate(288)"/>
//     <circle cx="0" cy="0" r="3.5" fill="#d4af37"/>
//     <circle cx="0" cy="0" r="1.5" fill="#fff8f3" opacity="0.8"/>
//   </>
// );

// /* ─── Garland (full-width SVG, pure CSS animations) ─── */
// const Garland = () => (
//   <div style={{ position:'absolute', top:0, left:0, right:0, height:110, pointerEvents:'none', zIndex:10 }}>
//     <style>{`
//       @keyframes drawRope { to { stroke-dashoffset: 0; } }
//       @keyframes flDrop {
//         0%   { opacity: 0; transform: translateY(-18px) scale(0.5); }
//         100% { opacity: 1; transform: translateY(0)    scale(1);   }
//       }
//       @keyframes sway {
//         0%   { transform: rotate(-4deg); }
//         100% { transform: rotate( 4deg); }
//       }
//       .g-rope {
//         stroke-dasharray: 2000;
//         stroke-dashoffset: 2000;
//         animation: drawRope 1.1s ease forwards 0.05s;
//       }
//       .g-rope2 {
//         stroke-dasharray: 2000;
//         stroke-dashoffset: 2000;
//         animation: drawRope 1.1s ease forwards 0.2s;
//       }
//       .g-fl { transform-origin: center top; animation: flDrop 0.7s cubic-bezier(0.34,1.56,0.64,1) both; }
//       .g-fl-0  { animation-delay: 0.05s } .g-fl-1  { animation-delay: 0.12s }
//       .g-fl-2  { animation-delay: 0.19s } .g-fl-3  { animation-delay: 0.26s }
//       .g-fl-4  { animation-delay: 0.33s } .g-fl-5  { animation-delay: 0.40s }
//       .g-fl-6  { animation-delay: 0.47s } .g-fl-7  { animation-delay: 0.54s }
//       .g-fl-8  { animation-delay: 0.61s } .g-fl-9  { animation-delay: 0.68s }
//       .g-fl-10 { animation-delay: 0.75s } .g-fl-11 { animation-delay: 0.82s }
//       .g-fl-12 { animation-delay: 0.89s }
//       .g-lf { animation: sway 3.5s ease-in-out infinite alternate; }
//       .g-lf:nth-child(odd) { animation-direction: alternate-reverse; }
//     `}</style>
//     {/* Soft wash at top */}
//     <div style={{ position:'absolute', top:0, left:0, right:0, height:70, background:'linear-gradient(180deg,rgba(255,255,255,0.55) 0%,transparent 100%)' }}/>
//     <svg width="100%" height="110" viewBox="0 0 1200 110" preserveAspectRatio="xMidYMid meet" style={{ display:'block', overflow:'visible' }}>
//       <defs>
//         <linearGradient id="rod" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%"   stopColor="#4a3728"/>
//           <stop offset="8%"   stopColor="#d4af37"/>
//           <stop offset="22%"  stopColor="#f0d080"/>
//           <stop offset="50%"  stopColor="#d4af37"/>
//           <stop offset="78%"  stopColor="#f0d080"/>
//           <stop offset="92%"  stopColor="#d4af37"/>
//           <stop offset="100%" stopColor="#4a3728"/>
//         </linearGradient>
//       </defs>

//       {/* Swag ropes */}
//       <path className="g-rope"
//         d="M0,5 Q100,42 200,16 Q300,42 400,16 Q500,42 600,16 Q700,42 800,16 Q900,42 1000,16 Q1100,42 1200,5"
//         stroke="#c4a882" strokeWidth="1.2" fill="none" opacity="0.55"/>
//       <path className="g-rope2"
//         d="M0,5 Q100,42 200,16 Q300,42 400,16 Q500,42 600,16 Q700,42 800,16 Q900,42 1000,16 Q1100,42 1200,5"
//         stroke="#d4af37" strokeWidth="0.4" fill="none" opacity="0.35"/>

//       {/* Hanging rings at peaks */}
//       <g opacity="0.7">
//         {[0,200,400,600,800,1000,1200].map((x,i) => {
//           const y = (x===0||x===1200) ? 5 : 16;
//           return (
//             <g key={i}>
//               <circle cx={x} cy={y} r="4" fill="none" stroke="#d4af37" strokeWidth="1"/>
//               <circle cx={x} cy={y} r="2" fill="#d4af37"/>
//             </g>
//           );
//         })}
//       </g>

//       {/* Large flowers at peaks */}
//       {[
//         { x:0,    y:5,  i:0, c1:'#e8c4c4', c2:'#d4a5a5' },
//         { x:200,  y:16, i:1, c1:'#e8c4c4', c2:'#d4a5a5' },
//         { x:400,  y:16, i:2, c1:'#e8c4c4', c2:'#d4a5a5' },
//         { x:600,  y:16, i:3, c1:'#f0c8d0', c2:'#e8b4bc' },
//         { x:800,  y:16, i:4, c1:'#e8c4c4', c2:'#d4a5a5' },
//         { x:1000, y:16, i:5, c1:'#e8c4c4', c2:'#d4a5a5' },
//         { x:1200, y:5,  i:6, c1:'#e8c4c4', c2:'#d4a5a5' },
//       ].map(({ x, y, i, c1, c2 }) => (
//         <g key={i} className={`g-fl g-fl-${i}`} transform={`translate(${x},${y})`}>
//           <BigFlower color1={c1} color2={c2}/>
//         </g>
//       ))}

//       {/* Small flowers at swag bottoms */}
//       {[100,300,500,700,900,1100].map((x, i) => (
//         <g key={i} className={`g-fl g-fl-${i+7}`} transform={`translate(${x},40)`}>
//           <SmallFlower/>
//         </g>
//       ))}

//       {/* Leaves */}
//       <g opacity="0.6">
//         {[
//           [50,24,-15],[150,32,12],[250,34,-18],[350,34,14],
//           [450,32,-10],[550,34,16],[650,34,-14],[750,32,10],
//           [850,34,-16],[950,32,12],[1050,34,-10],[1150,26,15],
//         ].map(([x, y, r], i) => (
//           <g key={i} className="g-lf" transform={`translate(${x},${y}) rotate(${r})`}>
//             <ellipse cx="0" cy="-5" rx="3" ry="6" fill={i%2===0 ? '#8fae78' : '#7a9e6a'}/>
//           </g>
//         ))}
//       </g>

//       {/* Tiny bud dots */}
//       <g opacity="0.55">
//         {[
//           [60,20,'#f4c8d0'],[140,28,'#d4af37'],[260,28,'#f4c8d0'],[340,22,'#d4af37'],
//           [460,28,'#f4c8d0'],[540,22,'#d4af37'],[660,28,'#f4c8d0'],[740,22,'#d4af37'],
//           [860,28,'#f4c8d0'],[940,22,'#d4af37'],[1060,28,'#f4c8d0'],[1140,22,'#d4af37'],
//         ].map(([x, y, c], i) => (
//           <circle key={i} cx={x} cy={y} r={i%2===0?2.5:2} fill={c}/>
//         ))}
//       </g>
//     </svg>
//   </div>
// );

// /* ─── Corner positions ─── */
// const corners = [
// //   { style: { top:14, left:14 } },
// //   { style: { top:14, right:14, transform:'scaleX(-1)' } },
// //   { style: { bottom:14, left:14, transform:'scaleY(-1)' } },
// //   { style: { bottom:14, right:14, transform:'scale(-1,-1)' } },
// ];

// /* ─── Hero ─── */
// export default function Hero() {
//   return (
//     <>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
//         @keyframes spulse { 0%,100%{opacity:0.35} 55%{opacity:1} }
//       `}</style>

//       <section style={{
//         position:'relative',
//         minHeight:'100vh',
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center',
//         justifyContent:'center',
//         overflow:'hidden',
//         background:'linear-gradient(175deg,#ffffff 0%,#fff8f8 22%,#fdeef0 45%,#f8dce0 68%,#f0c8ce 85%,#e8b4bc 100%)',
//         padding:'110px 24px 90px',
//       }}>

//         {/* Ambient blobs */}
//         <div style={{ position:'absolute', top:-80, left:-100, width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle,rgba(212,165,165,0.18) 0%,transparent 68%)', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', bottom:-80, right:-100, width:440, height:440, borderRadius:'50%', background:'radial-gradient(circle,rgba(212,175,55,0.11) 0%,transparent 68%)', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', top:'55%', left:'50%', transform:'translate(-50%,-50%)', width:540, height:300, borderRadius:'50%', background:'radial-gradient(ellipse,rgba(255,255,255,0.22) 0%,transparent 65%)', pointerEvents:'none' }}/>

//         {/* Garland */}
//         <Garland/>

//         {/* Corner ornaments */}
//         {corners.map((c, i) => (
//           <motion.div key={i} {...fadeIn(0.7 + i * 0.08)}
//             style={{ position:'absolute', ...c.style }}>
//             <Corner/>
//           </motion.div>
//         ))}

//         {/* ── Main content ── */}
//         <div style={{ position:'relative', zIndex:2, textAlign:'center', maxWidth:600 }}>

//           {/* Eyebrow */}
//           <motion.p {...fadeUp(0.1)} style={{
//             fontFamily:"'Jost', sans-serif", fontWeight:200,
//             fontSize:'0.68rem', letterSpacing:'0.42em',
//             color:'#9a7070', textTransform:'uppercase', marginBottom:'1.5rem',
//           }}>
//             Wedding Celebrations
//           </motion.p>

//           {/* Top divider */}
//           <motion.div {...fadeIn(0.2)} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:'1.3rem' }}>
//             <motion.div {...scaleIn(0.2)} style={{ width:55, height:'0.5px', background:'linear-gradient(90deg,transparent,#d4af37)' }}/>
//             <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
//               <path d="M13 2 L15.2 9.5 L23 9.5 L16.8 14.2 L19.2 21.8 L13 17 L6.8 21.8 L9.2 14.2 L3 9.5 L10.8 9.5 Z" fill="#d4af37" opacity="0.85"/>
//               <circle cx="13" cy="13" r="2.2" fill="#fff8f3" opacity="0.65"/>
//             </svg>
//             <motion.div {...scaleIn(0.2)} style={{ width:55, height:'0.5px', background:'linear-gradient(90deg,#d4af37,transparent)' }}/>
//           </motion.div>

//           {/* Names */}
//           <motion.h1 {...fadeUp(0.3)} style={{
//             fontFamily:"'Cormorant Garamond', Georgia, serif",
//             fontSize:'clamp(2.6rem, 6vw, 4.2rem)',
//             fontWeight:300, color:'#3d2414',
//             letterSpacing:'0.03em', lineHeight:1.1,
//             margin:0,
//           }}>
//             Abhinav{' '}
//             <span style={{ fontStyle:'italic', color:'#8b6b6b' }}>&amp;</span>
//             {' '}Aalekhya
//           </motion.h1>

//           {/* Tagline */}
//           <motion.div {...fadeUp(0.45)} style={{ margin:'1.4rem 0 1.5rem' }}>
//             {['Together with their families','request the honour of your presence'].map((line, i) => (
//               <p key={i} style={{
//                 fontFamily:"'Cormorant Garamond', serif",
//                 fontSize:'1.05rem', fontWeight:300, fontStyle:'italic',
//                 color:'#7a5a5a', letterSpacing:'0.06em', lineHeight:1.75,
//                 margin:0,
//               }}>{line}</p>
//             ))}
//           </motion.div>

//           {/* Middle divider — triple diamond */}
//           <motion.div {...fadeIn(0.5)} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10, marginBottom:'1.5rem' }}>
//             <motion.div {...scaleIn(0.5)} style={{ width:40, height:'0.5px', background:'linear-gradient(90deg,transparent,#d4af37)' }}/>
//             {[0,1,2].map(i => (
//               <div key={i} style={{ width:6, height:6, background:i===1?'#d4af37':'#e8c4c4', transform:'rotate(45deg)', opacity:i===1?1:0.65 }}/>
//             ))}
//             <motion.div {...scaleIn(0.5)} style={{ width:40, height:'0.5px', background:'linear-gradient(90deg,#d4af37,transparent)' }}/>
//           </motion.div>

//        {/* Wedding info strip */}
// <motion.div {...fadeIn(0.55)} style={{
//   display: 'flex', alignItems: 'stretch', justifyContent: 'center',
//   border: '0.5px solid rgba(212,175,55,0.30)',
//   background: 'rgba(255,255,255,0.35)',
//   backdropFilter: 'blur(6px)',
//   marginBottom: '1.6rem',
// }}>
//   {[
//     { label: 'Wedding',  value: '5 September 2026' },
//     { label: 'Venue',    value: 'Dwaraka Tirumala, Andhra Pradesh' },
//     { label: 'Time',     value: 'Evening' },
//   ].map(({ label, value }, i) => (
//     <div key={i} style={{
//       padding: '0.7rem 1.4rem', textAlign: 'center', flex: 1,
//       borderLeft: i > 0 ? '0.5px solid rgba(212,175,55,0.25)' : 'none',
//     }}>
//       <p style={{
//         fontFamily: "'Jost', sans-serif", fontWeight: 200,
//         fontSize: '0.55rem', letterSpacing: '0.3em',
//         color: '#9a7070', textTransform: 'uppercase', marginBottom: '0.25rem',
//       }}>{label}</p>
//       <p style={{
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: '0.9rem', fontWeight: 400,
//         color: '#4a3728', letterSpacing: '0.04em',
//       }}>{value}</p>
//     </div>
//   ))}
// </motion.div>

// {/* Timer */}
// <WeddingTimer />

//         </div>


//       </section>
//     </>
//   );
// }

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
            className="absolute inset-0 scale-[1.2] bg-cover bg-center no-repeat opacity-55 brightness-[0.75] contrast-[1.05]"
            style={{ backgroundImage: "url('/images/bg1.png')", backgroundPosition: 'center 40%' }}
          />
          {/* Subtle translucent night gradient to protect readability without washing out the template */}
          <div className="absolute inset-0 scale-[1.2] bg-gradient-to-b from-[#120905]/70 via-[#1a1126]/40 to-[#120905]/75" />
          <div className="absolute inset-0 scale-[1.2] bg-[radial-gradient(circle_at_20%_110%,transparent_10%,#120905_180%)]" />
        </motion.div>
        
        {/* ── MINIMAL TOP GARLAND LINE ── */}
        <MinimalGarland />

        {/* ── CLEAN TYPOGRAPHY MAIN BANNER ── */}
        <motion.div style={{ y: contentY }} className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          
          {/* Couple Names */}
          <motion.p 
            {...fadeUp(0.1)} 
            className=" gold-shimmer-text tracking-[0.025] leading-none m-0 text-[3rem] sm:text-[3.9rem] md:text-[4.3rem]"
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
          <motion.div 
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
          </motion.div>

          {/* Countdown Clock Module */}
          <WeddingTimer />

        </motion.div>
      </section>
    </>
  );
}