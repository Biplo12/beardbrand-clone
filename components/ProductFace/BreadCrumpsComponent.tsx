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
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumpsComponent;
