import React from 'react';
const AddToCartButton: React.FC = (): JSX.Element => {
  return (
    <>
      <button className="border-[2px] text-sm border-charleston-green py-3 px-10 min-w-auto bg-gradient-to-bl from-[#DDFD4F]  to-[#62e13e]">
        <p className="hover:scale-105 ease duration-150 w-full">ADD TO CART</p>
      </button>
    </>
  );
};
export default AddToCartButton;
