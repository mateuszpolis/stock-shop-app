import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";
import ProductCardList from "../../Components/ProductCardList";
import FiltersCategoriesSide from "../../Components/FiltersCategoriesSide";
import {
  loadProducts,
  selectError,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  selectProducts,
} from "./searchResultsSlice";
import { AppDispatch } from "../../Store/store";
import Loading from "../../Components/Loading";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  priceHistory: number[];
  discount: number;
  stockQuantity: number;
  categories: string[];
  images: string[];
  reviews: string[];
  available: boolean;
  createdTime: string;
  updatedTime: string;
  weight: number; 
  dimensions: string;
  rating: number;
};

function SearchResults() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useSelector(selectProducts);

  let productsDiv;
  const isLoading = useSelector(selectIsLoading);
  const failedLoading = useSelector(selectFailedLoading);
  const hasLoaded = useSelector(selectHasLoaded);

  const searchTerm = useSelector(selectSearchTerm);
  const nOfResults = products.length;

  const error = useSelector(selectError);

  const elementRef = useRef<HTMLDivElement | null>(null);

  if (isLoading) {
    productsDiv = <div className="relative">Loading...</div>;
  } else if (failedLoading) {
    productsDiv = <div className="relative">{error}</div>;
  } else if (hasLoaded) {
    productsDiv = (
      <div
        className={`relative flex space-y-2 flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar`}
      >
        {products.map((product: Product) => (
          <ProductCardList
            key={product.id}
            id={product.id}
            name={product.name}
            producer={product.brand}
            price={product.price}
            price_before={product.priceHistory[product.priceHistory.length - 2]}
            categories={product.categories}
            rating={product.rating}
            img={product.images[0]}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-[2fr_4fr] lg:gap-5 lg:p-5 w-full xl:w-[1280px]">
      <div className="hidden lg:block">
        <FiltersCategoriesSide />
      </div>
      <div
        id="relative search-resulst"
        className="p-5 pt-0 lg:p-0"
        ref={elementRef}
      >
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          {nOfResults} results for "{searchTerm}"
        </h2>
        {productsDiv}
        {isLoading && (
          <Loading />
        )}
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
