import React, { useState } from 'react';

interface IBUTTON {
  buttonColor: string;
  text: string;
}

const Button: React.FC<IBUTTON> = ({ buttonColor, text }): JSX.Element => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={`${
        buttonColor === 'white' ? 'text-black bg-white' : 'text-white bg-black'
      } px-8 py-4 font-bold flex gap-3 text-xsm ease duration-200 hover:pr-8 max-h-12`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {text}
      <img
        src={`${
          buttonColor === 'white'
            ? '/static/svgs/arrow-icon-black.svg'
            : '/static/svgs/arrow-icon-white.svg'
        }`}
        alt="arrow icon"
        className={`w-0 opacity-0 ease duration-200 h-[16px] ${
          hovered ? 'w-[28px] opacity-100' : ''
        }`}
      />
    </button>
  );
};
export default Button;