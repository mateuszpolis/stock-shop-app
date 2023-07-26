import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RangeFilter from "./RangeFilter";
import CheckboxFilter from "./CheckboxFilter";

type Props = {
  type: string;
  name: string;
  min?: number;
  max?: number;
  options?: string[];
};

function Filter({ name, min, max, type, options }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let filterComponent = null;
  if (type === "range" && min != null && max != null) {
    filterComponent = <RangeFilter min={min} max={max} />;
  } else if (type === "checkbox" && options != null) {
    filterComponent = <CheckboxFilter options={options} />;
  }

  return (
    <div id={`filter-${name}`}>
      <div
        className="cursor-pointer text-lg"
        onClick={() => {
          toggleDropdown();
          const chevron = document.getElementById(`chevron-${name}`);
          if (chevron) {
            chevron.classList.toggle("rotate-90");
          }
        }}
      >
        {name}{" "}
        <i
          id={`chevron-${name}`}
          className="fas fa-chevron-right transition-all"
        ></i>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "200px" }}
            exit={{ maxHeight: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {filterComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Filter;
