import React from "react";
import ProductCardSmall from "../../Components/ProductCardSmall";
import { Link } from "react-router-dom";

function Wishlist() {
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
    <div className="relative">
      <i
        id="wishlistToggler"
        onClick={handleToggleWishlist}
        className="fa-solid fa-heart hover:text-red-600 cursor-pointer transition-all"
      ></i>
      <span className="absolute -top-1 -right-2 text-xs text-neutral-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
        2
      </span>
      <div
        id="wishlist"
        className="absolute hidden p-2 z-50 -right-14 rounded-lg bg-neutral-200 shadow-lg shadow-neutral-400 dark:bg-neutral-700 dark:shadow-none"
      >
        <div className="max-h-96 z-50 overflow-y-scroll overscroll-contain">
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
            price_before={1999}
            image="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
          />
        </div>
        <div className="flex space-between">
          <Link to={`/wishlist`}>
            <span className="font-bold text-lg text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 hover:cursor-pointer transition-all">
              Go to wishlist <i className="fa-solid fa-cart-shopping"></i>{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
