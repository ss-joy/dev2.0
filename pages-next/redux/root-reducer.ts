import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducer";
import { dynamicCounterReducer } from "./dynamic-counter/reducer";
import dataReducer from "./data/data.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
  data: dataReducer,
});
