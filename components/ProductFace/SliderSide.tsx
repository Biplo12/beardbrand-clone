import React from 'react';
import { useInView } from 'react-intersection-observer';
import SliderComponent from './SliderComponent';
const SliderSide: React.FC = (): JSX.Element => {
  const { inView } = useInView({
    threshold: 1,
  });
  return (
    <div
      className={`mb-[100px] flex flex-col justify-start items-start w-[50%] min-h-full relative`}
    >
      <div
        className={`w-full ${
          inView ? `sticky top-[350px] left-0` : 'sticky top-[350px] left-0'
        }`}
      >
        <div className="h-full flex justify-start items-start flex-col gap-10 w-[90%] mx-auto">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
};
export default SliderSide;
