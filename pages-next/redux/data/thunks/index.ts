import { DATA_SUCCESS } from "./../action-identifiers";
import axios from "axios";
import { Dispatch } from "redux";
import { dataFailure, dataRequest, dataSuccess } from "../action-creators";
import { AppDispatch } from "@/redux/store";
export const fetchData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(dataRequest());
      const data = await axios.get<{}[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(data);
      dispatch<ReturnType<typeof dataSuccess>>(dataSuccess(data.data));
    } catch (error) {
      dispatch(dataFailure(error as Error));
    }
  };
};
