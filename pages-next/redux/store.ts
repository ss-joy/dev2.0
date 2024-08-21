import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { dataFailure, dataRequest, dataSuccess } from "./data/action-creators";
export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
