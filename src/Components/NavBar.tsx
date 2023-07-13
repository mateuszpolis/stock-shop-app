import React from "react";
import SearchBar from "../Features/searchBar/SearchBar";
import { Link } from "react-router-dom";
import Wishlist from "../Features/wishlist/Wishlist";
import Categories from "../Features/categories/Categories";

function NavBar(): JSX.Element {
  return (
    <div
      id="navbar"
      className="flex flex-col sticky top-0 p-5 transition-all bg-gray-50 dark:bg-gray-900 z-50"
    >
      <div className="flex flex-col space-y-2 sm:flex-row justify-between mb-2 items-center text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-950 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 transition-all">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <div className="text-3xl sm:hidden hover:text-gray-500 dark:hover:text-gray-200 cursor-pointer transition-all">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-display">
              StockShop
            </h1>
          </div>
          <div className="flex sm:hidden justify-normal items-center space-x-3 text-3xl">
            <div className="relative">
              <Link to="/wishlist">
                <i
                  id="wishlistToggler"
                  className="fa-solid fa-heart hover:text-red-600 cursor-pointer transition-all"
                ></i>
                <span className="absolute -top-1 -right-2 text-xs text-gray-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
                  2
                </span>
              </Link>
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
        <SearchBar />
        <div className="hidden sm:flex sm:text-2xl md:text-3xl justify-between space-x-2 sm:space-x-4 md:space-x-10 mr-5">
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
      <Categories />
    </div>
  );
}

export default NavBar;
