import React from "react";
import SearchBar from "../Features/searchBar/SearchBar";
import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <div className="flex justify-between items-center p-5 text-2xl text-gray-950 bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
      <div className="text-4xl font-black font-display">StockShop</div>
      <SearchBar />
      <div className="flex justify-between space-x-10 mr-5">
        <div className="hover:text-gray-500 dark:hover:text-gray-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="hover:text-red-600 cursor-pointer transition-all">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="hover:text-gray-500 dark:hover:text-gray-200  cursor-pointer transition-all">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
