import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Store/store";
import {
  addBreadcrumb,
  fetchCategories,
  selectCategories,
  selectCurrentParentId,
  selectFailedLoading,
  selectHasLoaded,
  setCurrentParentId,
} from "./categoriesSlice";
import { AnimatePresence, motion } from "framer-motion";
import Category from "./Category";
import Breadcrumbs from "./Breadcrumbs";
import {
  selectSearchParams,
  setSearchParams,
} from "../../searchResults/searchResultsSlice";
import { useLocation, useNavigate } from "react-router";
import { fetchFilters } from "../filters/filtersSlice";

function Categories() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const parentCategory = useSelector(selectCurrentParentId);

  const failedLoading = useSelector(selectFailedLoading);
  const hasLoaded = useSelector(selectHasLoaded);

  useEffect(() => {
    dispatch(fetchCategories(parentCategory));
  }, [dispatch, parentCategory]);

  const searchParams = useSelector(selectSearchParams);
  const limit = searchParams.limit;
  const searchQuery = searchParams.searchQuery;
  const sorting = searchParams.sorting;

  const categories = useSelector(selectCategories);

  return (
    <div className="overflow-x-hidden h-full overflow-y-scroll w-full no-scrollbar dark:text-neutral-50">
      <Breadcrumbs />
      {failedLoading && (
        <div className="text-xl font-bold text-red-500">
          Failed to load categories.
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        {hasLoaded && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                onClick={() => {
                  const queryOptions = {
                    searchQuery: encodeURIComponent(searchQuery),
                    limit: encodeURIComponent(limit),
                    category: encodeURIComponent(category.id),
                    sorting: encodeURIComponent(sorting),
                  };
                  const queryString = new URLSearchParams(
                    queryOptions
                  ).toString();
                  if (location.pathname.startsWith("/search")) {
                    navigate(`/search?${queryString}`);
                  }
                  dispatch(setSearchParams({ category: category.id })); 
                  dispatch(addBreadcrumb(category));
                  dispatch(setCurrentParentId(category.id));
                  dispatch(fetchFilters(category.id));
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Categories;
