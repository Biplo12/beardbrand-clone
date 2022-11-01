import React, { useEffect, useState } from 'react';

interface IImageSide {
  imageSize: boolean;
  slider: boolean;
}

const ImageSide: React.FC<IImageSide> = ({
  imageSize,
  slider,
}): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(1);
  useEffect(() => {
    const handleImageSize = () => {
      if (window.scrollY <= 900) {
        setCurrentImage(1);
      }
      if (window.scrollY > 900 && window.scrollY < 1700) {
        setCurrentImage(2);
      }
      if (window.scrollY >= 1700) {
        setCurrentImage(3);
      }
    };

    window.addEventListener('scroll', handleImageSize, true);
    return () => window.removeEventListener('scroll', handleImageSize);
  }, []);

  return (
    <div className="w-full flex justify-end items-center mxlg:absolute mxlg:z-1 mxlg:left-0">
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
