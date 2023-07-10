import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CategoriesState {
  categoriesList: string[];
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
  } as CategoriesState,
  reducers: {},
});

export const selectCategories = (state: any): string[] => {
  return state.categories.categoriesList;
};

export default categoriesSlice.reducer;
