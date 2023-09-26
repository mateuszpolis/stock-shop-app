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
import { AppDispatch } from "../../Store/store";
import { useNavigate } from "react-router-dom";
import FilterCategories from "../sortFilter/FilterCategoriesButton";
import AddToCartProductCard from "../../Components/AddToCartProductCard";
import { AnimatePresence, motion } from "framer-motion";
import {
  selectSearchParams,
  setSearchParams,
} from "../searchResults/searchResultsSlice";

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
    <div className="relative w-full sm:w-72 md:w-80 lg:w-96">
      <form
        onClick={() => {
          setSearchActive(true);
        }}
        onBlur={() => {
          setSearchActive(false);
        }}
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="search"
            autoComplete="off"
            id="default-search"
            className="text-black shadow-md appearance-none block w-full sm:w-72 md:w-80 lg:w-96 p-4 text-base border-2 border-secondary active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
            required={true}
          />
          <div className="absolute right-2.5 bottom-2.5 flex shadow-md rounded-lg">
            <FilterCategories>
              <div className="text-primary h-full bg-neutral-50 border-primary border-e-0 px-4 py-2 hover:bg-primary hover:text-neutral-50 text-base rounded-lg rounded-tr-none rounded-br-none transition-all">
                <i className="fa-solid fa-filter"></i>
              </div>
            </FilterCategories>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-primary h-full bg-neutral-50 border-primary px-4 py-2 hover:bg-primary hover:text-neutral-50 font-bold text-base rounded-lg rounded-tl-none rounded-bl-none transition-all"
            >
              <span className="sm:hidden lg:inline-block">Search</span>{" "}
              <i className="fa-solid fa-magnifying-glass"></i>
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
                <h2 className="text-base font-bold">
                  Suggested Categories:
                </h2>
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
