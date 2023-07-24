import React, { useState } from "react";
import { Dispatch } from "redux";
import Category from "../../Components/Category";
import { useSelector } from "react-redux";
import {
  selectFilteredCategories,
  selectSearchQuery,
  setSearchQuery,
} from "./categoriesSlice";
import { useAppDispatch } from "../../Store/store";
import { motion } from "framer-motion";

function Categories() {
  const categories = useSelector(selectFilteredCategories);
  const searchQuerry = useSelector(selectSearchQuery);

  const dispatch: Dispatch = useAppDispatch();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const searchQuerry: string = event.currentTarget.value;
    dispatch(setSearchQuery(searchQuerry));
  };

  const handleMouseEnterSeeMore = () => {
    const arrowRight = document.getElementById("see-more-arrow-right");
    if (arrowRight != null) {
      arrowRight.style.transform = "rotate(90deg)";
    }
  };

  const handleMouseLeaveSeeMore = () => {
    const arrowRight = document.getElementById("see-more-arrow-right");
    if (arrowRight != null) {
      arrowRight.style.transform = "rotate(0deg)";
    }
  };

  const handleShowMoreCategories = () => {
    const searchCategoriesBar = document.getElementById("searchCategoriesBar");
    const categories = document.getElementById("categories");
    const seeMoreCategories = document.getElementById("see-more-catoegires");
    const categoriesList = document.getElementById("categories-list");
    searchCategoriesBar?.classList.toggle("hidden");
    categories?.classList.toggle("flex-col");
    seeMoreCategories?.classList.toggle("hidden");
    categoriesList?.classList.toggle("flex-nowrap");
  };

  return (
    <div
      id="categories"
      className="flex items-center relative z-40 bg-neutral-50 pt-2 mb-0 px-0 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
    >
      <motion.div
        id="searchCategoriesBar"
        className="hidden relative w-full lg:w-96 lg:block lg:shrink-0 lg:mr-1"
      >
        <div className="flex justify-between w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-950 dark:text-neutral-50">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            id="default-search"
            className="appearance-none block w-full p-2 pl-10 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50 dark:focus:border-neutral-50 transition-all"
            placeholder="Find a category"
            value={searchQuerry}
            onChange={handleInputChange}
          />
          <button
            onClick={handleShowMoreCategories}
            className="w-fit text-xs lg:hidden sm:text-lg md:text-sm py-2 px-4 ms-1 sm:ms-2 rounded-lg border-2 border-neutral-950 bg-neutral-50 text-neutral-950 hover:cursor-pointer hover:rounded-sm dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
          >
            <span>
              <i className="fa-solid fa-xmark transition-all"></i>
            </span>
          </button>
        </div>
      </motion.div>
      <div
        id="categories-list"
        className="flex w-full justify-normal items-center flex-nowrap overflow-x-scroll no-scrollbar"
      >
        {categories.slice(0, 15).map((category, index) => (
          <Category
            key={index}
            category={category.category}
            selected={category.selected}
          />
        ))}
      </div>
      <button
        id="see-more-catoegires"
        onMouseEnter={handleMouseEnterSeeMore}
        onMouseLeave={handleMouseLeaveSeeMore}
        onClick={handleShowMoreCategories}
        className="lg:hidden w-fit text-sm py-2 px-4 ms-1 sm:ms-2 rounded-lg border-2 border-neutral-950 bg-neutral-50 text-neutral-950 hover:cursor-pointer hover:rounded-sm dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
      >
        <span className="">
          <i
            className="fa-solid fa-arrow-right transition-all"
            id="see-more-arrow-right"
          ></i>
        </span>
      </button>
    </div>
  );
}

export default Categories;
