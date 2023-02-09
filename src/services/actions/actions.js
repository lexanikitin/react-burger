import {getIngredientsFromApi, postOrderToApi} from "../../utils/burger-api";
export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED = 'GET_INGREDIENTS_LIST_FAILED';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const MODAL_SET_CURRENT_INGREDIENT = 'MODAL_SET_CURRENT_INGREDIENT';
export const MODAL_CLEAR_CURRENT_INGREDIENT = 'MODAL_CLEAR_CURRENT_INGREDIENT';

export const ADD_INGREDIENT_TO_ORDER = 'ADD_INGREDIENT_TO_ORDER';
export const REMOVE_INGREDIENT_FROM_ORDER = 'REMOVE_INGREDIENT_FROM_ORDER';
export const CHANGE_BUN_IN_ORDER = 'CHANGE_BUN_IN_ORDER';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const DRAG_SELECTED_INGREDIENT_TO_POSITION = 'DRAG_SELECTED_INGREDIENT_TO_POSITION';


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

export function postOrder(orderContent) {
  return function (dispatch) {
    dispatch({type: ORDER_REQUEST});
    postOrderToApi(orderContent).then(
      data => {
        dispatch({
          type: ORDER_SUCCESS,
          orderNumber: data.order.number
        })
      }
    ).catch(e => {
      console.log(e.message);
      dispatch({type: ORDER_FAILED})
    })
  }
}




