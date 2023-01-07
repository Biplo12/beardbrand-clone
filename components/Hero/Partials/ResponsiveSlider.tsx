import React from 'react';
import SliderNavigation from './SliderNavigation';
const ResponsiveSlider: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center flex-col">
      <div className="w-full h-full flex justify-center items-center">
        <p>ResponsiveSlider</p>
      </div>
      <div className="relative w-full">
        <SliderNavigation />
      </div>
    </div>
  );
};
export default ResponsiveSlider;
