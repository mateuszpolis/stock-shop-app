import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import AuthVerify from "./services/AuthVerify";
import ProfileEdit from "./Pages/ProfileEdit";
import PrivateRoute from "./Components/PrivateRoute";
import ScrollUp from "./Components/ScrollUp";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin/Admin";
import AdminProducts from "./Pages/Admin/AdminProducts";
import NavBarComputer from "./Common/NavBar/NavBarComputer/NavBarComputer";

function  App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div 
      id="App"
      className="z-50"
    >
      {isAdminPage ? null : <NavBarComputer />}
      <div className="mt-32"></div>
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
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <PrivateRoute>
              <ProfileEdit />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />

      <ScrollUp />
      <AuthVerify />
    </div>
  );
}

export default App;
