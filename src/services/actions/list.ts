import {getIngredientsFromApi} from "../../utils/burger-api";
import {TBurgerIngredientInfo} from "../../utils/types";
import {AppDispatch, AppThunk} from "../types";

export const GET_INGREDIENTS_LIST_REQUEST: 'GET_INGREDIENTS_LIST_REQUEST' = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS: 'GET_INGREDIENTS_LIST_SUCCESS' = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED: 'GET_INGREDIENTS_LIST_FAILED' = 'GET_INGREDIENTS_LIST_FAILED';

interface IGetIngredientsListActionRequest {
  readonly type: typeof GET_INGREDIENTS_LIST_REQUEST;
}

interface IGetIngredientsListActionSuccess {
  readonly type: typeof GET_INGREDIENTS_LIST_SUCCESS;
  readonly list: TBurgerIngredientInfo[];
}

interface IGetIngredientsListActionFailed {
  readonly type: typeof GET_INGREDIENTS_LIST_FAILED;
}

export type TListActions =
  IGetIngredientsListActionRequest
  | IGetIngredientsListActionFailed
  | IGetIngredientsListActionSuccess;

export const getIngredientsListActionRequest = (): IGetIngredientsListActionRequest => ({
  type: GET_INGREDIENTS_LIST_REQUEST
});

export const getIngredientsListActionSuccess = (list: TBurgerIngredientInfo[]): IGetIngredientsListActionSuccess => ({
  type: GET_INGREDIENTS_LIST_SUCCESS,
  list
});

export const getIngredientsListActionFailed = (): IGetIngredientsListActionFailed => ({
  type: GET_INGREDIENTS_LIST_FAILED
});


export const getIngredientsList: AppThunk =  () => (dispatch: AppDispatch) => {
    dispatch(getIngredientsListActionRequest());
    getIngredientsFromApi().then(
      data => {
        dispatch(getIngredientsListActionSuccess(data.data))
      }
    ).catch(e => {
      console.log(e.message);
      dispatch(getIngredientsListActionFailed())
    })
  }
