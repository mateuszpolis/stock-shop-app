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

function AddToCartProductCard({
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
    <div className="w-full h-24 p-2 flex justify-around items-center no-scrollbar rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700">
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
    </div>
  );
}

export default AddToCartProductCard;
