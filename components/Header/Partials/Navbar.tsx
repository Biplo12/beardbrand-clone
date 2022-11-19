import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { setMenuStatus } from 'state/user/userSlice';
import { useAppDispatch } from 'store/store-hooks';
import Search from '@components/Search/Search';
import MenuIcons from './MenuIcons';
import Cart from '@components/Cart/Cart';
const Navbar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    dispatch(setMenuStatus(!menu));
  };
  const handleSearch = () => {
    setSearch(!search);
    dispatch(setMenuStatus(!search));
  };
  const handleCart = () => {
    setCart(!cart);
    dispatch(setMenuStatus(!cart));
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
    if (menu || search || cart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <div
        className={`${
          menu || search || cart ? 'brightness' : ''
        } w-full bg-alabaster py-[20px] px-[60px] h-auto top-0 left-0 flex justify-between items-center gap-3 ease duration-200 z-30 flex-wrap mxsm:justify-center`}
      >
        <Link href="/">
          <img
            src="/static/assets/sm-logo.svg"
            alt="logo"
            className={`${
              menu || search || cart ? 'brightness-image' : ''
            } h-[56px] px-3`}
          />
        </Link>
        <ul className="text-charleston-green flex gap-8 justify-center items-center">
          <li className="font-bold mxsm:hidden ease duration-200 fancy-link hover:text-black">
            <Link href="/collections">SHOP</Link>
          </li>
          <li className="font-bold mxsm:hidden ease duration-200 fancy-link hover:text-black ">
            <Link href="shop">LEARN</Link>
          </li>
          <li className="mxsm:hidden ease duration-200 fancy-link hover:text-black ">
            <Link href="/account/login">Login</Link>
          </li>
          <li>
            <Search search={search} handleSearch={handleSearch} />
          </li>
          <li className="relative">
            <Cart cart={cart} handleCart={handleCart} />
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
    </>
  );
};
export default Navbar;
