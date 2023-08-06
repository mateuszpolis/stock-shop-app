import React, { useEffect } from "react";
import { useParams } from "react-router";
import SortFilter from "../Features/sortFilter/SortFilter";
import SearchResults from "../Features/searchResults/SearchResults";

function Search() {
  const { query, categories, sorting } = useParams();
  useEffect(() => {
    document.title = "StockShop | Search";
  }, []);

  return (
    <div>
      <SortFilter query={query} categories={categories} sorting={sorting} />
      <SearchResults />
    </div>
  );
}

export default Search;
