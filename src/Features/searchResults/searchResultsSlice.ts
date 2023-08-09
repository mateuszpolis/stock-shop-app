import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../Store/store";
import { Product } from "../../Models/Product";
import axios from "axios";

interface SearchResultsState {
  products: Product[];
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  error: string | null;
}

export const loadProducts = createAsyncThunk(
  "searchResults/loadProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const searchQuery: string = state.searchBar.searchQuery;

    try {
      const response = await axios.get<Product[]>(
        "https://localhost:7010/api/Products",
        {
          params: {
            searchQuery: searchQuery,
            limit: 15,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    products: [],
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    error: null,
  } as SearchResultsState,
  reducers: {},
  extraReducers: {
    [loadProducts.fulfilled.type]: (state, action) => {
      state.hasLoaded = true;
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    },
    [loadProducts.rejected.type]: (state, action) => {
      state.failedLoading = true;
      state.isLoading = false;
      const error = action.error;
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      state.error = resMessage;
    },
    [loadProducts.pending.type]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export const selectProducts = (state: any) => {
  return state.searchResults.products;
};

export const selectIsLoading = (state: any) => {
  return state.searchResults.isLoading;
};

export const selectHasLoaded = (state: any) => {
  return state.searchResults.hasLoaded;
};

export const selectFailedLoading = (state: any) => {
  return state.searchResults.failedLoading;
};

export const selectError = (state: any) => {
  return state.searchResults.error;
};

export default searchResultsSlice.reducer;
