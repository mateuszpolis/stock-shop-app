import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchBarReducer from "../Common/NavBar/SearchBar/searchBarSlice";
import catgoriesReducer from "../Features/sortFilter/categories/categoriesSlice";
import offersReducer from "../Features/offers/offersSlice";
import wishlistReducer from "../Features/wishlist/wishlistSlice";
import bestsellersReducer from "../Features/bestsellers/bestsellersSlice";
import productInfoReducer from "../Features/product/productInfoSlice";
import reviewsReducer from "../Features/reviews/reviewsSlice";
import similiarProductsReducer from "../Features/similiarProducts/similiarProductsSlice";
import cartReducer from "../Features/cart/cartSlice";
import loginReducer from "../Features/login/loginSlice";
import searchResultsReducer from "../Features/searchResults/searchResultsSlice";
import registerReducer from "../Features/register/registerSlice";
import filtersReducer from "../Features/sortFilter/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    categories: catgoriesReducer,
    offers: offersReducer,
    wishlist: wishlistReducer,
    bestsellers: bestsellersReducer,
    productInfo: productInfoReducer,
    reviews: reviewsReducer,
    similiarProducts: similiarProductsReducer,
    cart: cartReducer,
    login: loginReducer,
    searchResults: searchResultsReducer,
    register: registerReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
