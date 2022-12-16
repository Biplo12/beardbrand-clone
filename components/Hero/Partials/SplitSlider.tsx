import React from 'react';
import TextSide from './TextSide';

const Split: React.FC = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="flex items-center justify-start w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat hero-img-1 brightness-50" />
          <div className="flex h-full absolute top-0 left-0">
            <TextSide
              title="COMING BLACK FRIDAY"
              content="Fortune favors the bold, and in collaboration with Jeremy Siers, we bring you a brand new limited-edition Utility Oil. Don`t miss out on our smoothest Utility Oil fragrance ever."
              buttonText="LEARN MORE & SIGN UP"
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center justify-start w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat hero-img-2 brightness-50" />
          <div className="flex h-full absolute top-0 left-0">
            <TextSide
              title="COMING BLACK FRIDAY"
              content="Fortune favors the bold, and in collaboration with Jeremy Siers, we bring you a brand new limited-edition Utility Oil. Don`t miss out on our smoothest Utility Oil fragrance ever."
              buttonText="LEARN MORE & SIGN UP"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Split;
