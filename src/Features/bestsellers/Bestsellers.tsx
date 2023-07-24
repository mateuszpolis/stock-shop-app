import React from "react";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router-dom";

function Bestsellers() {
  return (
    <div className="p-5">
      <div className="p-5 bg-neutral-900 dark:bg-neutral-50 relative z-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-neutral-50 dark:text-neutral-950">
          Bestsellers
        </h1>
        <div className="flex justify-normal items-center overflow-x-scroll snap-x snap-mandatory no-scrollbar">
          <ProductCard
            id={1}
            name="iPhone 14 pro"
            producer="Apple"
            price={799}
            categories={["Smartphones", "Apple"]}
            img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
          />
          <ProductCard
            id={2}
            name="Magic Mouse"
            producer="Apple"
            price={49}
            price_before={59}
            categories={["Accessories", "Mice", "Apple"]}
            img="https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_1280.jpg"
          />
          <ProductCard
            id={3}
            name="iMac 27inch"
            producer="Apple"
            price={1799}
            categories={["Desktops", "Apple"]}
            img="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
          />
          <ProductCard
            id={4}
            name="Printer"
            producer="Samsung"
            price={79}
            categories={["Printers", "Samsung"]}
            img="https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_1280.jpg"
          />
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

export default Bestsellers;
