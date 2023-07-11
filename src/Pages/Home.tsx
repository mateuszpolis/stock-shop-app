import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Features/categories/Categories";
import Offers from "../Features/offers/Offers";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Categories />
      <Offers />
      <div className="h-96 w-full">t</div>
      <div className="h-96 w-full">t</div>
      {/* <Footer /> */}
    </div>
  );
}
