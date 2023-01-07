import React from 'react';

interface IAddToCartButton {
  addToCartHandler: () => void;
}

const AddToCartButton: React.FC<IAddToCartButton> = ({
  addToCartHandler,
}): JSX.Element => {
  return (
    <>
      <button
        className="border-[2px] text-sm border-charleston-green w-full py-3 px-10 min-w-auto bg-gradient-to-bl from-[#DDFD4F] to-[#62e13e]"
        onClick={() => addToCartHandler()}
      >
        <p className="hover:scale-105 ease duration-150 w-full">ADD TO CART</p>
      </button>
    </>
  );
};
export default AddToCartButton;
