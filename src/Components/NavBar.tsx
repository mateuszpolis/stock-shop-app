import React from "react";
import SearchBar from "../Features/searchBar/SearchBar";
import { Link } from "react-router-dom";
import Wishlist from "../Features/wishlist/Wishlist";

function NavBar(): JSX.Element {
  let firstYOffset: number = window.scrollY;
  window.addEventListener("scroll", () => {
    let secondYOffset: number = window.scrollY;
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 20 && secondYOffset > firstYOffset) {
        navbar.classList.add("py-1");
      } else {
        navbar.classList.remove("py-1");
      }
      firstYOffset = secondYOffset;
    }
  });

  return (
    <div
      id="navbar"
      className="flex sticky z-50 top-0 justify-between items-center p-5 text-2xl text-gray-950 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 transition-all"
    >
      <div className="text-4xl font-black font-display">StockShop</div>
      <SearchBar />
      <div className="flex justify-between space-x-10 mr-5">
        <div className="hover:text-gray-500 dark:hover:text-gray-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="relative">
          <Wishlist />
        </div>
        <div className="relative hover:text-gray-500 dark:hover:text-gray-200  cursor-pointer transition-all">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="absolute -top-1 -right-2 text-xs text-gray-50 bg-green-500 rounded-full w-4 h-4 flex justify-center items-center">
            5
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
