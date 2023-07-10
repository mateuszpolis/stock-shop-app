import React from "react";

type Props = {
  color1: string;
  color2: string;
  category: string;
};

function Category({ color1, color2, category }: Props) {
  const bgGradient: string = `bg-gradient-to-r from-${color1}-500 via-${color2}-500 to-${color1}-500`;
  console.log(bgGradient);

  return (
    <div
      className={
        bgGradient +
        " w-fit py-2 px-4 ms-2 rounded-3xl bg-size-200 pg-pos-0 text-gray-50 hover:cursor-pointer hover:bg-pos-100 transition-all"
      }
    >
      {category}
    </div>
  );
}

export default Category;
