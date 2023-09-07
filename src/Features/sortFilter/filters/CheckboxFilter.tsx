import React from "react";
import { Option } from "../../../Models/Option";

function CheckboxFilter({ options }: { options: Option[] }) {

  return (
    <div className="px-4">
      {options == null && <div>Failed to load options.</div>}
      {options != null &&
        options.length !== 0 &&
        options.map((option, index) => (
          <div
            className="flex flex-row items-center dark:text-neutral-50"
            key={index}
          >
            <input
              type="checkbox"
              name={option.Name ? option.Name : "undefined"}
              id={option.Id.toString()}
              className="mr-2"
            />
            <label className="" htmlFor={option.Name?.toString()}>
              {option.Name}
            </label>
          </div>
        ))}
    </div>
  );
}

export default CheckboxFilter;
