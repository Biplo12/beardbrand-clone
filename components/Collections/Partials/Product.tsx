import React, { useState } from 'react';

interface IProduct {
  image: string;
  imageHovered: string;
  name: string;
  price: number;
  review: number;
}

const Product: React.FC<IProduct> = ({
  image,
  imageHovered,
  name,
  price,
  review,
}): JSX.Element => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex justify-center items-center flex-col gap-5 pb-3 overflow-hidden cursor-pointer outline outline-[1px] mb-[1px] outline-[rgba(43,46,48,0.05)] mxsm:w-[90%] mxsm:mxauto relative"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div
        className={`${
          hovered ? 'opacity-100' : 'opacity-0'
        } flex justify-start items-center ease duration-150 z-30`}
      >
        <div className="flex gap-1 bg-max-green-yellow py-2 px-3 border-[1px] border-charleston-green border-opacity-10 absolute top-5 left-5">
          <p className="text-xsm">{review}</p>
          <p className="text-xsm">/</p>
          <p className="text-xsm">5</p>
          <img src="/static/svgs/star-icon.svg" alt="star icon" />
        </div>
      </div>
      <div className="relative">
        <img
          src={!hovered ? image : imageHovered}
          alt="product"
          className={`max-h-[360px] ease-in duration-[.3s] object-cover ${
            hovered ? 'scale-105 ' : ''
          }`}
        />
      </div>
      <div className="w-full px-10 flex justify-between items-center mxsm:px-5 gap-3">
        <div className="flex justify-center items-start flex-col">
          <a
            className={`${
              hovered ? 'fancy-link-hovered' : ''
            } fancy-link font-bold ease duration-150`}
          >
            {name}
          </a>
          <h4>${price}</h4>
        </div>
        <img
          src="/static/svgs/cart-add-icon.svg"
          alt="cart add icon"
          className={`h-[24px] ease-in duration-[.2s]  ${
            hovered ? 'opacity-100' : 'opacity-0'
          } hover:scale-110 mxlg:opacity-100`}
        />
      </div>
    </div>
  );
};
export default Product;