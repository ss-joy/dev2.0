import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAppDispatch,
  useAppSelector,
  useRtkAppDispatch,
  useRtkAppSelector,
} from "../../lib/hooks/redux";
import { fetchData } from "@/rtk/features/dataSlice";

const index = () => {
  // const dispatch = useDispatch();
  // const dispatch = useAppDispatch();
  const dispatch = useRtkAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { data, loading } = useRtkAppSelector((state) => state.data);

  if (loading)
    return <p className="bg-red-700 font-extrabold text-[100px]">loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
};

export default index;
