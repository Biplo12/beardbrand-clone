import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import InfoCard from '@components/InfoCard';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
      <Header />
      <Hero />
      <InfoCard />
    </div>
  );
};

export default Home;
