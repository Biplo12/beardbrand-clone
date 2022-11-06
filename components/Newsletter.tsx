import React from 'react';
const Newsletter: React.FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-[40vh] flex bg-alabaster text-charleston-green flex-col gap-5 justify-center items-center text-center p-5 mxsm:h-auto">
      <h1 className="font-bold font-pano text-2xl">GROW YOUR MIND</h1>
      <p className="max-w-[700px]">
        Join the best newsletter that you never knew you needed. You&apos;ll get
        3 emails per week containing grooming tips, new blog posts, product
        launches, giveaways, and motivation to help you Keep on Growing.
      </p>
      <div className="flex w-full justify-center items-center mxxsm:flex-col mxxsm:gap-5">
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full max-w-[800px] border-[1px] border-charleston-green bg-transparent border-opacity-[20%] p-3 outline-none ease duration-150 focus:border-opacity-100"
        />
        <button className="bg-charleston-green text-white h-full px-5 font-bold text-xsm mxxsm:w-full py-4">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
export default Newsletter;
