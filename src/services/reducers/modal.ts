import {MODAL_CLEAR_CURRENT_INGREDIENT, MODAL_SET_CURRENT_INGREDIENT, TModalActions} from "../actions/modal";
import {TBurgerIngredientInfo} from "../../utils/types";

type TInitialStateModal = {
  modalDetailsCurrentData: TBurgerIngredientInfo
}
const initialStateModal: TInitialStateModal = {
  modalDetailsCurrentData: {
    "_id": "",
    "name": "",
    "type": "",
    "proteins": 0,
    "fat": 0,
    "carbohydrates": 0,
    "calories": 0,
    "price": 0,
    "image": "",
    "image_mobile": "",
    "image_large": "",
    "__v": 0
  }
}

export const modalReducer = (state:TInitialStateModal = initialStateModal, action:TModalActions):TInitialStateModal => {
  switch (action.type) {
    case MODAL_SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        modalDetailsCurrentData: action.currentData,
      }
    }
    case MODAL_CLEAR_CURRENT_INGREDIENT: {
      return {
        ...state,
        modalDetailsCurrentData: {
          "_id": "",
          "name": "",
          "type": "",
          "proteins": 0,
          "fat": 0,
          "carbohydrates": 0,
          "calories": 0,
          "price": 0,
          "image": "",
          "image_mobile": "",
          "image_large": "",
          "__v": 0
        },
      }
    }
    default: {
      return state;
    }
  }
}
