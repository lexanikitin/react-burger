import {postOrderToApi} from "../../utils/burger-api";


export const ADD_INGREDIENT_TO_ORDER = 'ADD_INGREDIENT_TO_ORDER';
export const REMOVE_INGREDIENT_FROM_ORDER = 'REMOVE_INGREDIENT_FROM_ORDER';
export const CHANGE_BUN_IN_ORDER = 'CHANGE_BUN_IN_ORDER';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILED = 'ORDER_FAILED';
export const DRAG_SELECTED_INGREDIENT_TO_POSITION = 'DRAG_SELECTED_INGREDIENT_TO_POSITION';


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




