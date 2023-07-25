import React, { useState } from "react";

interface FilterProps {
  filterType: string;
  min?: number;
  max?: number;
  options?: string[];
}

interface RangeValue {
  min: number;
  max: number;
}

const Filter: React.FC<FilterProps> = ({ filterType, min, max, options }) => {
  const [rangeValue, setRangeValue] = useState<RangeValue>({ min: min || 0, max: max || 0 });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRangeValue((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  return (
    <div className="border p-4 m-2">
      {filterType === "range" && (
        <>
          <h4 className="font-semibold mb-2">Price Range</h4>
          <input
            type="number"
            name="min"
            value={rangeValue.min}
            min={min}
            max={rangeValue.max}
            onChange={handleRangeChange}
            className="w-16 mr-2"
          />
          to
          <input
            type="number"
            name="max"
            value={rangeValue.max}
            min={rangeValue.min}
            max={max}
            onChange={handleRangeChange}
            className="w-16 ml-2"
          />
        </>
      )}

      {filterType === "checkbox" && (
        <>
          <h4 className="font-semibold mb-2">Brands</h4>
          <ul>
            {options &&
              options.map((option) => (
                <li key={option} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mr-2"
                  />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Filter;
