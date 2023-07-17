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

function ProductCardCart({
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

  const handleDecrement = (e: any) => {
    e.preventDefault();
    const id = e.target.id.split("-")[1];
    const productCount = document.getElementById(`product-count-${id}`);
    if (productCount) {
      const count = parseInt(productCount.innerText);
      if (count > 1) {
        productCount.innerText = (count - 1).toString();
      }
    }
  };

  const handleIncrement = (e: any) => {
    e.preventDefault();
    const id = e.target.id.split("-")[1];
    const productCount = document.getElementById(`product-count-${id}`);
    if (productCount) {
      const count = parseInt(productCount.innerText);
      productCount.innerText = (count + 1).toString();
    }
  };

  return (
    <div className="w-full h-24 p-2 grid grid-cols-4 justify-between items-center no-scrollbar rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700">
      <div className="h-20">
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
      <div className="text-xl flex flex-row justify-center items-center space-x-1">
        <button
          onClick={handleDecrement}
          className="text-neutral-500 dark:text-neutral-50 hover:text-neutral-950 dark:hover:text-neutral-50"
        >
          <i id={`decrement-${id}`} className="fa-solid fa-minus"></i>
        </button>
        <p
          id={`product-count-${id}`}
          className="text-neutral-500 dark:text-neutral-50"
        >
          1
        </p>
        <button
          onClick={handleIncrement}
          className="text-neutral-500 dark:text-neutral-50 hover:text-neutral-950 dark:hover:text-neutral-50"
        >
          <i id={`increment-${id}`} className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-2 justify-center items-center text-2xl dark:text-neutral-50">
        <button>
          <i
            id={`product-card-heart-id`}
            className="fa-regular fa-heart hover:text-red-600 transition-all"
          ></i>
        </button>
        <button>
          <i className="fa-solid fa-trash hover:text-neutral-800 dark:hover:text-neutral-200 transition-all"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCardCart;
