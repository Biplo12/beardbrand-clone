import React from 'react';

interface ISliderNavigation {
  currentSlide: number;
  maxSlides: number;
}

const SliderNavigation: React.FC<ISliderNavigation> = ({
  currentSlide,
  maxSlides,
}): JSX.Element => {
  return (
    <div className="absolute p-3 bottom-0 left-0 w-full bg-white text-charleston-green flex justify-between items-center">
      <div className="flex gap-2">
        <p>{currentSlide || 1}</p>
        <p>/</p>
        <p>{maxSlides || 1}</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/static/svgs/arrow-left-icon-black.svg"
          alt="left arrow icon"
          className="h-[16px]"
        />
        <img
          src="/static/svgs/arrow-right-icon-black.svg"
          alt="left arrow icon"
          className="h-[16px]"
        />
      </div>
    </div>
  );
};
export default SliderNavigation;
