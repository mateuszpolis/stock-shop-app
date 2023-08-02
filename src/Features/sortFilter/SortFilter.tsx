import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import FiltersCategoriesSide from "../../Components/FiltersCategoriesSide";
import ReactDOM from "react-dom";

type Props = {
  query?: string;
  categories?: string;
  sorting?: string;
};

type SortingOption = {
  value: string;
  label: string;
};

function SortFilter({ query, categories, sorting }: Props): JSX.Element {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    sorting ? sorting : "default"
  );

  const sortingOptions: SortingOption[] = [
    { value: "default", label: "Default Sorting" },
    { value: "price_low_to_high", label: "Price: Low to High" },
    { value: "price_high_to_low", label: "Price: High to Low" },
    { value: "rating_high_to_low", label: "Highest rated" },
  ];

  const handleDropdownToggle = (): void => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (optionValue: string): void => {
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);

    const searchQuery = encodeURIComponent(query ? query : " ");
    const selectedCategories = encodeURIComponent(
      categories ? categories : " "
    );
    const sorting = encodeURIComponent(optionValue);
    const url = `/search/${searchQuery}/${selectedCategories}/${sorting}`;
    navigate(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="p-5 grid grid-cols-4 lg:grid-cols-3 dark:text-neutral-50 xl:w-[1280px]">
        <div className="text-center border-e-2 flex flex-col">
          <i className="fa-solid fa-list"></i>
          <p className="text-xs">Display</p>
        </div>
        <div
          className="text-center border-e-2 flex flex-col lg:hidden cursor-pointer"
          onClick={() => {
            setIsFiltersOpen(!isFiltersOpen);
          }}
        >
          <i className="fa-solid fa-filter"></i>
          <p className="text-xs">Filter</p>
        </div>
        {ReactDOM.createPortal(
          <AnimatePresence initial={false} mode="wait">
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0, y: "100%" }}
                animate={{ height: "100%", y: 0 }}
                exit={{ height: 0, y: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed bottom-0 z-50 left-0 w-full h-full p-5 bg-neutral-50 dark:bg-neutral-900 overscroll-none"
              >
                <button
                  className="text-neutral-900 dark:text-neutral-50 text-2xl mb-8 hover:cursor-pointer font-bold"
                  onClick={() => {
                    setIsFiltersOpen(false);
                  }}
                >
                  Close <i className="fa-solid fa-times"></i>
                </button>

                <FiltersCategoriesSide />
              </motion.div>
            )}
          </AnimatePresence>,
          document.getElementById("root")!
        )}
        <motion.div
          className="text-center border-e-2 flex flex-col hover:cursor-pointer relative"
          onClick={handleDropdownToggle}
        >
          <i className="fa-solid fa-sort"></i>
          <p className="text-xs">Sort</p>
          {isDropdownOpen && (
            <motion.div
              className="absolute top-full min-w-fit w-full mt-1 bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, zIndex: 10 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {sortingOptions.map((option) => (
                <div
                  key={option.value}
                  className={`py-2 px-4 ${
                    selectedOption === option.value
                      ? "bg-neutral-100 dark:bg-neutral-900"
                      : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  } cursor-pointer transition-all duration-75 whitespace-nowrap relative z-20`}
                  onClick={() => {
                    handleOptionSelect(option.value);
                    handleDropdownToggle();
                  }}
                >
                  {option.label}
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
        <div className="text-center flex flex-col">
          <i className="fa-solid fa-hashtag"></i>
          <p className="text-xs">Limit</p>
        </div>
      </div>
    </motion.div>
  );
}

export default SortFilter;
