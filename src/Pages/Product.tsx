import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProductInfo from "../Features/productInfo/ProductInfo";
import SimiliarProducts from "../Features/similiarProducts/SimiliarProducts";

function Product() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900">
      <NavBar />
      <ProductInfo />
      <SimiliarProducts />
      <Footer />
    </div>
  );
}

export default Product;
