import Link from 'next/link';
import React from 'react';
const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-alabaster py-[20px] px-[60px] h-[10vh] flex justify-between items-center gap-3 flex-wrap mxsm:justify-center mxsm:px-[10px] mxsm:flex-col">
      <img src="/static/assets/sm-logo.png" alt="logo" className="h-[56px]" />
      <ul className="text-charleston-green flex gap-10 justify-center items-center">
        <li className="font-bold">
          <Link href="shop">SHOP</Link>
        </li>
        <li className="font-bold">
          <Link href="shop">LEARN</Link>
        </li>
        <li className="">
          <Link href="shop">Login</Link>
        </li>
        <li>
          <img
            src="/static/svgs/search-icon.svg"
            alt="Search icon"
            className="min-h-[15px] h-[20px]"
          />
        </li>
        <li>
          <img
            src="/static/svgs/cart-icon.svg"
            alt="Cart icon"
            className="min-h-[20px] h-[28px]"
          />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
