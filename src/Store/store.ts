import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import catgoriesReducer from "../Features/categories/categoriesSlice";
import offersReducer from "../Features/offers/offersSlice";
import wishlistReducer from "../Features/wishlist/wishlistSlice";
import bestsellersReducer from "../Features/bestsellers/bestsellersSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    categories: catgoriesReducer,
    offers: offersReducer,
    wishlist: wishlistReducer,
    bestsellers: bestsellersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
