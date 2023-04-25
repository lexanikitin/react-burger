import {
  GET_INGREDIENTS_LIST_FAILED,
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS, TListActions
} from "../actions/list";
import {TBurgerIngredientInfo} from "../../utils/types";

type TListState = {
  ingredientsList: TBurgerIngredientInfo[];
  isRequested: boolean;
  isFailed: boolean;
  isSuccessful: boolean;
}

const initialState: TListState = {
  ingredientsList: [],
  isRequested: false,
  isFailed: false,
  isSuccessful: false
}

export const ingredientsListReducer = (state:TListState = initialState, action: TListActions): TListState => {
  switch (action.type) {
    case GET_INGREDIENTS_LIST_REQUEST: {
      return {
        ...state,
        isRequested: true,
        isFailed: false,
        isSuccessful: false
      }
    }
    case GET_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        ingredientsList: action.list,
        isRequested: false,
        isFailed: false,
        isSuccessful: true

      }
    }
    case GET_INGREDIENTS_LIST_FAILED: {
      return {
        ...state,
        isRequested: false,
        isFailed: true,
        ingredientsList: [],
        isSuccessful: false
      }
    }
    default: {
      return state;
    }
  }
}
