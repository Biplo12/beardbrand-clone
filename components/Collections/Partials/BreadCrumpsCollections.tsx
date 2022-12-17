import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import React from 'react';
const BreadCrumpsCollections: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-[50px] flex justify-start items-center bg-white px-[50px] border-b border-charleston-green border-opacity-10 mxsm:text-center mxsm:justify-center">
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <p className="font-space-grotesk ease duration-150 hover:text-black">
            Home
          </p>
        </Link>
        <p className="font-space-grotesk">Collections</p>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumpsCollections;
