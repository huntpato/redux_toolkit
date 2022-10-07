import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

//hook del useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//hook del useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;