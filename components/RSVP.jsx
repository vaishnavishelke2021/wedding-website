import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Calendar, Mail, Phone } from 'lucide-react';

/* ─── Animation Configs ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

const scaleIn = (delay = 0) => ({
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const RSVP = () => {
  const events = ['Engagement', 'Haldi', 'Sangeet', 'Wedding', 'Reception'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Jost:wght@200;300;400;500&display=swap');
        
        .gold-shimmer-text-light {
          background: linear-gradient(90deg, #b38f2d 0%, #d4af37 30%, #aa841e 50%, #d4af37 70%, #b38f2d 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textShimmer 8s linear infinite;
        }

        .gold-focus-ring:focus-within {
          border-color: #d4af37;
          box-shadow: 0 0 0 1px #d4af37;
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24 bg-[#dbd2ba]">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_75%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-xl mx-auto text-center">
          
          {/* Header */}
          <motion.p
            {...fadeUp(0.1)}
            className="gold-shimmer-text-light  text-[2.75rem] sm:text-[3.6rem] font-medium mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Kindly RSVP
          </motion.p>

          <motion.p 
            {...fadeUp(0.2)}
            className="font-medium italic text-[#4a4538] tracking-[0.06em] text-sm md:text-[1.1rem] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Please let us know if you can join us so we can make every preparation with you in mind.
          </motion.p>

          {/*  Accent Line */}
          <motion.div className="flex items-center justify-center gap-3 w-full mb-14">
            <motion.div {...scaleIn(0.3)} className="w-16 h-[0.8px] bg-[#d4af37]/60" />
            <div className="w-1.5 h-1.5 bg-[#d4af37]/60 rotate-45 transform" />
            <motion.div {...scaleIn(0.3)} className="w-16 h-[0.8px] bg-[#d4af37]/60" />
          </motion.div>

          {/* Form */}
          <motion.div 
            {...fadeUp(0.3)}
            className="text-left"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#5c5546] font-medium mb-2.5">
                  Full Name
                </label>
                <div className="relative border-b border-[#333333]/15 transition-all duration-300">
                  <span className="absolute inset-y-0 left-0 flex items-center text-[#9c927c]">
                    <User size={15} strokeWidth={1.5} />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full bg-transparent py-2.5 pl-7 pr-4 text-zinc-900 placeholder-[#2b2924]/50 text-base font-light focus:outline-none"
                  />
                </div>
              </div>

              {/*  Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                {/* Email */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#5c5546] font-medium mb-2.5">
                    Email Address
                  </label>
                  <div className="relative border-b border-[#333333]/15 transition-all duration-300">
                    <span className="absolute inset-y-0 left-0 flex items-center text-[#9c927c]">
                      <Mail size={15} strokeWidth={1.5} />
                    </span>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-transparent py-2.5 pl-7 pr-4 text-zinc-900 placeholder-[#2b2924]/50 text-base font-light focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#5c5546] font-medium mb-2.5">
                    Phone Number
                  </label>
                  <div className="relative border-b border-[#333333]/15 transition-all duration-300">
                    <span className="absolute inset-y-0 left-0 flex items-center text-[#9c927c]">
                      <Phone size={15} strokeWidth={1.5} />
                    </span>
                    <input 
                      type="tel" 
                      placeholder="Contact number"
                      className="w-full bg-transparent py-2.5 pl-7 pr-4 text-zinc-900 placeholder-[#2b2924]/50 text-base font-light focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Guests  */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#5c5546] font-medium mb-2.5">
                  Number of Guests
                </label>
                <div className="relative border-b border-[#333333]/15 transition-all duration-300">
                  <span className="absolute inset-y-0 left-0 flex items-center text-[#9c927c]">
                    <Users size={15} strokeWidth={1.5} />
                  </span>
                  <select className="w-full bg-transparent py-2.5 pl-7 pr-8 text-[#2b2924] text-[15px] font-light focus:outline-none appearance-none cursor-pointer">
                    <option value="1" className="bg-[#FAF9F6] text-[#2b2924]">Just Me (1)</option>
                    <option value="2" className="bg-[#FAF9F6] text-[#2b2924]">2 Guests</option>
                    <option value="3" className="bg-[#FAF9F6] text-[#2b2924]">3 Guests</option>
                    <option value="4" className="bg-[#FAF9F6] text-[#2b2924]">4 Guests</option>
                    <option value="5" className="bg-[#FAF9F6] text-[#2b2924]">5+ Guests</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none text-[#9c927c] text-[9px]">
                    ▼
                  </span>
                </div>
              </div>

              {/* Event Selection Options */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#5c5546] font-medium mb-4 items-center gap-2">
                  <Calendar size={13} strokeWidth={1.5} className="text-[#d4af37]" /> Select Events Attending
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {events.map((event) => (
                    <label 
                      key={event} 
                      className="flex items-center space-x-2.5 border border-[#333333]/10 bg-[#d4af37]/9 rounded-full px-4 py-2 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/2 transition-all duration-200 cursor-pointer group"
                    >
                      <input 
                        type="checkbox" 
                        className="w-3.5 h-3.5 rounded-full border-[#333333]/20 text-[#d4af37] bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#d4af37]"
                      />
                      <span className="text-[#000000] group-hover:text-[#2b2924] text-xs font-light tracking-wide transition-colors">
                        {event}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-[#120905]/80 text-[#FAF9F6] cursor-pointer font-light text-xs uppercase tracking-[0.25em] py-4 px-6 rounded-md hover:bg-[#a08018] hover:text-white transition-all duration-300 shadow-xs flex items-center justify-center gap-2"
                >
                  Submit Response 
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default RSVP;