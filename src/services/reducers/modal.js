import {MODAL_CLEAR_CURRENT_INGREDIENT, MODAL_SET_CURRENT_INGREDIENT} from "../actions/modal";

const initialStateModal = {
  modalDetailsCurrentData: {}
}

export const modalReducer = (state = initialStateModal, action) => {
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
        modalDetailsCurrentData: {},
      }
    }
    default: {
      return state;
    }
  }
}
