const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  showLogIn: true,
  showSignUp: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    showLogin: (state) => {
      return { ...state, showLogIn: !state.showLogIn };
    },
    showSignup: (state) => {
      return { ...state, showSignUp: !state.showSignUp };
    },
  },
});

export default loginSlice.reducer;
export const { showLogin, showSignup } = loginSlice.actions;
