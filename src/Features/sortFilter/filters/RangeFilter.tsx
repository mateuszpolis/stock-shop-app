import React from "react";
import Slider from "react-slider";
import { Option } from "../../../Models/Option";

function RangeFilter({ options }: { options: Option[] }) {
  const min: number = options[0].MinValue ? options[0].MinValue : 0;
  const max: number = options[0].MaxValue ? options[0].MaxValue : 100;

  const [values, setValues] = React.useState<number[]>([min, max]);

  return (
    <div className="w-64">
      <div className="flex flex-row justify-between">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {values[0]}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {values[1]}
        </p>
      </div>
      <div className="p-2">
        <Slider
          className="slider bg-neutral-200 dark:bg-neutral-700 w-full rounded-full h-1"
          thumbClassName="thumb bg-neutral-700 dark:bg-neutral-400 w-4 h-4 rounded-full shadow-lg cursor-pointer top-[50%] transform translate-y-[-50%] hover:scale-110 transition-transform  hover:shadow-xl focus:outline-none"
          trackClassName="track"
          min={min}
          max={max}
          value={values}
          onChange={(values) => {
            setValues(values);
          }}
        />
      </div>
    </div>
  );
}

export default RangeFilter;
