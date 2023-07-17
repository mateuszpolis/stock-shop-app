import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

type Props = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

function ProductCardWishlist({
  id,
  name,
  producer,
  price,
  price_before,
  img,
}: Props) {
  let priceP;
  if (price_before != null) {
    priceP = (
      <p className="text-neutral-500 text-sm dark:text-neutral-300">
        Price:{" "}
        <span className="line-through text-neutral-400">${price_before}</span> $
        {price}
      </p>
    );
  } else {
    priceP = (
      <p className="text-neutral-500 text-sm dark:text-neutral-300">
        Price: ${price}
      </p>
    );
  }

  return (
    <div className="w-full h-28 p-2 flex justify-between items-center no-scrollbar rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <div className="h-full">
        <Link to={`/product/${id}`}>
          <img
            alt={name}
            src={img ? img : picture}
            className="h-full aspect-square object-cover object-center"
          />
        </Link>
      </div>
      <Link to={`/product/${id}`}>
        <div>
          <h1 className="font-bold text-lg dark:text-neutral-50">{name}</h1>
          <p className="text-neutral-500 text-sm dark:text-neutral-300">
            {producer}
          </p>
          {priceP}
        </div>
      </Link>
      <div className="flex flex-col md:flex-row md:space-x-2 justify-center items-center text-2xl dark:text-neutral-50">
        <button>
          <i
            id={`product-card-heart-id`}
            className="fa-solid fa-heart-broken hover:text-red-600 transition-all"
          ></i>
        </button>
        <AddToCartButton
          children={
            <i className="fa-solid fa-cart-plus hover:text-green-500 transition-all"></i>
          }
        />
      </div>
    </div>
  );
}

export default ProductCardWishlist;
