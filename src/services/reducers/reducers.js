import {combineReducers} from 'redux';

import {
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS,
  GET_INGREDIENTS_LIST_FAILED,
  SET_ACTIVE_TAB,
  MODAL_SET_CURRENT_INGREDIENT,
  MODAL_CLEAR_CURRENT_INGREDIENT, ADD_INGREDIENT_TO_ORDER, REMOVE_INGREDIENT_FROM_ORDER
} from '../actions/actions'

const initialState = {
  ingredientsList: [],
  isRequested: false,
  isFailed: false,
}

export const ingredientsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_LIST_REQUEST: {
      return {
        ...state,
        isRequested: true,
        isFailed: false
      }
    }
    case GET_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        ingredientsList: action.list,
        isRequested: false,
        isFailed: false
      }
    }
    case GET_INGREDIENTS_LIST_FAILED: {
      return {
        ...state,
        isRequested: false,
        isFailed: true
      }
    }
    default: {
      return state;
    }
  }
}

const initialStateTab = {
  defaultTabsList: [
    {id: 1, name: 'Булки', type: 'bun'},
    {id: 2, name: 'Соусы', type: 'sauce'},
    {id: 3, name: 'Начинки', type: 'main'}
  ],
  activeTabId: 1,
}

export const tabsListReducer = (state = initialStateTab, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return {
        ...state,
        activeTabId: action.activeTabId
      }
    }

    default: {
      return state;
    }
  }
}
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
const initialStateConstructor = {
  selectedIngredients: [
    {
      "_id": "60d3b41abdacab0026a733cc",
      "name": "Соус Spicy-X",
      "type": "sauce",
      "proteins": 30,
      "fat": 20,
      "carbohydrates": 40,
      "calories": 30,
      "price": 90,
      "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      "__v": 0
    },
    {
      "_id": "60d3b41abdacab0026a733c8",
      "name": "Филе Люминесцентного тетраодонтимформа",
      "type": "main",
      "proteins": 44,
      "fat": 26,
      "carbohydrates": 85,
      "calories": 643,
      "price": 988,
      "image": "https://code.s3.yandex.net/react/code/meat-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
      "__v": 0
    }
  ],
  selectedBun: {
    "_id": "60d3b41abdacab0026a733c7",
    "name": "Флюоресцентная булка R2-D3",
    "type": "bun",
    "proteins": 44,
    "fat": 26,
    "carbohydrates": 85,
    "calories": 643,
    "price": 988,
    "image": "https://code.s3.yandex.net/react/code/bun-01.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
    "__v": 0
  }
};
export const constructorReducer = (state = initialStateConstructor, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_ORDER: {
      return {
        ...state,
      }
    }
    case REMOVE_INGREDIENT_FROM_ORDER: {
      return {
        ...state,
      }
    }
    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({
  list: ingredientsListReducer,
  tabs: tabsListReducer,
  modals: modalReducer,
  cnstrctr: constructorReducer
})
