import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counterSlice";
import { dataReducer } from "./features/dataSlice";
import { apiSlice } from "./features/apiSlice";

export const rtkStore = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
export type RootStateRtk = ReturnType<typeof rtkStore.getState>;
export type rtkAppDispatch = typeof rtkStore.dispatch;
