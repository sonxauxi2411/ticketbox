import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import loadingReducer from './loading/loadingSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export default store;
