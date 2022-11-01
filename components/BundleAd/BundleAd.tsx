import React from 'react';
import ImageSide from './ImageSide';
import TextSide from './TextSide';
const BundleAd: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full h-[86vh] mxlg:flex-col">
      <ImageSide />
      <TextSide />
    </div>
  );
};
export default BundleAd;
