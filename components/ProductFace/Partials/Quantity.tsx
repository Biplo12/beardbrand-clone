import React, { useState } from 'react';
const Quantity: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="border border-charleston-green border-opacity-20 cursor-pointer flex justify-center items-center"
        onClick={() =>
          quantity === 1 ? null : setQuantity((prev) => prev - 1)
        }
      >
        <img
          src="/static/svgs/minus-black-icon.svg"
          alt="minus icon"
          className="mx-5 my-3"
        />
      </div>
      <div className="border border-charleston-green border-opacity-20 min-w-[90%] mx-auto text-center py-3">
        <p>{quantity < 1 ? 1 : quantity}</p>
      </div>
      <div
        className="border border-charleston-green border-opacity-20 cursor-pointer flex justify-center items-center"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <img
          src="/static/svgs/plus-black-icon.svg"
          alt="plus icon"
          className="mx-5 my-3"
        />
      </div>
    </div>
  );
};
export default Quantity;
