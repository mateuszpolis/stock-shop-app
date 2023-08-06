import React, { useEffect } from "react";
import WishlistContent from "../Features/wishlist/WishlistContent";

function Wishlist() {
  useEffect(() => {
    document.title = "StockShop | Wishlist";
  }, []);

  return <WishlistContent />;
}

export default Wishlist;
