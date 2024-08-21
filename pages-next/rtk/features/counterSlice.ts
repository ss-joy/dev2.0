import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, value) => {
      state.value -= 1;
    },
  },
});
export const {
  reducer: counterReducer,
  actions: { decrement, increment },
} = counterSlice;
