import React from "react";
import { Dispatch } from "redux";
import { useAppDispatch } from "../Store/store";
import { updateSelectCategoriesList } from "../Features/categories/categoriesSlice";

type CategoryProps = {
  category: string;
  selected: boolean;
};

function Category({ category, selected }: CategoryProps) {
  const dispatch: Dispatch = useAppDispatch();

  const handleCategoryClick = () => {
    dispatch(updateSelectCategoriesList(category));
  };

  let tick;
  if (selected) {
    tick = (
      <div className="absolute -top-1 -right-2 text-xs text-neutral-950 w-4 h-4 flex justify-center items-center bg-gray-200 rounded-full">
        <i className="fa-solid fa-check"></i>
      </div>
    );
  } else {
    tick = <></>;
  }

  return (
    <div
      onClick={handleCategoryClick}
      id={`category-${category}`}
      className="relative flex-grow-0 text-sm sm:text-base whitespace-nowrap py-2 px-2 w-fit sm:px-4 mr-2 my-1 rounded-3xl bg-gray-950 text-gray-50 hover:cursor-pointer hover:bg-gray-500 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 transition-all"
    >
      {category}
      {tick}
    </div>
  );
}

export default Category;
