import login from "../module/login";
import auth from "../module/auth";
import member from "../module/album";
import letterSlice from "../module/letterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    login,
    auth,
    member,
    letterSlice,
  },
});

export default store;
