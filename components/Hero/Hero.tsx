import React, { useEffect, useState } from 'react';
import ImageSide from './ImageSide';
import TextSide from './TextSide';
const Hero: React.FC = (): JSX.Element => {
  const [imageSize, setImageSize] = useState(false);
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    const handleImageSize = () => {
      if (window.scrollY >= 120 && window.scrollY <= 2000) {
        setImageSize(true);
      } else {
        setImageSize(false);
      }
      if (window.scrollY <= 2000) {
        setSlider(true);
      } else {
        setSlider(false);
      }
    };

    window.addEventListener('scroll', handleImageSize, true);
    return () => window.removeEventListener('scroll', handleImageSize);
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-[300vh] bg-charleston-green mxlg:bg-transparent mxlg:justify-center">
      <div className="flex flex-col w-[50%] h-full mxlg:w-full">
        <TextSide
          title="NEW NAME, NEW LOOK; SAME OIL."
          content="Our legendary lightweight, non-greasy beard oil has a new name and a
        bigger bottle. It's the only oil you’ll ever need to keep your beard,
        hair, and skin hydrated, nourished, and smelling awesome."
          buttonText="SHOP UTILITY OIL"
        />
        <TextSide
          title="IT'S THE BALM DOT COM."
          content="The utility product that started it all has a new futuristic look and feel. We took our do-it-all Utility Balm and put it in bigger 4.5 oz. aluminum jars."
          buttonText="SHOP UTILITY BALM"
        />
        <TextSide
          title="STRAY HAIRS, BEWARE."
          content="Our beeswax and lanolin-based, medium-hold mustache wax still fits in your pocket. But now it comes in a bigger slide-open aluminum tin that combines a vintage appeal with a futuristic design."
          buttonText="SHOP MUSTACHE WAX"
        />
      </div>
      <div
        className={`flex flex-col w-[50%] right-0 h-full mxlg:w-auto ${
          imageSize ? 'fixed mxlg:left-0' : 'static'
        } ${
          slider
            ? 'bottom-0 justify-start items-start'
            : 'top-0 justify-end items-end'
        }`}
      >
        <ImageSide imageSize={imageSize} slider={slider} />
      </div>
    </div>
  );
};
export default Hero;
