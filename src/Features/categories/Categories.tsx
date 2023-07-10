import React from "react";
import Category from "../../Components/Category";

type Props = {};

function Categories({}: Props) {
  return (
    <div className="flex justify-normal items-center bg-gray-50 p-3 text-gray-950 dark:bg-gray-900 dark:text-gray-50">
      <h1 className="font-bold text-lg">Categories:</h1>
      <div className="flex overflow-x-scroll">
        <Category color1="red" color2="orange" category="Tablets" />
        <Category color1="indigo" color2="purple" category="Smartphones" />
        <Category color1="emerald" color2="amber" category="Computers" />
        <Category color1="blue" color2="violet" category="TVs" />
        <Category color1="indigo" color2="red" category="Cameras" />
        <Category color1="pink" color2="purple" category="Headphones" />
      </div>
    </div>
  );
}

export default Categories;
