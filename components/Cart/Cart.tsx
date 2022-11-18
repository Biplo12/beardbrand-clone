import React, { useEffect, useRef } from 'react';
interface ISeatch {
  cart?: boolean;
  handleCart?: any;
}

const Cart: React.FC<ISeatch> = ({ cart, handleCart }): JSX.Element => {
  const wrapperRef = useRef<any>();

  return (
    <>
      <div ref={wrapperRef}>
        <button className="flex justify-center items-center" disabled={cart}>
          <span className="text-xsm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-35%]">
            0
          </span>
          <img
            src="/static/svgs/cart-icon.svg"
            alt="Cart icon"
            className="min-h-[20px] h-[28px] cursor-pointer"
            onClick={() => {
              handleCart();
            }}
          />
        </button>
        <div
          className={`fixed ease duration-500 w-[18%] h-[100vh] text-charleston-green top-0 bg-alabaster mxlg:w-[60%] ${
            cart ? 'right-0 z-30' : 'right-[-1800px]'
          }`}
        >
          <div className="flex w-full h-[8vh] justify-between items-center px-[25px] border-b-[1px] border-charleston-green border-opacity-5">
            <h1 className="font-bold">CART</h1>
            <img
              src="/static/svgs/close-icon.svg"
              alt="close icon"
              className="min-h-[16px] cursor-pointer"
              onClick={handleCart}
            />
          </div>
          <div className="w-full border-b-[1px] border-charleston-green border-opacity-5 py-8 flex flex-col gap-10 px-[25px]">
            <p>➤ You&apos;re $75 away from free USA shipping</p>
            <div className="w-full flex  justify-center items-center">
              <button className="bg-charleston-green text-white h-full px-5 font-bold text-xsm mxxsm:w-full py-4 w-[95%] mx-auto">
                <p className="ease duration-150 hover:scale-105">
                  START SHIPPING
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 p-[40px] gap-5">
            <p className="text-xsm">© 2022 Beardbrand</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
