import {combineReducers} from 'redux';
import {ingredientsListReducer} from "./list";
import {tabsListReducer} from "./tabs";
import {modalReducer} from "./modal";
import {orderReducer} from "./order";
import {authReducer} from './auth'
import {feedReducer} from "./feed";
import {privateFeedReducer} from "./privateFeed";

export const rootReducer = combineReducers({
  list: ingredientsListReducer,
  tabs: tabsListReducer,
  modals: modalReducer,
  order: orderReducer,
  auth: authReducer,
  feed: feedReducer,
  privateFeed: privateFeedReducer
})
