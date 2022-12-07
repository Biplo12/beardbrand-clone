import React from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import BundleAdCollections from '@components/Collections/BundleAdCollections';
import Head from 'next/head';
import Products from '@components/Products/Products';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import { useAppSelector } from '@store/store-hooks';
import { selectUser } from '@state/user/userSlice';
import DialogProvider from '@components/Dialogs/DialogProvider';
import ProductFace from '@components/ProductFace/ProductFace';
import BreadCrumpsComponent from '@components/ProductFace/BreadCrumpsComponent';
import ProductDropdowns from '@components/ProductFace/Partials/ProductDropdowns';
const productPage: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useAppSelector(selectUser);

  return (
    <>
      <Head>
        <title>Product Name | Beardbrand </title>
        <link
          rel="shortcut icon"
          href="/static/assets/icon.png"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
        <DialogProvider />
        <Header />
        <div className={`mt-[14vh] ${user.menu ? 'brightness-[25%]' : ''}`}>
          <BreadCrumpsComponent />
          <ProductFace />
          {/* <Video/> */}

          {/* TODO - OTHER COMPONENT FOR INFO */}
          <ProductDropdowns />

          {/* <Reviews/> */}
          <BundleAdCollections />
          <Products />
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

export default productPage;
