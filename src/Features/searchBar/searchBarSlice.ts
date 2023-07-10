import { createSlice } from "@reduxjs/toolkit";

interface SearchBarState {
  value: string;
}

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
  } as SearchBarState,
  reducers: {
    updateSearchBar: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const selectSearchTerm = (state: any): string => state.searchBar.value;

export const { updateSearchBar } = searchBarSlice.actions;

export default searchBarSlice.reducer;
