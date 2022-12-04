import React from 'react';
import ButtonArrow from '@common/ButtonArrow';
import { useInView } from 'react-intersection-observer';

const TextSide: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <div
      className={`flex flex-col justify-start items-start w-[50%] min-h-full bg-white px-[65px] relative py-[40px] mxlg:w-full mxlg:justify-center mxlg:items-center mxlg:pb-[75px]`}
    >
      <div
        className={`my-[20%] mxlg:flex mxlg:flex-col mxlg:justify-center mxlg:items-center mxlg:mt-0 mxlg:py-[40px] ${
          inView ? `sticky top-[350px] left-0` : 'sticky top-[350px] left-0'
        }`}
      >
        <h1
          className={`text-charleston-green font-bold font-pano text-3xl mxlg:text-2xl mxlg:text-center mb-6`}
          ref={ref}
        >
          THE GREATEST GROOMING BLOG ON EARTH
        </h1>
        <ButtonArrow buttonColor="black" text="READ NOW" />
      </div>
    </div>
  );
};
export default TextSide;
