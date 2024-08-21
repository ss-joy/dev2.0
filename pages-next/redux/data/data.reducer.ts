import { DataAction } from "./action-creators";
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./action-identifiers";

const initialState: {
  loading: boolean;
  data: any;
  error: Error | null;
} = {
  loading: false,
  data: null,
  error: null,
};
export default function dataReducer(state = initialState, action: DataAction) {
  switch (action.type) {
    case DATA_REQUEST:
      state = { loading: true, data: null, error: null };
      break;

    case DATA_SUCCESS:
      state = { loading: false, data: action.payload, error: null };
      break;

    case DATA_FAILURE:
      state = { loading: false, data: null, error: action.payload };
      break;
  }
  return state;
}
