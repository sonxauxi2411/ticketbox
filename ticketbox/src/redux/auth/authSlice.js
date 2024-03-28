import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const strUser = Cookies.get("user");
let user = null
if (strUser)  user = JSON.parse(strUser.replace("j:", ""));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user,
    error: null,
    isLoading: false,
    isSucess: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.isSucess = false;
      state.error = action.payload;
    },
    registerSucess: (state) => {
      state.isLoading = false;
      state.isSucess = true;
    },
    reset: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
      state.isSucess = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerFailure,
  registerStart,
  registerSucess,
  reset,
} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
