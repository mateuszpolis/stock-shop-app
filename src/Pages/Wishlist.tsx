import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import WishlistContent from "../Features/wishlist/WishlistContent";

function Wishlist() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900">
      <NavBar />
      <WishlistContent />
      <Footer />
    </div>
  );
}

export default Wishlist;
