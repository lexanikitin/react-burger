import {
  TAuthActions,
  TFeedActions,
  TListActions,
  TModalActions,
  TOrderActions,
  TPrivateFeedActions,
  TTabsActions
} from "../actions";
import {Action, ActionCreator, Dispatch} from "redux";
import {store} from "../../index";
import {ThunkAction} from "redux-thunk";
import {TWSFeedActions, TWSPrivateFeedActions} from "../action-types";

export type TAllOfActions = TListActions|TModalActions|TOrderActions|TTabsActions|TAuthActions|TWSFeedActions|TWSPrivateFeedActions|TFeedActions|TPrivateFeedActions;
export type TRootState = ReturnType<typeof store.getState>;
export type dispatch = <ReturnType = void>(action: TAllOfActions | AppThunk) => ReturnType;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, TRootState, TAllOfActions>>;
export type AppDispatch = Dispatch<TAllOfActions>;
