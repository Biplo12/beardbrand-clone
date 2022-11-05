import React, { useEffect, useState } from 'react';
interface IImageSide {
  inView: boolean;
  inView1: boolean;
  inView2: boolean;
}

const ImageSide: React.FC<IImageSide> = ({
  inView,
  inView1,
  inView2,
}): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(1);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (inView) {
      setCurrentImage(1);
      setSticky(true);
    } else if (inView1 && !inView2) {
      setCurrentImage(2);
      setSticky(true);
    } else if (inView1 && inView2) {
      setCurrentImage(3);
      setSticky(true);
    }
  }, [inView, inView1, inView2]);
  return (
    <div
      className={`w-full flex justify-end items-center ${
        sticky ? 'sticky right-0 top-0' : ''
      }`}
    >
      <div>
        <img
          src={`./static/assets/hero-${currentImage}.png`}
          alt="hero oil"
          className={`object-cover h-[100vh] mxlg:brightness-50`}
        />
      </div>
    </div>
  );
};
export default ImageSide;
