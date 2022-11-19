import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '@components/Login/LoginForm/LoginForm';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Bundle from '@components/Common/Bundle';
import Head from 'next/head';

const login: NextPage = () => {
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
      <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
        <Header />
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
