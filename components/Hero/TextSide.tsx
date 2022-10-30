import Button from '@common/Button';
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
    <div className="bg-charleston-green w-full min-h-[100vh] flex justify-center items-center flex-col">
      <div className="flex flex-col justify-center items-start gap-5 px-[50px] mxlg:px-[25px]">
        <h1 className="font-zurich text-xxxl w-full mxlg:text-xxl">{title}</h1>
        <p className="max-w-[75%] mxlg:max-w-[90%]">{content}</p>
        <Button buttonColor="white" text={buttonText} />
      </div>
    </div>
  );
};
export default TextSide;
