import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Product = {
  id: number;
  name: string;
  producer: string;
  price: number;
  priceBefore: number;
  categories: string[];
  rating: number;
  img: string;
};

interface SearchResultsState {
  products: Product[];
}

export const loadProducts = createAsyncThunk(
  "searchResults/loadProducts",
  async () => {
    const response = await fetch(`https://localhost:7010/api/Products`);
    const data = await response.json();
    return data;
  }
);

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    products: [],
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
  },
  reducers: {},
  extraReducers: {
    [loadProducts.fulfilled.type]: (state, action) => {
      state.hasLoaded = true;
      state.isLoading = false;
      state.products = action.payload;
    },
    [loadProducts.rejected.type]: (state, action) => {
      state.failedLoading = true;
      state.isLoading = false;
      console.log(action.error);
    },
    [loadProducts.pending.type]: (state, action) => {
      state.isLoading = true; 
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

export default searchResultsSlice.reducer;
