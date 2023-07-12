import React from "react";
import Category from "../../Components/Category";

function Categories() {
  let firstYOffset: number = window.scrollY;
  window.addEventListener("scroll", () => {
    let secondYOffset: number = window.scrollY;
    const categories = document.getElementById("categories");
    const categoriesList = document.getElementsByClassName("category-top");
    const seeMore = document.getElementById("see-more-catoegires");
    if (categories) {
      if (window.scrollY > 20 && secondYOffset > firstYOffset) {
        categories.classList.add("py-1");
        categories.classList.add("top-16");
        categories.classList.remove("top-20");
        seeMore?.classList.add("py-1");
        seeMore?.classList.add("px-2");
        seeMore?.classList.add("ms-1");
        seeMore?.classList.remove("py-2");
        seeMore?.classList.remove("px-4");
        seeMore?.classList.remove("ms-2");
        for (let i = 0; i < categoriesList.length; i++) {
          categoriesList[i].classList.add("py-1");
          categoriesList[i].classList.add("px-2");
          categoriesList[i].classList.add("ms-1");
          categoriesList[i].classList.remove("ms-2");
          categoriesList[i].classList.remove("py-2");
          categoriesList[i].classList.remove("px-4");
        }
      } else {
        categories.classList.remove("py-1");
        categories.classList.remove("top-16");
        categories.classList.add("top-24");
        seeMore?.classList.remove("py-1");
        seeMore?.classList.remove("px-2");
        seeMore?.classList.remove("ms-1");
        seeMore?.classList.add("py-2");
        seeMore?.classList.add("px-4");
        seeMore?.classList.add("ms-2");
        for (let i = 0; i < categoriesList.length; i++) {
          categoriesList[i].classList.remove("py-1");
          categoriesList[i].classList.remove("px-2");
          categoriesList[i].classList.remove("ms-1");
          categoriesList[i].classList.add("ms-2");
          categoriesList[i].classList.add("py-2");
          categoriesList[i].classList.add("px-4");
        }
      }
      firstYOffset = secondYOffset;
    }
  });

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
      className="sticky top-20 z-40 flex justify-normal items-center bg-gray-50 p-3 text-gray-950 dark:bg-gray-900 dark:text-gray-50 transition-all"
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
        className="w-fit py-2 px-4 ms-2 rounded-lg border-2 border-gray-950 bg-gray-50 text-gray-950 hover:cursor-pointer hover:rounded-sm dark:border-gray-50 dark:bg-gray-900 dark:text-gray-50 transition-all"
      >
        See more{" "}
        <i
          className="fa-solid fa-arrow-right transition-all"
          id="see-more-arrow-right"
        ></i>
      </button>
    </div>
  );
}

export default Categories;
