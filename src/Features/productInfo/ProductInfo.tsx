import React, { Attributes, useEffect } from "react";
import Gallery from "../../Components/Gallery";
import StarRating from "../../Components/StarRating";
import Review from "../../Components/Review";

function ProductInfo() {
  const images: string[] = [
    "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg",
  ];

  type AttributesType = {
    [key: string]: string;
  };

  const attributes: AttributesType = {
    Brand: "Apple",
    Model: "iPhone 13 Pro",
    Color: "Silver",
    Storage: "128GB",
    RAM: "8GB",
  };

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

  const handleToggleDescription = () => {
    const description = document.getElementById("description");
    const angle = document.getElementById("description-angle");
    if (description?.classList.contains("block")) {
      description?.classList.remove("block");
      description?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      description?.classList.add("block");
      description?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  const handleToggleSpecification = () => {
    const specification = document.getElementById("specification");
    const angle = document.getElementById("specification-angle");
    if (specification?.classList.contains("grid")) {
      specification?.classList.remove("grid");
      specification?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      specification?.classList.add("grid");
      specification?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  const handleToggleReviews = () => {
    const reviews = document.getElementById("reviews");
    const angle = document.getElementById("reviews-angle");
    if (reviews?.classList.contains("block")) {
      reviews?.classList.remove("block");
      reviews?.classList.add("hidden");
      angle?.classList.remove("fa-angle-up");
      angle?.classList.add("fa-angle-down");
    } else {
      reviews?.classList.add("block");
      reviews?.classList.remove("hidden");
      angle?.classList.add("fa-angle-up");
      angle?.classList.remove("fa-angle-down");
    }
  };

  const rating: number = 4.2;

  useEffect(() => {
    document.title = "StockShop | Product";
  }, []);

  return (
    <div className="p-5 pt-1 flex flex-col">
      <div className="flex justify-normal items-center">
        <Gallery images={images} />
      </div>
      <div className="grid grid-cols-3 mt-2">
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
      <div className="flex mt-3 justify-normal items-center flex-wrap">
        <div className="mr-2">
          <h2 className="text-xl font-semibold">iPhone 14 Pro</h2>
        </div>
        <StarRating rating={rating} review_id={0} />
        <a
          href="#reviews"
          className="font-mono underline text-xs text-gray-500 dark:text-gray-300 hover:no-underline"
        >
          (25 reviews)
        </a>
      </div>
      <div>
        <h1 className="mt-">
          Price: <span className="text-xl font-semibold">$999</span>
        </h1>
      </div>
      <div className="flex justify-around mt-2 items-center">
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
        <button className="p-5 group bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
          Add to cart{" "}
          <i
            id="product-card-cart"
            className="fa-solid fa-cart-plus group-hover:text-green-500 transition-all"
          ></i>
        </button>
      </div>
      <div className="mt-5">
        <div
          onClick={handleToggleDescription}
          className="relative flex items-center hover:cursor-pointer"
        >
          <h1 className="text-xl font-semibold">Description</h1>{" "}
          <i
            id="description-angle"
            className="fa-solid fa-angle-down transition-all"
          />
        </div>
        <div id="description" className="p-2 hidden">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia voluptate quod quos
            voluptatibus quas doloribus quidem fugiat. Quisquam voluptatum,
            quibusdam, voluptates, quia voluptate quod quos voluptatibus quas
            doloribus quidem fugiat. Quisquam voluptatum, quibusdam, voluptates,
            quia voluptate quod quos voluptatibus quas doloribus quidem fugiat.
            Quisquam voluptatum, quibusdam, voluptates, quia
          </p>
        </div>
        <div
          onClick={handleToggleSpecification}
          className="flex items-center hover:cursor-pointer"
        >
          <h1 className="text-xl font-semibold">Specification</h1>{" "}
          <i id="specification-angle" className="fa-solid fa-angle-down" />
        </div>
        <div id="specification" className="grid-cols-2 p-2 hidden">
          {Object.keys(attributes).map((key) => (
            <div key={key} className="grid grid-cols-2">
              <h1 className="text-sm font-semibold">{key}:</h1>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                {attributes[key]}
              </span>
            </div>
          ))}
        </div>
        <div
          onClick={handleToggleReviews}
          className="flex items-center hover:cursor-pointer"
        >
          <h1 className="text-xl font-semibold">
            Reviews{" "}
            <span className="text-base font-base text-gray-500 dark:text-gray-300">
              (25)
            </span>
          </h1>{" "}
          <i id="reviews-angle" className="fa-solid fa-angle-down" />
        </div>
        <div id="reviews" className="p-2 hidden">
          <Review
            author="John Doe"
            rating={4.5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia voluptate quod quos"
            review_id={1}
            date="2021-09-01"
            number_of_likes={0}
          />
          <Review
            author="John Doe"
            rating={3.5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptates, quia voluptate quod quos"
            review_id={2}
            date="2022-09-01"
            number_of_likes={2}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
