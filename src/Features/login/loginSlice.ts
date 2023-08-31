import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import jwtDecode from "jwt-decode";

type User = {
  id: string;
  exp: number;
};

export const login = createAsyncThunk(
  "login/login",
  async ({
    email,
    password,
    rememberUser,
  }: {
    email: string;
    password: string;
    rememberUser: boolean;
  }) => {
    try {
      const response = await authService.login(email, password, rememberUser);
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
    exp: null as number | null,
    userId: null as number | null,
  },
  reducers: {
    logout: (state) => {
      authService.logout();
      state.loading = false;
      state.loggedIn = false;
      state.error = null;
      state.userId = null;
      state.exp = null;
    },
    checkLogin: (state) => {
      const token = localStorage.getItem("user");
      if (token) {
        const user: User = jwtDecode(token);
        state.userId = parseInt(user.id);
        state.loggedIn = true;
      } else {
        state.loggedIn = false;
      }
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
      const token = localStorage.getItem("user");
      if (token) {
        const user: User = jwtDecode(token);
        state.userId = parseInt(user.id);
        state.exp = user.exp;

      }
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

export const selectUserId = (state: any) => {
  return state.login.userId;
};

export const selectExp = (state: any) => {
  return state.login.exp;
};

export const { logout, checkLogin } = loginSlice.actions;

export default loginSlice.reducer;
