import React from "react";
import SearchBar from "../Features/searchBar/SearchBar";
import { Link } from "react-router-dom";
import ProductCardSmall from "./ProductCardSmall";

function NavBar(): JSX.Element {
  let firstYOffset: number = window.scrollY;
  window.addEventListener("scroll", () => {
    let secondYOffset: number = window.scrollY;
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 50 && secondYOffset > firstYOffset) {
        navbar.classList.add("shadow-md");
        navbar.classList.add("shadow-gray-400");
        navbar.classList.add("py-1");
      } else {
        navbar.classList.remove("shadow-md");
        navbar.classList.remove("shadow-gray-400");
        navbar.classList.remove("py-1");
      }
      firstYOffset = secondYOffset;
    }
  });

  const handleToggleWishlist = () => {
    const wishlist = document.getElementById("wishlist");
    const wishlistToggler = document.getElementById("wishlistToggler");
    if (wishlist) {
      if (wishlist.classList.contains("hidden")) {
        wishlist.classList.remove("hidden");
        wishlistToggler?.classList.add("text-red-600");
      } else {
        wishlist.classList.add("hidden");
        wishlistToggler?.classList.remove("text-red-600");
      }
    }
  };

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
          <i
            id="wishlistToggler"
            onClick={handleToggleWishlist}
            className="fa-solid fa-heart hover:text-red-600 cursor-pointer transition-all"
          ></i>
          <span className="absolute -top-1 -right-2 text-xs text-gray-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
            2
          </span>
          <div
            id="wishlist"
            className="hidden absolute p-2 z-90 -right-20 rounded-lg bg-gray-200 shadow-lg shadow-gray-400 dark:bg-gray-800 dark:shadow-none"
          >
            <div className="max-h-96 overflow-y-scroll overscroll-contain">
              <ProductCardSmall
                id={1}
                name="iPhone 14 pro"
                description="Apple"
                price={799}
                image="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
              />
              <ProductCardSmall
                id={2}
                name="Macbook Pro 16inch"
                description="Apple"
                price={1799}
                image="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
              />
              <ProductCardSmall
                id={3}
                name="iMac 27inch"
                description="Apple"
                price={1799}
                image="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
              />
            </div>
            <div className="flex space-between">
              <Link to={`/cart`}>
                <span className="font-bold text-lg text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50 hover:cursor-pointer transition-all">
                  Go to cart <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </Link>
            </div>
          </div>
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
