import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./action-identifiers";

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};
export const dataSuccess = (payload: {}) => {
  return {
    type: DATA_SUCCESS,
    payload,
  };
};
export const dataFailure = (payload: Error) => {
  return {
    type: DATA_FAILURE,
    payload,
  };
};
export type DataAction =
  | ReturnType<typeof dataSuccess>
  | ReturnType<typeof dataRequest>
  | ReturnType<typeof dataFailure>;
