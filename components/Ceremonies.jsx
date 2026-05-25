'use client';

import { motion } from 'framer-motion';
import { CalendarPlus, MapPin } from 'lucide-react';

/* ── Comprehensive Ceremonies Data ── */
const CEREMONIES = [
  {
    id: 'engagement',
    badge: '✦ First Ceremony ✦',
    title: 'Engagement',
    description: 'Together with our families, we joyfully invite you to witness as Abhinav and Aalekhya exchange rings and begin their journey into forever.',
    bgImage: '/images/c1.png',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',  value: 'Sunday, 16 August 2026' },
      { label: 'Time',  value: '10:30 AM onwards' },
      { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Festive · Traditional' },
    ],
    eventCal: {
      title: 'Engagement — Abhinav & Aalekhya',
      description: 'Join us to celebrate the engagement of Abhinav & Aalekhya.',
      location: 'Vijayawada, Andhra Pradesh, India',
      startISO: '2026-08-16T10:30:00',
      endISO:   '2026-08-16T13:00:00',
    }
  },
  {
    id: 'haldi',
    badge: '✦ Pre-Wedding Festivities ✦',
    title: 'Haldi',
    description: 'A beautiful splash of yellow! Join us for a lively gathering filled with love, laughter, and traditional turmeric blessings.',
    bgImage: '/images/c2.png', // Replace with your dynamic background image path
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',  value: 'Friday, 28 August 2026' },
      { label: 'Time',  value: 'Evening onwards' },
      { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Shades of Yellow · Festive ethnic' },
    ],
    eventCal: {
      title: 'Haldi Ceremony — Abhinav & Aalekhya',
      description: 'Join us for the vibrant Haldi celebrations.',
      location: 'Vijayawada, Andhra Pradesh, India',
      startISO: '2026-08-28T16:00:00',
      endISO:   '2026-08-28T20:00:00',
    }
  },
  {
    id: 'sangeet',
    badge: '✦ Celebration of Music & Dance ✦',
    title: 'Sangeet',
    description: 'An evening of music, rhythm, and celebration! Put on your dancing shoes and join us for a spectacular night of performances.',
    bgImage: '/images/c3.png',
    mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
    info: [
      { label: 'Date',  value: 'Saturday, 29 August 2026' },
      { label: 'Time',  value: 'Evening onwards' },
      { label: 'Venue', value: 'CK Convention, Vijayawada' },
      { label: 'Attire', value: 'Indo-Western · Glamorous Glam' },
    ],
    eventCal: {
      title: 'Sangeet Night — Abhinav & Aalekhya',
      description: 'Dance and celebrate with us at the Sangeet night.',
      location: 'CK Convention, Vijayawada, India',
      startISO: '2026-08-29T18:30:00',
      endISO:   '2026-08-29T23:30:00',
    }
  },
  {
    id: 'pellikuthuru',
    badge: '✦ Bridal Making Ceremony ✦',
    title: 'Pellikuthuru',
    description: 'In accordance with timeless traditions, we welcome auspicious blessings as Aalekhya is lovingly prepared for her wedding day.',
    bgImage: '/images/c4.png',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',  value: 'Friday, 4 September 2026' },
      { label: 'Time',  value: 'Morning onwards' },
      { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Traditional Silk · Festive Wear' },
    ],
    eventCal: {
      title: 'Pellikuthuru Ceremony (Aalekhya)',
      description: 'Bridal preparation ceremony.',
      location: 'Vijayawada, Andhra Pradesh, India',
      startISO: '2026-09-04T07:30:00',
      endISO:   '2026-09-04T11:30:00',
    }
  },
  {
    id: 'pellikoduku',
    badge: '✦ Groom Making Ceremony ✦',
    title: 'Pellikoduku',
    description: 'Celebrating the sacred beginning of the nuptials as Abhinav is anointed with traditional values, ready to step into his new path.',
    bgImage: '/images/c5.png',
    mapsUrl: 'https://maps.google.com/?q=Gudapadu',
    info: [
      { label: 'Date',  value: 'Friday, 4 September 2026' },
      { label: 'Time',  value: 'Morning onwards' },
      { label: 'Venue', value: 'Gudapadu (60km from Vijayawada)' },
      { label: 'Attire', value: 'Traditional Ethnic · Kurta' },
    ],
    eventCal: {
      title: 'Pellikoduku Ceremony (Abhinav)',
      description: 'Groom preparation ceremony.',
      location: 'Gudapadu, Andhra Pradesh, India',
      startISO: '2026-09-04T07:30:00',
      endISO:   '2026-09-04T11:30:00',
    }
  },
  {
    id: 'wedding',
    badge: '✦ The Muhurtham ✦',
    title: 'Wedding',
    description: 'The auspicious moment of lifetime union. Witness our sacred pheras, the exchange of vows, and our steps into a shared tomorrow.',
    bgImage: '/images/c6.png',
    mapsUrl: 'https://maps.google.com/?q=Dwaraka+Tirumala',
    info: [
      { label: 'Date',  value: '4 - 5 September 2026' },
      { label: 'Time',  value: 'Evening to Midnight' },
      { label: 'Venue', value: 'Dwaraka Tirumala (Chinna Tirupathi)' },
      { label: 'Attire', value: 'Royal Traditional · Pattu' },
    ],
    eventCal: {
      title: 'Wedding Muhurtham — Abhinav & Aalekhya',
      description: 'Join us on our holy wedding day.',
      location: 'Dwaraka Tirumala, Andhra Pradesh, India',
      startISO: '2026-09-04T19:00:00',
      endISO:   '2026-09-05T02:00:00',
    }
  },
  {
    id: 'vratham',
    badge: '✦ Auspicious Thanks Giving ✦',
    title: 'Satyanarayana Vratham',
    description: 'To invoke peace, prosperity, and divine harmony into our new life together, we welcome you to join our pristine morning prayer.',
    bgImage: '/images/c7.png',
    mapsUrl: 'https://maps.google.com/?q=Gudapadu',
    info: [
      { label: 'Date',  value: 'Saturday, 5 September 2026' },
      { label: 'Time',  value: 'Morning onwards' },
      { label: 'Venue', value: 'Gudapadu' },
      { label: 'Attire', value: 'Graceful Traditional' },
    ],
    eventCal: {
      title: 'Satyanarayana Vratham — Abhinav & Aalekhya',
      description: 'Post-wedding sacred prayers.',
      location: 'Gudapadu, Andhra Pradesh, India',
      startISO: '2026-09-05T08:30:00',
      endISO:   '2026-09-05T12:30:00',
    }
  },
  {
    id: 'reception',
    badge: '✦ Grand Homecoming Gala ✦',
    title: 'Reception',
    description: 'Let us celebrate the start of our beautiful journey! Join us for a majestic evening of dinner, greetings, and heartfelt cheers.',
    bgImage: '/images/c8.png',
    mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
    info: [
      { label: 'Date',  value: 'Sunday, 6 September 2026' },
      { label: 'Time',  value: 'Evening onwards' },
      { label: 'Venue', value: 'CK Convention, Vijayawada' },
      { label: 'Attire', value: 'Formals · Modern Indian Royal' },
    ],
    eventCal: {
      title: 'Wedding Reception — Abhinav & Aalekhya',
      description: 'Celebrate our marriage homecoming.',
      location: 'CK Convention, Vijayawada, India',
      startISO: '2026-09-06T18:30:00',
      endISO:   '2026-09-06T22:30:00',
    }
  }
];

/* ── Calendar Link Generator Helper ── */
const googleCalUrl = ({ title, description, location, startISO, endISO }) => {
  const fmt = (d) => d.replace(/[-:T]/g, '').slice(0, 15) + 'Z';
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startISO)}/${fmt(endISO)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
};

/* ── Decorative Kolam Strip Component ── */
const KolamDots = ({ light = false }) => (
  <svg width="100%" height="16" viewBox="0 0 600 16" preserveAspectRatio="xMidYMid meet" className="block">
    <defs>
      <pattern id={`kd-${light}`} x="0" y="0" width="30" height="16" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="8" r="1.5" fill={light ? 'rgba(255,240,180,0.6)' : 'rgba(212,175,55,0.6)'}/>
        <circle cx="0"  cy="8" r="1"   fill={light ? 'rgba(255,220,160,0.35)' : 'rgba(212,175,55,0.3)'}/>
        <circle cx="30" cy="8" r="1"   fill={light ? 'rgba(255,220,160,0.35)' : 'rgba(212,175,55,0.3)'}/>
        <circle cx="15" cy="1" r="0.8" fill={light ? 'rgba(232,196,196,0.45)' : 'rgba(232,196,196,0.35)'}/>
        <circle cx="15" cy="15" r="0.8" fill={light ? 'rgba(232,196,196,0.45)' : 'rgba(232,196,196,0.35)'}/>
      </pattern>
    </defs>
    <rect width="100%" height="16" fill={`url(#kd-${light})`}/>
  </svg>
);

export default function Ceremonies() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&family=Jost:wght@200;300;400&family=Noto+Serif+Telugu:wght@300;400&display=swap');

        /* ── Dynamic background image animations ── */
        .es-bg {
          animation: breathe 24s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1.00); }
          50%      { transform: scale(1.07); }
        }

        /* ── Screen layer colors ── */
        .es-scrim { background: rgba(10, 4, 0, 0.65); }
        .es-grad  { background: linear-gradient(180deg, rgba(6,2,0,0.8) 0%, rgba(12,5,1,0.4) 35%, rgba(10,4,0,0.4) 65%, rgba(6,2,0,0.85) 100%); }
        .es-glow  { background: radial-gradient(ellipse 70% 55% at 50% 52%, rgba(160,80,10,0.2) 0%, transparent 70%); }
        .es-leak  { background: radial-gradient(ellipse 50% 40% at 15% 0%, rgba(200,140,40,0.1) 0%, transparent 55%); }

        /* ── Noise layout layer ── */
        .es-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        .es-heading {
          font-size: clamp(2.8rem, 7.5vw, 4.4rem);
          text-shadow: 0 0 60px rgba(200,140,30,0.55), 0 0 24px rgba(180,110,10,0.45), 0 2px 12px rgba(0,0,0,0.9), 0 4px 40px rgba(0,0,0,0.8);
        }
        .es-badge-text { text-shadow: 0 1px 8px rgba(0,0,0,0.8); }
        .es-desc-text  { text-shadow: 0 1px 4px rgba(0,0,0,0.5); }
        .es-value-text { text-shadow: 0 1px 3px rgba(0,0,0,0.4); }

        /* ── Glassmorphism Card Configuration ── */
        .es-card {
          background: linear-gradient(135deg, rgba(18,8,2,0.74) 0%, rgba(24,10,2,0.7) 100%);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          box-shadow: 0 0 0 1px rgba(212,175,55,0.08), 0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(212,175,55,0.4), inset 0 -1px 0 rgba(212,175,55,0.15), inset 0 0 100px rgba(180,100,10,0.05);
        }
        .es-card::before {
          content: ''; position: absolute; top:0; left:10%; right:10%; height:1px;
          background: linear-gradient(90deg, transparent, rgba(245,210,80,0.8) 30%, rgba(255,230,100,0.95) 50%, rgba(245,210,80,0.8) 70%, transparent);
          box-shadow: 0 0 12px rgba(212,175,55,0.4);
        }
        .es-card::after {
          content: ''; position: absolute; bottom:0; left:20%; right:20%; height:0.5px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent);
        }
      `}</style>

      <div className="w-full flex flex-col bg-[#060200]">
        {CEREMONIES.map((ceremony) => (
          <section
            key={ceremony.id}
            id={ceremony.id}
            className="relative min-h-screen overflow-hidden flex flex-col justify-center py-16"
          >
            {/* ── Layered Animated Backgrounds ── */}
            <div 
              className="es-bg absolute inset-[-8%] bg-cover bg-[center_30%] will-change-transform" 
              style={{ backgroundImage: `url(${ceremony.bgImage})` }}
            />
            <div className="es-scrim absolute inset-0" />
            <div className="es-grad absolute inset-0" />
            <div className="es-glow absolute inset-0" />
            <div className="es-leak absolute inset-0" />
            <div className="es-grain absolute inset-0 opacity-[0.035] bg-[size:180px] pointer-events-none" />

            {/* ── Ceremony Badge Scroll Animation ── */}
            <motion.div 
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="relative z-10 text-center pt-6"
            >
              <span className="font-jost es-badge-text font-light text-[0.48rem] tracking-[0.5em] uppercase text-[rgba(212,175,55,0.85)]">
                {ceremony.badge}
              </span>
            </motion.div>

            {/* ── Header Title Scroll Animation ── */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative z-10 text-center px-6"
            >
              <div className="m-4">
                <h2 className="font-cormorant es-heading font-normal leading-none text-[#fff8f0] m-0">
                  {ceremony.title}
                </h2>
              </div>
            </motion.div>

            {/* ── Traditional Kolam Strip Splitter ── */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mt-[24px]"
            >
              <KolamDots light />
            </motion.div>

            {/* ── Detailed Ceremony Card Container Wrap ── */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="relative z-10 mx-auto mt-10 px-6 w-full max-w-[680px]"
            >
              <div className="es-card relative p-7 sm:p-10 pb-9 overflow-hidden border-[0.5px] border-[rgba(212,175,55,0.32)]">
                <div className="es-grain absolute inset-0 pointer-events-none opacity-[0.025] bg-[size:160px]" />

                {/* Event Invitation Paragraph */}
                <p className="font-cormorant es-desc-text text-[1.05rem] font-light italic text-[rgba(255,245,220,0.82)] text-center leading-[1.9] tracking-normal mb-8">
                  {ceremony.description}
                </p>

                <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent my-7" />

                {/* Key Timestamps & Locations Table UI */}
                <div className="mb-2">
                  {ceremony.info.map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-[82px_1fr] items-center gap-x-5 py-[0.85rem] border-b-[0.5px] border-[rgba(212,175,55,0.1)] last:border-b-0 last:pb-0">
                      <span className="font-jost font-extralight text-[0.6rem] tracking-[0.36em] uppercase text-[rgba(212,175,55,0.75)]">
                        {label}
                      </span>
                      <span className="font-cormorant es-value-text text-[1.08rem] font-light text-[rgba(255,248,228,0.96)] tracking-normal">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent my-7" />

                {/* Interactive Navigation and Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={googleCalUrl(ceremony.eventCal)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center justify-center gap-[9px] font-jost font-light text-[0.54rem] tracking-[0.32em] uppercase no-underline p-[0.9rem_1.4rem] cursor-pointer duration-300 ease-out bg-[rgba(212,175,55,0.2)] text-white border-[0.5px] border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.32)] hover:border-[rgba(212,175,55,0.8)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CalendarPlus size={13} strokeWidth={1.5} />
                    Add to Calendar
                  </a>
                  <a
                    href={ceremony.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center justify-center gap-[9px] font-jost font-light text-[0.54rem] tracking-[0.32em] uppercase no-underline p-[0.9rem_1.4rem] cursor-pointer duration-300 ease-out bg-[rgba(255,248,228,0.06)] text-white border-[0.5px] border-[rgba(212,175,55,0.22)] hover:bg-[rgba(255,248,228,0.1)] hover:text-[rgba(255,248,228,0.96)] hover:border-[rgba(212,175,55,0.48)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <MapPin size={13} strokeWidth={1.5} />
                    View on Map
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </>
  );
}