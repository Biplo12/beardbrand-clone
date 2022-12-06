import React from 'react';
const SliderComponent: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-start items-start bg-[#D4E8E6]">
      <img
        src="/static/assets/product-big.png"
        alt="product"
        className="w-full h-[100vh] object-contain"
      />
    </div>
  );
};
export default SliderComponent;
