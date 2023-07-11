import React from "react";
import picture from "../images/iphone14pro.webp";
import { Link } from "react-router-dom";
import { Offer } from "../Models/OfferModel";
import CategoryXs from "./CategoryXs";

function OfferCard({
  id,
  name,
  description,
  discount,
  price_before,
  price_current,
  categories,
  image,
}: Offer) {
  const handleAddToList = () => {
    const heart = document.getElementById(`product-card-heart-${id}`);
    if (heart?.classList.contains("fa-regular")) {
      heart?.classList.add("fa-solid");
      heart?.classList.add("text-red-600");
      heart?.classList.remove("fa-regular");
    } else {
      heart?.classList.add("fa-regular");
      heart?.classList.remove("text-red-600");
      heart?.classList.remove("fa-solid");
    }
  };

  return (
    <div className="relative shrink-0 mb-6 ml-2 mr-4 overflow-hidden rounded-lg h-80 w-60 bg-gray-200 shadow-lg shadow-gray-400 dark:bg-gray-800 dark:shadow-none">
      <img
        alt={name}
        className="absolute h-24 w-full object-cover object-top hover:h-64 transition-all z-20"
        src={image ? image : picture}
      />
      <div className="p-4 absolute top-24 z-10">
        <h1 className="font-bold text-lg dark:text-gray-50">{name}</h1>
        <p className="text-gray-500 dark:text-gray-300">{description}</p>
        <h1 className="font-bold text-2xl dark:text-gray-50">
          <i className="fa-solid fa-fire fa-shake text-orange-600 text-2xl"></i>{" "}
          Now <span className="text-3xl">{discount}%</span> off
        </h1>
        <p className="font-bold text-md dark:text-gray-50">
          Price:{" "}
          <span className="line-through text-gray-400 dark:text-gray-500">
            ${price_before}
          </span>{" "}
          ${price_current}
        </p>
        <p className="text-xs">
          <br />
        </p>
        <div className="flex justify-normal items-center">
          {categories?.map((category, index) => (
            <CategoryXs key={index} category={category} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 p-4 w-full z-10 flex justify-between items-center text-2xl dark:text-gray-50">
        <div>
          <Link to={`/product/${id}`}>
            <span className="font-bold text-lg text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50 hover:cursor-pointer transition-all">
              Go to <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </div>
        <div className="flex justify-normal">
          <button onClick={handleAddToList}>
            <i
              id={`product-card-heart-${id}`}
              className="fa-regular fa-heart hover:text-red-600 mr-2 transition-all"
            ></i>
          </button>
          <button>
            <i className="fa-solid fa-cart-plus hover:text-green-500 transition-all"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
