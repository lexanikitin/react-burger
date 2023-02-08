import {getIngredientsFromApi} from "../../utils/burger-api";

export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED = 'GET_INGREDIENTS_LIST_FAILED';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const MODAL_SET_CURRENT_INGREDIENT = 'MODAL_SET_CURRENT_INGREDIENT';
export const MODAL_CLEAR_CURRENT_INGREDIENT = 'MODAL_CLEAR_CURRENT_INGREDIENT';

export function getIngredientsList() {
  return function (dispatch) {
    dispatch({type: GET_INGREDIENTS_LIST_REQUEST});
    getIngredientsFromApi().then(
      data => {
        dispatch({
          type: GET_INGREDIENTS_LIST_SUCCESS,
          list: data.data
        })
      }
    ).catch(e => {
      console.log(e.message);
      dispatch({type: GET_INGREDIENTS_LIST_FAILED})
    })
  }
}
