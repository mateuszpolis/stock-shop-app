import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Features/categories/Categories";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Categories />
      {/* <Offers />
      <Footer />  */}
    </div>
  );
}
