import React from 'react';
import { useInView } from 'react-intersection-observer';
import ImageSide from './Partials/ImageSide';
import TextSide from './Partials/TextSide';
const Hero: React.FC = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [ref1, inView1] = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });

  return (
    <div className="flex justify-between items-center w-full h-[300vh] bg-charleston-green mxlg:bg-transparent mxlg:justify-center">
      <div className="flex flex-col w-[50%] h-full mxlg:w-full mxlg:absolute top-0 ">
        <div ref={ref}>
          <TextSide
            title="NEW NAME, NEW LOOK; SAME OIL."
            content="Our legendary lightweight, non-greasy beard oil has a new name and a
          bigger bottle. It's the only oil you’ll ever need to keep your beard,
          hair, and skin hydrated, nourished, and smelling awesome."
            buttonText="SHOP UTILITY OIL"
          />
        </div>
        <div ref={ref1}>
          <TextSide
            title="IT'S THE BALM DOT COM."
            content="The utility product that started it all has a new futuristic look and feel. We took our do-it-all Utility Balm and put it in bigger 4.5 oz. aluminum jars."
            buttonText="SHOP UTILITY BALM"
          />
        </div>
        <div ref={ref2}>
          <TextSide
            title="STRAY HAIRS, BEWARE."
            content="Our beeswax and lanolin-based, medium-hold mustache wax still fits in your pocket. But now it comes in a bigger slide-open aluminum tin that combines a vintage appeal with a futuristic design."
            buttonText="SHOP MUSTACHE WAX"
          />
        </div>
      </div>
      <div className={`flex flex-col w-[50%] right-0 h-full mxlg:w-auto`}>
        <ImageSide inView={inView} inView1={inView1} inView2={inView2} />
      </div>
    </div>
  );
};
export default Hero;
