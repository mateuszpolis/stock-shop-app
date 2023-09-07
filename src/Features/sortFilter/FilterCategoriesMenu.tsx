import React from "react";
import Filter from "./filters/Filter";
import { AnimatePresence, motion } from "framer-motion";
import Categories from "./categories/Categories";
import Filters from "./filters/Filters";

function FiltersCategoriesMenu() {
  const [showCategories, setShowCategories] = React.useState<boolean>(true);
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  return (
    <div className="overflow-x-hidden relative w-full h-[80vh] lg:h-[40vh] flex flex-col rounded-lg bg-neutral-50 dark:bg-neutral-900 z-50 overflow-y-scroll">
      <h2 className="cursor-pointer text-2xl font-bold text-neutral-950 dark:text-neutral-50">
        <span
          onClick={() => {
            if (!showCategories) {
              setShowCategories(true);
              setShowFilters(false);
            }
          }}
          className={`${showCategories ? "underline" : ""}`}
        >
          Categories
        </span>{" "}
        |{" "}
        <span
          onClick={() => {
            if (!showFilters) {
              setShowCategories(false);
              setShowFilters(true);
            }
          }}
          className={`${showFilters ? "underline" : ""}`}
        >
          Filters
        </span>
      </h2>

      <AnimatePresence initial={false} mode="wait">
        {showCategories && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12"
          >
            <Categories />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait">
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 w-full"
          >
            <Filters />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FiltersCategoriesMenu;
