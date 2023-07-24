import React from "react";
import SearchBar from "../Features/searchBar/SearchBar";
import { Link } from "react-router-dom";
import Wishlist from "../Features/wishlist/Wishlist";
import Categories from "../Features/categories/Categories";
import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../Features/cart/cartSlice";
import { selectNumberOfElements } from "../Features/wishlist/wishlistSlice";

function NavBar(): JSX.Element {
  const loggedIn: boolean = false;
  const cartQuantity: number = useSelector(selectTotalQuantity);
  const wishlistQuantity: number = useSelector(selectNumberOfElements);

  let userIcon1;
  let userIcon2;
  if (loggedIn) {
    userIcon1 = (
      <Link to="/user">
        <div className="text-3xl sm:hidden hover:text-neutral-500 dark:hover:text-neutral-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
      </Link>
    );
    userIcon2 = (
      <Link to="/user">
        <div className="hover:text-neutral-500 dark:hover:text-neutral-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
      </Link>
    );
  } else {
    userIcon1 = (
      <Link to="/login">
        <div className="text-3xl sm:hidden hover:text-neutral-500 dark:hover:text-neutral-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
      </Link>
    );
    userIcon2 = (
      <Link to="/login">
        <div className="hover:text-neutral-500 dark:hover:text-neutral-200 cursor-pointer transition-all">
          <i className="fa-solid fa-user"></i>
        </div>
      </Link>
    );
  }

  return (
    <div
      id="navbar"
      className="flex flex-col sticky top-0 p-5 pb-1 transition-all bg-neutral-50 dark:bg-neutral-900 z-40"
    >
      <div className="flex flex-col space-y-2 sm:flex-row justify-between mb-2 items-center text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-950 bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 transition-all">
        <div className="flex justify-between items-center w-full sm:w-auto">
          {userIcon1}
          <div>
            <Link to="/">
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-display">
                StockShop
              </h1>
            </Link>
          </div>
          <div className="flex sm:hidden justify-normal items-center space-x-3 text-3xl">
            <div className="relative">
              <Link to="/wishlist">
                <i
                  id="wishlistToggler"
                  className="fa-solid fa-heart hover:text-red-600 cursor-pointer transition-all"
                ></i>
                <span className="absolute -top-1 -right-2 text-xs text-neutral-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
                  {wishlistQuantity}
                </span>
              </Link>
            </div>
            <div className="relative hover:text-neutral-500 dark:hover:text-neutral-200  cursor-pointer transition-all">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <span className="absolute -top-1 -right-2 text-xs text-neutral-50 bg-green-500 rounded-full w-4 h-4 flex justify-center items-center">
                {cartQuantity}
              </span>
            </div>
          </div>
        </div>
        <SearchBar />
        <div className="hidden sm:flex sm:text-2xl md:text-3xl justify-between space-x-2 sm:space-x-4 md:space-x-10 mr-5">
          {userIcon2}
          <div className="relative">
            <Wishlist />
          </div>
          <div className="relative hover:text-neutral-500 dark:hover:text-neutral-200  cursor-pointer transition-all">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span className="absolute -top-1 -right-2 text-xs text-neutral-50 bg-green-500 rounded-full w-4 h-4 flex justify-center items-center">
              {cartQuantity}
            </span>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default NavBar;
