import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedCategories } from "../Features/categories/categoriesSlice";
import Category from "./Category";
import Filter from "./Filter";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function FiltersCategoriesSide({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

  const filters = {
    price: {
      type: "range",
      min: 0,
      max: 1000,
      options: [],
    },
    rating: {
      type: "range",
      min: 0,
      max: 5,
      options: [],
    },
    brand: {
      type: "checkbox",
      min: 0,
      max: 0,
      options: ["Apple", "Samsung", "HP", "Dell", "Lenovo", "Asus"],
    },
  };

  const selectedCategories = useSelector(selectSelectedCategories);

  return (
    <div className="hidden lg:flex flex-col rounded-lg space-y-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          Selected Categoreis:
        </h2>
        <div className="flex flex-row flex-wrap flex-grow-0 justify-start max-h-28 overflow-y-scroll no-scrollbar">
          {selectedCategories.length === 0 && (
            <p className="text-base text-neutral-500 dark:text-neutral-400">
              No categories selected
            </p>
          )}
          {selectedCategories.map((category, index) => (
            <Category
              category={category.category}
              selected={category.selected}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          Filters:{" "}
          <i
            onMouseEnter={() => {
              setIsDropdownOpen(true);
            }}
            onMouseLeave={() => {
              setIsDropdownOpen(false);
            }}
            className="relative fa-regular fa-circle-question hover:cursor-pointer"
          ></i>
          <AnimatePresence initial={false} mode="wait">
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, zIndex: 10 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-2 rounded-lg shadow-md absolute z-20 bg-neutral-50 w-56"
              >
                <p className="text-base">
                  Only common filters are shown. Filters are based on selected
                  categories. If you want to see more filters, please select
                  fewer categories.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </h2>
        <div className="max-h-[96] overflow-y-scroll no-scrollbar">
          {/* <Filter key={0} type="range" name="price" min={10} max={100} />
          <Filter key={1} type="range" name="rating" min={10} max={100} /> */}
          {Object.entries(filters).map(([filterKey, filter], index) => (
            <Filter
              key={index}
              type={filter.type}
              name={filterKey}
              min={filter.min}
              max={filter.max}
              options={filter.options}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiltersCategoriesSide;
