import React from 'react';
import DropdownsSide from './Partials/DropdownsSide';
import TextSide from './Partials/TextSide';
const OrderInfo: React.FC = (): JSX.Element => {
  return (
    <div className="w-full min-h-[100vh] h-auto flex justify-center items-center bg-dark-vanilla text-charleston-green mxlg:flex-col mxlg:min-h-[65vh] mxlg:gap-10 ">
      <TextSide />
      <DropdownsSide />
    </div>
  );
};
export default OrderInfo;
