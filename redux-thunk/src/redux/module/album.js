const { createSlice } = require("@reduxjs/toolkit");

const albumSlice = createSlice({
  name: "member",
  initialState: "A HEAD FULL OF DREAMS",
  reducers: {
    active: (state, action) => {
      const activeAlbum = action.payload;
      return activeAlbum;
    },
  },
});

export default albumSlice.reducer;
export const { active } = albumSlice.actions;
