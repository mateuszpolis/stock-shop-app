import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";
import ProductCardList from "../../Components/ProductCardList";
import {
  loadProducts,
  selectError,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  selectProducts,
  selectSearchParams,
  setSearchParams,
} from "./searchResultsSlice";
import { AppDispatch } from "../../Store/store";
import Loading from "../../Components/Loading";
import { Product } from "../../Models/Product";
import { useLocation } from "react-router";

function SearchResults() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("searchQuery");
    const limit = queryParams.get("limit");
    const category = queryParams.get("category");
    const sorting = queryParams.get("sorting");

    dispatch(
      setSearchParams({
        searchQuery: searchTerm,
        limit: limit,
        category: category,
        sorting: sorting,
      })
    );
    dispatch(loadProducts());
  }, [dispatch, location.search]);

  const products: Product[] = useSelector(selectProducts);

  let productsDiv;
  const isLoading = useSelector(selectIsLoading);
  const failedLoading = useSelector(selectFailedLoading);
  const hasLoaded = useSelector(selectHasLoaded);

  const searchTerm = useSelector(selectSearchParams).searchQuery;
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
          <ProductCardList key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div id="relative search-resulst" className="p-5 pt-0" ref={elementRef}>
        <h2 className="text-2xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">
          {nOfResults} results for "{searchTerm}"
        </h2>
        {productsDiv}
        {isLoading && <Loading />}
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
