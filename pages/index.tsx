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
import Footer from '@components/Footer';
import BottomBar from '@components/BottomBar';
import { useAppSelector } from '@store/store-hooks';
import { selectUser } from '@state/user/userSlice';

const Home: NextPage = () => {
  const user = useAppSelector(selectUser);
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
        <div className={`${user.menu ? 'brightness-[25%]' : ''}`}>
          <Hero />
          <InfoCard />
          <BundleAd />
          <Products />
          <Articles />
          <Newsletter />
          <div className="flex flex-col gap-3 w-full">
            <Footer />
            <div className="w-[90%] border-t-[1px] border-alabaster border-opacity-[30%] mx-auto" />
            <BottomBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
