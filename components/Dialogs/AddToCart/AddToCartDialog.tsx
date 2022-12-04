import { Dialog, Transition } from '@headlessui/react';
import { closeDialog, selectDialog } from '@state/dialog/dialogSlice';
import { useAppDispatch, useAppSelector } from '@store/store-hooks';
import React from 'react';
import DialogCloseButton from '../Partials/DialogCloseButton';
const AddToCartDialog: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dialog = useAppSelector(selectDialog);
  const props = dialog?.currentDialogAdditionalData;
  return (
    <>
      <Transition appear show={dialog.isOpen} as="div">
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto w-full"
          onClose={() => dispatch(closeDialog())}
        >
          <div className="min-h-screen text-center flex justify-center items-center w-full">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className="fixed inset-0 bg-black-400 w-full h-full"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}
              />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex gap-5 flex-col w-full min-w-[750px] min-h-[50vh] h-auto p-[40px] overflow-hidden transition-all transform bg-white shadow-xl mxmd:min-w-[100px] mxmd:min-h-[25vh] mxmd:mt-[13vh] mxmd:overflow-scroll">
                <div className="flex justify-between items-center w-full ">
                  <div className="flex gap-5 justify-center items-start flex-col">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 font-pano mxmd:mr-10">
                      {props?.name}
                    </h3>
                    <h5 className="text-md font-medium leading-6 text-gray-900">
                      ${props?.price}
                    </h5>
                  </div>
                  <DialogCloseButton />
                </div>
                <div className="flex mxmd:flex-col justify-center items-center">
                  <div className="cursor-pointer w-[40%] mxmd:w-[90%] mxmd:mx-auto">
                    <img
                      src={props?.image}
                      alt="product"
                      className="h-[300px] mxmd:h-full"
                    />
                  </div>
                  <div className="flex items-start gap-5 flex-col w-[60%] mxmd:w-full">
                    <h5>Fragnace</h5>
                    <option className="p-3 border text-sm border-charleston-green border-opacity-100 cursor-pointer font-space-grotesk">
                      BOLD FORTUNE
                    </option>
                    <div className="flex gap-2">
                      <input type="checkbox" className="outline-none" />
                      <label>Order without a dispenser.</label>
                      <img src="/static/svgs/info-icon.svg" alt="info icon" />
                    </div>
                    <div className="flex gap-3 flex-col w-full mxmd:flex-row">
                      <button className="border-[2px] text-sm border-charleston-green py-3 px-10 min-w-auto">
                        <p className="hover:scale-105 ease duration-150 w-full">
                          ADD TO CART
                        </p>
                      </button>
                      <button className="border-[2px] text-sm border-charleston-green py-3 px-10 min-w-auto">
                        <p className="hover:scale-105 ease duration-150 w-full">
                          VISIT PRODUCT PAGE
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default AddToCartDialog;
