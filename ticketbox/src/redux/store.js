import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import loadingReducer from './loading/loadingSlice'
import bookingReducer from './booking/bookingSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    booking : bookingReducer,
  },
});

export default store;
