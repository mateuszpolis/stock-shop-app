import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Features/categories/Categories";
import Offers from "../Features/offers/Offers";
import Bestsellers from "../Features/bestsellers/Bestsellers";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Categories />
      <Offers />
      <Bestsellers />
      <div className="h-96 w-full">t</div>
      <div className="h-96 w-full">t</div>
      {/* <Footer /> */}
    </div>
  );
}
