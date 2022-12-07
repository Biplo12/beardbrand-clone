import React, { useState } from 'react';
import Dropdown from '../../Common/Dropdown';
const DropdownsSide: React.FC = (): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState<any>(null);

  return (
    <div className="w-1/2 h-full flex justify-center items-center mxlg:w-[90%] mxsm:mx-auto">
      <ul className="w-[90%] mx-auto flex flex-col gap-5">
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={0}
          label={'OLD MONEY'}
          content={
            <>
              <p>
                Breathe deep—that`s the smell of Old Money. With 23 fragrance
                notes—including aged oak, amber, and ylang ylang—this is a rich
                and complex scent that evolves throughout the day. As a
                fragrance, Old Money is right at home surrounded by rich
                mahogany, your favorite worn leather chair, a glass of whiskey,
                and a cigar.
              </p>
              <p>
                <span className="font-bold">Primary Notes: </span>Oak, Amber,
                Leather, Lime, Ylang Ylang
              </p>
              <p>
                <span className="font-bold">Fragrance Family: </span>Woody,
                Floral, Citrus
              </p>
              <p>
                <span className="font-bold">Fragrance Type: </span>Rich &
                Complex
              </p>
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={1}
          label={'TREE RANGER'}
          content={
            <>
              <p>
                If a tree falls in the forest and no one is around, does it make
                a sound? Who the hell cares when you smell this good! We`ll go
                out on a limb and say it—Tree Ranger will leave you pining for
                more. This blend of refreshing eucalyptus, fresh pine, and
                sweet, sweet cedarwood takes root in your beard, hair, and skin
                and says, “that man is a trailblazer.” In other words, Tree
                Ranger keeps you smelling like you just hiked through a Pacific
                Northwest Forest.
              </p>
              <p>
                <span className="font-bold">Primary Notes: </span>Eucalyptus,
                Pine, Cedarwood
              </p>
              <p>
                <span className="font-bold">Fragrance Family: </span>Herbal,
                Woody
              </p>
              <p>
                <span className="font-bold">Fragrance Type: </span>
                Light & Fresh
              </p>
            </>
          }
        />
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          index={index}
          setIndex={setIndex}
          indexOnclick={2}
          label={'TEMPLE SMOKE'}
          content={
            <>
              <p>
                Temple Smoke is a mystical blend inspired by the rich fragrance
                of oud incense. It has deep and warm layers with an earthy,
                smoky undertone. The complementary notes of palo santo,
                frankincense, and patchouli create a rich and long-lasting
                blend. This resinous and smoky fragrance is perfect for a temple
                retreat or hastily retreating from a temple.
              </p>
              <p>
                <span className="font-bold">Primary Notes: </span>Palo Santo,
                Vanilla, Frankincense, Patchouli
              </p>
              <p>
                <span className="font-bold">Fragrance Family: </span> Woody,
                Resinous, Earthy
              </p>
              <p>
                <span className="font-bold">Fragrance Type: </span>
                Sweet & Smoky
              </p>
            </>
          }
        />
      </ul>
    </div>
  );
};
export default DropdownsSide;
