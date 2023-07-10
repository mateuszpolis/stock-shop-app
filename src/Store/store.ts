import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
