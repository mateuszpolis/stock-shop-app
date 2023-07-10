import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import catgoriesReducer from "../Features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    categories: catgoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
