import React from 'react';
const SliderComponent: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-start items-start">
      <img
        src="/static/assets/product-1.png"
        alt="product"
        className="w-full h-[100vh] object-cover"
      />
    </div>
  );
};
export default SliderComponent;
