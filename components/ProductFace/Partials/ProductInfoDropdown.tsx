import Dropdown from '@components/Common/Dropdown';
import React, { useState } from 'react';
const ProductInfoDropdown: React.FC = (): JSX.Element => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [index, setIndex] = useState<any>(null);
  return (
    <div className="w-full h-full flex justify-center items-center pt-10 pb-16 ">
      <ul className="w-full flex flex-col gap-5 justify-start">
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={0}
          label={'PRODUCT INFORMATION'}
          content={
            <>
              <h1 className="font-pano font-bold text-[1.2rem]">
                WHAT`S THE DEAL WITH SEA SALT SPRAY
              </h1>
              <p>
                Beardbrand Sea Salt Spray is more than just “saltwater.” It`s
                loaded with vitamin-rich magnesium chloride—actual salt from the
                Dead Sea—that nourishes and strengthens hair follicles. It`s
                full of curl-enhancing magnesium sulfate that helps add volume
                and light hold to your hair. And lastly, it`s infused with
                kaolin that binds to toxins and helps eliminate them from skin
                and hair, helping you go longer between washes.
              </p>
              <p>
                Ready for the best hair of your adult life? Grab some Sea Salt
                Spray.
              </p>
              <h1 className="font-pano font-bold text-[1.2rem]">
                HOW TO USE SEA SALT SPRAY
              </h1>
              <p>
                Start with damp, towel-dried hair. Shake bottle. Spray
                generously on mid-lengths and ends of hair, then air or blow dry
                for natural-looking tousled beach waves. Finish with Styling
                Balm if some extra hold is needed.
              </p>
              <h1 className="font-pano font-bold text-[1.2rem]">
                HOW MUCH SEA SALT SPRAY YOU GET
              </h1>
              <p>4 fl oz / 118 ml</p>
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={1}
          label={'INGREDIENTS'}
          content={
            <>
              <h1 className="font-pano font-bold text-[1.2rem]">
                SEA SALT SPRAY INGREDIENTS
              </h1>
              <p>
                Water (Aqua, Eau), Magnesium Chloride, Fragrance (Parfum),
                Magnesium Sulfate, Aloe Barbadensis Leaf Juice, Kaolin,
                Glycerin, Citrus Grandis (Grapefruit) Seed Extract
              </p>
              <p>
                Variations in fragrance may slightly change the order
                ingredients are listed in.
              </p>
              <p>FREE OF SULFATES / PARABENS / SILICONES / PHTHALATES</p>
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={2}
          label={'HOW BUNDLES WORK'}
          content={
            <>
              <p>
                There`s no one-size-fits-all grooming routine—that`s why we let
                you build your own bundle of Beardbrand products.
              </p>
              <p>
                As you add products to your cart, we`ll automatically apply
                special bundle pricing. The more you bundle, the more you save.
              </p>
              <p>Here`s how it works:</p>
              <ul className="pl-3">
                <li>• Bundle 3 products + get 1 more free*</li>
                <li>• Bundle 5 products + get 2 more free*</li>
                <li>• Bundle 7 products + get 3 more free*</li>
              </ul>
              <p>
                *The free item(s) will always be the lowest-priced items in your
                cart.
              </p>
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={3}
          label={'SHIPPING, RETURNS & GUARANTEES'}
          content={
            <>
              <h1 className="font-pano font-bold text-[1.2rem]">
                BEARDBRAND ASSURANCE
              </h1>
              <p>
                If you don`t love Beardbrand Utility Balm or the fragrance you
                purchased, we`ll buy it back or exchange it for another
                fragrance—no questions asked. Just head over to our{' '}
                <u>
                  <a href="#" target={'_blank'}>
                    Returns & Exchanges
                  </a>
                </u>{' '}
                page to initiate your return or exchange.
              </p>
              <h1 className="font-pano font-bold text-[1.2rem]">RETURNS </h1>
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
              <h1 className="font-pano font-bold text-[1.2rem]">
                USA SHIPPING{' '}
              </h1>
              <p>
                Our goal is to ship any order out by 2:00 PM CST the same day.
                During the holiday rush, orders can take up to three days to
                ship. The average shipping time is two days but varies based on
                your location (we ship from Dallas, TX). Shipping timeframes are
                not guaranteed and provide a rough estimate for when you will
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
                  • Free Standard Shipping or $5 Off Premium Shipping for
                  Beardbrand Alliance Members
                </li>
              </ul>
              <h1 className="font-pano font-bold text-[1.2rem]">
                INTERNATIONAL SHIPPING
              </h1>
              <p>
                We do not currently ship to Europe, UK, Russia, Mexico, Ghana,
                Morocco, China, Hong Kong, and Turkey. Customers in other
                countries can place orders from our store. All customs and taxes
                are the responsibility of the buyer. Shipping prices are at
                market rates and calculated at checkout.
              </p>
              <ul>
                <li>
                  • $5 Off International Shipping for Beardbrand Alliance
                  Members
                </li>
              </ul>
              <h1 className="font-pano font-bold text-[1.2rem]">
                ALLIANCE EXCLUSIVE MERCHANDISE
              </h1>
              <p>
                Alliance exclusive merchandise is printed to order. Please allow
                14 days to receive your order.
              </p>
            </>
          }
        />
      </ul>
    </div>
  );
};
export default ProductInfoDropdown;
