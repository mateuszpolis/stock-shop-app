import React from "react";
import Category from "../../Components/Category";

function Categories() {
  // Later fetch from API
  const categories: string[] = [
    "Tablets",
    "Smartphones",
    "Computers",
    "Laptops",
    "Monitors",
    "Keyboards",
    "Mice",
  ];

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

  return (
    <div
      id="categories"
      className="z-40 flex justify-normal items-center bg-neutral-50 pt-2 mb-0 px-0 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
    >
      <div className="flex max-w-3xl items-center overflow-x-scroll">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
      <button
        id="see-more-catoegires"
        onMouseEnter={handleMouseEnterSeeMore}
        onMouseLeave={handleMouseLeaveSeeMore}
        className="w-fit text-xs sm:text-lg md:text-sm py-2 px-4 ms-1 sm:ms-2 rounded-lg border-2 border-neutral-950 bg-neutral-50 text-neutral-950 hover:cursor-pointer hover:rounded-sm dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
      >
        <span className="hidden lg:block">
          See more{" "}
          <i
            className="fa-solid fa-arrow-right transition-all"
            id="see-more-arrow-right"
          ></i>
        </span>
        <span className="lg:hidden">
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
