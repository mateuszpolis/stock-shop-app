import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CartContent from "../Features/cart/CartContent";

function Cart() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col min-h-screen">
      <NavBar />
      <CartContent />
      <Footer />
    </div>
  );
}

export default Cart;
