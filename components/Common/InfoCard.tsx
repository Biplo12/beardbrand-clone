import React from 'react';
const InfoCard: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-dark-vanilla text-charleston-green flex justify-center items-center flex-col py-[50px] px-[75px] min-h-[70vh] h-auto mxsm:px-[10px]">
      <div className="flex flex-col justify-start mxsm:justify-center mxsm:text-center">
        <h1 className="text-3xl font-pano mb-6 mxsm:text-[10vw]">
          KEEP ON GROWING
        </h1>
        <div className="flex flex-col gap-6">
          <p className="w-full">
            Some time ago, your life was very different than it is today. It was
            simpler, or perhaps it was more chaotic than it is now. One thing is
            definite—you didn`t have any knowledge of what your life would be
            like today
          </p>
          <p>
            You had ideas, aspirations, and goals. Maybe you`ve achieved all of
            your wildest dreams, or perhaps you were derailed somewhere along
            the way.
          </p>
          <p>
            None of that really matters. What matters is that you went forward
            day-in and day-out—a little shaky and uncertain at first, but
            gradually more and more confidently.
          </p>
          <p>
            Each morning, we all have the freedom to choose how we will show up.
          </p>
          <h4 className="font-bold">How will you show up?</h4>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
