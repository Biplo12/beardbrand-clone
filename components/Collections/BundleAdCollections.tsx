import React from 'react';
const BundleAdCollections: React.FC = (): JSX.Element => {
  return (
    <div className="w-full bg-plateu flex justify-center flex-col py-[175px] px-[275px] h-auto mxlg:w-full mxlg:px-[25px] text-charleston-green mt-[11vh] min-h-[80vh]">
      <div className="flex justify-start items-start w-full">
        <h1 className="font-pano text-3xl text-left mb-6 mxsm:text-lg">
          BUILD A CUSTOM KIT
        </h1>
      </div>
      <div className=" flex flex-col gap-6 w-full">
        <p>
          There’s no one-size-fits-all grooming routine—that’s why we let you
          build your own bundle of Beardbrand products.
        </p>
        <p>
          As you add products to your cart, we’ll automatically apply special
          bundle pricing. The more you bundle, the more you save.
        </p>
        <p>Here’s how it works:</p>
        <ul>
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
  );
};
export default BundleAdCollections;
