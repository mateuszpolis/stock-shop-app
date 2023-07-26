import React from "react";

type Props = {
  options: string[];
};

function CheckboxFilter({ options }: Props) {
  return (
    <div className="px-4">
      {options.map((option, index) => (
        <div className="flex flex-row items-center" key={index}>
          <input type="checkbox" name={option} id={option} className="mr-2" />
          <label className="" htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxFilter;
