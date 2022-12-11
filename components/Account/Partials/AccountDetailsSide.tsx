import ButtonArrow from '@components/Common/ButtonArrow';
import React from 'react';
import ViewAddressesButton from './ViewAddressesButton';
const AccountDetailsSide: React.FC = (): JSX.Element => {
  return (
    <div className="w-1/2 h-full flex justify-center items-start flex-col pl-[100px] text-charleston-green">
      <div className="flex justify-center items-start flex-col gap-5">
        <h1 className="font-bold font-pano">ACCOUNT DETAILS</h1>
        <ButtonArrow buttonColor="black" text="MANAGE SUBSCRIPTIONS" />
        <div>
          <p className="font-bold">DEFAULT ADDRESS:</p>
          <p>First name Last name</p>
          <p>Réunion</p>
        </div>
        <ViewAddressesButton />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold font-pano">ORDERS HISTORY</h1>
          {/* IF ORDERS === 0 ? */}
          <p>You haven`t placed any orders yet.</p>
          {/* : ... */}
        </div>
      </div>
    </div>
  );
};
export default AccountDetailsSide;
