const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      return [...state, action.payload];
    },
    deleteLetter: (state, action) => {
      return;
    },
    editLetter: (state, action) => {
      return;
    },
  },
});

export default letterSlice.reducer;
export const { addLetter, deleteLetter, editLetter } = letterSlice.actions;
