import React from "react";
import ProductCard from "../../Components/ProductCard";

function SimiliarProducts() {
  return (
    <div className="p-5 pt-0">
      <h1 className="text-xl lg:text-3xl font-bold dark:text-neutral-50 mb-2">You might also like:</h1>
      <div className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar">
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
      </div>
    </div>
  );
}

export default SimiliarProducts;
