import Link from 'next/link';
import React, { useState } from 'react';
import PasswordReset from './PasswordReset';
const FormSide: React.FC = (): JSX.Element => {
  const [changeToReset, setChangeToReset] = useState<boolean>(false);
  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center text-charleston-green gap-5 mxlg:border-t-[1px] mxlg:border-charleston-green mxlg:border-opacity-10 mxlg:w-full">
      {!changeToReset ? (
        <>
          <div className="w-full flex flex-col gap-7 justify-center items-center">
            <input
              type="text"
              placeholder="Email"
              className="w-[90%] mx-auto border-[1px] border-charleston-green bg-transparent border-opacity-[20%] p-3 outline-none ease duration-150 focus:border-opacity-100"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[90%] mx-auto border-[1px] border-charleston-green bg-transparent border-opacity-[20%] p-3 outline-none ease duration-150 focus:border-opacity-100"
            />
          </div>
          <div className="w-[90%] mx-auto flex justify-start items-center gap-5 mxmd:flex-col">
            <button className="bg-charleston-green text-white h-full px-9 font-bold text-xsm py-4 mxmd:w-full">
              <p className="ease duration-150 hover:scale-105 text-xsm">
                SIGN IN
              </p>
            </button>
            <div className="flex flex-col justify-center items-center flex-wrap text-center">
              <a
                onClick={() => setChangeToReset(true)}
                className="fancy-link cursor-pointer"
              >
                Forgot your password?
              </a>
              <div className="flex gap-1 flex-wrap justify-center items-center">
                <p className="opacity-70">New Customer?</p>
                <Link href="/account/register" className="fancy-link">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PasswordReset setChangeToReset={setChangeToReset} />
      )}
    </div>
  );
};
export default FormSide;
