import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {},
});

export default loginSlice.reducer;