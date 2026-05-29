// 'use client';

// import { ReactLenis } from 'lenis/react';
// import Entry from '@/components/Entry';
// import Weddingnav from '@/components/Weddingnav';
// import Ceremonies from '@/components/Ceremonies';

// export default function Home() {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
//       <main className="w-full h-full">
//         <Entry />
//         <Weddingnav />
//         <Ceremonies />
//       </main>
//     </ReactLenis>
//   );
// }


// audio ---------

'use client';

import { ReactLenis } from 'lenis/react';
import Entry from '@/components/Entry';
import Weddingnav from '@/components/Weddingnav';
import Ceremonies from '@/components/Ceremonies';
import AudioPlayer from '@/components/AudioPlayer'; 
import CalendarSyncSection from '@/components/CalendarSyncSection';
import Footer from '@/components/Footer';
import RSVP from '@/components/RSVP';

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <main className="w-full h-full relative">
        <Entry />
        <Weddingnav />
        <Ceremonies />
        <CalendarSyncSection />
        
        <RSVP/>
        <Footer />
        
        {/* Floating audio  */}
        <AudioPlayer />
      </main>
    </ReactLenis>
  );
}