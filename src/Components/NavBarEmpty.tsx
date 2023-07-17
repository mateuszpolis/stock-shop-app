import React from "react";
import { Link } from "react-router-dom";

function NavBar(): JSX.Element {
  return (
    <div
      id="navbar"
      className="flex flex-col sticky top-0 px-5 py-10 transition-all bg-neutral-50 dark:bg-neutral-900 z-50"
    >
      <Link to="/">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-display dark:text-neutral-50">
          StockShop
        </h1>
      </Link>
    </div>
  );
}

export default NavBar;
