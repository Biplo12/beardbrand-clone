import React from 'react';
import AccountDetailsSide from './Partials/AccountDetailsSide';
import LogoutSide from './Partials/LogoutSide';
const AccountPage: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-auto min-h-[100vh] flex justify-center items-center bg-whitest-white text-charleston-green">
      <LogoutSide />
      <AccountDetailsSide />
    </div>
  );
};
export default AccountPage;
