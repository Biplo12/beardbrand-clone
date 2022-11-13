import Link from 'next/link';
import ReactDOM from 'react-dom';

import React, { useEffect, useState } from 'react';
import { setMenuStatus } from 'state/user/userSlice';
import { useAppDispatch } from 'store/store-hooks';
import Search from '@components/Search/Search';
import MenuIcons from './MenuIcons';
const Navbar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    dispatch(setMenuStatus(!menu));
  };
  const handleSearch = () => {
    setSearch(!search);
    dispatch(setMenuStatus(!search));
  };
  useEffect(() => {
    const handleCloseMenu = () => {
      if (window.innerWidth > 640 && menu === true) {
        dispatch(setMenuStatus(false));
        setMenu(false);
      }
    };

    window.addEventListener('resize', handleCloseMenu, true);
    return () => window.removeEventListener('resize', handleCloseMenu);
  }, [menu]);

  if (typeof window !== 'undefined') {
    if (menu || search) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div
        className={`${
          menu || search ? 'brightness-[25%]' : ''
        } w-full bg-alabaster py-[20px] px-[60px] h-auto top-0 left-0 flex justify-between items-center gap-3 ease duration-500 z-30 flex-wrap mxsm:justify-center`}
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
            <button onClick={handleSearch}>
              <img
                src="/static/svgs/search-icon.svg"
                alt="Search icon"
                className="min-h-[15px] h-[20px]"
              />
            </button>
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
            <button>
              <img
                src="/static/svgs/hamburger-icon.svg"
                alt="hamburger icon"
                className="min-h-[20px] h-[28px] cursor-pointer"
                onClick={handleMenu}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full bg-black z-30 h-full">
        <div
          className={`fixed ease duration-500 w-[60%] h-[100vh] text-black top-0 bg-alabaster ${
            menu ? 'right-0 z-30' : 'right-[-1800px]'
          }`}
        >
          <div className="flex w-full h-[8vh] justify-between items-center px-[25px] border-b-[1px] border-charleston-green border-opacity-5">
            <h1 className="font-bold">MENU</h1>
            <img
              src="/static/svgs/close-icon.svg"
              alt="close icon"
              className="min-h-[16px] cursor-pointer"
              onClick={handleMenu}
            />
          </div>
          <ul className="text-charleston-green flex gap-10 justify-center items-start flex-col px-[60px] pt-[50px]">
            <div className="flex flex-col gap-3">
              <li className="font-bold">
                <Link href="shop">SHOP</Link>
              </li>
              <li className="font-bold ">
                <Link href="shop">LEARN</Link>
              </li>
            </div>
            <li>
              <Link href="shop">Login</Link>
            </li>
          </ul>
          <div className="flex flex-col absolute bottom-0 p-[40px] gap-5">
            <MenuIcons />
            <p className="text-xsm">© 2022 Beardbrand</p>
          </div>
        </div>
      </div>
      <div
        className={`ease duration-500 ${
          search ? 'right-0 z-30' : 'right-[-1800px]'
        }`}
      >
        <Search search={search} handleSearch={handleSearch} />
      </div>
    </>
  );
};
export default Navbar;
