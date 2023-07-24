import React from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="p-5">
      <div className="p-5 bg-neutral-900 dark:bg-neutral-50 relative z-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-neutral-50 dark:text-neutral-950">
          Products on Sale
        </h1>
        <div className="flex justify-normal items-center overflow-x-scroll snap-x snap-mandatory no-scrollbar">
          <ProductCard
            id={1}
            name="iPhone 14 Pro"
            producer="Apple"
            price_before={999}
            price={799}
            categories={["Smartphones", "Apple"]}
            img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
          />
          <ProductCard
            id={2}
            name="Macbook Pro 16-inch"
            producer="Apple"
            price_before={1999}
            price={1799}
            categories={["Laptops", "Apple"]}
            img="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
          />
          {/* Add more ProductCard components as needed */}
        </div>
        <Link to="/search">
          <div className="">
            <span className="font-bold text-lg text-neutral-300 dark:text-neutral-600 hover:text-neutral-50 hover:dark:text-neutral-950 hover:cursor-pointer transition-all">
              See more <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Offers;
