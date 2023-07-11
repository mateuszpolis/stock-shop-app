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
      {/* <Footer /> */}
    </div>
  );
}
