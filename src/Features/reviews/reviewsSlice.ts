import { createSlice } from "@reduxjs/toolkit"; 

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default reviewsSlice.reducer;