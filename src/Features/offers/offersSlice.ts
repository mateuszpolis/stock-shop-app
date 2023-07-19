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

interface OffersState {
  value: Product[];
}

const offersSlice = createSlice({
  name: "offers",
  initialState: {
    value: [],
  } as OffersState,
  reducers: {
    updateOffers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default offersSlice.reducer;
