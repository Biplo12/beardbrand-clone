import React from 'react';

interface IPasswordReset {
  setChangeToReset: any;
}

const PasswordReset: React.FC<IPasswordReset> = ({
  setChangeToReset,
}): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-charleston-green gap-5 mxlg:border-t-[1px] mxlg:border-charleston-green mxlg:border-opacity-10 mxlg:w-full">
      <div className="w-full flex flex-col gap-7 justify-center items-center">
        <div className="w-[90%] mx-auto flex justify-start items-center">
          <p>We will send you an email to reset your password.</p>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="w-[90%] mx-auto border-[1px] border-charleston-green bg-transparent border-opacity-[20%] p-3 outline-none ease duration-150 focus:border-opacity-100"
        />
      </div>
      <div className="w-[90%] mx-auto flex justify-start items-center gap-5 mxmd:flex-col">
        <button className="bg-charleston-green text-white h-full px-9 font-bold text-xsm py-4 w-full">
          <p className="ease duration-150 hover:scale-105 text-xsm">SUBMIT</p>
        </button>
        <button
          className="bg-white border-2 border-charleston-green text-charleston-green text-white h-full px-9 font-bold text-xsm py-4 w-full"
          onClick={() => setChangeToReset(false)}
        >
          <p className="ease duration-150 hover:scale-105 text-xsm">CANCEL</p>
        </button>
      </div>
    </div>
  );
};
export default PasswordReset;
