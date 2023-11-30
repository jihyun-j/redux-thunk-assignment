const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{ id: "", password: "", nickname: "", avatar: "" }];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      return { id: action.payload, password: action.payload };
    },
    signUp: (state, action) => {
      return;
    },
    userInfo: (state, action) => {
      return;
    },
    editProfile: (state, action) => {
      return;
    },
    logOut: (state, action) => {
      return;
    },
  },
});

export default authSlice.reducer;
export const { logIn, signUp, userInfo, editProfile } = authSlice.actions;
