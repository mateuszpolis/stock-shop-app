import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";
import ProductCardList from "../../Components/ProductCardList";
import FiltersCategoriesSide from "../../Components/FiltersCategoriesSide";
import {
  loadProducts,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  selectProducts,
} from "./searchResultsSlice";
import { AppDispatch } from "../../Store/store";

type Product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  categories?: string;
  rating: number;
  img?: string;
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

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [distanceFromTop, setDistanceFromTop] = useState<number>(0);

  useEffect(() => {
    if (elementRef.current) {
      const { top } = elementRef.current.getBoundingClientRect();
      const distanceFromTop = top + window.scrollY;
      setDistanceFromTop(distanceFromTop);
    }
  }, []);

  const remainingHeight = `calc(80vh - ${distanceFromTop}px)`;

  if (isLoading) {
    productsDiv = <div>Loading...</div>;
  } else if (failedLoading) {
    productsDiv = <div>Failed to load products</div>;
  } else if (hasLoaded) {
    productsDiv = (
      <div
        style={{ height: `calc(${remainingHeight})` }}
        className={`relative flex space-y-2 flex-col overflow-y-scroll snap-y snap-mandatory no-scrollbar`}
      >
        {products.map((product: Product) => (
          <ProductCardList
            key={product.id}
            id={product.id}
            name={product.name}
            producer={product.producer}
            price={product.price}
            price_before={product.price_before}
            categories={product.categories}
            rating={product.rating}
            img={product.img}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-[2fr_4fr] lg:gap-5 lg:p-5">
      <div className="hidden lg:block">
        <FiltersCategoriesSide />
      </div>
      <div id="search-resulst" className="p-5 pt-0 lg:p-0" ref={elementRef}>
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          {nOfResults} results for "{searchTerm}"
        </h2>
        {productsDiv}
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
