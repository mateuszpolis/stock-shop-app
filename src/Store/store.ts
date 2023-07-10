import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

