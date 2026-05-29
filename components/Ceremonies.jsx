'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CalendarPlus, MapPin } from 'lucide-react';

const CEREMONIES = [
  {
    id: 'engagement', num: '01', badge: 'First Ceremony',
    title: 'Engagement', accent: '#351A22', layout: 'left',
    bgImage: '/images/c11.webp',
    description: 'Together with our families, we joyfully invite you to witness as Abhinav and Aalekhya exchange rings and begin their journey into forever.',
    mapsUrl: 'https://www.google.com/maps/place/CA+Convention/@16.5611958,80.5603703,17z',
    info: [
      { label: 'Date',   value: 'Sunday, 16 August 2026' },
      { label: 'Time',   value: '10:30 AM onwards' },
      { label: 'Venue',  value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Festive · Traditional' },
    ],
    eventCal: { title:'Engagement — Abhinav & Aalekhya', description:'Join us to celebrate the engagement.', location:'Vijayawada, Andhra Pradesh, India', startISO:'2026-08-16T10:30:00', endISO:'2026-08-16T13:00:00' },
  },
  {
    id: 'haldi', num: '02', badge: 'Pre-Wedding Festivities',
    title: 'Haldi', accent: '#704d06', layout: 'right',
    bgImage: '/images/c21.webp',
    description: 'A beautiful splash of yellow! Join us for a lively gathering filled with love, laughter, and traditional turmeric blessings.',
    mapsUrl: 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh',
    info: [
      { label: 'Date',   value: 'Friday, 28 August 2026' },
      { label: 'Time',   value: 'Evening onwards' },
      { label: 'Venue',  value: 'Vijayawada, Andhra Pradesh' },
      { label: 'Attire', value: 'Shades of Yellow · Festive Ethnic' },
    ],
    eventCal: { title:'Haldi — Abhinav & Aalekhya', description:'Join us for the vibrant Haldi celebrations.', location:'Vijayawada, Andhra Pradesh, India', startISO:'2026-08-28T16:00:00', endISO:'2026-08-28T20:00:00' },
  },
  {
    id: 'sangeet', num: '03', badge: 'Celebration of Music & Dance',
    title: 'Sangeet', accent: '#2E423B', layout: 'left',
    bgImage: '/images/c81.webp',
    description: 'An evening of music, rhythm, and celebration! Put on your dancing shoes and join us for a spectacular night of performances.',
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
    id: 'wedding', num: '04', badge: 'The Muhurtham',
    title: 'Wedding', accent: '#916530', layout: 'right', isWedding: true,
    bgImage: '/images/w1.png',
    description: 'The auspicious moment of lifetime union. Witness our sacred vows, the exchange of garlands, and our steps into a shared tomorrow.',
    mapsUrl: 'https://maps.google.com/?q=Dwaraka+Tirumala',
    info: [
      { label: 'Date',   value: '4 September 2026' },
      { label: 'Time',   value: 'Evening' },
      { label: 'Venue',  value: 'Dwaraka Tirumala (Chinna Tirupathi)' },
      { label: 'Attire', value: 'Royal Traditional · Pattu' },
    ],
    eventCal: { title:'Wedding Muhurtham — Abhinav & Aalekhya', description:'Join us on our holy wedding day.', location:'Dwaraka Tirumala, Andhra Pradesh, India', startISO:'2026-09-04T19:00:00', endISO:'2026-09-05T02:00:00' },
  },
    {
    id: 'reception', num: '05', badge: 'Grand Homecoming Gala',
    title: 'Reception', accent: '#5b4b29', layout: 'left',
    bgImage: '/images/c61.webp',
    description: 'Let us celebrate the start of our beautiful journey! Join us for a majestic evening of dinner, greetings, and heartfelt cheers.',
    mapsUrl: 'https://maps.google.com/?q=CK+Convention+Vijayawada',
    info: [
      { label: 'Date',   value: 'Sunday, 6 September 2026' },
      { label: 'Time',   value: 'Evening onwards' },
      { label: 'Venue',  value: 'CK Convention, Vijayawada' },
      { label: 'Attire', value: 'Formals · Modern Indian Royal' },
    ],
    eventCal: { title:'Wedding Reception — Abhinav & Aalekhya', description:'Celebrate our marriage homecoming.', location:'CK Convention, Vijayawada, India', startISO:'2026-09-06T18:30:00', endISO:'2026-09-06T22:30:00' },
  },
  // {
  //   id: 'vratham', num: '07', badge: 'Auspicious Thanksgiving',
  //   title: 'Vratham', accent: '#541a1e', layout: 'left',
  //   bgImage: '/images/c71.webp',
  //   description: 'To invoke peace, prosperity, and divine harmony into our new life together, we welcome you to join our pristine morning prayer.',
  //   mapsUrl: 'https://maps.google.com/?q=Gudapadu',
  //   info: [
  //     { label: 'Date',   value: 'Saturday, 5 September 2026' },
  //     { label: 'Time',   value: 'Morning onwards' },
  //     { label: 'Venue',  value: 'Gudapadu' },
  //     { label: 'Attire', value: 'Graceful Traditional' },
  //   ],
  //   eventCal: { title:'Vratham — Abhinav & Aalekhya', description:'Post-wedding sacred prayers.', location:'Gudapadu, Andhra Pradesh, India', startISO:'2026-09-05T08:30:00', endISO:'2026-09-05T12:30:00' },
  // },

];

const googleCalUrl = ({ title, description, location, startISO, endISO }) => {
  const fmt = (d) => d.replace(/[-:T]/g, '').slice(0, 15) + 'Z';
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startISO)}/${fmt(endISO)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
};

const OUTER_CLIP = 'polygon(50% 0%, 100% 6%, 100% 94%, 50% 100%, 0% 94%, 0% 6%)';
const INNER_CLIP = 'polygon(50% 0%, 101% 5%, 101% 95%, 50% 101%, -1% 95%, -1% 5%)';

function CeremonySection({ ceremony }) {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  /* bg parallax — uses the outer wrapper so range is full [enter→leave] */
  const { scrollYProgress: bgProg } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(bgProg, [0, 1], ['-12%', '12%']);

  /* ENTRANCE peel — fires as section bottom crosses 85% of viewport */
  const { scrollYProgress: enterProg } = useScroll({
    target: sectionRef,
    offset: ['start 95%', 'start 20%'],
  });
  const enterRotateX = useTransform(enterProg, [0, 1], [-20, 0]);
  const enterScaleX  = useTransform(enterProg, [0, 1], [0.96, 1]);
  const enterY       = useTransform(enterProg, [0, 1], [40, 0]);
  const enterOpacity = useTransform(enterProg, [0, 0.25], [0, 1]);

  /* EXIT push-back — fires as section TOP crosses above viewport center */
  const { scrollYProgress: exitProg } = useScroll({
    target: sectionRef,
    offset: ['start start', 'start -35%'],
  });
  const exitScale   = useTransform(exitProg, [0, 1], [1, 0.93]);
  const exitOpacity = useTransform(exitProg, [0, 0.7, 1], [1, 1, 0]);
  const exitY       = useTransform(exitProg, [0, 1], [0, -28]);

  const isLeft    = ceremony.layout === 'left';
  const isWedding = ceremony.isWedding;

  return (
    /* Outer wrapper: gives the bg-parallax its full scroll range */
    <div ref={wrapperRef} style={{ perspective: '1400px', perspectiveOrigin: '50% 0%' }}>
      <motion.section
        ref={sectionRef}
        id={ceremony.id}
        className="relative min-h-[90vh] overflow-hidden flex flex-col justify-center"
        style={{
          /* entrance animation */
          rotateX:  enterRotateX,
          scaleX:   enterScaleX,
          y:        enterY,
          opacity:  enterOpacity,
          /* exit animation layered on top */
          scale:    exitScale,
          // opacity is a conflict — combine via a CSS trick below
          transformOrigin: 'top center',
          transformStyle:  'preserve-3d',
          boxShadow: '0 -4px 28px rgba(0,0,0,0.65)',
          willChange: 'transform, opacity',
        }}
      >
        {/* separate opacity wrapper so exit opacity doesn't fight enter opacity */}
        <motion.div
          style={{ opacity: exitOpacity, y: exitY, position: 'absolute', inset: 0, zIndex: 0 }}
        />

        {/* ── Parallax BG ── */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bg-cover bg-center will-change-transform"
            style={{
              top: '-12%', bottom: '-12%', left: 0, right: 0,
              backgroundImage: `url(${ceremony.bgImage})`,
              y: bgY,
              animation: 'breatheCer 20s ease-in-out infinite',
            }}
          />
          <div className="absolute inset-0 bg-[rgba(5,2,0,0.20)]" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg,rgba(3,1,0,0.40) 10%,rgba(6,2,0,0.40) 30%,rgba(6,2,0,0.30) 70%,rgba(3,1,0,0.25) 100%)' }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 55% at 50% 52%, ${ceremony.accent}16 0%, transparent 65%)` }} />
        </div>

        {/* Gold page-crease line at top */}
        <div
          className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
          style={{
            height: 2,
            background: `linear-gradient(90deg,transparent,${ceremony.accent}66 25%,${ceremony.accent}aa 50%,${ceremony.accent}66 75%,transparent)`,
          }}
        />

        {/* Paper grain */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.022]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '180px',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-30 w-full max-w-275 mx-auto px-6 py-24 mt-20">
          <div
            className="grid gap-10"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', alignItems: 'start' }}
          >

            {/* Description column */}
            <motion.div
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.95, ease: [0.22,1,0.36,1], delay: 0.2 }}
              style={{ order: isLeft ? 0 : 1 }}
              className="flex flex-col justify-center"
            >
              <p
                className="m-0 my-4 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: 'clamp(2.5rem,6vw,4.2rem)',
                  fontWeight: 200,
                  letterSpacing: '0.009em',
                  color: '#FFEAA6',
                  opacity: 0.9,
                  textShadow: `0 0 50px ${ceremony.accent}44,0 2px 14px rgba(0,0,0,0.9),0 6px 40px rgba(0,0,0,0.75)`,
                }}
              >
                {ceremony.title}
              </p>

              <div className="mb-4" style={{ height: '0.8px', width: 100, background: `linear-gradient(90deg,${ceremony.accent},transparent)` }} />

              <p
                className="m-0 leading-[1.75]"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: '1.4rem', fontWeight: 400, fontStyle: 'italic',
                  color: 'white', letterSpacing: '0.03em',
                  textShadow: '0 1px 5px rgba(0,0,0,0.75)',
                }}
              >
                {ceremony.description}
              </p>
            </motion.div>

            {/* Diamond card column */}
            <motion.div
              initial={{ opacity: 0, x: isLeft ? 40 : -40, y: 16 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22,1,0.36,1], delay: 0.32 }}
              style={{ order: isLeft ? 1 : 0 }}
            >
              <div
                style={{
                  clipPath: OUTER_CLIP,
                  padding: 2,
                  background: `linear-gradient(160deg,rgba(255,234,166,0.09) 100%,${ceremony.accent}87,${ceremony.accent}87)`,
                  filter: `drop-shadow(0 20px 55px rgba(0,0,0,0.1)) drop-shadow(0 0 8px ${ceremony.accent}99)`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    clipPath: INNER_CLIP,
                    padding: isWedding ? '3.2rem 2.8rem' : '2.6rem 2.4rem',
                    background: `linear-gradient(155deg,${ceremony.accent}97,rgba(12,4,0,0.52) 90%,rgba(18,7,1,0.5) 100%)`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: '15%', right: '15%', height: 1,
                      background: `linear-gradient(90deg,transparent,${ceremony.accent}dd 40%,${ceremony.accent} 50%,${ceremony.accent}dd 60%,transparent)`,
                      boxShadow: `0 0 16px ${ceremony.accent}55`,
                    }}
                  />

                  <div className="mb-6">
                    {ceremony.info.map(({ label, value }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 14 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22,1,0.36,1], delay: 0.4 + i * 0.07 }}
                        className="grid items-baseline py-3"
                        style={{
                          gridTemplateColumns: '74px 1fr', gap: '0 16px',
                          borderBottom: `0.5px solid ${ceremony.accent}20`,
                        }}
                      >
                        <span style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'0.7rem', letterSpacing:'0.36em', textTransform:'uppercase', color:'rgba(255,255,255,0.52)' }}>
                          {label}
                        </span>
                        <span style={{  fontSize:'0.95rem', fontWeight:300, color:'rgba(255,248,228,0.90)', letterSpacing:'0.02em', textShadow:'0 1px 4px rgba(0,0,0,0.4)' }}>
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="h-px mb-6" style={{ background: `linear-gradient(90deg,transparent,${ceremony.accent}55 30%,${ceremony.accent}55 70%,transparent)` }} />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.65 }}
                    className="grid grid-cols-2 gap-2.5"
                  >
                    <a
                      href={googleCalUrl(ceremony.eventCal)}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 no-underline transition-all duration-300"
                      style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'0.60rem', letterSpacing:'0.25em', textTransform:'uppercase', padding:'0.85rem 0.8rem', background:`${ceremony.accent}80`, color:'white', border:`0.5px solid ${ceremony.accent}` }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${ceremony.accent}44`; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${ceremony.accent}28`; }}
                    >
                      <CalendarPlus size={12} strokeWidth={1.5} />
                      Add to Calendar
                    </a>
                    <a
                      href={ceremony.mapsUrl}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 no-underline transition-all duration-300"
                      style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'0.60rem', letterSpacing:'0.25em', textTransform:'uppercase', padding:'0.85rem 0.8rem', background:'rgba(255,248,228,0.1)', color:'white', border:`0.5px solid ${ceremony.accent}28` }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,248,228,0.12)'; e.currentTarget.style.color = 'rgba(255,248,228,0.96)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,228,0.06)'; e.currentTarget.style.color = 'rgba(255,245,218,0.72)'; }}
                    >
                      <MapPin size={12} strokeWidth={1.5} />
                      View on Map
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-12"
            style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.44rem', letterSpacing:'0.5em', textTransform:'uppercase', color:`${ceremony.accent}44` }}
          >
            {ceremony.num} / 08
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}

export default function Ceremonies() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        @keyframes breatheCer {
          0%,100% { transform: scale(1.00); }
          50%      { transform: scale(1.05); }
        }
        @media (max-width: 640px) {
          [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="w-full flex flex-col bg-[#0a0400]">
        {CEREMONIES.map((c, i) => (
          <CeremonySection key={c.id} ceremony={c} index={i} />
        ))}
      </div>
    </>
  );
}