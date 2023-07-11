import React from "react";
import OfferCard from "../../Components/OfferCard";

function Offers() {
  return (
    <div className="p-3 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-black mb-2 text-gray-900 dark:text-gray-50">
        Products currently on sale{" "}
        <i className="fa-solid fa-percent"></i>
      </h1>
      <div className="flex justify-normal items-center overflow-x-scroll">
        <OfferCard
          id={1}
          name="iPhone 14 pro"
          description="Apple"
          price_before={999}
          price_current={799}
          discount={20}
          categories={["Smartphones", "Apple"]}
          image="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <OfferCard
          id={2}
          name="Macbook Pro 16inch"
          description="Apple"
          price_before={1999}
          price_current={1799}
          discount={10}
          categories={["Laptops", "Apple"]}
          image="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
        />
        <OfferCard
          id={3}
          name="iMac 27inch"
          description="Apple"
          price_before={1999}
          price_current={1799}
          discount={10}
          categories={["Desktops", "Apple"]}
          image="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
        />
      </div>
    </div>
  );
}

export default Offers;
