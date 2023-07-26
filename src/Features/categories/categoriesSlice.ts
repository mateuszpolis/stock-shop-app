import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

type category = {
  category: string;
  selected: boolean;
};

function filterCategories(
  categories: category[],
  searchQuery: string
): category[] {
  return categories.filter((category) =>
    category.category.toLowerCase().includes(searchQuery)
  );
}

interface CategoriesState {
  categoriesList: category[];
  searchQuery?: string;
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [
      { category: "Tablets", selected: false },
      { category: "Smartphones", selected: false },
      { category: "Laptops", selected: false },
      { category: "Desktops", selected: false },
      { category: "Monitors", selected: false },
      { category: "TVs", selected: false },
      { category: "Headphones", selected: false },
      { category: "Speakers", selected: false },
      { category: "Keyboards", selected: false },
      { category: "Mice", selected: false },
      { category: "Printers", selected: false },
      { category: "Scanners", selected: false },
    ],
    searchQuery: "",
  } as CategoriesState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload.toLowerCase().trim();
    },
    updateSelectCategoriesList(state, action) {
      const categories = state.categoriesList;
      const category = action.payload;
      const index = categories.findIndex(
        (categoryItem) => categoryItem.category === category
      );
      categories[index].selected = !categories[index].selected;
    },
  },
});

export const selectFilteredCategories = (state: any): category[] => {
  const categories = state.categories.categoriesList;
  const searchQuery = state.categories.searchQuery;
  return filterCategories(categories, searchQuery);
};

export const selectSelectedCategories = createSelector(
  [selectFilteredCategories],
  (categoriesList) =>
    categoriesList.filter((category: { selected: any }) => category.selected)
);

export const selectSearchQuery = (state: any): string => {
  return state.categories.searchQuery;
};

export const { setSearchQuery, updateSelectCategoriesList } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
