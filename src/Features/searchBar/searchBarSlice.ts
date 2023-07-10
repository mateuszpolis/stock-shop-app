import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
  },
  reducers: {
    updateSearchBar: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const selectSearchTerm = (state: any): string => {
  return state.searchBar.value;
};

export const { updateSearchBar } = searchBarSlice.actions;

export default searchBarSlice.reducer;
