import {TListActions, TModalActions, TOrderActions, TTabsActions} from "../actions";
import {Action, ActionCreator, Dispatch} from "redux";
import {store} from "../../index";
import {ThunkAction} from "redux-thunk";

type TAllOfActions = TListActions|TModalActions|TOrderActions|TTabsActions;
export type RootState = ReturnType<typeof store.getState>;
export type dispatch = <ReturnType = void>(action: TAllOfActions | AppThunk) => ReturnType;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TAllOfActions>>;
export type AppDispatch = Dispatch<TAllOfActions>;
