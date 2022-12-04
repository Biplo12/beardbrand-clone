import ButtonArrow from '@components/Common/ButtonArrow';
import Link from 'next/link';
import React from 'react';
import Product from './Partials/Product';
const Tools: React.FC = (): JSX.Element => {
  return (
    <div className="w-full text-charleston-green bg-white">
      <div className=" grid grid-cols-4 mxlg:grid-cols-2 mxsm:flex mxsm:flex-col mxsm:justiffy-center mxsm:items-center mxsm:gap-5 -mt-[1px] -ml-[1px]">
        <div className="flex justify-center items-center outline outline-[1px] m-[1px] outline-[rgba(43,46,48,0.05)] mxsm:w-full mxsm:outline-none">
          <h1 className="pl-5 text-lg text-charleston-green font-bold font-pano px-5 py-10 text-center mxsm:text-md w-[90%] mx-auto">
            TOOLS
          </h1>
        </div>
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <Product
          image={'/static/assets/products/product-2.png'}
          imageHovered={'/static/assets/products/product-1.png'}
          name={'UTILITYY BEARD OIL'}
          price={25}
          review={4.6}
        />
        <div className="flex justify-center items-center mxsm:pt-5 outline outline-[1px] m-[1px] outline-[rgba(43,46,48,0.05)] min-h-[450px] mxsm:min-h-[100px] mxsm:w-full mxsm:outline-none">
          <Link href={'/collections'}>
            <ButtonArrow buttonColor="black" text="EXPLORE ALL" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Tools;
