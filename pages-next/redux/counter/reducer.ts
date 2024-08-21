import { CounterActions } from "./action-creators";
import { DECREMENT, INCREMENT } from "./action-identifiers";

const initialState = {
  value: 0,
};
export function counterReducer(state = initialState, action: CounterActions) {
  console.log("logging from counter");
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
