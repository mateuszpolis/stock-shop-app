import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Features/categories/Categories";
import Offers from "../Features/offers/Offers";
import Bestsellers from "../Features/bestsellers/Bestsellers";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Categories />
      <Offers />
      <Bestsellers />
      <Footer />
    </div>
  );
}
