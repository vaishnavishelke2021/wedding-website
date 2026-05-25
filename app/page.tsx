'use strict'; 
'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import Entry from '@/components/Entry';
import Weddingnav from '@/components/Weddingnav';
import Ceremonies from '@/components/Ceremonies';

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: false }}>
      <main className="w-full h-full">
        <Entry />
        {/* <Events /> */}
        <Weddingnav />
        {/* <Engagementsection/> */}
        <Ceremonies />
      </main>
    </ReactLenis>
  );
}