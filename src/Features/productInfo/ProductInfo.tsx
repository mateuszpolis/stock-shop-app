import React from "react";
import Gallery from "../../Components/Gallery";

function ProductInfo() {
  const images: string[] = [
    "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg",
  ];

  return (
    <div className="p-5 flex flex-col">
      <div className="flex justify-normal items-center">
        <Gallery images={images} />
      </div>
      <div></div>
    </div>
  );
}

export default ProductInfo;
