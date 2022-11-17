import { selectUser } from '@state/user/userSlice';
import { useAppSelector } from '@store/store-hooks';
import React from 'react';
const TopBar: React.FC = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  return (
    <div
      className={`${
        user.menu ? 'brightness-[25%]' : ''
      } bg-charleston-green w-full flex justify-center items-center gap-1 p-2 text-xsm text-white h-[4vh]`}
    >
      <span className="text-max-green-yellow cursor-pointer">
        Bundle 3 products + get 1 mote free
      </span>
      <span>|</span>
      <p className="fancy-link white cursor-pointer">Learn more</p>
    </div>
  );
};
export default TopBar;
