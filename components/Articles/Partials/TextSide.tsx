import Button from '@components/Common/Button';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const TextSide: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <div
      className={`flex flex-col justify-start items-start w-[50%] min-h-full bg-white px-[75px] py-[40px] mxlg:w-full mxlg:static`}
    >
      <div className={`mt-[30%] ${inView ? 'sticky top-[40%] left-0' : ''}`}>
        <h1
          className={`text-charleston-green font-bold font-pano text-xxxl`}
          ref={ref}
        >
          THE GREATEST GROOMING BLOG ON EARTH
        </h1>
        <Button buttonColor="black" text="READ NOW" />
      </div>
    </div>
  );
};
export default TextSide;
