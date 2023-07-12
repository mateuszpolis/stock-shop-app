import React from "react";
import ProductCardSmall from "../../Components/ProductCardSmall";
import { Link } from "react-router-dom";

function Wishlist() {
  const handleToggleWishlist = () => {
    const wishlist = document.getElementById("wishlist");
    const wishlistTip = document.getElementById("wishlist-tip");
    const wishlistToggler = document.getElementById("wishlistToggler");
    if (wishlist) {
      if (wishlist.classList.contains("hidden")) {
        wishlist.classList.remove("hidden");
        wishlistTip?.classList.remove("hidden");
        wishlistToggler?.classList.add("text-red-600");
      } else {
        wishlist.classList.add("hidden");
        wishlistTip?.classList.add("hidden");
        wishlistToggler?.classList.remove("text-red-600");
      }
    }
  };

  return (
    <div>
      <i
        id="wishlistToggler"
        onClick={handleToggleWishlist}
        className="fa-solid fa-heart hover:text-red-600 cursor-pointer transition-all"
      ></i>
      <span className="absolute -top-1 -right-2 text-xs text-gray-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
        2
      </span>
      <div
        id="wishlist-tip"
        className="absolute hidden p-2 z-90 w-6 h-6 bg-gray-200 rotate-45 dark:bg-gray-700"
      ></div>
      <div
        id="wishlist"
        className="hidden absolute p-2 z-90 -right-20 rounded-lg bg-gray-200 shadow-lg shadow-gray-400 dark:bg-gray-700 dark:shadow-none"
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
  );
}

export default Wishlist;
