import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkIfSearchQueryIsEmpty,
  fetchCategories,
  fetchProducts,
  selectCategories,
  selectHasLoadedCategories,
  selectHasLoadedProducts,
  selectProducts,
  selectSearchTerm,
} from "./searchBarSlice";
import { updateSearchBar } from "./searchBarSlice";
import { AppDispatch } from "../../../Store/store";
import { useNavigate } from "react-router-dom";
import FilterCategories from "../../../Features/sortFilter/FilterCategoriesButton";
import AddToCartProductCard from "../../../Components/AddToCartProductCard";
import { AnimatePresence, motion } from "framer-motion";
import {
  selectSearchParams,
  setSearchParams,
} from "../../../Features/searchResults/searchResultsSlice";

export default function SearchBar(): JSX.Element {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [searchActive, setSearchActive] = React.useState(false);

  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  const searchParams = useSelector(selectSearchParams);
  const limit = searchParams.limit;
  const category = searchParams.category;
  const sorting = searchParams.sorting;

  const hasLoadedProducts = useSelector(selectHasLoadedProducts);
  const hasLoadedCategories = useSelector(selectHasLoadedCategories);

  useEffect(() => {
    dispatch(checkIfSearchQueryIsEmpty());
    if (searchTerm !== "") {
      dispatch(fetchProducts());
    }
  }, [dispatch, searchTerm]);

  useEffect(() => {
    if (hasLoadedProducts && products.length > 0 && products[0] != null) {
      dispatch(fetchCategories(products[0].categoryId));
    }
  }, [dispatch, hasLoadedProducts, products]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userInput: string = event.currentTarget.value;
    dispatch(updateSearchBar(userInput));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = searchTerm;

    const queryOptions = {
      searchQuery: encodeURIComponent(searchQuery),
      limit: encodeURIComponent(limit),
      category: encodeURIComponent(category),
      sorting: encodeURIComponent(sorting),
    };
    const queryString = new URLSearchParams(queryOptions).toString();
    navigate(`/search?${queryString}`);
    dispatch(setSearchParams({ searchQuery: searchTerm }));
  };

  return (
    <div className="relative">
      <form
        onClick={() => {
          setSearchActive(true);
        }}
        onBlur={() => {
          setSearchActive(false);
        }}
        onSubmit={handleSubmit}
      >
        <div className="relative w-[450px]">
          <input
            type="search"
            autoComplete="off"
            id="default-search"
            className="relative appearance-none block w-full p-4 text-base border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 transition-all"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
            required={true}
          />
          <div className="absolute right-2.5 bottom-2.5 flex shadow-md rounded-lg">
            <FilterCategories>
              <div className="h-full bg-neutral-50 border-e-0 px-4 py-2 hover:bg-primary hover:text-neutral-50 font-bold text-base rounded-lg rounded-tr-none rounded-br-none flex items-center space-x-2">
                <span className="hidden lg:inline-block">Filter</span>{" "}
                <span className="material-symbols-outlined">filter_list</span>
              </div>
            </FilterCategories>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="h-full bg-neutral-50 px-4 py-2 hover:bg-primary hover:text-neutral-50 font-bold text-base rounded-lg rounded-tl-none rounded-bl-none flex items-center space-x-2"
            >
              <span className="sm:hidden lg:inline-block">Search</span>{" "}
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </form>
      <AnimatePresence mode="wait" initial={false}>
        {searchActive &&
          hasLoadedProducts &&
          hasLoadedCategories &&
          products.length > 0 && (
            <motion.div
              className="text-black absolute w-full sm:w-96 bg-neutral-50 rounded-b-lg shadow-lg overflow-hidden p-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col py-2 w-full">
                <AddToCartProductCard
                  key={products[0].id}
                  id={products[0].id}
                  name={products[0].name}
                  price={products[0].price}
                  producer={products[0].brand}
                />
              </div>
              <div className="flex items-center border-t-2 border-neutral-200 w-full space-x-2 overflow-hidden">
                <h2 className="text-base font-bold">Suggested Categories:</h2>
                <div className="flex space-x-2 justify-center items-center overflow-x-scroll no-scrollbar">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="hover:underline transition-all text-base cursor-pointer whitespace-nowrap"
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
