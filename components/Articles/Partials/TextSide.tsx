import Button from '@components/Common/Button';
import React, { useEffect, useState } from 'react';

interface ITextSide {
  sticky: boolean;
}

const TextSide: React.FC<ITextSide> = ({ sticky }): JSX.Element => {
  return (
    <div
      className={`flex flex-col justify-center items-start w-[50%] h-[100vh] bg-white px-[75px] py-[40px] mxlg:w-full  ${
        sticky ? ' fixed left-0 top-0' : 'static'
      } mxlg:static`}
    >
      <h1 className="text-charleston-green font-bold font-pano text-xxxl">
        THE GREATEST GROOMING BLOG ON EARTH
      </h1>
      <Button buttonColor="black" text="READ NOW" />
    </div>
  );
};
export default TextSide;
