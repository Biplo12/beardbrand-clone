import ReviewStars from '@components/Common/ReviewStars';
import React from 'react';

interface IProductCredentials {
  name: string;
}

const ProductCredentials: React.FC<IProductCredentials> = ({
  name,
}): JSX.Element => {
  //TODO DYNAMIC DATA FROM API CALL TO PRODUCT ENDPOINT WITH PRODUCT ID/NAME
  return (
    <div className="w-full flex justify-center items-start flex-col text-charleston-green">
      <h1 className="uppercase font-bold font-pano text-2xl mxlg:text-xl">{`${name?.replaceAll(
        '-',
        ' '
      )}`}</h1>
      <div className="flex justify-between items-center w-full ">
        <h3 className="font-bold text-xl">$90</h3>
        <ReviewStars review={4.5} />
      </div>
    </div>
  );
};
export default ProductCredentials;
