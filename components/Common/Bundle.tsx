import React from 'react';
const Bundle: React.FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-[60vh] h-auto flex justify-around items-center bg-charleston-green px-[75px] py-10 gap-5 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="/static/svgs/box-icon.svg"
          alt="box icon"
          className="h-[64px]"
        />
        <h1 className="font-pano text-md text-center">BUILD YOUR BUNDLE</h1>
        <ul className="text-center">
          <li>Bundle 3 + Get 1 more free</li>
          <li>Bundle 5 + Get 2 more free</li>
          <li>Bundle 7 + Get 3 more free</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="/static/svgs/sign-icon.svg"
          alt="sign icon"
          className="h-[64px]"
        />
        <h1 className="font-pano text-md text-center">SWAPS ARE ALWAYS FREE</h1>
        <p className="max-w-[500px] text-center">
          If a product or fragrance doesn’t work for you, we’ll get you one that
          does.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src="/static/svgs/heart-icon.svg"
          alt="sign icon"
          className="h-[64px]"
        />
        <h1 className="font-pano text-md text-center">FORMULATED WITH LOVE</h1>
        <p className="max-w-[500px] text-center">
          Non-endocrine disrupting products that work with your body’s natural
          chemistry.
        </p>
      </div>
    </div>
  );
};
export default Bundle;
