import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default App;
