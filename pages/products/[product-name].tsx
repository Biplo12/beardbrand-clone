/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header/Header';
import BundleAdCollections from '@components/Collections/BundleAdCollections';
import Products from '@components/Products/Products';
import Newsletter from '@components/Common/Newsletter';
import Footer from '@components/Common/Footer';
import BottomBar from '@components/Common/BottomBar';
import { useAppSelector } from '@store/store-hooks';
import { selectUser } from '@state/user/userSlice';
import DialogProvider from '@components/Dialogs/DialogProvider';
import ProductFace from '@components/ProductFace/ProductFace';
import ProductDropdowns from '@components/ProductFace/Partials/ProductDropdowns';
import Bundle from '@components/Common/Bundle';
import Video from '@components/Common/Video';
import BreadCrumpsProduct from '@components/ProductFace/BreadCrumpsProduct';

const VIDEO_URL =
  'https://player.vimeo.com/video/755175261?h=98153d0ba7&loop=1';

const productPage: NextPage = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-screen bg-black">
      <DialogProvider />
      <Header />
      <div className={`${user.menu ? 'brightness-[25%]' : ''} mt-[130px]`}>
        <BreadCrumpsProduct />
        <ProductFace />
        <Video videoUrl={VIDEO_URL} />
        <ProductDropdowns />
        {/* <Reviews/> */}
        <BundleAdCollections />
        <Products />
        <Bundle />
        <Newsletter />
        <div className="flex flex-col gap-3 w-full">
          <Footer />
          <div className="w-[90%] border-t-[1px] border-alabaster border-opacity-[30%] mx-auto" />
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default productPage;
