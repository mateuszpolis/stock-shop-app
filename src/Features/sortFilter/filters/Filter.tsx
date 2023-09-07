import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import RangeFilter from "./RangeFilter";
import CheckboxFilter from "./CheckboxFilter";
import { Parameter } from "../../../Models/Parameter";

function Filter({ filter }: { filter: Parameter }) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let filterComponent = null;
  if (filter.parameterType === "RANGE") {
    filterComponent = <RangeFilter options={filter.predefinedChoices} />;
  } else if (filter.parameterType === "CHOICE") {
    filterComponent = <CheckboxFilter options={filter.predefinedChoices} />;
  } else {
    filterComponent = <div>Unknown filter type.</div>;
  }

  return (
    <div id={`filter-${filter.id}`}>
      <div
        className="cursor-pointer text-lg dark:text-neutral-50"
        onClick={() => {
          toggleDropdown();
          const chevron = document.getElementById(`chevron-${filter.id}`);
          if (chevron) {
            chevron.classList.toggle("rotate-90");
          }
        }}
      >
        {filter.name}{" "}
        <i
          id={`chevron-${filter.id}`}
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
