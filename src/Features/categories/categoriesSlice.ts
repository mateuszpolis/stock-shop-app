import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

type Category = {
  id: number;
  name: string;
  description: string;
  hasChildren: boolean;
  parentCategory: number;
};

type CategoriesState = {
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  breadcrumbs: Category[];
  currentParentId: number;
  categories: Category[];
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (id: number) => {
    try {
      const response = await axios.get<Category[]>(
        `https://localhost:7010/api/Categories/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    breadcrumbs: [
      {
        id: -1,
        name: "All",
        description: "",
        hasChildren: true,
        parentCategory: -1,
      },
    ],
    currentParentId: -1,
    categories: [],
  } as CategoriesState,
  reducers: {
    addBreadcrumb: (state, action) => {
      state.breadcrumbs.push(action.payload);
    },
    removeBreadcrumbs: (state, action) => {
      for (let i = 0; i < state.breadcrumbs.length; i++) {
        if (state.breadcrumbs[i].id === action.payload.id) {
          state.breadcrumbs = state.breadcrumbs.slice(0, i + 1);
        }
      }
      state.currentParentId = action.payload.id;
    },
    setCurrentParentId: (state, action) => {
      state.currentParentId = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled.type]: (state, action) => {
      state.hasLoaded = true;
      state.isLoading = false;
      state.failedLoading = false;
      state.categories = action.payload;
    },
    [fetchCategories.pending.type]: (state, action) => {
      state.isLoading = true;
      state.failedLoading = false;
      state.hasLoaded = false;
    },
    [fetchCategories.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.failedLoading = true;
      state.hasLoaded = false;
    },
  },
});

export const selectCategories = (state: { categories: CategoriesState }) => {
  return state.categories.categories;
};

export const selectIsLoading = (state: { categories: CategoriesState }) => {
  return state.categories.isLoading;
};

export const selectHasLoaded = (state: { categories: CategoriesState }) => {
  return state.categories.hasLoaded;
};

export const selectFailedLoading = (state: { categories: CategoriesState }) => {
  return state.categories.failedLoading;
};

export const selectBreadcrumbs = (state: { categories: CategoriesState }) => {
  return state.categories.breadcrumbs;
};

export const selectCurrentParentId = (state: {
  categories: CategoriesState;
}) => {
  return state.categories.currentParentId;
};

export const { addBreadcrumb, removeBreadcrumbs, setCurrentParentId } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
