import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import ProductInfo from "../Features/productInfo/ProductInfo";
import SimiliarProducts from "../Features/similiarProducts/SimiliarProducts";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const productId = id ? parseInt(id) : 0;

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col xl:items-center min-h-screen">
      <NavBar />
      <ProductInfo id={productId} />
      <SimiliarProducts />
      <Footer />
    </div>
  );
}

export default Product;
