import React from "react";
import ProductInfo from "../Features/product/ProductInfo";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams();
  const productId = id ? parseInt(id) : 0;

  return <ProductInfo id={productId} />;
}

export default Product;
