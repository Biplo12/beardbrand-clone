import React from 'react';
import ButtonArrow from '@common/ButtonArrow';
const TextSide: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-start w-[50%] min-h-full bg-white px-[65px] relative py-[40px] mxlg:w-full mxlg:justify-center mxlg:items-center mxlg:px-[10px]">
      <div className="my-[20%] mxlg:flex mxlg:flex-col mxlg:justify-center mxlg:items-center mxlg:mt-0 mxlg:py-[40px] sticky top-[350px] left-0 mxlg:my-0">
        <h1 className="text-charleston-green font-bold font-pano text-3xl mxlg:text-center mb-6 mxsm:text-[7vw]">
          THE GREATEST GROOMING BLOG ON EARTH
        </h1>
        <ButtonArrow buttonColor="black" text="READ NOW" />
      </div>
    </div>
  );
};
export default TextSide;
