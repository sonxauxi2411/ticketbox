import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import loadingReducer from './loading/loadingSlice'
import modalReducer from './modal/modalSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    modal: modalReducer
  },
});

export default store;
