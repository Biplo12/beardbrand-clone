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
import DialogProvider from '@components/Dialogs/DialogProvider';
import BreadCrumpsCollections from '@components/Collections/Partials/BreadCrumpsCollections';

const collections: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      <DialogProvider />
      <Header />
      <div
        className={`${
          user.menu ? 'brightness-[25%]' : ''
        } flex flex-col items-center justify-start text-white min-h-screen bg-black mt-[130px] mxxsm:mt-[170px]`}
      >
        <BreadCrumpsCollections />
        <BundleAdCollections />
        <Grooming />
        <Tools />
        <OrderInfo />
        <Bundle />
        <Newsletter />
        <div className="flex flex-col gap-3 w-full">
          <Footer />
          <div className="w-[90%] border-t-[1px] border-alabaster border-opacity-[30%] mx-auto" />
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default collections;
