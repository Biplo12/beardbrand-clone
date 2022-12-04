import React, { useState } from 'react';
const DropdownsSide: React.FC = (): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState<number>();

  //TODO - CREATE COMPONENTS FOR EVERY DROPDOWN
  return (
    <div className="w-1/2 h-full flex justify-center items-center mxlg:w-[90%] mxsm:mx-auto">
      <ul className="w-[90%] mx-auto flex flex-col gap-5">
        <li
          className={`${
            dropdown && index === 0 ? 'min-h-[300px] h-auto' : 'h-[40px]'
          } flex justify-center gap-3 items-center flex-col mx-10 pb-3 border-b-[1px] border-charleston-green border-opacity-10 ease duration-150 mxlg:m-0`}
        >
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => {
              dropdown && index === 0 ? setDropdown(false) : setDropdown(true);
              setIndex(0);
            }}
          >
            <h3 className="font-bold cursor-pointer">SHIPPING</h3>
            <img
              src={`${
                dropdown && index === 0
                  ? '/static/svgs/minus-icon.svg'
                  : '/static/svgs/plus-icon.svg'
              }`}
              alt="plus icon"
            />
          </div>
          <div
            className={`${
              dropdown && index === 0
                ? 'opacity-100 overflow-y-hidden'
                : 'opacity-0 overflow-hidden'
            } ease duration-150 flex flex-col gap-5`}
          >
            <h3 className="font-bold">USA SHIPPING</h3>
            <p>
              Our goal is to ship any order out by 2:00 PM CST the same day. The
              average shipping time is two days but varies based on your
              location (we ship from Dallas, TX). Shipping timeframes are not
              guaranteed and provide a rough estimate for when you will receive
              your products. Rates are for continental USA.
            </p>
            <ul>
              <li>
                • Shipping Rates: $6.99 standard & $11.99 premium shipping
              </li>
              <li>
                • Free Shipping for USA orders over $75 (excludes gift cards)
              </li>
              <li>
                • Free Standard Shipping or $5 Off Premium Shipping for{' '}
                <u>
                  <a href="#" target={'_blank'}>
                    Beardbrand Alliance Members
                  </a>
                </u>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={`${
            dropdown && index === 1 ? 'min-h-[350px] h-auto' : 'h-[40px]'
          } flex justify-center gap-3 items-center flex-col mx-10 pb-3 border-b-[1px] border-charleston-green border-opacity-10 ease duration-150 mxlg:m-0`}
        >
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => {
              dropdown && index === 1 ? setDropdown(false) : setDropdown(true);
              setIndex(1);
            }}
          >
            <h3 className="font-bold cursor-pointer">RETURNS</h3>
            <img
              src={`${
                dropdown && index === 1
                  ? '/static/svgs/minus-icon.svg'
                  : '/static/svgs/plus-icon.svg'
              }`}
              alt="plus icon"
            />
          </div>
          <div
            className={`${
              dropdown && index === 1
                ? 'opacity-100 overflow-y-hidden'
                : 'opacity-0 overflow-hidden'
            } ease duration-150 flex flex-col gap-5`}
          >
            <p>
              We want you to be happy at Beardbrand, even if the product doesn`t
              work for you. Everyone has different skin types, hair types, and
              fragrance preferences. While we`d love to say our products will
              work for 100% of the people that buy them, we know that`s simply
              not the case.
            </p>
            <p>
              Don`t worry; if you aren`t completely satisfied with our products,
              we`ll take care of you. If something doesn`t work, we`ll find you
              a product that does, and if we can`t, we`ll make you whole.
            </p>
            <ul>
              <li>
                • We offer full refunds up to 60 days from the date of purchase.
              </li>
              <li>• After 60 days, we can do a refund as store credit.</li>
              <li>
                • Swaps are always free (net the difference in product costs).
              </li>
            </ul>
            <i className="flex gap-2">
              On the fence about which fragrance to get?
              <a href="#" target={'_blank'}>
                Try our <u>Fragrance Sets.</u>
              </a>
            </i>
          </div>
        </li>
        <li
          className={`${
            dropdown && index === 2 ? 'min-h-[100px] h-auto' : 'h-[40px]'
          } flex justify-center gap-3 items-center flex-col mx-10 pb-3 ease duration-150 mxlg:m-0`}
        >
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => {
              dropdown && index === 2 ? setDropdown(false) : setDropdown(true);
              setIndex(2);
            }}
          >
            <h3 className="font-bold cursor-pointer">GUARANTEES</h3>
            <img
              src={`${
                dropdown && index === 1
                  ? '/static/svgs/minus-icon.svg'
                  : '/static/svgs/plus-icon.svg'
              }`}
              alt="plus icon"
            />
          </div>
          <div
            className={`${
              dropdown && index === 2
                ? 'opacity-100 overflow-y-hidden'
                : 'opacity-0 overflow-hidden'
            } ease duration-150 flex flex-col gap-5`}
          >
            <p>
              <span className="text-bold">Beardbrand Assurance:</span>If you
              don`t love the Fragrance Samples, we`ll buy it back or exchange
              it—no questions asked. Just head over to our{' '}
              <u>
                <a href="#" target={'_blank'}>
                  Returns & Exchanges
                </a>
              </u>
              page to initiate your return or exchange.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default DropdownsSide;
