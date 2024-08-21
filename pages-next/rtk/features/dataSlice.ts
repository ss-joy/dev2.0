import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const res = await axios.get<{}[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.data;
});
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {
    dataRequest: (state, action) => {},
    dataSuccess: (state, action) => {},
    dataFailure: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.loading = true;
        state.data = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      });
  },
});
export const { reducer: dataReducer } = dataSlice;
