'use client';

import { useState, useEffect } from 'react';

const ceremonies = [
  { id: 'engagement',   label: 'Engagement' },
  { id: 'haldi',        label: 'Haldi' },
  { id: 'sangeet',      label: 'Sangeet' },
  { id: 'wedding',      label: 'Wedding' },
  { id: 'reception',    label: 'Reception' },
];

export default function WeddingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Detect scroll past hero ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Highlight active section via IntersectionObserver ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    ceremonies.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        aria-label="Ceremony navigation"
      >
        {/* Fine gold top accent line */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#FFD700]/50 to-transparent opacity-80" />
        
        {/* Navbar Inner Tray */}
        <div className="flex items-center justify-between px-6 md:px-12 h-14 bg-[#120905]/80 backdrop-blur-md border-b border-white/5 shadow-2xl transition-colors duration-300">
          
          {/* Brand Logo */}
          <div 
            className="text-[#dbd2ba] text-lg font-light tracking-wide select-none whitespace-nowrap"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Abhinav <span className="text-[#FFD700] italic font-normal">&amp;</span> Aalekhya
          </div>

          {/* Desktop Links List */}
          <ul className="hidden md:flex items-center h-full m-0 p-0 list-none" role="list">
            {ceremonies.map((c, i) => (
              <li key={c.id} className="flex items-center h-full relative">
                {/* Micro diamond node separator between navigation tags */}
                {i > 0 && (
                  <span className="w-1 h-1 bg-[#FFD700]/30 rotate-45 transform pointer-events-none select-none mx-1" />
                )}
                <button
                  className={`h-full px-4 text-[0.62rem] uppercase tracking-[0.22em] font-light bg-transparent border-b-2 border-transparent cursor-pointer transition-all duration-300 ${
                    active === c.id 
                      ? 'text-[#FFBF00] border-[#FFD700]/80 font-normal drop-shadow-[0_0_8px_rgba(255,191,0,0.3)]' 
                      : 'text-[#f3e3dc]/60 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Jost', sans-serif" }}
                  onClick={() => scrollTo(c.id)}
                  aria-label={`Go to ${c.label}`}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Burger Trigger Button */}
          <button
            className="flex md:hidden flex-col items-end justify-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer focus:outline-none z-50 group"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`h-px bg-neutral-200 transition-all duration-300 ease-out ${menuOpen ? 'w-6 rotate-45 translate-y-1.75' : 'w-6'}`} />
            <span className={`h-px bg-neutral-200 transition-all duration-300 ease-out ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`h-px bg-neutral-200 transition-all duration-300 ease-out ${menuOpen ? 'w-6 -rotate-45 -translate-y-1.75' : 'w-5'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Glassmorphic Overlay Drawer */}
      <div 
        className={`fixed inset-x-0 top-14 z-40 bg-[#120905]/95 backdrop-blur-lg border-b border-white/5 shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        role="menu"
      >
        <div className="py-4 flex flex-col max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          {ceremonies.map(c => (
            <button
              key={c.id}
              className={`w-full text-left py-3.5 px-8 text-xs uppercase tracking-[0.25em] font-light bg-transparent border-l-2 transition-all duration-200 ${
                active === c.id 
                  ? 'text-[#FFBF00] border-[#FFD700] bg-white/5 font-normal' 
                  : 'text-[#f3e3dc]/60 border-transparent hover:bg-white/5'
              }`}
              style={{ fontFamily: "'Jost', sans-serif" }}
              onClick={() => scrollTo(c.id)}
              role="menuitem"
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}