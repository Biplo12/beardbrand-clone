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
      <img src="/static/svgs/close-icon.svg" alt="close icon" />
    </div>
  );
};
export default DialogCloseButton;
