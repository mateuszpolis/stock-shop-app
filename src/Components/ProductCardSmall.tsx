import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
};

function ProductCardSmall({ id, name, description, price, image }: Props) {
  return (
    <Link to={`/product/${id}`}>
      <div className="relative mb-2 p-2 rounded-lg flex justify-between items-center border-2 border-gray-300 overflow-hidden w-96 h-20 z-30 hover:bg-gray-300 dark:hover:bg-gray-800 dark:border-gray-800 transition-all">
        <img
          alt={name}
          src={image ? image : picture}
          className="object-cover flex-shrink-0 rounded-lg object-left h-full w-20"
        />
        <div className="flex-shrink-0">
          <h1 className="font-bold text-sm">{name}</h1>
          <p className="text-gray-500 text-xs">{description}</p>
          <p className="text-gray-500 text-xs">Price: ${price}</p>
        </div>
        <div className="flex justify-center flex-shrink-0 flex-col text-lg">
          <button>
            <i className="fa-solid fa-cart-plus hover:text-green-500 transition-all"></i>
          </button>
          <button>
            <i
              onMouseEnter={() => {
                const heart = document.getElementById(
                  `whislist-card-heart-${id}`
                );
                if (heart) {
                  heart.classList.remove("fa-heart");
                  heart.classList.add("fa-heart-broken");
                }
              }}
              onMouseLeave={() => {
                const heart = document.getElementById(
                  `whislist-card-heart-${id}`
                );
                if (heart) {
                  heart.classList.remove("fa-heart-broken");
                  heart.classList.add("fa-heart");
                }
              }}
              id={`whislist-card-heart-${id}`}
              className="fa-solid fa-heart hover:text-red-600 transition-all"
            ></i>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCardSmall;
