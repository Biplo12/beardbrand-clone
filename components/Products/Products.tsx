import React from 'react';
import Product from './Partials/Product';
const Products: React.FC = (): JSX.Element => {
  return (
    <div className="w-full text-charleston-green bg-white flex flex-wrap justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold font-pano px-5 py-10 text-center mxsm:text-xl">
          START BUILDING YOUR KIT
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 px-5 justify-center pb-10">
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
      </div>
    </div>
  );
};
export default Products;
