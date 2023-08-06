import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useParams } from "react-router";
import SortFilter from "../Features/sortFilter/SortFilter";
import SearchResults from "../Features/searchResults/SearchResults";

function Search() {
  const { query, categories, sorting } = useParams();
  useEffect(() => {
    document.title = "StockShop | Search";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col xl:items-center min-h-screen">
      <div className="sticky top-0 z-40">
        <NavBar />
        <SortFilter query={query} categories={categories} sorting={sorting} />
      </div>
      <SearchResults />
      <Footer />
    </div>
  );
}

export default Search;
