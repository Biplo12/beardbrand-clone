import React from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Bundle from '@components/Common/Bundle';
import BundleAdCollections from '@components/Collections/BundleAdCollections';
import Grooming from '@components/Collections/Grooming';
import Tools from '@components/Collections/Tools';
import OrderInfo from '@components/Collections/OrderInfo';
import Head from 'next/head';
import { useAppSelector } from '@store/store-hooks';
import { selectUser } from '@state/user/userSlice';

const collections: NextPage = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      <Head>
        <title>Collections - Beardbrand </title>
        <link
          rel="shortcut icon"
          href="/static/assets/icon.png"
          type="image/x-icon"
        />
      </Head>
      <div
        className={`${
          user.menu ? 'brightness-[25%]' : ''
        } flex flex-col items-center justify-start text-white min-h-screen bg-black`}
      >
        <Header />
        <BundleAdCollections />
        <Grooming />
        <Tools />
        <OrderInfo />
        <Bundle />
        <Newsletter />
        <Footer />
        <BottomBar />
      </div>
    </>
  );
};

export default collections;
