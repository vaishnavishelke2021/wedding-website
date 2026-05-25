// 'use client';

// import { motion } from 'framer-motion';
// import { CalendarPlus, MapPin } from 'lucide-react';

// /* ── Comprehensive Ceremonies Data ── */
// const CEREMONIES = [
//   {
//     id: 'engagement',
//     badge: '✦ First Ceremony ✦',
//     title: 'Engagement',
//     description: 'Together with our families, we joyfully invite you to witness as Abhinav and Aalekhya exchange rings and begin their journey into forever.',
//     bgImage: '/images/c1.png',
//     mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
//     info: [
//       { label: 'Date',  value: 'Sunday, 16 August 2026' },
//       { label: 'Time',  value: '10:30 AM onwards' },
//       { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
//       { label: 'Attire', value: 'Festive · Traditional' },
//     ],
//     eventCal: {
//       title: 'Engagement — Abhinav & Aalekhya',
//       description: 'Join us to celebrate the engagement of Abhinav & Aalekhya.',
//       location: 'Vijayawada, Andhra Pradesh, India',
//       startISO: '2026-08-16T10:30:00',
//       endISO:   '2026-08-16T13:00:00',
//     }
//   },
//   {
//     id: 'haldi',
//     badge: '✦ Pre-Wedding Festivities ✦',
//     title: 'Haldi',
//     description: 'A beautiful splash of yellow! Join us for a lively gathering filled with love, laughter, and traditional turmeric blessings.',
//     bgImage: '/images/c2.png', // Replace with your dynamic background image path
//     mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
//     info: [
//       { label: 'Date',  value: 'Friday, 28 August 2026' },
//       { label: 'Time',  value: 'Evening onwards' },
//       { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
//       { label: 'Attire', value: 'Shades of Yellow · Festive ethnic' },
//     ],
//     eventCal: {
//       title: 'Haldi Ceremony — Abhinav & Aalekhya',
//       description: 'Join us for the vibrant Haldi celebrations.',
//       location: 'Vijayawada, Andhra Pradesh, India',
//       startISO: '2026-08-28T16:00:00',
//       endISO:   '2026-08-28T20:00:00',
//     }
//   },
//   {
//     id: 'sangeet',
//     badge: '✦ Celebration of Music & Dance ✦',
//     title: 'Sangeet',
//     description: 'An evening of music, rhythm, and celebration! Put on your dancing shoes and join us for a spectacular night of performances.',
//     bgImage: '/images/c3.png',
//     mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
//     info: [
//       { label: 'Date',  value: 'Saturday, 29 August 2026' },
//       { label: 'Time',  value: 'Evening onwards' },
//       { label: 'Venue', value: 'CK Convention, Vijayawada' },
//       { label: 'Attire', value: 'Indo-Western · Glamorous Glam' },
//     ],
//     eventCal: {
//       title: 'Sangeet Night — Abhinav & Aalekhya',
//       description: 'Dance and celebrate with us at the Sangeet night.',
//       location: 'CK Convention, Vijayawada, India',
//       startISO: '2026-08-29T18:30:00',
//       endISO:   '2026-08-29T23:30:00',
//     }
//   },
//   {
//     id: 'pellikuthuru',
//     badge: '✦ Bridal Making Ceremony ✦',
//     title: 'Pellikuthuru',
//     description: 'In accordance with timeless traditions, we welcome auspicious blessings as Aalekhya is lovingly prepared for her wedding day.',
//     bgImage: '/images/c4.png',
//     mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
//     info: [
//       { label: 'Date',  value: 'Friday, 4 September 2026' },
//       { label: 'Time',  value: 'Morning onwards' },
//       { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
//       { label: 'Attire', value: 'Traditional Silk · Festive Wear' },
//     ],
//     eventCal: {
//       title: 'Pellikuthuru Ceremony (Aalekhya)',
//       description: 'Bridal preparation ceremony.',
//       location: 'Vijayawada, Andhra Pradesh, India',
//       startISO: '2026-09-04T07:30:00',
//       endISO:   '2026-09-04T11:30:00',
//     }
//   },
//   {
//     id: 'pellikoduku',
//     badge: '✦ Groom Making Ceremony ✦',
//     title: 'Pellikoduku',
//     description: 'Celebrating the sacred beginning of the nuptials as Abhinav is anointed with traditional values, ready to step into his new path.',
//     bgImage: '/images/c5.png',
//     mapsUrl: 'https://maps.google.com/?q=Gudapadu',
//     info: [
//       { label: 'Date',  value: 'Friday, 4 September 2026' },
//       { label: 'Time',  value: 'Morning onwards' },
//       { label: 'Venue', value: 'Gudapadu (60km from Vijayawada)' },
//       { label: 'Attire', value: 'Traditional Ethnic · Kurta' },
//     ],
//     eventCal: {
//       title: 'Pellikoduku Ceremony (Abhinav)',
//       description: 'Groom preparation ceremony.',
//       location: 'Gudapadu, Andhra Pradesh, India',
//       startISO: '2026-09-04T07:30:00',
//       endISO:   '2026-09-04T11:30:00',
//     }
//   },
//   {
//     id: 'wedding',
//     badge: '✦ The Muhurtham ✦',
//     title: 'Wedding',
//     description: 'The auspicious moment of lifetime union. Witness our sacred pheras, the exchange of vows, and our steps into a shared tomorrow.',
//     bgImage: '/images/c6.png',
//     mapsUrl: 'https://maps.google.com/?q=Dwaraka+Tirumala',
//     info: [
//       { label: 'Date',  value: '4 - 5 September 2026' },
//       { label: 'Time',  value: 'Evening to Midnight' },
//       { label: 'Venue', value: 'Dwaraka Tirumala (Chinna Tirupathi)' },
//       { label: 'Attire', value: 'Royal Traditional · Pattu' },
//     ],
//     eventCal: {
//       title: 'Wedding Muhurtham — Abhinav & Aalekhya',
//       description: 'Join us on our holy wedding day.',
//       location: 'Dwaraka Tirumala, Andhra Pradesh, India',
//       startISO: '2026-09-04T19:00:00',
//       endISO:   '2026-09-05T02:00:00',
//     }
//   },
//   {
//     id: 'vratham',
//     badge: '✦ Auspicious Thanks Giving ✦',
//     title: 'Vratham',
//     description: 'To invoke peace, prosperity, and divine harmony into our new life together, we welcome you to join our pristine morning prayer.',
//     bgImage: '/images/c7.png',
//     mapsUrl: 'https://maps.google.com/?q=Gudapadu',
//     info: [
//       { label: 'Date',  value: 'Saturday, 5 September 2026' },
//       { label: 'Time',  value: 'Morning onwards' },
//       { label: 'Venue', value: 'Gudapadu' },
//       { label: 'Attire', value: 'Graceful Traditional' },
//     ],
//     eventCal: {
//       title: 'Vratham — Abhinav & Aalekhya',
//       description: 'Post-wedding sacred prayers.',
//       location: 'Gudapadu, Andhra Pradesh, India',
//       startISO: '2026-09-05T08:30:00',
//       endISO:   '2026-09-05T12:30:00',
//     }
//   },
//   {
//     id: 'reception',
//     badge: '✦ Grand Homecoming Gala ✦',
//     title: 'Reception',
//     description: 'Let us celebrate the start of our beautiful journey! Join us for a majestic evening of dinner, greetings, and heartfelt cheers.',
//     bgImage: '/images/c8.png',
//     mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
//     info: [
//       { label: 'Date',  value: 'Sunday, 6 September 2026' },
//       { label: 'Time',  value: 'Evening onwards' },
//       { label: 'Venue', value: 'CK Convention, Vijayawada' },
//       { label: 'Attire', value: 'Formals · Modern Indian Royal' },
//     ],
//     eventCal: {
//       title: 'Wedding Reception — Abhinav & Aalekhya',
//       description: 'Celebrate our marriage homecoming.',
//       location: 'CK Convention, Vijayawada, India',
//       startISO: '2026-09-06T18:30:00',
//       endISO:   '2026-09-06T22:30:00',
//     }
//   }
// ];

// /* ── Calendar Link Generator Helper ── */
// const googleCalUrl = ({ title, description, location, startISO, endISO }) => {
//   const fmt = (d) => d.replace(/[-:T]/g, '').slice(0, 15) + 'Z';
//   return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startISO)}/${fmt(endISO)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
// };

// /* ── Decorative Kolam Strip Component ── */
// const KolamDots = ({ light = false }) => (
//   <svg width="100%" height="16" viewBox="0 0 600 16" preserveAspectRatio="xMidYMid meet" className="block">
//     <defs>
//       <pattern id={`kd-${light}`} x="0" y="0" width="30" height="16" patternUnits="userSpaceOnUse">
//         <circle cx="15" cy="8" r="1.5" fill={light ? 'rgba(255,240,180,0.6)' : 'rgba(212,175,55,0.6)'}/>
//         <circle cx="0"  cy="8" r="1"   fill={light ? 'rgba(255,220,160,0.35)' : 'rgba(212,175,55,0.3)'}/>
//         <circle cx="30" cy="8" r="1"   fill={light ? 'rgba(255,220,160,0.35)' : 'rgba(212,175,55,0.3)'}/>
//         <circle cx="15" cy="1" r="0.8" fill={light ? 'rgba(232,196,196,0.45)' : 'rgba(232,196,196,0.35)'}/>
//         <circle cx="15" cy="15" r="0.8" fill={light ? 'rgba(232,196,196,0.45)' : 'rgba(232,196,196,0.35)'}/>
//       </pattern>
//     </defs>
//     <rect width="100%" height="16" fill={`url(#kd-${light})`}/>
//   </svg>
// );

// export default function Ceremonies() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&family=Jost:wght@200;300;400&family=Noto+Serif+Telugu:wght@300;400&display=swap');

//         /* ── Dynamic background image animations ── */
//         .es-bg {
//           animation: breathe 24s ease-in-out infinite;
//         }
//         @keyframes breathe {
//           0%, 100% { transform: scale(1.00); }
//           50%      { transform: scale(1.07); }
//         }

//         /* ── Screen layer colors ── */
//         .es-scrim { background: rgba(10, 4, 0, 0.65); }
//         .es-grad  { background: linear-gradient(180deg, rgba(6,2,0,0.8) 0%, rgba(12,5,1,0.4) 35%, rgba(10,4,0,0.4) 65%, rgba(6,2,0,0.85) 100%); }
//         .es-glow  { background: radial-gradient(ellipse 70% 55% at 50% 52%, rgba(160,80,10,0.2) 0%, transparent 70%); }
//         .es-leak  { background: radial-gradient(ellipse 50% 40% at 15% 0%, rgba(200,140,40,0.1) 0%, transparent 55%); }

//         /* ── Noise layout layer ── */
//         .es-grain {
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//         }

//         .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
//         .font-jost { font-family: 'Jost', sans-serif; }

//         .es-heading {
//           font-size: clamp(2.8rem, 7.5vw, 4.4rem);
//           text-shadow: 0 0 60px rgba(200,140,30,0.55), 0 0 24px rgba(180,110,10,0.45), 0 2px 12px rgba(0,0,0,0.9), 0 4px 40px rgba(0,0,0,0.8);
//         }
//         .es-badge-text { text-shadow: 0 1px 8px rgba(0,0,0,0.8); }
//         .es-desc-text  { text-shadow: 0 1px 4px rgba(0,0,0,0.5); }
//         .es-value-text { text-shadow: 0 1px 3px rgba(0,0,0,0.4); }

//         /* ── Glassmorphism Card Configuration ── */
//         .es-card {
//           background: linear-gradient(135deg, rgba(18,8,2,0.74) 0%, rgba(24,10,2,0.7) 100%);
//           backdrop-filter: blur(24px) saturate(1.6);
//           -webkit-backdrop-filter: blur(24px) saturate(1.6);
//           box-shadow: 0 0 0 1px rgba(212,175,55,0.08), 0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(212,175,55,0.4), inset 0 -1px 0 rgba(212,175,55,0.15), inset 0 0 100px rgba(180,100,10,0.05);
//         }
//         .es-card::before {
//           content: ''; position: absolute; top:0; left:10%; right:10%; height:1px;
//           background: linear-gradient(90deg, transparent, rgba(245,210,80,0.8) 30%, rgba(255,230,100,0.95) 50%, rgba(245,210,80,0.8) 70%, transparent);
//           box-shadow: 0 0 12px rgba(212,175,55,0.4);
//         }
//         .es-card::after {
//           content: ''; position: absolute; bottom:0; left:20%; right:20%; height:0.5px;
//           background: linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent);
//         }
//       `}</style>

//       <div className="w-full flex flex-col bg-[#060200]">
//         {CEREMONIES.map((ceremony) => (
//           <section
//             key={ceremony.id}
//             id={ceremony.id}
//             className="relative min-h-screen overflow-hidden flex flex-col justify-center py-16"
//           >
//             {/* ── Layered Animated Backgrounds ── */}
//             <div 
//               className="es-bg absolute inset-[-8%] bg-cover bg-[center_30%] will-change-transform" 
//               style={{ backgroundImage: `url(${ceremony.bgImage})` }}
//             />
//             <div className="es-scrim absolute inset-0" />
//             <div className="es-grad absolute inset-0" />
//             <div className="es-glow absolute inset-0" />
//             <div className="es-leak absolute inset-0" />
//             <div className="es-grain absolute inset-0 opacity-[0.035] bg-[size:180px] pointer-events-none" />

//             {/* ── Ceremony Badge Scroll Animation ── */}
//             <motion.div 
//               initial={{ opacity: 0, y: -16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
//               className="relative z-10 text-center pt-6"
//             >
//               <span className="font-jost es-badge-text font-light text-[0.48rem] tracking-[0.5em] uppercase text-[rgba(212,175,55,0.85)]">
//                 {ceremony.badge}
//               </span>
//             </motion.div>

//             {/* ── Header Title Scroll Animation ── */}
//             <motion.div 
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
//               className="relative z-10 text-center px-6"
//             >
//               <div className="m-4">
//                 <h2 className="font-cormorant es-heading font-normal leading-none text-[#fff8f0] m-0">
//                   {ceremony.title}
//                 </h2>
//               </div>
//             </motion.div>

//             {/* ── Traditional Kolam Strip Splitter ── */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative z-10 mt-[24px]"
//             >
//               <KolamDots light />
//             </motion.div>

//             {/* ── Detailed Ceremony Card Container Wrap ── */}
//             <motion.div 
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
//               className="relative z-10 mx-auto mt-10 px-6 w-full max-w-[680px]"
//             >
//               <div className="es-card relative p-7 sm:p-10 pb-9 overflow-hidden border-[0.5px] border-[rgba(212,175,55,0.32)]">
//                 <div className="es-grain absolute inset-0 pointer-events-none opacity-[0.025] bg-[size:160px]" />

//                 {/* Event Invitation Paragraph */}
//                 <p className="font-cormorant es-desc-text text-[1.05rem] font-light italic text-[rgba(255,245,220,0.82)] text-center leading-[1.9] tracking-normal mb-8">
//                   {ceremony.description}
//                 </p>

//                 <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent my-7" />

//                 {/* Key Timestamps & Locations Table UI */}
//                 <div className="mb-2">
//                   {ceremony.info.map(({ label, value }) => (
//                     <div key={label} className="grid grid-cols-[82px_1fr] items-center gap-x-5 py-[0.85rem] border-b-[0.5px] border-[rgba(212,175,55,0.1)] last:border-b-0 last:pb-0">
//                       <span className="font-jost font-extralight text-[0.6rem] tracking-[0.36em] uppercase text-[rgba(212,175,55,0.75)]">
//                         {label}
//                       </span>
//                       <span className="font-cormorant es-value-text text-[1.08rem] font-light text-[rgba(255,248,228,0.96)] tracking-normal">
//                         {value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent my-7" />

//                 {/* Interactive Navigation and Action Buttons */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <a
//                     href={googleCalUrl(ceremony.eventCal)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group relative overflow-hidden flex items-center justify-center gap-[9px] font-jost font-light text-[0.54rem] tracking-[0.32em] uppercase no-underline p-[0.9rem_1.4rem] cursor-pointer duration-300 ease-out bg-[rgba(212,175,55,0.2)] text-white border-[0.5px] border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.32)] hover:border-[rgba(212,175,55,0.8)]"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <CalendarPlus size={13} strokeWidth={1.5} />
//                     Add to Calendar
//                   </a>
//                   <a
//                     href={ceremony.mapsUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group relative overflow-hidden flex items-center justify-center gap-[9px] font-jost font-light text-[0.54rem] tracking-[0.32em] uppercase no-underline p-[0.9rem_1.4rem] cursor-pointer duration-300 ease-out bg-[rgba(255,248,228,0.06)] text-white border-[0.5px] border-[rgba(212,175,55,0.22)] hover:bg-[rgba(255,248,228,0.1)] hover:text-[rgba(255,248,228,0.96)] hover:border-[rgba(212,175,55,0.48)]"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <MapPin size={13} strokeWidth={1.5} />
//                     View on Map
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// }



'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CalendarPlus, MapPin } from 'lucide-react';

/* ── Ceremonies Data ── */
const CEREMONIES = [
  {
    id: 'engagement', num: '01', badge: 'First Ceremony',
    title: 'Engagement', teluguTitle: 'నిశ్చితార్థం', accent: '#d4af37',
    description: 'Together with our families, we joyfully invite you to witness as Abhinav and Aalekhya exchange rings and begin their journey into forever.',
    bgImage: '/images/c1.png', layout: 'left',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',   value: 'Sunday, 16 August 2026' },
      { label: 'Time',   value: '10:30 AM onwards' },
      { label: 'Venue',  value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Festive · Traditional' },
    ],
    eventCal: { title:'Engagement — Abhinav & Aalekhya', description:'Join us to celebrate the engagement of Abhinav & Aalekhya.', location:'Vijayawada, Andhra Pradesh, India', startISO:'2026-08-16T10:30:00', endISO:'2026-08-16T13:00:00' },
  },
  {
    id: 'haldi', num: '02', badge: 'Pre-Wedding Festivities',
    title: 'Haldi', teluguTitle: 'పసుపు కార్యక్రమం', accent: '#e8a020',
    description: 'A beautiful splash of yellow! Join us for a lively gathering filled with love, laughter, and traditional turmeric blessings.',
    bgImage: '/images/c2.png', layout: 'right',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',   value: 'Friday, 28 August 2026' },
      { label: 'Time',   value: 'Evening onwards' },
      { label: 'Venue',  value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Shades of Yellow · Festive Ethnic' },
    ],
    eventCal: { title:'Haldi Ceremony — Abhinav & Aalekhya', description:'Join us for the vibrant Haldi celebrations.', location:'Vijayawada, Andhra Pradesh, India', startISO:'2026-08-28T16:00:00', endISO:'2026-08-28T20:00:00' },
  },
  {
    id: 'sangeet', num: '03', badge: 'Celebration of Music & Dance',
    title: 'Sangeet', teluguTitle: 'సంగీత్', accent: '#c060a0',
    description: 'An evening of music, rhythm, and celebration! Put on your dancing shoes and join us for a spectacular night of performances.',
    bgImage: '/images/c3.png', layout: 'left',
    mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
    info: [
      { label: 'Date',   value: 'Saturday, 29 August 2026' },
      { label: 'Time',   value: 'Evening onwards' },
      { label: 'Venue',  value: 'CK Convention, Vijayawada' },
      { label: 'Attire', value: 'Indo-Western · Glamorous Glam' },
    ],
    eventCal: { title:'Sangeet Night — Abhinav & Aalekhya', description:'Dance and celebrate with us at the Sangeet night.', location:'CK Convention, Vijayawada, India', startISO:'2026-08-29T18:30:00', endISO:'2026-08-29T23:30:00' },
  },
  {
    id: 'pellikuthuru', num: '04', badge: 'Bridal Making Ceremony',
    title: 'Pellikuthuru', teluguTitle: 'పెళ్ళికూతురు', accent: '#d4a5a5',
    description: 'In accordance with timeless traditions, we welcome auspicious blessings as Aalekhya is lovingly prepared for her wedding day.',
    bgImage: '/images/c4.png', layout: 'right',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',   value: 'Friday, 4 September 2026' },
      { label: 'Time',   value: 'Morning onwards' },
      { label: 'Venue',  value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Traditional Silk · Festive Wear' },
    ],
    eventCal: { title:'Pellikuthuru Ceremony (Aalekhya)', description:'Bridal preparation ceremony.', location:'Vijayawada, Andhra Pradesh, India', startISO:'2026-09-04T07:30:00', endISO:'2026-09-04T11:30:00' },
  },
  {
    id: 'pellikoduku', num: '05', badge: 'Groom Making Ceremony',
    title: 'Pellikoduku', teluguTitle: 'పెళ్ళికొడుకు', accent: '#8b9e6a',
    description: 'Celebrating the sacred beginning of the nuptials as Abhinav is anointed with traditional values, ready to step into his new path.',
    bgImage: '/images/c5.png', layout: 'left',
    mapsUrl: 'https://maps.google.com/?q=Gudapadu',
    info: [
      { label: 'Date',   value: 'Friday, 4 September 2026' },
      { label: 'Time',   value: 'Morning onwards' },
      { label: 'Venue',  value: 'Gudapadu (60 km from Vijayawada)' },
      { label: 'Attire', value: 'Traditional Ethnic · Kurta' },
    ],
    eventCal: { title:'Pellikoduku Ceremony (Abhinav)', description:'Groom preparation ceremony.', location:'Gudapadu, Andhra Pradesh, India', startISO:'2026-09-04T07:30:00', endISO:'2026-09-04T11:30:00' },
  },
  {
    id: 'wedding', num: '06', badge: 'The Muhurtham',
    title: 'Wedding', teluguTitle: 'వివాహం', accent: '#f0d080',
    description: 'The auspicious moment of lifetime union. Witness our sacred vows, the exchange of garlands, and our steps into a shared tomorrow.',
    bgImage: '/images/c6.png', layout: 'right', isWedding: true,
    mapsUrl: 'https://maps.google.com/?q=Dwaraka+Tirumala',
    info: [
      { label: 'Date',   value: '4 – 5 September 2026' },
      { label: 'Time',   value: 'Evening to Midnight' },
      { label: 'Venue',  value: 'Dwaraka Tirumala (Chinna Tirupathi)' },
      { label: 'Attire', value: 'Royal Traditional · Pattu' },
    ],
    eventCal: { title:'Wedding Muhurtham — Abhinav & Aalekhya', description:'Join us on our holy wedding day.', location:'Dwaraka Tirumala, Andhra Pradesh, India', startISO:'2026-09-04T19:00:00', endISO:'2026-09-05T02:00:00' },
  },
  {
    id: 'vratham', num: '07', badge: 'Auspicious Thanksgiving',
    title: 'Vratham', teluguTitle: 'సత్యనారాయణ వ్రతం', accent: '#d4af37',
    description: 'To invoke peace, prosperity, and divine harmony into our new life together, we welcome you to join our pristine morning prayer.',
    bgImage: '/images/c7.png', layout: 'left',
    mapsUrl: 'https://maps.google.com/?q=Gudapadu',
    info: [
      { label: 'Date',   value: 'Saturday, 5 September 2026' },
      { label: 'Time',   value: 'Morning onwards' },
      { label: 'Venue',  value: 'Gudapadu' },
      { label: 'Attire', value: 'Graceful Traditional' },
    ],
    eventCal: { title:'Vratham — Abhinav & Aalekhya', description:'Post-wedding sacred prayers.', location:'Gudapadu, Andhra Pradesh, India', startISO:'2026-09-05T08:30:00', endISO:'2026-09-05T12:30:00' },
  },
  {
    id: 'reception', num: '08', badge: 'Grand Homecoming Gala',
    title: 'Reception', teluguTitle: 'స్వాగత సభ', accent: '#a080c0',
    description: 'Let us celebrate the start of our beautiful journey! Join us for a majestic evening of dinner, greetings, and heartfelt cheers.',
    bgImage: '/images/c8.png', layout: 'right',
    mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
    info: [
      { label: 'Date',   value: 'Sunday, 6 September 2026' },
      { label: 'Time',   value: 'Evening onwards' },
      { label: 'Venue',  value: 'CK Convention, Vijayawada' },
      { label: 'Attire', value: 'Formals · Modern Indian Royal' },
    ],
    eventCal: { title:'Wedding Reception — Abhinav & Aalekhya', description:'Celebrate our marriage homecoming.', location:'CK Convention, Vijayawada, India', startISO:'2026-09-06T18:30:00', endISO:'2026-09-06T22:30:00' },
  },
];

const googleCalUrl = ({ title, description, location, startISO, endISO }) => {
  const fmt = (d) => d.replace(/[-:T]/g, '').slice(0, 15) + 'Z';
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startISO)}/${fmt(endISO)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
};

/* ── Kolam dot pattern ── */
const KolamDots = ({ color = 'rgba(212,175,55,0.5)' }) => {
  const id = `kp-${color.replace(/[^a-z0-9]/gi, '')}`;
  return (
    <svg width="100%" height="14" viewBox="0 0 600 14" preserveAspectRatio="xMidYMid meet" className="block">
      <defs>
        <pattern id={id} x="0" y="0" width="30" height="14" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="7"  r="1.4" fill={color}/>
          <circle cx="0"  cy="7"  r="0.9" fill={color} opacity="0.5"/>
          <circle cx="30" cy="7"  r="0.9" fill={color} opacity="0.5"/>
          <circle cx="15" cy="1"  r="0.7" fill={color} opacity="0.4"/>
          <circle cx="15" cy="13" r="0.7" fill={color} opacity="0.4"/>
        </pattern>
      </defs>
      <rect width="100%" height="14" fill={`url(#${id})`}/>
    </svg>
  );
};

/* ─────────────────────────────────────────────────────────────────
   Smooth parallax background.
   Key insight: useTransform on scrollYProgress is already
   frame-perfect — no spring wrapper needed (springs chase and lag).
   We expand the bg div by ±15% on each axis so it never reveals
   edges while translating.
───────────────────────────────────────────────────────────────── */
function ParallaxBg({ image, accent }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Track from when section top enters bottom-of-viewport → section bottom leaves top
    offset: ['start end', 'end start'],
  });

  /*
   * Map 0→1 scroll progress to -15%→+15% vertical translation.
   * The bg div is inset by -15% so the image is always 130% tall,
   * giving us 30% of room to slide without showing the edge.
   * Direct useTransform = zero latency, silky smooth.
   */
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    /* Container pinned to section — overflow hidden clips the oversized bg */
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">

      {/* The actual parallax layer — larger than container, slides via y */}
      <motion.div
        className="absolute bg-cover bg-center will-change-transform"
        style={{
          /* Expand in all directions so sliding never exposes edges */
          top: '-15%', bottom: '-15%', left: 0, right: 0,
          backgroundImage: `url(${image})`,
          y: bgY,
          /* Subtle breathe on top of the parallax — purely cosmetic zoom */
          animation: 'breatheCer 15s ease-in-out infinite',
        }}
      />

      {/* ── Overlay stack (unchanged from original) ── */}
      <div className="absolute inset-0 bg-[rgba(8,3,0,0.70)]" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg,rgba(4,1,0,0.75) 0%,rgba(10,4,0,0.32) 40%,rgba(10,4,0,0.32) 60%,rgba(4,1,0,0.82) 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse 72% 58% at 50% 54%, ${accent}22 0%, transparent 68%)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 45% 35% at 12% 0%, rgba(200,140,40,0.10) 0%, transparent 55%)' }}
      />
    </div>
  );
}

/* ── Individual ceremony section ── */
function CeremonySection({ ceremony }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const isLeft    = ceremony.layout === 'left';
  const isWedding = ceremony.isWedding;
  const d = (n) => ({ delay: n });

  return (
    <section
      ref={ref}
      id={ceremony.id}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
    >
      <ParallaxBg image={ceremony.bgImage} accent={ceremony.accent} />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 py-20">

        {/* Kolam strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1], ...d(0.12) }}
          className="mb-6"
          style={{ transformOrigin: 'center' }}
        >
          {/* <KolamDots color={`${ceremony.accent}80`} /> */}
        </motion.div>

        {/* Divider gem row (kept from original) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1], ...d(0.28) }}
          className="flex items-center justify-center gap-3.5 mb-10"
          style={{ transformOrigin: 'center' }}
        />

        {/* Two-column grid */}
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', alignItems: 'start' }}>

          {/* Description column */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, ease: [0.22,1,0.36,1], ...d(0.32) }}
            style={{ order: isLeft ? 0 : 1 }}
          >
            <h2
              className="m-0 mb-4 leading-none"
              style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: 'clamp(3rem,8vw,4.6rem)',
                fontWeight: 300,
                letterSpacing: isWedding ? '0.08em' : '0.03em',
                color: '#FFEAA6',
                opacity: 0.7,
                textShadow: `0 0 60px black55,0 0 24px ${ceremony.accent}40,0 2px 14px rgba(0,0,0,0.95),0 6px 50px rgba(0,0,0,0.85)`,
              }}
            >
              {ceremony.title}
            </h2>

            <p
              className="m-0 leading-[1.7]"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: '1.25rem', fontWeight: 300, fontStyle: 'italic',
                color: 'rgba(255,245,220,0.82)', letterSpacing: '0.03em',
                textShadow: '0 1px 5px rgba(0,0,0,0.6)',
              }}
            >
              {ceremony.description}
            </p>
          </motion.div>

          {/* Card column */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 40 : -40, y: 20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22,1,0.36,1], ...d(0.4) }}
            style={{ order: isLeft ? 1 : 0 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                padding: isWedding ? '2.8rem 2.4rem' : '2.2rem 2rem',
                background: 'linear-gradient(135deg,rgba(14,6,1,0.76) 0%,rgba(20,8,1,0.72) 100%)',
                backdropFilter: 'blur(20px) saturate(1.7)',
                WebkitBackdropFilter: 'blur(28px) saturate(1.7)',
                border: `0.5px solid ${ceremony.accent}44`,
                boxShadow: `0 0 0 1px ${ceremony.accent}11,0 20px 70px rgba(0,0,0,0.6),inset 0 1px 0 ${ceremony.accent}55,inset 0 0 80px ${ceremony.accent}08`,
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 pointer-events-none"
                style={{
                  left:'10%', right:'10%', height:1,
                  background: `linear-gradient(90deg,transparent,${ceremony.accent}cc 40%,${ceremony.accent}ff 50%,${ceremony.accent}cc 60%,transparent)`,
                  boxShadow: `0 0 14px ${ceremony.accent}55`,
                }}
              />
              {/* Bottom dim */}
              <div
                className="absolute bottom-0 pointer-events-none"
                style={{
                  left:'20%', right:'20%', height:'0.5px',
                  background: `linear-gradient(90deg,transparent,${ceremony.accent}33,transparent)`,
                }}
              />

              {/* Info rows */}
              <div className="mb-6">
                {ceremony.info.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22,1,0.36,1], delay: 0.48 + i * 0.07 }}
                    className="grid items-baseline py-3"
                    style={{
                      gridTemplateColumns: '74px 1fr', gap: '0 16px',
                      borderBottom: `0.5px solid ${ceremony.accent}18`,
                    }}
                  >
                    <span style={{
                      fontFamily: "'Jost',sans-serif", fontWeight: 300,
                      fontSize: '0.6rem', letterSpacing: '0.36em',
                      textTransform: 'uppercase', color: `${ceremony.accent}bb`,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: '1.05rem', fontWeight: 300,
                      color: 'rgba(255,248,228,0.95)', letterSpacing: '0.02em',
                      textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                    }}>
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{ background: `linear-gradient(90deg,transparent,${ceremony.accent}44 30%,${ceremony.accent}44 70%,transparent)` }}
              />

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.72 }}
                className="grid grid-cols-2 gap-2.5"
              >
                <a
                  href={googleCalUrl(ceremony.eventCal)}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 no-underline transition-all duration-300 "
                  style={{
                    fontFamily: "'Jost',sans-serif", fontWeight: 200,
                    fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                    padding: '0.85rem 0.8rem',
                    background: `${ceremony.accent}28`, color: 'rgba(255,245,210,0.95)',
                    border: `0.5px solid ${ceremony.accent}66`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${ceremony.accent}40`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${ceremony.accent}28`; }}
                >
                  <CalendarPlus size={12} strokeWidth={1.5} />
                  Add to Calendar
                </a>
                <a
                  href={ceremony.mapsUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 no-underline transition-all duration-300 "
                  style={{
                    fontFamily: "'Jost',sans-serif", fontWeight: 200,
                    fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                    padding: '0.85rem 0.8rem',
                    background: 'rgba(255,248,228,0.06)', color: 'rgba(255,245,218,0.72)',
                    border: `0.5px solid ${ceremony.accent}28`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,248,228,0.12)'; e.currentTarget.style.color = 'rgba(255,248,228,0.96)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,228,0.06)'; e.currentTarget.style.color = 'rgba(255,245,218,0.72)'; }}
                >
                  <MapPin size={12} strokeWidth={1.5} />
                  View on Map
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

/* ── Main export ── */
export default function Ceremonies() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Jost:wght@200;300;400&family=Noto+Serif+Telugu:wght@300;400&display=swap');
        @keyframes breatheCer {
          0%,100% { transform: scale(1.00); }
          50%      { transform: scale(1.06); }
        }
        @media (max-width: 640px) {
          [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="w-full flex flex-col bg-[#060200]">
        {CEREMONIES.map((ceremony, index) => (
          <CeremonySection key={ceremony.id} ceremony={ceremony} index={index} />
        ))}
      </div>
    </>
  );
}