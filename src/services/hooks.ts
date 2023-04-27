import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import {TAllOfActions, TRootState} from './types';
import {ThunkDispatch} from "redux-thunk";

type TAppDispatch = ThunkDispatch<TRootState, never, TAllOfActions>
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;
export const useDispatch = () => dispatchHook<TAppDispatch>();
