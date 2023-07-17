import React from "react";

type CategoryProps = {
  category: string;
};

function Category({ category }: CategoryProps) {
  return (
    <div className="text-sm sm:text-base py-2 px-2 w-fit sm:px-4 mx-1 my-1 rounded-3xl bg-gray-950 text-gray-50 hover:cursor-pointer hover:bg-gray-500 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 transition-all">
      {category}
    </div>
  );
}

export default Category;
