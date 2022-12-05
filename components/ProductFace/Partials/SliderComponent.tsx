import React from 'react';
const SliderComponent: React.FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src="/static/assets/product-1.png"
        alt="product"
        className="w-full h-full"
      />
    </div>
  );
};
export default SliderComponent;
