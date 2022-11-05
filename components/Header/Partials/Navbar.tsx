import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const Navbar: React.FC = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  useEffect(() => {
    const handleCloseMenu = () => {
      if (window.innerWidth > 640 && menu === true) {
        setMenu(false);
      }
    };

    window.addEventListener('resize', handleCloseMenu, true);
    return () => window.removeEventListener('resize', handleCloseMenu);
  }, [menu]);

  return (
    <>
      <div
        className={`w-full bg-alabaster py-[20px] px-[60px] h-auto top-0 left-0 flex justify-between items-center gap-3 ease duration-500 z-30 flex-wrap mxsm:justify-center`}
      >
        <img
          src="/static/assets/sm-logo.png"
          alt="logo"
          className="h-[56px] px-3"
        />
        <ul className="text-charleston-green flex gap-8 justify-center items-center">
          <li className="font-bold mxsm:hidden ease duration-200 link link-underline link-underline-black hover:text-black ">
            <Link href="shop">SHOP</Link>
          </li>
          <li className="font-bold mxsm:hidden ease duration-200 link link-underline link-underline-black hover:text-black ">
            <Link href="shop">LEARN</Link>
          </li>
          <li className="mxsm:hidden ease duration-200 link link-underline link-underline-black hover:text-black ">
            <Link href="shop">Login</Link>
          </li>
          <li>
            <img
              src="/static/svgs/search-icon.svg"
              alt="Search icon"
              className="min-h-[15px] h-[20px]"
            />
          </li>
          <li className="relative">
            <span className="text-xsm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-35%]">
              0
            </span>
            <img
              src="/static/svgs/cart-icon.svg"
              alt="Cart icon"
              className="min-h-[20px] h-[28px]"
            />
          </li>
          <li className="hidden mxsm:flex">
            <img
              src="/static/svgs/hamburger-icon.svg"
              alt="hamburger icon"
              className="min-h-[20px] h-[28px] cursor-pointer"
              onClick={handleMenu}
            />
          </li>
        </ul>
      </div>
      <div
        className={`fixed ease duration-500 w-[60%] h-[100vh] text-black font-bold top-0 bg-alabaster ${
          menu ? 'right-0 z-30' : 'right-[-1800px]'
        }`}
      >
        <div className="flex w-full h-[8vh] justify-between items-center px-[25px] border-b-[1px] border-[rgba(255,255,255,0.5)]">
          <h1>MENU</h1>
          <img
            src="/static/svgs/close-icon.svg"
            alt="close icon"
            className="min-h-[20px] h-[18px] cursor-pointer absolute top-[2vh] right-[25px]"
            onClick={handleMenu}
          />
        </div>
        <ul className="text-charleston-green flex gap-10 justify-center items-start flex-col px-[80px] pt-[60px]">
          <li className="font-bold ">
            <Link href="shop">SHOP</Link>
          </li>
          <li className="font-bold ">
            <Link href="shop">LEARN</Link>
          </li>
          <li>
            <Link href="shop">Login</Link>
          </li>
        </ul>
        <p className="absolute bottom-0 p-[40px] text-xsm font-light">
          © 2022 Beardbrand
        </p>
      </div>
    </>
  );
};
export default Navbar;
