import { createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
};

interface WishlistState {
  numberOfElements: number;
  elements: Product[];
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    numberOfElements: 0,
    elements: [],
  } as WishlistState,
  reducers: {},
});

export default wishlistSlice.reducer;
