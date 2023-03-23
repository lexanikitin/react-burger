import {
  ADD_INGREDIENT_TO_ORDER,
  CHANGE_BUN_IN_ORDER,
  DRAG_SELECTED_INGREDIENT_TO_POSITION,
  ORDER_FAILED,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  REMOVE_INGREDIENT_FROM_ORDER, RESTORE_INGREDIENTS_TO_ORDER
} from "../actions/order";

const initialStateOrder = {
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
  },
  orderList: [],
  isRequested: false,
  isFailed: false,
  orderNumber: null

};
export const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_ORDER: {
      return {
        ...state,
        selectedIngredients: [state.selectedIngredients, action.ingredient].flat()
      }
    }
    case RESTORE_INGREDIENTS_TO_ORDER: {
      return {
        ...state,
        selectedIngredients: action.ingredients
      }
    }
    case REMOVE_INGREDIENT_FROM_ORDER: {
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter((item, index) => {
          if (index !== action.index) {
            return item
          }
        })
      }
    }
    case CHANGE_BUN_IN_ORDER: {
      return {
        ...state,
        selectedBun: action.ingredient
      }
    }
    case DRAG_SELECTED_INGREDIENT_TO_POSITION: {
      const draggedItem = state.selectedIngredients[action.dragged];
      if (action.dragged > action.hovered) {
        return {
          ...state,
          ...state.selectedIngredients.splice(action.hovered, 0, draggedItem),
          ...state.selectedIngredients.splice(action.dragged + 1, 1)
        }

      } else {
        return {
          ...state,
          ...state.selectedIngredients.splice(action.dragged, 1),
          ...state.selectedIngredients.splice(action.hovered, 0, draggedItem)
        }

      }
    }
    case ORDER_REQUEST: {
      return {
        ...state,
        isRequested: true,
        isFailed: false,
        orderNumber: null
      }
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        orderList: [],
        isRequested: false,
        isFailed: false,
        orderNumber: action.orderNumber
      }
    }
    case ORDER_FAILED: {
      return {
        ...state,
        orderList: [],
        isRequested: false,
        isFailed: true,
        orderNumber: null
      }
    }
    default: {
      return state;
    }
  }
}
