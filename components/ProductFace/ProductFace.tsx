import React from 'react';
import ContentSide from './Partials/ContentSide';
import SliderSide from './SliderSide';
const ProductFace: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-[150vh] h-auto bg-white text-black justify-start items-start">
      <SliderSide />
      <ContentSide />
    </div>
  );
};
export default ProductFace;
