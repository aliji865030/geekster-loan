import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const SliderWithInfo = ({ min, max, value, symbole,title,step}) => {
  const [currentValue, setCurrentValue] = useState(value);

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className="px-8 py-5">
        <div className="text-start text-md">
            <p>
                {title}
            </p>
        </div>
      <div className="text-start text-xl font-semibold">
        <p>
          {symbole} {currentValue}
        </p>
      </div>
      <div>
        <Slider
          aria-label="Temperature"
          defaultValue={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={step}
          marks
          min={min}
          max={max}
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between text-md text-gray-400">
        <span>
          {symbole} {min}
        </span>
        <span>
          {symbole} {max}
        </span>
      </div>
    </div>
  );
};

export default SliderWithInfo;
