import React from 'react';
import type { NextPage } from 'next';
import RegisterForm from '@components/Register/RegisterForm';
import Header from '@components/Header/Header';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import Bundle from '@components/Common/Bundle';

const register: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
      <Header />
      <RegisterForm />
      <Bundle />
      <Newsletter />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default register;
