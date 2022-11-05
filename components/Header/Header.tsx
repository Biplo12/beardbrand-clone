import React from 'react';
import Navbar from './Partials/Navbar';
import TopBar from './Partials/TopBar';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className="w-full z-50">
      <TopBar />
      <Navbar />
    </div>
  );
};
export default Header;
