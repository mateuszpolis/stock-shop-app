import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import WishlistContent from "../Features/wishlist/WishlistContent";

function Wishlist() {
  useEffect(() => {
    document.title = "StockShop | Wishlist";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col xl:items-center min-h-screen">
      <NavBar />
      <WishlistContent />
      <Footer />
    </div>
  );
}

export default Wishlist;
