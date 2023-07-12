import React from "react";
import ProductCard from "../../Components/ProductCard";

function Bestsellers() {
  return (
    <div className="p-3 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-black mb-2 text-gray-900 dark:text-gray-50">
        Our Bestsellers <i className="fa-solid fa-percent"></i>
      </h1>
      <div className="flex justify-normal items-center overflow-x-scroll">
        <ProductCard
          id={1}
          name="iPhone 14 pro"
          description="Apple"
          price_current={799}
          categories={["Smartphones", "Apple"]}
          image="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <ProductCard
          id={2}
          name="Magic Mouse"
          description="Apple"
          price_current={49}
          price_before={59}
          discount={10}
          categories={["Accessories", "Mice", "Apple"]}
          image="https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_1280.jpg"
        />
        <ProductCard
          id={3}
          name="iMac 27inch"
          description="Apple"
          price_current={1799}
          categories={["Desktops", "Apple"]}
          image="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
        />
        <ProductCard
          id={4}
          name="Printer"
          description="Samsung"
          price_current={79}
          categories={["Printers", "Samsung"]}
          image="https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_1280.jpg"
        />
      </div>
    </div>
  );
}

export default Bestsellers;
