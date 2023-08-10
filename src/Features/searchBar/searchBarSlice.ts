import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../Models/Product";
import axios from "axios";
import { AppDispatch, RootState } from "../../Store/store";
import { Category } from "../../Models/Category";
import { useDispatch } from "react-redux";

interface SearchBarState {
  hasLoadedProducts: boolean;
  hasLoadedCategories: boolean;
  searchQuery: string;
  products: Product[];
  categories: Category[];
}

export const fetchProducts = createAsyncThunk(
  "searchBar/fetchProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const searchQuery: string = state.searchBar.searchQuery;

    try {
      const response = await axios.get<Product[]>(
        "https://localhost:7010/api/Products",
        {
          params: {
            searchQuery: searchQuery,
            sorting: "defualt",
            category: -1,
            limit: 1,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "searchBar/fetchCategories",
  async (id: number) => {
    try {
      const response = await axios.get<string[]>(
        `https://localhost:7010/api/Categories/${id}/hierarchy`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    hasLoadedProducts: false,
    hasLoadedCategories: false,
    searchQuery: "",
    products: [],
    categories: [],
  } as SearchBarState,
  reducers: {
    updateSearchBar: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    checkIfSearchQueryIsEmpty: (state) => {
      if (state.searchQuery === "") {
        state.products = [];
      }
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<Product[]>
    ) => {
      state.products = action.payload;
      state.hasLoadedProducts = true;
    },

    [fetchProducts.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.hasLoadedProducts = false;
    },

    [fetchProducts.pending.type]: (state, action: PayloadAction<Product[]>) => {
      state.hasLoadedProducts = false;
    },
    [fetchCategories.fulfilled.type]: (
      state,
      action: PayloadAction<Category[]>
    ) => {
      state.categories = action.payload;
      state.hasLoadedCategories = true;
    },
    [fetchCategories.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.hasLoadedCategories = false;
    },
    [fetchCategories.pending.type]: (
      state,
      action: PayloadAction<Category[]>
    ) => {
      state.hasLoadedCategories = false;
    },
  },
});

export const selectSearchTerm = (state: any): string => {
  return state.searchBar.searchQuery;
};

export const selectProducts = (state: any): Product[] => {
  return state.searchBar.products;
};

export const selectCategories = (state: any): Category[] => {
  return state.searchBar.categories;
};

export const selectHasLoadedProducts = (state: any): boolean => {
  return state.searchBar.hasLoadedProducts;
};

export const selectHasLoadedCategories = (state: any): boolean => {
  return state.searchBar.hasLoadedCategories;
};

export const { updateSearchBar, checkIfSearchQueryIsEmpty } =
  searchBarSlice.actions;

export default searchBarSlice.reducer;
