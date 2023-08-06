import React, { useEffect } from "react";
import CartContent from "../Features/cart/CartContent";

function Cart() {
  useEffect(() => {
    document.title = "StockShop | Cart";
  }, []);

  return <CartContent />;
}

export default Cart;
