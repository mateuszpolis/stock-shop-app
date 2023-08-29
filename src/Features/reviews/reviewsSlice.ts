import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review } from "../../Models/Review";

interface ReviewsState {
  reviews: Review[];
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  error: string | null;
}

export const loadReviews = createAsyncThunk(
  "reviews/loadReviews",
  async (id: number) => {
    try {
      const response = await fetch(`https://localhost:7010/api/Reviews/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    isLoading: false,
    failedLoading: false,
    hasLoaded: false,
    error: null,
  } as ReviewsState,
  reducers: {},
  extraReducers: {
    [loadReviews.fulfilled.type]: (state, action) => {
      state.reviews = action.payload;
      state.hasLoaded = true;
      state.isLoading = false;
      state.failedLoading = false;
    },
    [loadReviews.pending.type]: (state) => {
      state.isLoading = true;
      state.failedLoading = false;
      state.hasLoaded = false;
    },
    [loadReviews.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.failedLoading = true;
      state.hasLoaded = false;
      state.error = action.error.message;
    },
  },
});

export const selectReviews = (state: { reviews: ReviewsState }) => {
  return state.reviews.reviews;
};

export const selectReviewsLoading = (state: { reviews: ReviewsState }) => {
  return state.reviews.isLoading;
};

export const selectReviewsFailed = (state: { reviews: ReviewsState }) => {
  return state.reviews.failedLoading;
};

export const selectReviewsLoaded = (state: { reviews: ReviewsState }) => {
  return state.reviews.hasLoaded;
};

export default reviewsSlice.reducer;
