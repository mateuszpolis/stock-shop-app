import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import FilterCategoriesButton from "./FilterCategoriesButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store";
import {
  selectSearchParams,
  setSearchParams,
} from "../searchResults/searchResultsSlice";
import Limit from "./Limit";

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
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
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

  const searchParams = useSelector(selectSearchParams);
  const limit = searchParams.limit;
  const category = searchParams.category;
  const searchQuery = searchParams.searchQuery;

  const handleOptionSelect = (optionValue: string): void => {
    const queryOptions = {
      searchQuery: encodeURIComponent(searchQuery),
      limit: encodeURIComponent(limit),
      category: encodeURIComponent(category),
      sorting: encodeURIComponent(optionValue),
    };
    const queryString = new URLSearchParams(queryOptions).toString();
    navigate(`/search?${queryString}`);
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);

    dispatch(setSearchParams({ sorting: optionValue }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-neutral-50 p-5 grid grid-cols-4 dark:text-neutral-50 xl:w-[1280px]">
        <div className="text-center border-e-2 flex flex-col">
          <i className="fa-solid fa-list"></i>
          <p className="text-xs">Display</p>
        </div>
        <FilterCategoriesButton>
          <div className="text-center border-e-2 flex flex-col hover:cursor-pointer relative">
            <i className="fa-solid fa-filter"></i>
            <p className="text-xs">Filters & Categories</p>
          </div>
        </FilterCategoriesButton>
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
        <Limit />
      </div>
    </motion.div>
  );
}

export default SortFilter;
