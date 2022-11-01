import Button from '@components/Common/Button';
import React from 'react';

interface ITextSide {
  title: string;
  content: string;
  buttonText: string;
}

const TextSide: React.FC<ITextSide> = ({
  title,
  content,
  buttonText,
}): JSX.Element => {
  return (
    <div className="w-full min-h-[100vh] justify-center items-center flex flex-col mxlg:z-20">
      <div className="flex flex-col justify-start items-start mxlg:justify-center mxlg:items-center gap-5 px-[50px] mxlg:px-[25px]">
        <h1 className="font-pano text-xxxl w-full mxlg:text-xxl mxlg:text-center">
          {title}
        </h1>
        <p className="max-w-[75%] mxlg:max-w-[100%] mxlg:text-center">
          {content}
        </p>
        <Button buttonColor="white" text={buttonText} />
      </div>
    </div>
  );
};
export default TextSide;