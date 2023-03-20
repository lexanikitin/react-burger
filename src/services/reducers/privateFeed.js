import {PRIVATE_FEED_SET_CURRENT_ORDER, PRIVATE_FEED_CLEAR_CURRENT_ORDER} from "../actions/privateFeed";
import {
  WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_ERROR,
  WS_PRIVATE_FEED_CONNECTION_SUCCESS,
  WS_PRIVATE_FEED_GET_MESSAGE
} from "../action-types";

const initialStateFeed = {
  orders: [],
  modalSelected: {
    order: {},
    ingredients: [],
    total: 0
  },
  isConnected: false,
}

export const privateFeedReducer = (state = initialStateFeed, action) => {
  switch (action.type) {
    case PRIVATE_FEED_SET_CURRENT_ORDER: {
      return {
        ...state,
        modalSelected: {
          order: action.selectedOrder,
          ingredients: action.selectedList,
          total: action.selectedTotal
        }
      }
    }
    case PRIVATE_FEED_CLEAR_CURRENT_ORDER: {
      return {
        ...state,
        modalSelected: {
          order: {},
          ingredients: [],
          total: 0
        }
      }
    }

    case WS_PRIVATE_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        isConnected: true
      };

    case WS_PRIVATE_FEED_CONNECTION_ERROR:
      return {
        ...state,
        isConnected: false
      };

    case WS_PRIVATE_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        isConnected: false
      };

    case WS_PRIVATE_FEED_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
      };





    default: {
      return state;
    }
  }
}
