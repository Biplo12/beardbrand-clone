import React from 'react';
const InfoCard: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-[60vh] bg-dark-vanilla text-charleston-green flex justify-center items-center flex-col px-[100px]">
      <div className="flex flex-col justify-start">
        <h1 className="text-xxxl font-pano">KEEP ON GROWING</h1>
        <p>
          Some time ago, your life was very different than it is today. It was
          simpler, or perhaps it was more chaotic than it is now. One thing is
          definite—you didn’t have any knowledge of what your life would be like
          today. You had ideas, aspirations, and goals. Maybe you’ve achieved
          all of your wildest dreams, or perhaps you were derailed somewhere
          along the way. None of that really matters. What matters is that you
          went forward day-in and day-out—a little shaky and uncertain at first,
          but gradually more and more confidently. Each morning, we all have the
          freedom to choose how we will show up.
        </p>
        <h4>How will you show up?</h4>
      </div>
    </div>
  );
};
export default InfoCard;
