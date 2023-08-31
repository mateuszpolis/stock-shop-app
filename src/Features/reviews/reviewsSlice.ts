import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review, ReviewCreate } from "../../Models/Review";
import axios from "axios";
import authHeader from "../../services/auth-header";

interface ReviewsState {
  reviews: Review[];
  isLoading: boolean;
  failedLoading: boolean;
  hasLoaded: boolean;
  error: string | null;
  isAdding: boolean;
  failedAdding: boolean;
  hasAdded: boolean;
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

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (review: ReviewCreate) => {
    try {
      const response = await axios.post(
        "https://localhost:7010/api/Reviews",
        review,
        {
          headers: authHeader(),
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const likeReview = createAsyncThunk(
  "reviews/likeReview",
  async ({ userId, reviewId }: { userId: number; reviewId: number }) => {
    try {
      const response = await axios.put(
        `https://localhost:7010/api/Reviews/Like`,
        { userId: userId, reviewId: reviewId },
        {
          headers: authHeader(),
        }
      );
      return response;
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
    isAdding: false,
    failedAdding: false,
    hasAdded: false,
  } as ReviewsState,
  reducers: {
    resetReviews: (state) => {
      state.reviews = [];
      state.isLoading = false;
      state.failedLoading = false;
      state.hasLoaded = false;
      state.error = null;
      state.isAdding = false;
      state.failedAdding = false;
      state.hasAdded = false;
    },
  },
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
    [addReview.fulfilled.type]: (state, action) => {
      state.isAdding = false;
      state.failedAdding = false;
      state.hasAdded = true;
    },
    [addReview.pending.type]: (state) => {
      state.isAdding = true;
      state.failedAdding = false;
      state.hasAdded = false;
    },
    [addReview.rejected.type]: (state, action) => {
      state.isAdding = false;
      state.failedAdding = true;
      state.hasAdded = false;
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

export const selectReviewsError = (state: { reviews: ReviewsState }) => {
  return state.reviews.error;
};

export const selectReviewAdding = (state: { reviews: ReviewsState }) => {
  return state.reviews.isAdding;
};

export const selectReviewAdded = (state: { reviews: ReviewsState }) => {
  return state.reviews.hasAdded;
};

export const selectReviewAddFailed = (state: { reviews: ReviewsState }) => {
  return state.reviews.failedAdding;
};

export const { resetReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
