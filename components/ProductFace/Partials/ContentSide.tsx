import { useRouter } from 'next/router';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProductCredentials from './ProductCredentials';
import Quantity from './Quantity';
const ContentSide: React.FC = (): JSX.Element => {
  const router = useRouter();
  const name: string | any = router?.query['product-name'];

  const { inView } = useInView({
    threshold: 1,
  });

  return (
    <div
      className={`flex flex-col justify-start items-start w-[50%] min-h-full relative`}
    >
      <div
        className={`w-full ${
          inView ? `sticky top-[200px] left-0` : 'sticky top-[200px] left-0'
        }`}
      >
        <div className="h-full flex justify-start items-start flex-col gap-10 w-[90%] mx-auto">
          <ProductCredentials name={name} />
          <Quantity />
        </div>
      </div>
    </div>
  );
};
export default ContentSide;
