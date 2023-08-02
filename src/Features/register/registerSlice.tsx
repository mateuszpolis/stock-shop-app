import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";

export const registerUserAsync = createAsyncThunk(
  "register/registerUser",
  async (user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await authService.register(
        user.firstName,
        user.lastName,
        user.email,
        user.password
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    loading: false,
    registered: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [registerUserAsync.pending.type]: (state) => {
      state.loading = true;
      state.registered = false;
      state.error = null;
    },
    [registerUserAsync.fulfilled.type]: (state) => {
      state.loading = false;
      state.registered = true;
      state.error = null;
    },
    [registerUserAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.registered = false;
      state.error = action.error.message;
    },
  },
});

export const selectIsLoading = (state: any) => {
  return state.register.loading;
};

export const selectIsRegistered = (state: any) => {
  return state.register.registered;
};

export const selectError = (state: any) => {
  return state.register.error;
};

export default registerSlice.reducer;
