import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Models/ProductModel";

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
