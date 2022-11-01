import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import InfoCard from '@components/InfoCard';
import Head from 'next/head';
import BundleAd from '@components/BundleAd/BundleAd';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
      <Head>
        <title>Beard Products | Beardbrand DEV </title>
        <link
          rel="shortcut icon"
          href="/static/assets/icon.png"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <Hero />
      <InfoCard />
      <BundleAd />
    </div>
  );
};

export default Home;
