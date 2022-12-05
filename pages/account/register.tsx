import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import RegisterForm from '@components/Register/RegisterForm';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Bundle from '@components/Common/Bundle';
import { useAppSelector } from '@store/store-hooks';
import { selectUser } from '@state/user/userSlice';

const register: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector(selectUser);
  return (
    <>
      <Head>
        <title>Register - Beardbrand </title>
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
        } flex flex-col items-center justify-start text-white min-h-screen bg-black`}
      >
        <RegisterForm />
        <Bundle />
        <Newsletter />
        <Footer />
        <BottomBar />
      </div>
    </>
  );
};

export default register;
