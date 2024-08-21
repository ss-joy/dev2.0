import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/redux/store";
import { decrement, increment } from "@/redux/dynamic-counter/action-creators";

function DynamicCounter() {
  const { value } = useSelector((state: RootState) => state.dynamicCounter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center border-4 gap-7">
      <div className="size-[200px] bg-blue-400 flex justify-center items-center text-white font-bold text-3xl break-all">
        DynamicCounter {value}
      </div>

      <Button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        increment by 10
      </Button>
      <Button
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        decrement by 10
      </Button>
    </div>
  );
}

export default DynamicCounter;
