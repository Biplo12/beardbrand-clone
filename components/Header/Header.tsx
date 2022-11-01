import React from 'react';
import Navbar from './Partials/Navbar';
import TopBar from './Partials/TopBar';
const Header: React.FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <TopBar />
      <Navbar />
    </div>
  );
};
export default Header;
