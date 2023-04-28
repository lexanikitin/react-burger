import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import {AppDispatch, AppThunk, dispatch, TAllOfActions, TRootState} from './types';
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";


export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;







type TAppDispatch = ThunkDispatch<TRootState, never, TAllOfActions>
export const useDispatch = () => dispatchHook<TAppDispatch >();

//export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

//type DispatchFunc = () => AppDispatch
//export const useDispatch: DispatchFunc =  dispatchHook
