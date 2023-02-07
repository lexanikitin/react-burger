import {combineReducers} from 'redux';

import {
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS,
  GET_INGREDIENTS_LIST_FAILED, SET_ACTIVE_TAB
} from '../actions/actions'

const initialState = {
  ingredientsList: [],
  isRequested: false,
  isFailed: false,
};

export const ingredientsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_LIST_REQUEST: {
      return {
        ...state,
        isRequested: true,
        isFailed: false
      }
    }
    case GET_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        ingredientsList: action.list,
        isRequested: false,
        isFailed: false
      }
    }
    case GET_INGREDIENTS_LIST_FAILED: {
      return {
        ...state,
        isRequested: false,
        isFailed: true
      }
    }
    default: {
      return state;
    }
  }
}

const initialStateTab = {
    defaultTabsList: [
      {id: 1, name: 'Булки', type: 'bun'},
      {id: 2, name: 'Соусы', type: 'sauce'},
      {id: 3, name: 'Начинки', type: 'main'}
    ],
    activeTabId:1,
  }
;
export const tabsListReducer = (state = initialStateTab, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return {
        ...state,
        activeTabId: action.activeTabId
      }
    }

    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({
  list: ingredientsListReducer,
  tabs: tabsListReducer
})