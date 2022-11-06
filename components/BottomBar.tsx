import React from 'react';
const BottomBar: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-[20vh] w-full bg-black text-alabaster px-10 py-10">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex flex-col gap-3">
          <p>COUNTRY/REGION</p>
          <select className="bg-transparent border-[1px] border-alabaster border-opacity-[30%] px-5 py-3 outline-none text-sm ">
            <option value="">
              <p>Poland (USD $)</p>
            </option>
          </select>
        </div>
        <p>© 2022 Beardbrand 1000 E 51st St, Austin TX 78751</p>
      </div>
    </div>
  );
};
export default BottomBar;
