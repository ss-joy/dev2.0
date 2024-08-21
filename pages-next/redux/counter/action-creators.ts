import { DECREMENT, INCREMENT } from "./action-identifiers";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export type CounterActions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;
