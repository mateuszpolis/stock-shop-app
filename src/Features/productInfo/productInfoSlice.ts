import { createSlice } from "@reduxjs/toolkit";

export const productInfoSlice = createSlice({
  name: "productInfo",
  initialState: {
    value: 0,
  },
  reducers: {},
});

export default productInfoSlice.reducer;