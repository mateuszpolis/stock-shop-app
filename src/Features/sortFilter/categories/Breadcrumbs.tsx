import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBreadcrumbs, selectBreadcrumbs } from "./categoriesSlice";
import { AppDispatch } from "../../../Store/store";
import {
  selectSearchParams,
  setSearchParams,
} from "../../searchResults/searchResultsSlice";
import { useLocation, useNavigate } from "react-router";
import { fetchFilters } from "../filters/filtersSlice";

function Breadcrumbs() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  const breadcrumbs = useSelector(selectBreadcrumbs);

  const searchParams = useSelector(selectSearchParams);
  const limit = searchParams.limit;
  const searchQuery = searchParams.searchQuery;
  const sorting = searchParams.sorting;

  return (
    <div className="flex flex-row space-x-1 flex-wrap">
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={breadcrumb.id}
          onClick={() => {
            const queryOptions = {
              searchQuery: encodeURIComponent(searchQuery),
              limit: encodeURIComponent(limit),
              category: encodeURIComponent(breadcrumb.id),
              sorting: encodeURIComponent(sorting),
            };
            const queryString = new URLSearchParams(queryOptions).toString();
            if (location.pathname.startsWith("/search")) {
              navigate(`/search?${queryString}`);
            }
            dispatch(setSearchParams({ category: breadcrumb.id }));
            dispatch(removeBreadcrumbs({ id: breadcrumb.id }));
            dispatch(fetchFilters(breadcrumb.id));
          }}
          className={`text-xl font-bold cursor-pointer ${
            index === breadcrumbs.length - 1 ? "underline" : ""
          }`}
        >
          {breadcrumb.name}{" "}
          <i
            className={`fas fa-chevron-right ${
              index === breadcrumbs.length - 1 ? "hidden" : ""
            }`}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Breadcrumbs;
