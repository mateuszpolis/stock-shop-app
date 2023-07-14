import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProductInfo from "../Features/productInfo/ProductInfo";

function Product() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900">
      <NavBar />
      <ProductInfo />
      <Footer />
    </div>
  );
}

export default Product;
