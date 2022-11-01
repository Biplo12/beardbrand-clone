import React from 'react';
const ImageSide: React.FC = (): JSX.Element => {
  return (
    <div className="w-[50%] flex justify-center items-center text-center min-h-full mxlg:w-full relative">
      <h1 className="text-xxl w-full font-pano text-max-green-yellow absolute px-10 mxlg:text-xl mxsm:text-xl mxxsm:text-sm">
        GROOMING IS SELF INVESTMENT
      </h1>
      <img
        src="./static/assets/BundleAd.png"
        alt="Bundle AD"
        className="mxlg:w-full h-full object-cover"
      />
    </div>
  );
};
export default ImageSide;
