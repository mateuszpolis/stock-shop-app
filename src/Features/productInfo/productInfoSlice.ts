import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProduct = createAsyncThunk(
  "productInfo/loadProduct",
  async (id: number) => {
    try {
      const response = await fetch(`https://localhost:7010/api/Products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  priceHistory: number[];
  discount: number;
  stockQuantity: number;
  categories: string[];
  images: string[];
  reviews: string[];
  available: boolean;
  createdTime: string;
  updatedTime: string;
  weight: number;
  dimensions: string;
  rating: number;
};

interface ProductInfoState {
  product: Product;
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  error: string | null;
}

export const productInfoSlice = createSlice({
  name: "productInfo",
  initialState: {
    product: {},
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    error: null,
  } as ProductInfoState,
  reducers: {},
  extraReducers: {
    [loadProduct.fulfilled.type]: (state, action) => {
      state.product = action.payload;
      state.hasLoaded = true;
      state.isLoading = false;
      state.failedLoading = false;
    },
    [loadProduct.pending.type]: (state) => {
      state.isLoading = true;
      state.failedLoading = false;
      state.hasLoaded = false;
    },
    [loadProduct.rejected.type]: (state) => {
      state.isLoading = false;
      state.failedLoading = true;
      state.hasLoaded = false;
      state.error = "Failed to load product";
    },
  },
});

export const selectProduct = (state: any) => {
  return state.productInfo.product;
};

export const selectIsLoading = (state: any) => {
  return state.productInfo.isLoading;
};

export const selectFailedLoading = (state: any) => {
  return state.productInfo.failedLoading;
};

export const selectHasLoaded = (state: any) => {
  return state.productInfo.hasLoaded;
};

export default productInfoSlice.reducer;
