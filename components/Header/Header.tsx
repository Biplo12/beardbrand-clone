import React from 'react';
import Navbar from './Navbar';
import TopBar from './TopBar';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <TopBar />
      <Navbar />
    </div>
  );
};
export default Header;
