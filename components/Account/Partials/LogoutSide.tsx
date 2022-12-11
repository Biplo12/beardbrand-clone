import React from 'react';
import LogoutButton from './LogoutButton';
const LogoutSide: React.FC = (): JSX.Element => {
  return (
    <div className="w-1/2 h-full flex justify-center items-center flex-col border-r border-charleston-green border-opacity-10 min-h-[100vh]">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold font-pano">MY ACCOUNT</h1>
        <LogoutButton />
      </div>
    </div>
  );
};
export default LogoutSide;
