import React from "react";
import Slider from "react-slider";

type Props = {
  min: number;
  max: number;
};

function RangeFilter({ min, max }: Props) {
  const [values, setValues] = React.useState<number[]>([min, max]);

  return (
    <div>
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
          className="slider bg-neutral-200 dark:bg-neutral-700 w-64 rounded-full h-1"
          thumbClassName="thumb bg-neutral-700 dark:bg-primary-400 w-4 h-4 rounded-full shadow-lg cursor-pointer top-[50%] transform translate-y-[-50%] hover:scale-110 transition-transform  hover:shadow-xl focus:outline-none"
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
