'use client';

import React from 'react';
import { CalendarHeart, Download } from 'lucide-react';

const CALENDAR_EVENTS = [
  {
    title: 'Engagement — Abhinav & Aalekhya',
    start: '20260816T103000',
    end: '20260816T133000',
    location: 'Vijayawada, Andhra Pradesh',
  },
  {
    title: 'Haldi — Abhinav & Aalekhya',
    start: '20260828T160000',
    end: '20260828T210000',
    location: 'Vijayawada, Andhra Pradesh',
  },
  {
    title: 'Sangeet — Abhinav & Aalekhya',
    start: '20260829T183000',
    end: '20260829T233000',
    location: 'CK Convention, Vijayawada',
  },
  // {
  //   title: 'Pellikuthuru — Aalekhya',
  //   start: '20260904T073000',
  //   end: '20260904T113000',
  //   location: 'Vijayawada, Andhra Pradesh',
  // },
  // {
  //   title: 'Pellikoduku — Abhinav',
  //   start: '20260904T073000',
  //   end: '20260904T113000',
  //   location: 'Gudapadu (60km from Vijayawada)',
  // },
  {
    title: 'Wedding — Abhinav & Aalekhya',
    start: '20260904T190000',
    end: '20260905T020000',
    location: 'Dwaraka Tirumala (Chinna Tirupathi)',
  },
  // {
  //   title: 'Vratham — Abhinav & Aalekhya',
  //   start: '20260905T083000',
  //   end: '20260905T123000',
  //   location: 'Gudapadu, Andhra Pradesh, India',
  // },
  {
    title: 'Reception',
    start: '20260906T183000',
    end: '20260906T223000',
    location: 'CK Convention, Vijayawada',
  },
];

function buildICSString() {
  const events = CALENDAR_EVENTS.map(
    (event) => `BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.start}
DTEND:${event.end}
LOCATION:${event.location}
END:VEVENT`
  ).join('\n');

  return `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:-//WeddingCalendar//NONSGML v1.0//EN
${events}
END:VCALENDAR`;
}

export default function CalendarSyncSection() {
  const accent = '#e8a020'; // Warm Royal Gold theme accent

  const handleSingleClickAddAll = () => {
    const icsContent = buildICSString();
    
    // Building a direct Data URI scheme trigger link string payload channel
    const uriContent = "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent);
    
    // Creating instant hardware window frame redirect link anchor
    const launchAnchor = document.createElement('a');
    launchAnchor.setAttribute('href', uriContent);
    launchAnchor.setAttribute('download', 'Abhinav_Aalekhya_Wedding_Events.ics');
    launchAnchor.setAttribute('target', '_blank');
    
    document.body.appendChild(launchAnchor);
    launchAnchor.click();
    document.body.removeChild(launchAnchor);
  };

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
      `}</style>
    
      <section 
        className="relative w-full py-24 px-6 overflow-hidden select-none flex items-center justify-center"
        style={{ backgroundColor: '#110500' }} 
      >
        <div className="relative w-full max-w-7xl z-10">
          
          {/* ── Outer Content Frame / Card Box ── */}
          <div 
            className="grid md:grid-cols-2 gap-12 items-center border rounded-sm p-8 md:p-14 overflow-hidden relative"
            style={{
              borderColor: `${accent}33`,
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.75)'
            }}
          >
            {/* ── Background Image Layer (Set strictly to 50% Opacity) ── */}
            <div
              className="absolute inset-0 pointer-events-none opacity-50"
              style={{ 
                backgroundImage: "url('/bg2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* ── Clean 60% Solid Color Dark Tint Overlay (No gradients to block visibility) ── */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ backgroundColor: 'rgba(17, 5, 0, 0.60)' }} 
            />

            {/* Decorative Framing Layout Lines */}
            <div className="absolute top-[4%] bottom-[4%] left-3.5 w-[0.5px]" style={{ background: `linear-gradient(180deg, transparent, ${accent}22, transparent)` }} />
            <div className="absolute top-[4%] bottom-[4%] right-3.5 w-[0.5px]" style={{ background: `linear-gradient(180deg, transparent, ${accent}22, transparent)` }} />

            {/* Micro Corner Dots */}
            {['top-2.5 left-2.5', 'top-2.5 right-2.5', 'bottom-2.5 left-2.5', 'bottom-2.5 right-2.5'].map((pos, i) => (
              <div key={i} className={`absolute w-1 h-1 rounded-full opacity-40 ${pos}`} style={{ backgroundColor: accent }} />
            ))}

            {/* ── Left Content Block ── */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
              <div className="flex items-center gap-2.5 mb-5">
                <CalendarHeart size={16} strokeWidth={1.5} style={{ color: accent }} />
                <span 
                  className="uppercase tracking-[0.35em] text-[0.45rem]"
                  style={{ fontFamily: "'Jost', sans-serif", color: `${accent}cc` }}
                >
                  Save The Dates
                </span>
              </div>

              <p
                className="gold-shimmer-text font-light tracking-[0.025] leading-none m-0 text-[3rem] sm:text-[3.4rem] md:text-[3.7rem] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Never miss a moment
              </p>

              <p 
                className="text-[1.2rem] font-light italic mb-8 leading-relaxed max-w-md"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  color: '#fff5df',
                  textShadow: '0 2px 10px rgba(0,0,0,1)'
                }}
              >
                Add all eight wedding ceremonies to your phone&apos;s calendar app in a single click and never miss a celebration.
              </p>

              {/* Single Global Action Button */}
              <button
                onClick={handleSingleClickAddAll}
                className="group flex items-center justify-center gap-3 px-8 py-3.5 border transition-all duration-300 active:scale-95 cursor-pointer text-[0.6rem] tracking-[0.25em] uppercase font-light relative z-20"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  background: 'rgba(232, 160, 32, 0.18)',
                  borderColor: `${accent}aa`,
                  color: '#ffffff',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(232, 160, 32, 0.3)';
                  e.currentTarget.style.borderColor = accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(232, 160, 32, 0.18)';
                  e.currentTarget.style.borderColor = `${accent}aa`;
                }}
              >
                <Download size={11} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-px" />
                Add All Events to Calendar
              </button>
            </div>

            {/* ── Right Event List Itinerary ── */}
            <div className="space-y-3.5 relative z-10 w-full max-h-100 overflow-y-auto pr-2 scrollbar-thin">
              {CALENDAR_EVENTS.map((event) => {
                const shortTitle = event.title.split(' —')[0];
                const shortLocation = event.location.split(' (')[0];
                
                return (
                  <div
                    key={event.title}
                    className="flex justify-between items-end border-b pb-2.5 relative z-10"
                    style={{ borderColor: `${accent}22` }}
                  >
                    <span 
                      className="text-white/60 text-[0.92rem] font-medium tracking-wide"
                      style={{ 
                        fontFamily: "'Jost', sans-serif",
                        textShadow: '0 2px 8px rgba(0,0,0,1)'
                      }}
                    >
                      {shortTitle}
                    </span>
                    <span 
                      className="text-[0.72rem] tracking-wide uppercase font-normal text-right max-w-55 truncate"
                      style={{ 
                        fontFamily: "'Jost', sans-serif", 
                        color: accent,
                        textShadow: '0 2px 6px rgba(0,0,0,1)'
                      }}
                    >
                      {shortLocation}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}