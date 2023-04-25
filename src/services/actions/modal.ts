import {TBurgerIngredientInfo} from "../../utils/types";

export const MODAL_SET_CURRENT_INGREDIENT: 'MODAL_SET_CURRENT_INGREDIENT' = 'MODAL_SET_CURRENT_INGREDIENT';
export const MODAL_CLEAR_CURRENT_INGREDIENT: 'MODAL_CLEAR_CURRENT_INGREDIENT' = 'MODAL_CLEAR_CURRENT_INGREDIENT';

interface ISetCurrentIngredientAction {
  readonly type: typeof MODAL_SET_CURRENT_INGREDIENT;
  readonly currentData: TBurgerIngredientInfo;
}

interface IClearCurrentIngredientAction {
  readonly type: typeof MODAL_CLEAR_CURRENT_INGREDIENT;
}

export type TModalActions =
  ISetCurrentIngredientAction
  | IClearCurrentIngredientAction;

export const setCurrentIngredientAction = (currentData: TBurgerIngredientInfo): ISetCurrentIngredientAction => ({
  type: MODAL_SET_CURRENT_INGREDIENT,
  currentData
});
export const clearCurrentIngredientAction = (): IClearCurrentIngredientAction => ({
  type: MODAL_CLEAR_CURRENT_INGREDIENT
});
