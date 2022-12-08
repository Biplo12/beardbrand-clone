import React from 'react';
import SliderComponent from './SliderComponent';
const SliderSide: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-start w-[50%] h-full sticky top-0 left-0 mxlg:w-full mxlg:static">
      <div className="h-full flex justify-start items-start flex-col w-full">
        <SliderComponent />
      </div>
    </div>
  );
};
export default SliderSide;
