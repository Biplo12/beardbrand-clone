import Link from 'next/link';
import React from 'react';
const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="flex w-full min-h-[50vh] h-auto text-dark-vanilla justify-between items-center p-10 flex-wrap gap-3">
      <div className="max-w-[500px] gap-3 flex flex-col">
        <h1 className="font-pano font-bold text-sm">
          SHOPPERS WITH DISABILITIES
        </h1>
        <p>
          If you are vision-impaired or have any impairment covered by the
          Americans with Disabilities Act or a similar law, and you wish to
          discuss potential accommodations related to using this website, please
          contact us at 844-662-3273 ext 0 or email us at
          support@beardbrand.com.
        </p>
      </div>
      <div className="py-5">
        <h1 className="font-pano font-bold text-sm">ABOUT BEARDBRAND</h1>
        <ul>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Beardbrand Barbershop</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">About Us</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Ingredient Glossary</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Team</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Retail Locations</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Legal</Link>
          </li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-pano font-bold text-sm">COMMUNITY SUPPORT</h1>
        <ul>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Returns & Exchanges</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">FAQs</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Contact Us</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Alliance Forums</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Affiliate Program</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">Urban Beardsman Blog</Link>
          </li>
        </ul>
      </div>
      <div className="py-5">
        <h1 className="font-pano font-bold text-sm">TOP BLOG ARTICLES</h1>
        <ul>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">The 22 Best Beard Styles for 2022</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">The Definitive Guide to Mustache Styles</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">How to Grow an Awesome Beard</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">How to Fix Your Patchy Beard</Link>
          </li>
          <li className="ease duration-200 link link-underline link-underline-vanilla text-sm">
            <Link href="shop">The Ultimate Guide to Men`s Hair Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
