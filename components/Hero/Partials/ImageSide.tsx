import React from 'react';

const ImageSide: React.FC = (): JSX.Element => {
  return (
    <div className={`w-full`}>
      <img
        src={`./static/assets/hero.png`}
        alt="hero oil"
        className={`object-cover w-full h-[100vh] mxlg:brightness-50`}
      />
    </div>
  );
};
export default ImageSide;
