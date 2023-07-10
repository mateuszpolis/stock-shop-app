import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchBarState {
  value: string;
}

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
  } as SearchBarState,
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
