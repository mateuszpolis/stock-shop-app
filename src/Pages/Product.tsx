import React from "react";
import ProductInfo from "../Features/productInfo/ProductInfo";
import SimiliarProducts from "../Features/similiarProducts/SimiliarProducts";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const productId = id ? parseInt(id) : 0;

  return (
    <div>
      <ProductInfo id={productId} />
      <SimiliarProducts />
    </div>
  );
}

export default Product;
