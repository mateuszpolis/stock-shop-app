import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";

export const login = createAsyncThunk(
  "login/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await authService.login(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    loggedIn: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      authService.logout();
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending.type]: (state, action) => {
      state.loading = true;
      state.error = null;
      state.loggedIn = false;
    },
    [login.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.loggedIn = true;
    },
    [login.rejected.type]: (state, action) => {
      state.loading = false;
      state.loggedIn = false;
      const error = action.error;
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      state.error = resMessage;
    },
  },
});

export const selectIsLoading = (state: any) => {
  return state.login.loading;
};

export const selectError = (state: any) => {
  return state.login.error;
};

export const selectLoggedIn = (state: any) => {
  return state.login.loggedIn;
};

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
