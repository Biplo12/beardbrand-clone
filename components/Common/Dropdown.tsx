import React from 'react';

interface IDropdown {
  dropdown: boolean;
  setDropdown: (value: boolean) => void;
  index: number;
  setIndex: (value: number) => void;
  label: string;
  content: JSX.Element;
  indexOnclick: number;
}

const Dropdown: React.FC<IDropdown> = ({
  dropdown,
  setDropdown,
  index,
  setIndex,
  label,
  content,
  indexOnclick,
}): JSX.Element => {
  return (
    <li
      className={`${
        dropdown && index === indexOnclick ? '' : 'h-[40px]'
      } flex justify-center gap-3 items-start flex-col pb-3 border-b-[1px] border-charleston-green border-opacity-10 mxlg:m-0`}
    >
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => {
          dropdown && index === indexOnclick
            ? setDropdown(false)
            : setDropdown(true);
          setIndex(indexOnclick);
        }}
      >
        <h3 className="font-bold cursor-pointer">{label}</h3>
        <img
          src={`${
            dropdown && index === indexOnclick
              ? '/static/svgs/minus-icon.svg'
              : '/static/svgs/plus-icon.svg'
          }`}
          alt="extend icon"
        />
      </div>
      <div
        className={`${
          dropdown && index === indexOnclick
            ? 'opacity-100 overflow-y-auto py-3'
            : 'opacity-0 overflow-hidden'
        } flex flex-col gap-5`}
      >
        {content}
      </div>
    </li>
  );
};
export default Dropdown;
