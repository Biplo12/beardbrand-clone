import React from 'react';
import ImageSide from './Partials/ImageSide';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full bg-charleston-green mxlg:bg-transparent mxlg:justify-center relative">
      <div className={`flex flex-col w-full right-0 h-full mxlg:w-auto`}>
        <ImageSide />
      </div>
    </div>
  );
};
export default Hero;
