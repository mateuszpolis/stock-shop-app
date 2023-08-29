import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchParams, setQueryString, setSearchParams } from "../searchResults/searchResultsSlice";
import { useNavigate } from "react-router";
import { AppDispatch } from "../../Store/store";

function Limit() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("10");

  const handleDropdownToggle = (): void => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const limitOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
  ];

  const searchParams = useSelector(selectSearchParams);
  const category = searchParams.category;
  const searchQuery = searchParams.searchQuery;
  const sorting = searchParams.sorting;

  const handleOptionSelect = (optionValue: string): void => {
    const queryOptions = {
      searchQuery: encodeURIComponent(searchQuery),
      limit: encodeURIComponent(optionValue),
      category: encodeURIComponent(category),
      sorting: encodeURIComponent(sorting),
    };
    const queryString = new URLSearchParams(queryOptions).toString();
    navigate(`/search?${queryString}`);
    dispatch(setQueryString());
    setSelectedOption(optionValue);
    setIsDropdownOpen(false);

    dispatch(setSearchParams({ limit: optionValue }));
  };

  return (
    <motion.div
      className="text-center border-e-2 flex flex-col hover:cursor-pointer relative"
      onClick={handleDropdownToggle}
    >
      <i className="fa-solid fa-hashtag"></i>
      <p className="text-xs">Limit</p>
      {isDropdownOpen && (
        <motion.div
          className="absolute top-full min-w-fit w-full mt-1 bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden"
          initial={{ opacity: 0, zIndex: 10 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {limitOptions.map((option) => (
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
  );
}

export default Limit;
