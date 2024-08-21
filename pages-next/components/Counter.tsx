import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { decrement, increment } from "@/redux/counter/action-creators";
import { RootState } from "@/redux/store";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center border-4 gap-7">
      <div className="size-[200px] bg-blue-400 flex justify-center items-center text-white font-bold text-3xl">
        Counter:{counter.value}
      </div>

      <Button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment by 1
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement by 1
      </Button>
    </div>
  );
}

export default Counter;
