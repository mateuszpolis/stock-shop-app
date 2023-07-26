import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Search from "./Pages/Search";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div id="App" className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search/:query?/:categories?/:sorting?/:filters?"
          element={<Search />}
        />
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
