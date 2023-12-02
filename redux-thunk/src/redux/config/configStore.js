import login from "../module/login";
import authSlice from "../module/authSlice";
import member from "../module/album";
import letterSlice from "../module/letterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    login,
    authSlice,
    member,
    letterSlice,
  },
});

export default store;
