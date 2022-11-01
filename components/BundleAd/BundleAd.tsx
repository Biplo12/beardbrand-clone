import React from 'react';
import ImageSide from './Partials/ImageSide';
import TextSide from './Partials/TextSide';
const BundleAd: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full mxlg:flex-col h-auto">
      <ImageSide />
      <TextSide />
    </div>
  );
};
export default BundleAd;
