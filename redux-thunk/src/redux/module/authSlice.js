import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "", password: "", nickname: "", avatar: "" }];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      return { id: action.payload, password: action.payload };
    },

    signUp: (state, action) => {
      return {
        id: action.payload,
        password: action.payload,
        nickname: action.payload,
      };
    },

    logOut: (state, action) => {
      return initialState;
    },
  },
});

export default authSlice.reducer;
export const { logIn, signUp, logOut } = authSlice.actions;