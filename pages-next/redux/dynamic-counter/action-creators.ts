import { D_DECREMENT, D_INCREMENT } from "./action-identifiers";

export function increment(payload: number) {
  return {
    type: D_INCREMENT,
    payload,
  };
}

export function decrement(payload: number) {
  return {
    type: D_DECREMENT,
    payload,
  };
}

export type CounterActions =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;
