import React from 'react';

const ImageSide: React.FC = (): JSX.Element => {
  return (
    <div className={`w-full flex justify-end items-center`}>
      <div>
        <img
          src={`./static/assets/hero.png`}
          alt="hero oil"
          className={`object-cover h-[100vh] mxlg:brightness-50`}
        />
      </div>
    </div>
  );
};
export default ImageSide;
