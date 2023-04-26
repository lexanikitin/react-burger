import {
  PRIVATE_FEED_SET_CURRENT_ORDER,
  PRIVATE_FEED_CLEAR_CURRENT_ORDER,
  TPrivateFeedActions
} from "../actions/privateFeed";
import {
  TWSPrivateFeedActions,
  WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_ERROR,
  WS_PRIVATE_FEED_CONNECTION_SUCCESS,
  WS_PRIVATE_FEED_GET_MESSAGE
} from "../action-types";

const initialStatePrivateFeed = {
  ordersPr: [],
  modalSelected: {
    order: {},
    ingredients: [],
    total: 0
  },
  isConnectedPr: false,
}

export const privateFeedReducer = (state = initialStatePrivateFeed, action:TPrivateFeedActions|TWSPrivateFeedActions) => {
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
        isConnectedPr: true
      };

    case WS_PRIVATE_FEED_CONNECTION_ERROR:
      return {
        ...state,
        isConnectedPr: false
      };

    case WS_PRIVATE_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        isConnectedPr: false
      };

    case WS_PRIVATE_FEED_GET_MESSAGE:
      return {
        ...state,
        ordersPr: action.payload.orders,
      };

    default: {
      return state;
    }
  }
}
