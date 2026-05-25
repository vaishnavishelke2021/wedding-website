'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const EVENTS = [
  {
    id: '01', side: 'left', icon: '💍',
    label: 'Engagement',
    title: 'Engagement', titleItalic: 'Ceremony',
    date: 'Sunday, 16 August 2026',
    time: '10:30 AM',
    venue: 'Vijayawada',
  },
  {
    id: '02', side: 'right', icon: '🌼',
    label: 'Haldi',
    title: 'Haldi', titleItalic: 'Ceremony',
    date: 'Friday, 28 August 2026',
    time: 'Evening',
    venue: 'Vijayawada',
  },
  {
    id: '03', side: 'left', icon: '🎶',
    label: 'Sangeet',
    title: 'Sangeet', titleItalic: 'Night',
    date: 'Saturday, 29 August 2026',
    time: 'Evening',
    venue: 'CK Convention',
  },
  {
    id: '04', side: 'right', icon: '🌸',
    label: 'Pellikuthuru',
    title: 'Pellikuthuru', titleItalic: null,
    date: 'Friday, 4 September 2026',
    time: 'Morning',
    venue: 'Vijayawada',
    note: "Bride's pre-wedding ritual",
  },
  {
    id: '05', side: 'left', icon: '🪔',
    label: 'Pellikoduku',
    title: 'Pellikoduku', titleItalic: null,
    date: 'Friday, 4 September 2026',
    time: 'Morning',
    venue: 'Gudapadu',
    note: "60 km from Vijayawada · Groom's pre-wedding ritual",
  },
  {
    id: '06', side: 'right', icon: '🌺',
    label: 'The Wedding',
    title: 'The', titleItalic: 'Wedding',
    date: '4–5 September 2026',
    time: 'Evening to Midnight',
    venue: 'Dwaraka Tirumala',
    note: 'Chinna Tirupathi — a sacred and blessed venue',
    isWedding: true,
  },
  {
    id: '07', side: 'left', icon: '🙏',
    label: 'Vratham',
    title: 'Vratham', titleItalic: 'Ritual',
    date: 'Saturday, 5 September 2026',
    time: 'Morning',
    venue: 'Gudapadu',
  },
  {
    id: '08', side: 'right', icon: '✨',
    label: 'Reception',
    title: 'Wedding', titleItalic: 'Reception',
    date: 'Sunday, 6 September 2026',
    time: 'Evening',
    venue: 'CK Convention',
  },
];

const nodeSize = (isWedding) => isWedding ? 48 : 40;

function EventCard({ event, index }) {
  const { id, side, icon, label, title, titleItalic, date, time, venue, note, isWedding } = event;
  const isLeft = side === 'left';

  const cardStyle = {
    background: isWedding ? 'rgba(255,252,240,0.65)' : 'rgba(255,255,255,0.50)',
    border: `0.5px solid rgba(212,175,55,${isWedding ? '0.55' : '0.28'})`,
    backdropFilter: 'blur(10px)',
    padding: '1.4rem 1.5rem 1.3rem',
    position: 'relative',
    textAlign: isLeft ? 'right' : 'left',
    boxShadow: isWedding ? '0 4px 24px rgba(212,175,55,0.18)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const metaStyle = (isLeft) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    justifyContent: isLeft ? 'flex-end' : 'flex-start',
  });

  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.08)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 56px 1fr',
        alignItems: 'start',
        marginBottom: 48,
        position: 'relative',
        zIndex: 2,
      }}
      onMouseEnter={e => {
        const card = e.currentTarget.querySelector('[data-card]');
        if (card) { card.style.transform = 'translateY(-3px)'; card.style.boxShadow = '0 8px 32px rgba(212,175,55,0.14)'; }
      }}
      onMouseLeave={e => {
        const card = e.currentTarget.querySelector('[data-card]');
        if (card) { card.style.transform = 'translateY(0)'; card.style.boxShadow = isWedding ? '0 4px 24px rgba(212,175,55,0.18)' : 'none'; }
      }}
    >
      {/* Left slot */}
      {isLeft ? (
        <div data-card style={cardStyle}>
          {/* Gold top bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: isWedding ? 2.5 : 2,
            background: isWedding
              ? 'linear-gradient(90deg,transparent,#f0d080 30%,#d4af37 50%,#f0d080 70%,transparent)'
              : 'linear-gradient(90deg,transparent,#d4af37,transparent)',
          }}/>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.52rem', letterSpacing:'0.35em', color:'#b09080', textTransform:'uppercase', marginBottom:'0.4rem' }}>
            {id} · {label}
          </p>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isWedding ? '1.85rem' : '1.55rem', fontWeight:600, color:'#4a3728', letterSpacing:'0.02em', lineHeight:1.2, marginBottom:'0.6rem' }}>
            {title}{titleItalic && <> <em style={{ fontWeight:300, fontStyle:'italic', color:'#8b6b6b' }}>{titleItalic}</em></>}
          </h3>
          <div style={metaStyle(true)}>
            <span style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'0.68rem', letterSpacing:'0.22em', color:'#6b4423', textTransform:'uppercase' }}>{date}</span>
          </div>
          <div style={{ ...metaStyle(true), marginTop:'0.3rem' }}>
            <span style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.62rem', letterSpacing:'0.18em', color:'#8b6b6b' }}>⏰ {time}</span>
          </div>
          <div style={{ ...metaStyle(true), marginTop:'0.3rem' }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.9rem', fontWeight:300, fontStyle:'italic', color:'#9a7070' }}>📍 {venue}</span>
          </div>
          {note && <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.58rem', letterSpacing:'0.15em', color:'#b09080', marginTop:'0.5rem', fontStyle:'italic' }}>{note}</p>}
        </div>
      ) : <div/>}

      {/* Centre node */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', paddingTop:24 }}>
        <div style={{
          width: nodeSize(isWedding), height: nodeSize(isWedding), borderRadius:'50%',
          background: isWedding ? 'linear-gradient(135deg,#fff8e6,#fdefd0)' : 'linear-gradient(135deg,#fff8f3,#fdeef0)',
          border: `1px solid rgba(212,175,55,${isWedding ? '0.75' : '0.55'})`,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: isWedding ? '0 0 0 5px rgba(212,175,55,0.15),0 4px 16px rgba(212,175,55,0.25)' : '0 2px 12px rgba(212,175,55,0.18)',
          fontSize: isWedding ? '1.3rem' : '1.1rem',
          zIndex: 4, position:'relative',
        }}>
          {icon}
        </div>
      </div>

      {/* Right slot */}
      {!isLeft ? (
        <div data-card style={cardStyle}>
          <div style={{
            position:'absolute', top:0, left:0, right:0,
            height: isWedding ? 2.5 : 2,
            background: isWedding
              ? 'linear-gradient(90deg,transparent,#f0d080 30%,#d4af37 50%,#f0d080 70%,transparent)'
              : 'linear-gradient(90deg,transparent,#d4af37,transparent)',
          }}/>
          <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.52rem', letterSpacing:'0.35em', color:'#b09080', textTransform:'uppercase', marginBottom:'0.4rem' }}>
            {id} · {label}
          </p>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isWedding ? '1.85rem' : '1.55rem', fontWeight:600, color:'#4a3728', letterSpacing:'0.02em', lineHeight:1.2, marginBottom:'0.6rem' }}>
            {title}{titleItalic && <> <em style={{ fontWeight:300, fontStyle:'italic', color:'#8b6b6b' }}>{titleItalic}</em></>}
          </h3>
          <div style={metaStyle(false)}>
            <span style={{ fontFamily:"'Jost',sans-serif", fontWeight:300, fontSize:'0.68rem', letterSpacing:'0.22em', color:'#6b4423', textTransform:'uppercase' }}>{date}</span>
          </div>
          <div style={{ ...metaStyle(false), marginTop:'0.3rem' }}>
            <span style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.62rem', letterSpacing:'0.18em', color:'#8b6b6b' }}>⏰ {time}</span>
          </div>
          <div style={{ ...metaStyle(false), marginTop:'0.3rem' }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'0.9rem', fontWeight:300, fontStyle:'italic', color:'#9a7070' }}>📍 {venue}</span>
          </div>
          {note && <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.58rem', letterSpacing:'0.15em', color:'#b09080', marginTop:'0.5rem', fontStyle:'italic' }}>{note}</p>}
        </div>
      ) : <div/>}
    </motion.div>
  );
}

export default function Events() {
  return (
    <section style={{
      position:'relative', overflow:'hidden',
      background:'linear-gradient(175deg,#ffffff 0%,#fff8f8 22%,#fdeef0 45%,#f8dce0 68%,#f0c8ce 85%,#e8b4bc 100%)',
      padding:'80px 24px 100px',
    }}>
      {/* Ambient blobs */}
      <div style={{ position:'absolute', top:-60, left:-80, width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(212,165,165,0.15) 0%,transparent 68%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:-60, right:-80, width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle,rgba(212,175,55,0.09) 0%,transparent 68%)', pointerEvents:'none' }}/>

      {/* Section header */}
      <motion.div {...fadeUp(0)} style={{ textAlign:'center', marginBottom:64 }}>
        <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.65rem', letterSpacing:'0.42em', color:'#9a7070', textTransform:'uppercase', marginBottom:'1.2rem' }}>
          August – September 2026
        </p>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2rem,4vw,3rem)', fontWeight:300, color:'#3d2414', letterSpacing:'0.03em', marginBottom:'1rem' }}>
          Celebrations &amp; Functions
        </h2>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
          <div style={{ height:'0.5px', width:60, background:'linear-gradient(90deg,transparent,#d4af37)' }}/>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 1.5 L13 8 L19.5 8 L14.3 12 L16.3 18.5 L11 14.5 L5.7 18.5 L7.7 12 L2.5 8 L9 8Z" fill="#d4af37" opacity="0.85"/>
            <circle cx="11" cy="11" r="2" fill="#fff8f3" opacity="0.6"/>
          </svg>
          <div style={{ height:'0.5px', width:60, background:'linear-gradient(90deg,#d4af37,transparent)' }}/>
        </div>
      </motion.div>

      {/* Timeline */}
      <div style={{ position:'relative', maxWidth:860, margin:'0 auto' }}>
        {/* Spine */}
        <div style={{
          position:'absolute', left:'50%', top:0, bottom:0, width:1,
          transform:'translateX(-50%)',
          background:'linear-gradient(180deg,transparent 0%,rgba(212,175,55,0.4) 4%,rgba(212,175,55,0.4) 96%,transparent 100%)',
          zIndex:1,
        }}/>

        {/* Events */}
        {EVENTS.map((ev, i) => <EventCard key={ev.id} event={ev} index={i}/>)}
      </div>

      {/* Closing */}
      <div style={{ textAlign:'center', marginTop:20, display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ height:'0.5px', width:50, background:'linear-gradient(90deg,transparent,#d4af37)' }}/>
          <div style={{ width:5, height:5, background:'#e8c4c4', transform:'rotate(45deg)', opacity:0.7 }}/>
          <div style={{ width:6, height:6, background:'#d4af37', transform:'rotate(45deg)' }}/>
          <div style={{ width:5, height:5, background:'#e8c4c4', transform:'rotate(45deg)', opacity:0.7 }}/>
          <div style={{ height:'0.5px', width:50, background:'linear-gradient(90deg,#d4af37,transparent)' }}/>
        </div>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1.05rem', fontWeight:300, fontStyle:'italic', color:'#7a5a5a', letterSpacing:'0.06em' }}>
          We look forward to celebrating with you
        </p>
        <p style={{ fontFamily:"'Jost',sans-serif", fontWeight:200, fontSize:'0.6rem', letterSpacing:'0.3em', color:'#b09080', textTransform:'uppercase' }}>
          Abhinav &amp; Aalekhya · 2026
        </p>
      </div>
    </section>
  );
}