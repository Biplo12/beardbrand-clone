import React from 'react';
import TextSide from './TextSide';

const Split: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="relative w-full">
        <div className="flex items-center justify-start w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat hero-img-1 brightness-50" />
        <div className="flex h-full absolute top-0 left-0">
          <TextSide
            title="DECEMBEARD IS HERE"
            content="It's the most wonderful time for a beard because we're throwing $50-$250 gift codes down your chimney and straight into your inbox all month long!"
            buttonText="LEARN MORE"
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center justify-start w-full h-screen bg-fixed bg-center bg-cover bg-no-repeat hero-img-2 brightness-50" />
        <div className="flex h-full absolute top-0 left-0">
          <TextSide
            title="FORTUNE FAVORS THE BOLD"
            content="Bold Fortune Utility Oil — a Beardbrand X Jeremy Siers collaboration — is available now."
            buttonText="SHOP BOLD FORTUNE"
          />
        </div>
      </div>
    </>
  );
};
export default Split;
