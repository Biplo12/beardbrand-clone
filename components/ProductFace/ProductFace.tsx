import React from 'react';
import ContentSide from './Partials/ContentSide';
import SliderSide from './Partials/SliderSide';
const ProductFace: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full h-full mxlg:flex-col bg-white text-black">
      <SliderSide />
      <ContentSide />
    </div>
  );
};
export default ProductFace;
