import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkIfSearchQueryIsEmpty,
  fetchProducts,
  selectFailedLoading,
  selectHasLoaded,
  selectIsLoading,
  selectProducts,
  selectSearchTerm,
} from "./searchBarSlice";
import { updateSearchBar } from "./searchBarSlice";
import { AppDispatch } from "../../Store/store";
import { useNavigate } from "react-router-dom";
import FilterCategories from "../../Components/FilterCategories";
import AddToCartProductCard from "../../Components/AddToCartProductCard";
import Loading from "../../Components/Loading";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchBar(): JSX.Element {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [searchActive, setSearchActive] = React.useState(false);

  const products = useSelector(selectProducts);
  const hasLoaded = useSelector(selectHasLoaded);
  const isLoading = useSelector(selectIsLoading);
  const failedLoading = useSelector(selectFailedLoading);

  useEffect(() => {
    dispatch(checkIfSearchQueryIsEmpty());
    if (searchTerm !== "") {
      dispatch(fetchProducts());
    }
  }, [dispatch, searchTerm]);

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userInput: string = event.currentTarget.value;
    dispatch(updateSearchBar(userInput));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = encodeURIComponent(searchTerm ? searchTerm : " ");
    const categories = encodeURIComponent(" "); // Replace with your desired default value or remove this line if empty is fine.
    const sorting = encodeURIComponent(""); // Replace with your desired default value or remove this line if empty is fine.
    const url = `/search/${searchQuery}/${categories}/${sorting}`;
    navigate(url);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="relative w-full sm:w-72 md:w-80 lg:w-96"
    >
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
            id="default-search"
            className="shadow-md appearance-none block w-full sm:w-72 md:w-80 lg:w-96 p-4 text-base text-neutral-950 border-2 border-neutral-950 active:rounded-lg focus:rounded-lg hover:rounded-lg rounded-lg sm:rounded-lg bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 dark:bg-neutral-900 dark:border-neutral-50 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-neutral-50 dark:focus:border-neutral-50 transition-all"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="absolute right-2.5 bottom-2.5 flex shadow-md rounded-lg">
            <FilterCategories>
              <div className="dark:text-neutral-950 h-full bg-neutral-50 border-neutral-950 border-e-0 px-4 py-2 hover:bg-neutral-950 hover:text-neutral-50 text-base rounded-lg rounded-tr-none rounded-br-none transition-all">
                <i className="fa-solid fa-filter"></i>
              </div>
            </FilterCategories>
            <button className="dark:text-neutral-950 h-full bg-neutral-50 border-neutral-950 px-4 py-2 hover:bg-neutral-950 hover:text-neutral-50 font-bold text-base rounded-lg rounded-tl-none rounded-bl-none transition-all">
              <span className="sm:hidden lg:inline-block">Search</span>{" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>
      <AnimatePresence mode="wait" initial={false}>
        {searchActive && products.length > 0 && (
          <motion.div
            className="absolute w-full sm:w-96 bg-neutral-50 rounded-b-lg shadow-lg overflow-hidden p-3"
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
                price_before={products[0].priceHistory[0]}
                img={products[0].images[0]}
              />
            </div>
            <div className="flex items-center border-t-2 border-neutral-200 h-12   w-full space-x-2">
              <h2 className="text-base text-neutral-950 font-bold">
                Suggested Categories:
              </h2>
              <div className="flex space-x-1">
                <h3 className="text-base text-neutral-950">Laptops,</h3>
                <h3 className="text-base text-neutral-950">Computers,</h3>
                <h3 className="text-base text-neutral-950">Phones</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
