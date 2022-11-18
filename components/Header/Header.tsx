import React, { useEffect, useState } from 'react';
import Navbar from './Partials/Navbar';
import TopBar from './Partials/TopBar';
import useScrollDirection from '@hooks/useScrollDirection';
const Header: React.FC = (): JSX.Element => {
  const [navbar, setNavbar] = useState(true);
  const scrollDirection = useScrollDirection();
  useEffect(() => {
    const handleHideNavbar = () => {
      if (window.scrollY >= 200) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleHideNavbar, true);
    return () => window.removeEventListener('scroll', handleHideNavbar);
  }, []);
  return (
    <div
      className={`w-full z-50 ease duration-[.4s] fixed border-b-[1px] border-charleston-green border-opacity-10 ${
        scrollDirection === 'down' && navbar ? '-top-36' : 'top-0'
      }`}
    >
      <TopBar />
      <Navbar />
    </div>
  );
};
export default Header;
