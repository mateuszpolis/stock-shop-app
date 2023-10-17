import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../../Features/login/loginSlice";
import { selectTotalQuantity } from "../../../Features/cart/cartSlice";
import { selectNumberOfElements } from "../../../Features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import NavBarIcons from "../NavBarIcons/NavBarIcons";

function NavBarComputer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all fixed top-0 w-full flex items-center justify-center h-24 z-50 bg-neutral-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-full max-w-[1280px] h-full flex items-center justify-around space-x-10 z-50">
        <Link to="/" className="h-full flex items-center justify-center">
          <img
            src="/Images/PRESS_BAR_LOGO.png"
            alt="logo"
            className="h-full max-h-16"
          />
        </Link>
        <SearchBar />
        <NavBarIcons />
      </div>
    </div>
  );
}

export default NavBarComputer;
