import React from 'react';
const TopBar: React.FC = (): JSX.Element => {
  return (
    <div className="bg-charleston-green w-full flex justify-center items-center gap-1 p-2 text-xsm text-white h-[4vh]">
      <span className="text-max-green-yellow">
        Bundle 3 products + get 1 mote free
      </span>
      <span>|</span>
      <p>Learn more</p>
    </div>
  );
};
export default TopBar;
