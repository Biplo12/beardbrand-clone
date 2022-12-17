import React from 'react';
import SplitSlider from './Partials/SplitSlider';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full bg-charleston-green mxlg:bg-transparent mxlg:justify-center">
      <div className="flex flex-col w-full right-0 h-full">
        <SplitSlider />
      </div>
    </div>
  );
};
export default Hero;
