import { createSlice } from "@reduxjs/toolkit";
import { Offer } from "../../Models/OfferModel";

interface OffersState {
  value: Offer[];
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