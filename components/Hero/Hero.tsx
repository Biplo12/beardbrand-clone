import React, { useEffect, useState } from 'react';
import ImageSide from './ImageSide';
import TextSide from './TextSide';
const Hero: React.FC = (): JSX.Element => {
  const [imageSize, setImageSize] = useState(false);

  useEffect(() => {
    const handleImageSize = () => {
      if (window.scrollY >= 120) {
        setImageSize(true);
      } else {
        setImageSize(false);
      }
    };

    window.addEventListener('scroll', handleImageSize, true);
    return () => window.removeEventListener('scroll', handleImageSize);
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-[86vh]">
      <div className="flex flex-col w-[50%] h-full">
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
        className={`flex flex-col ease duration-100 w-[50%] h-full ${
          imageSize ? 'fixed right-0 top-0' : 'static'
        }`}
      >
        <ImageSide imageSize={imageSize} />
      </div>
    </div>
  );
};
export default Hero;
