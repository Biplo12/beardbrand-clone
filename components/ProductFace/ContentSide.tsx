import AddToCartButton from '@components/Common/AddToCartButton';
import DispencerInput from '@components/Common/DispencerInput';
import Fragnances from '@components/Dialogs/AddToCart/Partials/Fragnances';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AboutProduct from './Partials/AboutProduct';
import ProductCredentials from './Partials/ProductCredentials';
import ProductInfoDropdown from './Partials/ProductInfoDropdown';
import Quantity from './Partials/Quantity';
const ContentSide: React.FC = (): JSX.Element => {
  const router = useRouter();
  const name: string | any = router?.query['product-name'];
  const [imageChange, setImageChange] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start w-[50%] min-h-full relative pt-[150px]">
      <div className="h-full flex justify-start items-start flex-col gap-10 w-[90%] mx-auto">
        <ProductCredentials name={name} />
        <Fragnances />
        <DispencerInput
          setImageChange={setImageChange}
          imageChange={imageChange}
        />
        <Quantity />
        <AddToCartButton />
        <AboutProduct />
        <div className="w-full">
          <ProductInfoDropdown />
        </div>
      </div>
    </div>
  );
};
export default ContentSide;
