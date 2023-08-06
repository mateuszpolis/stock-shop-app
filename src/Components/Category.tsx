import React from "react";

type CategoryT = {
  id: number;
  name: string;
  description: string;
  hasChildren: boolean;
  parentCategory: number;
};

type Props = {
  category: CategoryT;
  onClick: () => void;
};

function Category({ category, onClick }: Props) {
  return (
    <div onClick={onClick} className="text-lg cursor-pointer">
      {category.name}{" "}
      <i
        className={`fas fa-chevron-right ${
          category.hasChildren ? "" : "hidden"
        }`}
      ></i>
    </div>
  );
}

export default Category;
