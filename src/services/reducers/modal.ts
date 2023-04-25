import {MODAL_CLEAR_CURRENT_INGREDIENT, MODAL_SET_CURRENT_INGREDIENT, TModalActions} from "../actions/modal";

type TInitialStateModal = {
  modalDetailsCurrentData: {}
}
const initialStateModal: TInitialStateModal = {
  modalDetailsCurrentData: {}
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
        modalDetailsCurrentData: {},
      }
    }
    default: {
      return state;
    }
  }
}
