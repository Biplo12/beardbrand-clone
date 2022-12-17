import React from 'react';
const BundleAdCollections: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-plateu flex justify-center items-center px-[25px] h-auto mxlg:w-full text-charleston-green min-h-[80vh] mxlg:flex-col mxlg:px-0">
      <div className="flex justify-center items-center w-full min-h-[80vh] border-r-[1px] border-charleston-green border-opacity-10 mxlg:min-h-[30vh] mxlg:border-b-[1px] mxlg:border-r-[0px]">
        <h1 className="font-pano text-2xl text-center mb-6 mxlg:px-[25px] max-w-[500px] mxsm:text-[5vw]">
          BUILD A CUSTOM KIT
        </h1>
      </div>
      <div className="flex flex-col w-full justify-center">
        <div className="pl-[75px] mxlg:py-[50px] mxlg:px-[25px] flex gap-6 flex-col">
          <p>
            There’s no one-size-fits-all grooming routine—that’s why we let you
            build your own bundle of Beardbrand products.
          </p>
          <p>
            As you add products to your cart, we’ll automatically apply special
            bundle pricing. The more you bundle, the more you save.
          </p>
          <p>Here’s how it works:</p>
          <ul className="pl-[10px]">
            <li>• Bundle 3 products + get 1 more free*</li>
            <li>• Bundle 5 products + get 2 more free*</li>
            <li>• Bundle 7 products + get 3 more free*</li>
          </ul>
          <p>
            <i>
              *The free item(s) will always be the lowest-priced items in your
              cart.
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BundleAdCollections;
