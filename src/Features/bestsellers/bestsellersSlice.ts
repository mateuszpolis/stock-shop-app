import { createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  producer: string;
  discount?: number;
  price: number;
  price_before?: number;
  categories: string[];
  image?: string;
};

interface BestsellersState {
  value: Product[];
}

const bestsellesrSlice = createSlice({
  name: "offers",
  initialState: {
    value: [],
  } as BestsellersState,
  reducers: {
    updateOffers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default bestsellesrSlice.reducer;
