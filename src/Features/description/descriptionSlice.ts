import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
  name: "description",
  initialState: {
    value: "",
  },
  reducers: {},
});

export default descriptionSlice.reducer;
