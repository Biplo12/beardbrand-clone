import { selectDialog } from '@state/dialog/dialogSlice';
import { useAppSelector } from '@store/store-hooks';
import React from 'react';
import AddToCartDialog from './AddToCart/AddToCartDialog';

const DialogProvider: React.FC = (): JSX.Element => {
  const dialog = useAppSelector(selectDialog);

  const displayCurrentDialog = () => {
    switch (dialog.currentDialog) {
      case 'ADD_TO_CART':
        return <AddToCartDialog />;
      default:
        null;
    }
  };

  return <div>{displayCurrentDialog()}</div>;
};

export default DialogProvider;
