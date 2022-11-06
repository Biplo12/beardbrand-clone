import React, { useState } from 'react';

interface IProduct {
  image: string;
  imageHovered: string;
  name: string;
  price: number;
}

const Product: React.FC<IProduct> = ({
  image,
  imageHovered,
  name,
  price,
}): JSX.Element => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col gap-5 pb-3 overflow-hidden cursor-pointer link link-underline link-underline-black"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <img
        src={!hovered ? image : imageHovered}
        alt="product"
        className={`max-h-[360px] ease-in duration-[.3s] object-cover ${
          hovered ? 'scale-105 ' : ''
        }`}
      />
      <div>
        <h3 className={`font-bold ease duration-200`}>{name}</h3>
        <div className="flex justify-between items-center">
          <h4>${price}</h4>
          <img
            src="/static/svgs/cart-add-icon.svg"
            alt="cart add icon"
            className={`h-[24px] ease-in duration-[.2s]  ${
              hovered ? 'opacity-100' : 'opacity-0'
            } hover:scale-110`}
          />
        </div>
      </div>
    </div>
  );
};
export default Product;
