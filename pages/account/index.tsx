import React from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Head from 'next/head';
import { selectUser } from '@state/user/userSlice';
import { useAppSelector } from '@store/store-hooks';
import AccountPage from '@components/Account/AccountPage';

const accountPage: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector(selectUser);
  return (
    <>
      <Head>
        <title>Account - Beardbrand </title>
        <link
          rel="shortcut icon"
          href="/static/assets/icon.png"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <div
        className={`${
          user.menu ? 'brightness-[25%]' : ''
        } flex flex-col items-center justify-start text-white min-h-screen bg-black mt-[130px]`}
      >
        <AccountPage />
        <div className="flex flex-col gap-3 w-full">
          <Footer />
          <div className="w-[90%] border-t-[1px] border-alabaster border-opacity-[30%] mx-auto" />
          <BottomBar />
        </div>
      </div>
    </>
  );
};

export default accountPage;
