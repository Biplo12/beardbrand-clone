import React from 'react';
import ContentSide from './ContentSide';
import SliderSide from './SliderSide';
const ProductFace: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-[150vh] h-auto bg-white text-black justify-start items-start mxlg:flex-col mxlg:justify-center mxlg:items-center">
      <SliderSide />
      <ContentSide />
    </div>
  );
};
export default ProductFace;
