import { Breadcrumbs, Link } from '@mui/material';
import React from 'react';
const BreadCrumpsComponent: React.FC = (): JSX.Element => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div
      role="presentation"
      onClick={handleClick}
      className="w-full h-[50px] flex justify-start items-center bg-white px-[50px] border-b border-charleston-green border-opacity-10"
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="none" color="#2B2E30" fontStyle="Pano" href="/">
          Home
        </Link>
        <Link
          underline="none"
          color="#2B2E30"
          href="/material-ui/getting-started/installation/"
        >
          Collections
        </Link>
        <Link
          underline="none"
          color="black"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Sea Salt Spray
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumpsComponent;
