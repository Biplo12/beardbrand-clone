import React from 'react';

interface IBUTTON {
  buttonColor: string;
  text: string;
}

const Button: React.FC<IBUTTON> = ({ buttonColor, text }): JSX.Element => {
  return (
    <button
      className={`${
        buttonColor === 'white' ? 'text-black bg-white' : 'text-white bg-black'
      } px-8 py-4 font-bold text-xsm`}
    >
      {text}
    </button>
  );
};
export default Button;
