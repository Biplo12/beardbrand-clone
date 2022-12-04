export type TDialog = 'ADD_TO_CART' | 'NONE';

export default interface IDialogInterfaceReducer {
  status: 'idle' | 'loading' | 'failed';
  dialog: {
    isOpen: boolean;
    currentDialog: TDialog;
    currentDialogAdditionalData: any;
  };
}
