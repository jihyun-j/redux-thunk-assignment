import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// LETTER 조회
export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/letters?_sort=createdAt&_order=asc"
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LETTER 추가
export const __addLetters = createAsyncThunk(
  "addLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LETTER 삭제
export const __deleteLetters = createAsyncThunk(
  "deleteLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// LETTER 수정
export const __editLetters = createAsyncThunk(
  "editLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        "http://localhost:5000/letters",
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  letters: [],
  isLoading: false,
  error: null,
};

const letterSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: {
    [__getLetters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.letters = action.payload;
    },
    [__addLetters.fulfilled]: (state, action) => {
      state.letters.push(action.payload);
    },
    [__editLetters.fulfilled]: (state, action) => {
      state.letters = action.payload;
    },
    [__deleteLetters.fulfilled]: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
  },
});

export const {} = letterSlice.actions;
export default letterSlice.reducer;
