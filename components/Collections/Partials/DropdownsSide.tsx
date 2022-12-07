import React, { useState } from 'react';
import Dropdown from '../../Common/Dropdown';
const DropdownsSide: React.FC = (): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState<any>(null);

  //TODO - CREATE COMPONENTS FOR EVERY DROPDOWN
  return (
    <div className="w-1/2 h-full flex justify-center items-center mxlg:w-[90%] mxsm:mx-auto">
      <ul className="w-[90%] mx-auto flex flex-col gap-5">
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={0}
          label={'USA SHIPPING'}
          content={
            <>
              <p>
                Our goal is to ship any order out by 2:00 PM CST the same day.
                The average shipping time is two days but varies based on your
                location (we ship from Dallas, TX). Shipping timeframes are not
                guaranteed and provide a rough estimate for when you will
                receive your products. Rates are for continental USA.
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
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={1}
          label={'RETURNS'}
          content={
            <>
              <p>
                We want you to be happy at Beardbrand, even if the product
                doesn`t work for you. Everyone has different skin types, hair
                types, and fragrance preferences. While we`d love to say our
                products will work for 100% of the people that buy them, we know
                that`s simply not the case.
              </p>
              <p>
                Don`t worry; if you aren`t completely satisfied with our
                products, we`ll take care of you. If something doesn`t work,
                we`ll find you a product that does, and if we can`t, we`ll make
                you whole.
              </p>
              <ul>
                <li>
                  • We offer full refunds up to 60 days from the date of
                  purchase.
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
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={2}
          label={'GUARANTEES'}
          content={
            <>
              <p>
                <span className="text-bold">Beardbrand Assurance:</span>If you
                don`t love the Fragrance Samples, we`ll buy it back or exchange
                it—no questions asked. Just head over to our{' '}
                <u>
                  <a href="#" target={'_blank'}>
                    Returns & Exchanges
                  </a>
                </u>{' '}
                page to initiate your return or exchange.
              </p>
            </>
          }
        />
      </ul>
    </div>
  );
};
export default DropdownsSide;
