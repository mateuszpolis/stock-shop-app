import React from "react";
import ProductCard from "../../Components/ProductCard";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";
import ProductCardList from "../../Components/ProductCardList";
import FiltersCategoriesSide from "../../Components/FiltersCategoriesSide";

const products = [
  {
    id: 1,
    name: "iPhone 14 pro",
    producer: "Apple",
    price: 799,
    categories: ["Smartphones", "Apple"],
    img: "https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg",
  },
  {
    id: 2,
    name: "Printer",
    producer: "HP",
    price: 99,
    price_before: 129,
    categories: ["Printers", "HP"],
    img: "https://cdn.pixabay.com/photo/2015/05/30/15/45/printer-790396_1280.jpg",
  },
  {
    id: 3,
    name: "Macbook Pro",
    producer: "Apple",
    price: 1299,
    categories: ["Laptops", "Apple"],
    img: "https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg",
  },
  {
    id: 4,
    name: "Macbook Pro",
    producer: "Apple",
    price: 1299,
    categories: ["Laptops", "Apple"],
    img: "https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_1280.jpg",
  },
];

function SearchResults() {
  const nOfResults: number = products.length;
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="lg:grid lg:grid-cols-[2fr_4fr] lg:gap-5 lg:p-5">
      <FiltersCategoriesSide />
      <div id="search-resulst" className="p-5 pt-0 lg:p-0">
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          {nOfResults} results for "{searchTerm}"
        </h2>
        <div className="relative h-[46vh] flex space-y-2 flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar">
          {products.map((product) => (
            <ProductCardList
              key={product.id}
              id={product.id}
              name={product.name}
              producer={product.producer}
              price={product.price}
              price_before={product.price_before}
              categories={product.categories}
              img={product.img}
            />
          ))}
        </div>
        {/* <div className="flex flex-row flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            producer={product.producer}
            price={product.price}
            price_before={product.price_before}
            categories={product.categories}
            img={product.img}
          />
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default SearchResults;
