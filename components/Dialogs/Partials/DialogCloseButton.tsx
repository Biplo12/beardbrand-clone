import { closeDialog } from '@state/dialog/dialogSlice';
import { useAppDispatch } from '@store/store-hooks';
import React from 'react';
const DialogCloseButton: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="p-3 border border-charleston-green border-opacity-20 cursor-pointer"
      onClick={() => dispatch(closeDialog())}
    >
      <img
        src="/static/svgs/close-icon.svg"
        alt="close icon"
        className="ease duration-200 hover:scale-105"
      />
    </div>
  );
};
export default DialogCloseButton;
