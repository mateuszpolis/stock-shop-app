import React, { useEffect } from "react";
import Gallery from "../../Components/Gallery";
import StarRating from "../../Components/StarRating";
import Reviews from "../reviews/Reviews";
import Description from "../description/Description";
import Specification from "../specification/Specification";
import AddToCart from "../../Components/Modal/AddToCart";
import AddToCartButton from "../../Components/AddToCartButton";

function ProductInfo() {
  const images: string[] = [
    "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg",
  ];

  const handleAddToList = () => {
    const heart = document.getElementById(`product-card-heart`);
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

  const rating: number = 4.2;

  useEffect(() => {
    document.title = "StockShop | Product";
  }, []);

  return (
    <div className="p-5 pt-1 flex flex-col">
      <div className="lg:grid lg:grid-cols-2">
        <Gallery images={images} />
        <div className="lg:mt-24 lg:flex lg:items-center lg:flex-col lg:text-xl">
          <div className="grid grid-cols-3 lg:w-full mt-2 dark:text-neutral-50">
            <div className="text-center border-e-2 flex flex-col">
              <i className="fa-solid fa-circle-check"></i>
              <p className="text-xs">In stock</p>
            </div>
            <div className="text-center border-e-2 flex flex-col">
              <i className="fa-solid fa-truck"></i>
              <p className="text-xs">Shipping from: $0</p>
            </div>
            <div className="text-center flex flex-col">
              <i className="fa-solid fa-clock"></i>
              <p className="text-xs">Delivery: 24h</p>
            </div>
          </div>
          <div className="lg:p-10">
            <div className="flex flex-col gap-y-2 mt-3 justify-center items-start flex-wrap dark:text-neutral-50">
              <div className="flex justify-normal items-center">
                <StarRating rating={rating} review_id={0} />
                <a
                  href="#reviews"
                  className="font-mono underline text-xs text-gray-500 dark:text-gray-300 hover:no-underline"
                >
                  (25 reviews)
                </a>
              </div>
              <div className="mr-2">
                <h2 className="text-xl font-semibold">iPhone 14 Pro</h2>
              </div>
              <h1 className="mt-">
                Price: <span className="text-xl font-semibold">$999</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-around mt-2 items-center lg:w-full">
            <button
              onClick={handleAddToList}
              className="p-5 group bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
            >
              Add to list{" "}
              <i
                id={`product-card-heart`}
                className="fa-regular fa-heart group-hover:text-red-600 mr-2 transition-all"
              ></i>
            </button>
            <AddToCartButton
              children={
                <button className="p-5 group bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
                  Add to cart{" "}
                  <i
                    id="product-card-cart"
                    className="fa-solid fa-cart-plus group-hover:text-green-500 transition-all"
                  ></i>
                </button>
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-5 dark:text-neutral-50">
        <Description />
        <Specification />
        <Reviews />
      </div>
    </div>
  );
}

export default ProductInfo;
