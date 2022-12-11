import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const BreadCrumpsProduct: React.FC = (): JSX.Element => {
  const router = useRouter();
  const name: string | any = router?.query['product-name'];
  const words = name?.split('-');
  const productName = words
    ?.map((word: any) => {
      return word[0]?.toUpperCase() + word?.substring(1);
    })
    .join(' ');
  return (
    <div className="w-full h-[50px] flex justify-start items-center bg-white px-[50px] border-b border-charleston-green border-opacity-10">
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <p className="font-space-grotesk ease duration-150 hover:text-black">
            Home
          </p>
        </Link>
        <Link href="/collections">
          <p className="font-space-grotesk ease duration-150 hover:text-black">
            Collections
          </p>
        </Link>
        <p className="font-space-grotesk">{productName}</p>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumpsProduct;
