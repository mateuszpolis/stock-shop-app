import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";

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
      <p className="text-neutral-500 text-sm">
        Price:{" "}
        <span className="line-through text-neutral-400 dark:text-neutral-500">
          ${price_before}
        </span>{" "}
        ${price}
      </p>
    );
  } else {
    priceP = <p className="text-neutral-500 text-sm">Price: ${price}</p>;
  }

  return (
    <div className="w-full h-28 p-2 flex justify-between items-center no-scrollbar">
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
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-neutral-500 text-sm">{producer}</p>
          {priceP}
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center text-2xl">
        <button>
          <i
            id={`product-card-heart-id`}
            className="fa-solid fa-heart-broken hover:text-red-600 transition-all"
          ></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-plus hover:text-green-500 transition-all"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCardWishlist;
