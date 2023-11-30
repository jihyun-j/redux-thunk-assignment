import letter from "../module/letter";
import login from "../module/login";
import auth from "../module/auth";
import member from "../module/album";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    letter,
    login,
    auth,
    member,
  },
});

export default store;
