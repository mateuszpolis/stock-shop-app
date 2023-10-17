import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLoggedIn } from "../../../Features/login/loginSlice";
import { selectTotalQuantity } from "../../../Features/cart/cartSlice";
import { selectNumberOfElements } from "../../../Features/wishlist/wishlistSlice";
import LoginFormNav from "./LoginFormNav";

function NavBarIcons() {
  const isLoggedin = useSelector(selectLoggedIn);
  const cartQuantity: number = useSelector(selectTotalQuantity);
  const wishlistQuantity: number = useSelector(selectNumberOfElements);

  const [showLogin, setShowLogin] = useState(false);
  const [clickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    const closeLoginFormNav = () => {
      if (showLogin) {
        setShowLogin(false);
      }
    };

    if (clickOutside) {
      document.addEventListener("click", closeLoginFormNav);
    } else {
      document.removeEventListener("click", closeLoginFormNav);
    }
    return () => {
      document.removeEventListener("click", closeLoginFormNav);
    };
  }, [clickOutside, showLogin]);

  return (
    <div className="flex text-3xl justify-between items-center space-x-1">
      <div className="relative">
        {isLoggedin ? (
          <Link
            to="/profile"
            className="hover:bg-neutral-100 hover:text-primary p-3 cursor-pointer rounded-lg relative"
          >
            <div>
              <span className="material-symbols-outlined text-3xl">person</span>
            </div>
          </Link>
        ) : (
          <div
            className={`hover:bg-neutral-100 hover:text-primary p-3 cursor-pointer rounded-lg relative ${
              showLogin ? "rounded-b-none bg-neutral-100" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setShowLogin(true);
              setClickOutside(true);
            }}
          >
            <div>
              <span className="material-symbols-outlined text-3xl">
                person_add
              </span>
            </div>
          </div>
        )}
        {showLogin && <LoginFormNav />}
      </div>

      <Link
        to="/wishlist"
        className="hover:text-red-600 hover:bg-neutral-100 p-3 cursor-pointer rounded-lg relative"
      >
        <span className="material-symbols-outlined text-3xl">favorite</span>
        <span className="absolute top-1 right-1 text-xs text-neutral-50 bg-red-600 rounded-full w-4 h-4 flex justify-center items-center">
          {wishlistQuantity}
        </span>
      </Link>
      <Link
        to="/cart"
        className="hover:text-primary hover:bg-neutral-100 p-3 cursor-pointer rounded-lg relative"
      >
        <span className="material-symbols-outlined text-3xl">
          shopping_cart
        </span>
        <span className="absolute top-1 right-1 text-xs text-neutral-50 bg-green-600 rounded-full w-4 h-4 flex justify-center items-center">
          {cartQuantity}
        </span>
      </Link>
    </div>
  );
}

export default NavBarIcons;
