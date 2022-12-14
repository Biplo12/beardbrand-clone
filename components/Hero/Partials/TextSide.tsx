import ButtonArrow from '@components/Common/ButtonArrow';
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
    <div className="w-full min-h-[100vh] justify-start items-center flex">
      <div className="flex flex-col justify-start items-start mxlg:justify-center mxlg:items-center gap-5 pl-[200px] px-[50px] mxlg:px-[25px]">
        <h1 className="font-pano text-4xl w-full mxlg:text-2xl mxlg:text-center">
          {title}
        </h1>
        <p className="max-w-[75%] mxlg:max-w-[100%] mxlg:text-center">
          {content}
        </p>
        <ButtonArrow buttonColor="white" text={buttonText} />
      </div>
    </div>
  );
};
export default TextSide;
