import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useParams } from "react-router";
import SortFilter from "../Features/sortFilter/SortFilter";

function Search() {
  const { query, categories, sorting } = useParams();
  useEffect(() => {
    document.title = "StockShop | Search";
  }, []);

  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 flex flex-col min-h-screen">
      <NavBar />
      <SortFilter query={query} categories={categories} sorting={sorting} />
      <Footer />
    </div>
  );
}

export default Search;
