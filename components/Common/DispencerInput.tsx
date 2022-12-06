import { ThemeProvider } from '@emotion/react';
import { createTheme, Tooltip } from '@mui/material';
import React from 'react';

interface IDispencerInput {
  setImageChange: (value: boolean) => void;
  imageChange: boolean;
}

const DispencerInput: React.FC<IDispencerInput> = ({
  setImageChange,
  imageChange,
}): JSX.Element => {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '.9em',
            textAlign: 'center',
            color: 'white',
            width: '200px',
            backgroundColor: 'rgba(0, 0, 0, 0.87)',
          },
        },
      },
    },
  });
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        className="form-check-input appearance-none h-4 w-4 border-2 border-black bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        onChange={() => setImageChange(!imageChange)}
      />
      <label>Order without a dispenser.</label>
      <ThemeProvider theme={theme}>
        <Tooltip
          placement="bottom"
          title="Save $1 by re-using your dispenser from a previous order. Your item will ship with only a screw cap."
        >
          <img
            src="/static/svgs/info-icon.svg"
            alt="info icon"
            className="cursor-pointer"
          />
        </Tooltip>
      </ThemeProvider>
    </div>
  );
};
export default DispencerInput;
