import React from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import Hero from '@components/Hero/Hero';
import InfoCard from '@components/InfoCard';
import Head from 'next/head';
import BundleAd from '@components/BundleAd/BundleAd';
import Articles from '@components/Articles/Articles';
import Products from '../components/Products/Products';
import Newsletter from '@components/Newsletter';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beard Products | Beardbrand </title>
        <link
          rel="shortcut icon"
          href="/static/assets/icon.png"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
        <Header />
        <Hero />
        <InfoCard />
        <BundleAd />
        <Products />
        <Articles />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
