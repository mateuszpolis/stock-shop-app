import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Features/categories/Categories";
import Offers from "../Features/offers/Offers";
import Bestsellers from "../Features/bestsellers/Bestsellers";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <Categories />
      <Offers />
      <Bestsellers />
      <Footer />
    </div>
  );
}
