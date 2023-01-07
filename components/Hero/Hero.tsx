import React from 'react';
import ResponsiveSlider from './Partials/ResponsiveSlider';
import SplitSlider from './Partials/SplitSlider';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full bg-charleston-green mxlg:bg-transparent mxlg:justify-center">
      <div className="flex flex-col w-full right-0 h-full mxsm:hidden">
        <SplitSlider />
      </div>
      {/* <div className="hidden flex-col w-full right-0 h-full mxsm:flex">
        <ResponsiveSlider />
  </div> */}
  
    </div>
  );
};
export default Hero;
