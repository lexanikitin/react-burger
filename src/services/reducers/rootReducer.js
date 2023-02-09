import {combineReducers} from 'redux';
import {ingredientsListReducer} from "./list";
import {tabsListReducer} from "./tabs";
import {modalReducer} from "./modal";
import {orderReducer} from "./order";

export const rootReducer = combineReducers({
  list: ingredientsListReducer,
  tabs: tabsListReducer,
  modals: modalReducer,
  order: orderReducer
})
