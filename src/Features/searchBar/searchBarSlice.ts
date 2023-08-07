import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../Components/Models/Product";
import axios from "axios";
import { RootState } from "../../Store/store";

interface SearchBarState {
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  searchQuery: string;
  products: Product[];
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

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    searchQuery: "",
    products: [],
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
      state.failedLoading = false;
      state.isLoading = false;
      state.hasLoaded = true;
    },

    [fetchProducts.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.failedLoading = true;
      state.isLoading = false;
      state.hasLoaded = false;
    },

    [fetchProducts.pending.type]: (state, action: PayloadAction<Product[]>) => {
      state.failedLoading = false;
      state.isLoading = true;
      state.hasLoaded = false;
    },
  },
});

export const selectSearchTerm = (state: any): string => {
  return state.searchBar.searchQuery;
};

export const selectProducts = (state: any): Product[] => {
  return state.searchBar.products;
};

export const selectIsLoading = (state: any): boolean => {
  return state.searchBar.isLoading;
};

export const selectFailedLoading = (state: any): boolean => {
  return state.searchBar.failedLoading;
};

export const selectHasLoaded = (state: any): boolean => {
  return state.searchBar.hasLoaded;
};

export const { updateSearchBar, checkIfSearchQueryIsEmpty } =
  searchBarSlice.actions;

export default searchBarSlice.reducer;
