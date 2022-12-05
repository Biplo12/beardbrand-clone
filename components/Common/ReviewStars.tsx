import React from 'react';

interface IReviewStars {
  review: number;
}

const ReviewStars: React.FC<IReviewStars> = ({ review }): JSX.Element => {
  return (
    <div className="flex gap-1 bg-max-green-yellow py-2 px-3 border-[1px] border-charleston-green border-opacity-10 ">
      <p className="text-xsm">{review.toString()}</p>
      <p className="text-xsm">/</p>
      <p className="text-xsm">5</p>
      <img src="/static/svgs/star-icon.svg" alt="star icon" />
    </div>
  );
};
export default ReviewStars;
