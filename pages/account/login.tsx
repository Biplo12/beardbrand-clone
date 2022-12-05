import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '@components/Login/LoginForm/LoginForm';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Bundle from '@components/Common/Bundle';
import Head from 'next/head';
import { selectUser } from '@state/user/userSlice';
import { useAppSelector } from '@store/store-hooks';

const login: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector(selectUser);
  return (
    <>
      <Head>
        <title>Login - Beardbrand </title>
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
        <LoginForm />
        <Bundle />
        <Newsletter />
        <Footer />
        <BottomBar />
      </div>
    </>
  );
};

export default login;
