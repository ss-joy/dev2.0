import { CounterActions } from "./action-creators";
import { D_DECREMENT, D_INCREMENT } from "./action-identifiers";

const initialState = {
  value: 0,
};
export function dynamicCounterReducer(
  state = initialState,
  action: CounterActions
) {
  console.log("logging from dynamic - counter");
  switch (action.type) {
    case D_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case D_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
}
