import {
  GET_INGREDIENTS_LIST_FAILED,
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS
} from "../actions/list";

const initialState = {
  ingredientsList: [],
  isRequested: false,
  isFailed: false,
}

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
        isFailed: true,
        ingredientsList: []
      }
    }
    default: {
      return state;
    }
  }
}
