import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '@components/Login/LoginForm/LoginForm';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';

const login: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
      <Header />
      <LoginForm />
      <Newsletter />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default login;
