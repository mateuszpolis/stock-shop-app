import React from "react";

type Props = {
  category: string;
};

function CategoryXs({ category }: Props) {
  return (
    <div className="p-1 rounded-xl mr-1 text-xs bg-gray-950 text-gray-50 hover:cursor-pointer hover:bg-gray-500 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 transition-none">
      {category}
    </div>
  );
}

export default CategoryXs;
