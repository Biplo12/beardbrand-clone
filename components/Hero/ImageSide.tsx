import React, { useEffect, useState } from 'react';

interface IImageSide {
  imageSize: boolean;
}

const ImageSide: React.FC<IImageSide> = ({ imageSize }): JSX.Element => {
  return (
    <div className="bg-charleston-green w-full flex justify-end items-center">
      <div className="">
        <img
          src={'./static/assets/hero-1.png'}
          alt="hero"
          className="w-full object-cover h-[100vh]"
        />
      </div>
    </div>
  );
};
export default ImageSide;
