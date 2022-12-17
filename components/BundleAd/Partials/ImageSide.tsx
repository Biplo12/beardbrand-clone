import React from 'react';
const ImageSide: React.FC = (): JSX.Element => {
  return (
    <div className="w-[50%] flex justify-center items-center text-center min-h-full mxlg:w-full relative">
      <h1 className="text-[2.5rem] w-full font-pano text-max-green-yellow absolute px-10 mxxsm:text-[5vw]">
        GROOMING IS SELF INVESTMENT
      </h1>
      <img
        src="./static/assets/bundleAd.png"
        alt="Bundle AD"
        className="mxlg:w-full h-full object-cover"
      />
    </div>
  );
};
export default ImageSide;
