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
    "Headphones",
    "Speakers",
    "Cameras",
    "Smartwatches",
    "Smartbands",
    "Smart TVs",
    "Consoles",
    "Games",
    "Accessories",
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

  const handleShowMoreCategories = () => {
    const moreCategories = document.getElementById("more-categories");
    const popularCategories = document.getElementById("popular-categories");
    if (moreCategories != null) {
      if (moreCategories.classList.contains("hidden")) {
        moreCategories.classList.remove("hidden");
        popularCategories?.classList.add("hidden");
      } else {
        moreCategories.classList.add("hidden");
        popularCategories?.classList.remove("hidden");
      }
    }
  };

  return (
    <div
      id="categories"
      className="z-40 bg-neutral-50 pt-2 mb-0 px-0 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
    >
      <div id="popular-categories" className="flex justify-normal items-center lg:hidden">
        <div className="flex max-w-3xl items-center overflow-x-scroll">
          {categories.slice(0, 5).map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
        <button
          id="see-more-catoegires"
          onMouseEnter={handleMouseEnterSeeMore}
          onMouseLeave={handleMouseLeaveSeeMore}
          onClick={handleShowMoreCategories}
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

      <div
        id="more-categories"
        className="hidden flex-normal items-center w-full lg:flex"
      >
        <div className="flex w-full lg:w-auto">
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-950 dark:text-neutral-50">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="search"
              id="default-search"
              className="appearance-none block w-full p-2 pl-10 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50 dark:focus:border-neutral-50 transition-all"
              placeholder="Find a category"
            />
          </div>
          <button
            id="see-more-catoegires"
            onClick={handleShowMoreCategories}
            className="w-fit text-xs lg:hidden sm:text-lg md:text-sm py-2 px-4 ms-1 sm:ms-2 rounded-lg border-2 border-neutral-950 bg-neutral-50 text-neutral-950 hover:cursor-pointer hover:rounded-sm dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 transition-all"
          >
            <span>
              <i className="fa-solid fa-xmark transition-all"></i>
            </span>
          </button>
        </div>
        <div className="flex justify-normal items-center flex-wrap lg:flex-nowrap lg:overflow-x-scroll">
          {categories.slice(0, 15).map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
