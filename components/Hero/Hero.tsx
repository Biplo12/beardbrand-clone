import React from 'react';
import ImageSide from './Partials/ImageSide';
import TextSide from './Partials/TextSide';
const Hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full bg-charleston-green mxlg:bg-transparent mxlg:justify-center">
      <div className="flex w-[50%] h-full mxlg:w-full mxlg:absolute top-0 ">
        <TextSide
          title="COMING BLACK FRIDAY"
          content="Fortune favors the bold, and in collaboration with Jeremy Siers, we bring you a brand new limited-edition Utility Oil. Don’t miss out on our smoothest Utility Oil fragrance ever."
          buttonText="LEARN MORE & SIGN UP"
        />
      </div>
      <div className={`flex flex-col w-[50%] right-0 h-full mxlg:w-auto`}>
        <ImageSide />
      </div>
    </div>
  );
};
export default Hero;
