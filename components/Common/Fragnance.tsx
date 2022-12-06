import React from 'react';

interface IFragnace {
  option: string;
}

const Fragnance: React.FC<IFragnace> = ({ option }): JSX.Element => {
  return (
    <option className="p-3 border text-sm border-charleston-green border-opacity-100 cursor-pointer font-space-grotesk">
      {option}
    </option>
  );
};
export default Fragnance;
