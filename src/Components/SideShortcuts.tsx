import React from "react";
import { Link } from "react-router-dom";

function SideShortcuts() {
  return (
    <div className="hidden lg:flex w-1/2 lg:p-2 items-center justify-center flex-col dark:text-neutral-50">
      <h1 className="text-2xl font-semibold">Go to</h1>
      <div className="flex flex-col justify-center items-center w-[80%] space-y-3 rounded-lg border-y-2">
        <Link
          to="/"
          className="flex space-x-2 justify-center items-center w-full h-14 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg"
        >
          <span>Home</span>
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link
          to="/wishlist"
          className="flex space-x-2  justify-center items-center w-full h-14 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg"
        >
          <span>Wishlist</span> <i className="fa-solid fa-heart"></i>
        </Link>
        <Link
          to="/cart"
          className="flex  space-x-2 justify-center items-center w-full h-14 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg"
        >
          <span>Cart</span> <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link
          to="/profile"
          className="flex  space-x-2 justify-center items-center w-full h-14 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg"
        >
          <span>Profile</span> <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
}

export default SideShortcuts;
