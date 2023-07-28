import { useSelector, useDispatch } from "react-redux";
import type { RooteState, AppDispatch } from "./store";
import type { TypedUseSelectorHook } from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RooteState>  = useSelector;