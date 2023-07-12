import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Models/ProductModel";

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
