import ReviewStars from '@components/Common/ReviewStars';
import Head from 'next/head';
import React from 'react';

interface IProductCredentials {
  name: string;
}

const ProductCredentials: React.FC<IProductCredentials> = ({
  name,
}): JSX.Element => {
  //TODO DYNAMIC DATA FROM API CALL TO PRODUCT ENDPOINT WITH PRODUCT ID/NAME
  const productName = name?.replaceAll('-', ' ');
  const words = productName?.split(' ');
  const ProductTitle = words
    ?.map((word) => {
      return word[0]?.toUpperCase() + word?.substring(1);
    })
    .join(' ');
  return (
    <>
      <Head>
        <title>{`${ProductTitle || 'Loading...'} | Beardbrand `}</title>
      </Head>
      <div className="w-full flex justify-center items-start flex-col text-charleston-green">
        <h1 className="uppercase font-bold font-pano text-2xl mxlg:text-xl">{`${productName}`}</h1>
        <div className="flex justify-between items-center w-full ">
          <h3 className="font-bold text-xl">$90</h3>
          <ReviewStars review={4.5} />
        </div>
      </div>
    </>
  );
};
export default ProductCredentials;
