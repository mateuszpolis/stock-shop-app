import React from "react";
import ProductCard from "../../Components/ProductCard";

function Offers() {
  return (
    <div className="p-3 bg-neutral-50 dark:bg-neutral-900 relative z-10">
      <h1 className="text-center font-mono text-4xl font-black mb-2 text-neutral-900 dark:text-neutral-50">
        ON SALE
      </h1>
      <div className="flex justify-normal items-center overflow-x-scroll">
        <ProductCard
          id={1}
          name="iPhone 14 pro"
          producer="Apple"
          price_before={999}
          price={799}
          discount={20}
          categories={["Smartphones", "Apple"]}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <ProductCard
          id={2}
          name="Macbook Pro 16inch"
          producer="Apple"
          price_before={1999}
          price={1799}
          discount={10}
          categories={["Laptops", "Apple"]}
          img="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
        />
        <ProductCard
          id={3}
          name="iMac 27inch"
          producer="Apple"
          price_before={1999}
          price={1799}
          discount={10}
          categories={["Desktops", "Apple"]}
          img="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
        />
        <ProductCard
          id={4}
          name="Printer"
          producer="Samsung"
          price_before={99}
          price={79}
          discount={20}
          categories={["Printers", "Samsung"]}
          img="https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_1280.jpg"
        />
        <ProductCard
          id={5}
          name="Playstation 5"
          producer="Sony"
          price_before={499}
          price={399}
          discount={20}
          categories={["Consoles", "Sony"]}
          img="https://cdn.pixabay.com/photo/2020/10/15/07/45/playstation-5656248_1280.jpg"
        />
        <ProductCard
          id={6}
          name="Xbox One"
          producer="Microsoft"
          price_before={499}
          price={399}
          discount={20}
          categories={["Consoles", "Microsoft"]}
          img="https://cdn.pixabay.com/photo/2017/04/04/18/19/video-game-console-2202666_1280.jpg"
        />
      </div>
    </div>
  );
}

export default Offers;
