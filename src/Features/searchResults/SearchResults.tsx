import React from "react";
import ProductCard from "../../Components/ProductCard";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";
import ProductCardList from "../../Components/ProductCardList";

function SearchResults() {
  const nOfResults: number = Math.floor(Math.random() * 100);
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className="p-5 pt-0">
      <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
        {nOfResults} results for "{searchTerm}"
      </h2>
      <div className="relative h-80 flex space-y-2 flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        <ProductCardList
          id={1}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <ProductCardList
          id={2}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_1280.jpg"
        />
        <ProductCardList
          id={3}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"
        />
        <ProductCardList
          id={4}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <ProductCardList
          id={5}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
        <ProductCardList
          id={6}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
      </div>
      {/* Display grid */}
      {/* <div className="flex flex-row flex-wrap justify-center">
        <ProductCard
          id={1}
          name="iPhone 14 pro"
          producer="Apple"
          price={799}
          categories={["Smartphones", "Apple"]}
          img="https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479306_1280.jpg"
        />
      </div> */}
    </div>
  );
}

export default SearchResults;
