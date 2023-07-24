import { createSlice } from "@reduxjs/toolkit";

type product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  price_before?: number;
  img?: string;
};

export interface WishlistState {
  numberOfElements: number;
  products: product[];
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    numberOfElements: 0,
    products: [],
  } as WishlistState,
  reducers: {
    addProduct: (state, action) => {
      if (state.products.find((product) => product.id === action.payload.id)) {
        return;
      } else {
        state.products.push(action.payload);
        state.numberOfElements = state.products.length;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.numberOfElements = state.products.length;
    },
  },
});

export const selectProducts = (state: { wishlist: WishlistState }) => {
  return state.wishlist.products;
};

export const selectNumberOfElements = (state: { wishlist: WishlistState }) => {
  return state.wishlist.numberOfElements;
};

export const inWishlist = (
  state: { wishlist: WishlistState },
  id: number
): boolean => {
  if (state.wishlist.products.find((product) => product.id === id)) {
    return true;
  } else {
    return false;
  }
};

export const { addProduct, removeProduct } = wishlistSlice.actions;

export default wishlistSlice.reducer;
