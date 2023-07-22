import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";

function App() {
  return (
    <div id="App" className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
      <div
        id="notifications-container"
        className="z-50 fixed top-6 right-4 h-full flex flex-col justify-start items-end space-y-2 transition-all"
      ></div>
    </div>
  );
}

export default App;
