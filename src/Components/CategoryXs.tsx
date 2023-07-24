import React from "react";

type Props = {
  category: string;
};

function CategoryXs({ category }: Props) {
  return (
    <div className="py-1 px-2 rounded-xl mr-1 text-xs   hover:cursor-pointer  bg-gray-50 text-gray-950 hover:bg-gray-200 transition-none">
      {category}
    </div>
  );
}

export default CategoryXs;
