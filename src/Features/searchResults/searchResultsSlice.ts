import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../Store/store";
import { Product } from "../../Models/Product";
import axios from "axios";

type searchParams = {
  searchQuery: string;
  limit: number;
  category: number;
  sorting: string;
};

interface SearchResultsState {
  products: Product[];
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  error: string | null;
  searchParams: searchParams;
  queryString: string;
}

export const loadProducts = createAsyncThunk(
  "searchResults/loadProducts",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const searchParams: searchParams = state.searchResults.searchParams;

    try {
      const response = await axios.get<Product[]>(
        "https://localhost:7010/api/Products",
        {
          params: {
            searchQuery: searchParams.searchQuery,
            category: searchParams.category,
            sorting: searchParams.sorting,
            limit: searchParams.limit,
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
    searchParams: {
      searchQuery: "",
      limit: 10,
      category: -1,
      sorting: "default",
    },
    queryString: "",
  } as SearchResultsState,
  reducers: {
    setSearchParams: (state, action) => {
      if (action.payload?.searchQuery) {
        state.searchParams.searchQuery = action.payload.searchQuery;
      }
      if (action.payload?.limit) {
        state.searchParams.limit = action.payload.limit;
      }
      if (action.payload?.category) {
        state.searchParams.category = action.payload.category;
      }
      if (action.payload?.sorting) {
        state.searchParams.sorting = action.payload.sorting;
      }
    },
    setQueryString: (state) => {
      const searchQuery = state.searchParams.searchQuery;
      const limit = state.searchParams.limit;
      const category = state.searchParams.category;
      const sorting = state.searchParams.sorting;

      const queryOptions = {
        searchQuery: encodeURIComponent(searchQuery),
        limit: encodeURIComponent(limit),
        category: encodeURIComponent(category),
        sorting: encodeURIComponent(sorting),
      };
      const queryString = new URLSearchParams(queryOptions).toString();

      state.queryString = queryString;
    },
  },
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

export const selectQueryString = (state: any) => {
  return state.searchResults.queryString;
};

export const selectSearchParams = (state: any) => {
  return state.searchResults.searchParams;
};

export const { setSearchParams, setQueryString } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
