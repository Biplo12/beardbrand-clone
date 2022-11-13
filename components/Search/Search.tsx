import React from 'react';

interface ISeatch {
  search?: boolean;
  handleSearch?: any;
}

const Search: React.FC<ISeatch> = ({ search, handleSearch }): JSX.Element => {
  return (
    <div
      className={`fixed ease duration-500 w-[25%] h-[100vh] text-black top-0 bg-alabaster mxlg:w-[60%] ${
        search ? 'right-0 z-30' : 'right-[-1800px]'
      }`}
    >
      <div className="flex w-full h-[8vh] justify-between items-center px-[25px] border-b-[1px] border-charleston-green border-opacity-5">
        <h1 className="font-bold">MENU</h1>
        <img
          src="/static/svgs/close-icon.svg"
          alt="close icon"
          className="min-h-[16px] cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-col absolute bottom-0 p-[40px] gap-5">
        <p className="text-xsm">© 2022 Beardbrand</p>
      </div>
    </div>
  );
};
export default Search;
