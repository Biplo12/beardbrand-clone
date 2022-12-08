import React, { useState } from 'react';
const Quantity: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="border border-charleston-green h-[45px] w-[5%] min-w-[45px] border-opacity-10 flex justify-center items-center">
        <button
          onClick={() => setQuantity((prev) => prev - 1)}
          disabled={quantity === 1}
          className="ease duration-150 disabled:opacity-50"
        >
          <img
            src="/static/svgs/minus-black-icon.svg"
            alt="minus icon"
            className="h-[16px] w-[16px]"
          />
        </button>
      </div>
      <div className="border-t border-b border-charleston-green h-[45px] border-opacity-10 min-w-[90%] mx-auto text-center flex justify-center items-center">
        <p>{quantity < 1 ? 1 : quantity}</p>
      </div>
      <div className="border border-charleston-green h-[45px] w-[5%] min-w-[45px] border-opacity-20 flex justify-center items-center">
        <button onClick={() => setQuantity((prev) => prev + 1)}>
          <img
            src="/static/svgs/plus-black-icon.svg"
            alt="plus icon"
            className="h-[16px] w-[16px]"
          />
        </button>
      </div>
    </div>
  );
};
export default Quantity;
