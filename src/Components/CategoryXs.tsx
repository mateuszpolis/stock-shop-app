import React from "react";

type Props = {
  category: string;
};

function CategoryXs({ category }: Props) {
  return (
    <div className="p-1 rounded-xl text-xs bg-gray-50 mr-1 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-200 transition-none">
      {category}
    </div>
  );
}

export default CategoryXs;
