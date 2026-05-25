
import Entry from '@/components/Entry';
import Events from '@/components/Events';
import Weddingnav from '@/components/Weddingnav';
import Engagementsection from '@/components/Engagementsection';
import Ceremonies from '@/components/Ceremonies';

export default function Home() {
  return (
    <main className="w-full h-full">
      <Entry />
      {/* <Events /> */}
      <Weddingnav />
      {/* <Engagementsection/> */}
        <Ceremonies />
    </main>
  );
}
