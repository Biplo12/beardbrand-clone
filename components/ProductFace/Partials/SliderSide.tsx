import React from 'react';
import SliderComponent from './SliderComponent';
const SliderSide: React.FC = (): JSX.Element => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <SliderComponent />
    </div>
  );
};
export default SliderSide;
