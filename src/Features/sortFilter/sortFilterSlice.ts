import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "newest",
  filters: {
    category: "all",
    price: "all",
    brand: "all",
    color: "all",
    size: "all",
  },
};

const sortFilterSlice = createSlice({
  name: "sortFilter",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortFilterSlice.actions;

export default sortFilterSlice.reducer;
