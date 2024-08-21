import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import type { RootStateRtk, rtkAppDispatch } from "@/rtk/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useRtkAppDispatch = useDispatch.withTypes<rtkAppDispatch>();
export const useRtkAppSelector = useSelector.withTypes<RootStateRtk>();
