import {postOrderToApi, postRefreshTokenToApi} from "../../utils/burger-api";
import {getCookie} from "../../utils/cookies";
import {TBurgerIngredientInfo} from "../../utils/types";
import {MODAL_SET_CURRENT_INGREDIENT} from "./modal";
import {GET_INGREDIENTS_LIST_REQUEST} from "./list";
import {AppDispatch, AppThunk} from "../types";


export const ADD_INGREDIENT_TO_ORDER: 'ADD_INGREDIENT_TO_ORDER' = 'ADD_INGREDIENT_TO_ORDER';
export const RESTORE_INGREDIENTS_TO_ORDER: 'RESTORE_INGREDIENTS_TO_ORDER' = 'RESTORE_INGREDIENTS_TO_ORDER';
export const REMOVE_INGREDIENT_FROM_ORDER: 'REMOVE_INGREDIENT_FROM_ORDER' = 'REMOVE_INGREDIENT_FROM_ORDER';
export const CHANGE_BUN_IN_ORDER: 'CHANGE_BUN_IN_ORDER' = 'CHANGE_BUN_IN_ORDER';
export const ORDER_REQUEST: 'ORDER_REQUEST' = 'ORDER_REQUEST';
export const ORDER_SUCCESS: 'ORDER_SUCCESS' = 'ORDER_SUCCESS';
export const ORDER_FAILED: 'ORDER_FAILED' = 'ORDER_FAILED';
export const DRAG_SELECTED_INGREDIENT_TO_POSITION: 'DRAG_SELECTED_INGREDIENT_TO_POSITION' = 'DRAG_SELECTED_INGREDIENT_TO_POSITION';

interface IAddIngredientToOrderAction {
  readonly type: typeof ADD_INGREDIENT_TO_ORDER;
  readonly ingredient: TBurgerIngredientInfo;
}

export const addIngredientToOrderAction = (ingredient: TBurgerIngredientInfo): IAddIngredientToOrderAction => ({
  type: ADD_INGREDIENT_TO_ORDER,
  ingredient
});

interface IRestoreTngredientToOrderAction {
  readonly type: typeof RESTORE_INGREDIENTS_TO_ORDER;
  readonly ingredients: TBurgerIngredientInfo[];
}

export const restoreTngredientToOrderAction = (ingredients: TBurgerIngredientInfo[]): IRestoreTngredientToOrderAction => ({
  type: RESTORE_INGREDIENTS_TO_ORDER,
  ingredients
});

interface IRemoveIngredientToOrderAction {
  readonly type: typeof REMOVE_INGREDIENT_FROM_ORDER;
  readonly index: number;
}

export const removeIngredientToOrderAction = (index: number): IRemoveIngredientToOrderAction => ({
  type: REMOVE_INGREDIENT_FROM_ORDER,
  index
});

interface IChangeBunAction {
  readonly type: typeof CHANGE_BUN_IN_ORDER;
  readonly ingredient: TBurgerIngredientInfo;
}

export const changeBunAction = (ingredient: TBurgerIngredientInfo): IChangeBunAction => ({
  type: CHANGE_BUN_IN_ORDER,
  ingredient
});

interface IOrderRequestAction {
  readonly type: typeof ORDER_REQUEST;
}

export const orderRequestAction = (): IOrderRequestAction => ({
  type: ORDER_REQUEST,

});

interface IOrderSuccessAction {
  readonly type: typeof ORDER_SUCCESS;
  readonly orderNumber: number;
}

export const orderSuccessAction = (orderNumber: number): IOrderSuccessAction => ({
  type: ORDER_SUCCESS,
  orderNumber
});

interface IOrderFailedAction {
  readonly type: typeof ORDER_FAILED;
}

export const orderFailedAction = (): IOrderFailedAction => ({
  type: ORDER_FAILED,
});

interface IDragSelectedIngredientToPositionAction {
  readonly type: typeof DRAG_SELECTED_INGREDIENT_TO_POSITION;
  readonly dragged: number;
  readonly hovered: number;
}

export type TOrderActions =
  IAddIngredientToOrderAction
  | IRestoreTngredientToOrderAction
  | IRemoveIngredientToOrderAction
  | IChangeBunAction
  | IOrderRequestAction
  | IOrderSuccessAction
  | IOrderFailedAction
  | IDragSelectedIngredientToPositionAction;


export const postOrder: AppThunk =
  (accessToken: string, orderContent: string[]) => (dispatch: AppDispatch) => {
    const refToken = getCookie('burgerRefreshToken');
    dispatch(orderRequestAction());
    postOrderToApi(accessToken, orderContent).then(
      data => {
        dispatch(orderSuccessAction(data.order.number))
      }
    ).catch(e => {
      if (e === 'Код ошибки: 401') {
        if (refToken) {
          //@ts-ignore
          dispatch(postRefreshTokenToApi(refToken))
        }
      } else {
        console.log(e.message);
        dispatch(orderFailedAction())
      }
    })
  }
