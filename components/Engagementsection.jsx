'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { CalendarPlus, MapPin } from 'lucide-react';

/* ── Calendar helpers ── */
const EVENT = {
  title: 'Engagement — Abhinav & Aalekhya',
  description: 'Join us to celebrate the engagement of Abhinav & Aalekhya. Your presence and blessings make this moment complete.',
  location: 'Vijayawada, Andhra Pradesh, India',
  startISO: '2026-08-16T10:30:00',
  endISO:   '2026-08-16T13:00:00',
};

const googleCalUrl = ({ title, description, location, startISO, endISO }) => {
  const fmt = (d) => d.replace(/[-:T]/g, '').slice(0, 15) + 'Z';
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startISO)}/${fmt(endISO)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
};

const INFO = [
  { label: 'Date',  value: 'Sunday, 16 August 2026' },
  { label: 'Time',  value: '10:30 AM onwards' },
  { label: 'Venue', value: 'Vijayawada, Andhra Pradesh' },
  { label: 'Attire', value: 'Festive · Traditional' },
];

/* ── Decorative kolam dot border ── */
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

const mapsUrl = 'https://www.google.com/maps/search/Vijayawada+Andhra+Pradesh';

export default function EngagementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&family=Jost:wght@200;300;400&family=Noto+Serif+Telugu:wght@300;400&display=swap');

        /* ── Background image with breathing zoom ── */
        .es-bg {
          background-image: url('/images/c1.png');
          animation: breathe 22s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1.00); }
          50%      { transform: scale(1.08); }
        }

        /* ── Multi-layer overlays for guaranteed readability ── */
        .es-scrim { background: rgba(10, 4, 0, 0.62); }
        .es-grad  { background: linear-gradient(180deg, rgba(6,2,0,0.75) 0%, rgba(12,5,1,0.38) 35%, rgba(10,4,0,0.35) 65%, rgba(6,2,0,0.82) 100%); }
        .es-glow  { background: radial-gradient(ellipse 70% 55% at 50% 52%, rgba(160,80,10,0.22) 0%, transparent 70%); }
        .es-leak  { background: radial-gradient(ellipse 50% 40% at 15% 0%, rgba(200,140,40,0.12) 0%, transparent 55%); }

        /* ── Grain texture overlay ── */
        .es-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── Custom font stacks & precise typography shadows ── */
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost { font-family: 'Jost', sans-serif; }

        .es-heading {
          font-size: clamp(3rem, 8vw, 4.4rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-shadow: 0 0 60px rgba(200,140,30,0.55), 0 0 24px rgba(180,110,10,0.45), 0 2px 12px rgba(0,0,0,0.9), 0 4px 40px rgba(0,0,0,0.8);
        }
        .es-badge-text {
          text-shadow: 0 1px 8px rgba(0,0,0,0.8); 
        }
        .es-desc-text {
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }
        .es-value-text {
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }

        /* ── Complex Card Backdrop & Pseudo Borders ── */
        .es-card {
          background: linear-gradient(135deg, rgba(18,8,2,0.72) 0%, rgba(24,10,2,0.68) 100%);
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

        /* ── Scroll cue animation ── */
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(0.7)} 55%{opacity:1;transform:scaleY(1)} }
        .es-scroll-bar { animation: scrollPulse 2.4s ease-in-out infinite; }
      `}</style>

      <section
        id="engagement"
        ref={ref}
        className={`relative min-h-screen overflow-hidden flex flex-col justify-center transition-all duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* ── Layered background ── */}
        <div className="es-bg absolute inset-[-8%] bg-cover bg-[center_30%] will-change-transform" />
        <div className="es-scrim absolute inset-0" />
        <div className="es-grad absolute inset-0" />
        <div className="es-glow absolute inset-0" />
        <div className="es-leak absolute inset-0" />
        <div className="es-grain absolute inset-0 opacity-[0.035] bg-[size:180px] pointer-events-none" />

        {/* ── Badge ── */}
        <div className={`relative z-10 text-center pt-12 transition-all duration-800 cubic-bezier(0.22,1,0.36,1) delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="font-jost es-badge-text font-light text-[0.48rem] tracking-[0.5em] uppercase text-[rgba(212,175,55,0.85)]">
            ✦   First Ceremony   ✦
          </span>
        </div>

        {/* ── Title ── */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 cubic-bezier(0.22,1,0.36,1) delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-9'}`}>
          <div className="m-4">
            <h2 className="font-cormorant es-heading  leading-none color-[#fff8f0] m-0">
              Engagement
            </h2>
          </div>
        </div>

        {/* ── Kolam top strip ── */}
        <div className={`relative z-10 mt-[30px] transition-opacity duration-800 delay-150 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <KolamDots light />
        </div>

        {/* ── Card Wrap ── */}
        <div className={`relative z-10 mx-auto mt-11 px-6 pb-18 w-full max-w-[680px] transition-all duration-1000 cubic-bezier(0.22,1,0.36,1) delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-11'}`}>
          <div className="es-card relative p-7 sm:p-10 pb-9 overflow-hidden border-[0.5px] border-[rgba(212,175,55,0.32)]">
            <div className="es-grain absolute inset-0 pointer-events-none opacity-[0.025] bg-[size:160px]" />

            {/* Description */}
            <p className="font-cormorant es-desc-text text-[1.05rem] font-light italic text-[rgba(255,245,220,0.82)] stroke-none text-center leading-[1.9] tracking-normal mb-8">
              Together with our families, we joyfully invite you to witness
              as Abhinav and Aalekhya exchange rings and begin their journey into forever.
            </p>

            <div className="h-[0.5px] bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.38)] to-transparent my-7" />

            {/* Info rows */}
            <div className="mb-2">
              {INFO.map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[76px_1fr] items-center gap-x-5 py-[0.85rem] border-b-[0.5px] border-[rgba(212,175,55,0.1)] last:border-b-0 last:pb-0">
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

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={googleCalUrl(EVENT)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center justify-center gap-[9px] font-jost font-light text-[0.54rem] tracking-[0.32em] uppercase no-underline p-[0.9rem_1.4rem] cursor-pointer duration-300 ease-out bg-[rgba(212,175,55,0.2)] text-white border-[0.5px] border-[rgba(212,175,55,0.5)] hover:bg-[rgba(212,175,55,0.32)] hover:border-[rgba(212,175,55,0.8)] "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CalendarPlus size={13} strokeWidth={1.5} />
                Add to Calendar
              </a>
              <a
                href={mapsUrl}
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
        </div>
      </section>
    </>
  );
}