import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import loadingReducer from './loading/loadingSlice'
import editReducer from "./editData/editSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    edit : editReducer
  },
});

export default store;
