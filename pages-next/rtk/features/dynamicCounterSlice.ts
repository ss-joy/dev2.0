import { createSlice } from "@reduxjs/toolkit";

export const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});
export const {
  reducer: dynamicCounterReducer,
  actions: { decrement, increment },
} = dynamicCounterSlice;
