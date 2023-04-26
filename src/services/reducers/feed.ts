import {FEED_SET_CURRENT_ORDER, FEED_CLEAR_CURRENT_ORDER, TFeedActions} from "../actions/feed";
import {
  TWSFeedActions,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE
} from "../action-types";
import {TBurgerIngredientInfo, TOrder} from "../../utils/types";
type TInitialStateFeed = {
  orders: TOrder[],
  total: number,
  totalToday: number,
  modalSelected: {
    order: TOrder|{},
    ingredients: TBurgerIngredientInfo[],
    total: number
  },
  isConnected: boolean,
  ordersReady:(number|undefined)[],
  ordersNotReady:(number|undefined)[],

}
const initialStateFeed:TInitialStateFeed = {
  orders: [],
  total: 1,
  totalToday: 1,
  modalSelected: {
    order: {},
    ingredients: [],
    total: 0
  },
  isConnected: false,
  ordersReady:[],
  ordersNotReady:[],

}

export const feedReducer = (state:TInitialStateFeed = initialStateFeed, action:TFeedActions|TWSFeedActions):TInitialStateFeed => {
  switch (action.type) {
    case FEED_SET_CURRENT_ORDER: {
      return {
        ...state,
        modalSelected: {
          order: action.selectedOrder,
          ingredients: action.selectedList,
          total: action.selectedTotal
        }
      }
    }
    case FEED_CLEAR_CURRENT_ORDER: {
      return {
        ...state,
        modalSelected: {
          order: {},
          ingredients: [],
          total: 0
        }
      }
    }

    case WS_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        isConnected: true
      };

    case WS_FEED_CONNECTION_ERROR:
      return {
        ...state,
        isConnected: false
      };

    case WS_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        isConnected: false
      };

    case WS_FEED_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        ordersReady: action.payload.orders.map((item)=>{
          if(item.status==='done'){
            return item.number
          }
        }),
        ordersNotReady: action.payload.orders.map((item)=>{
          if(item.status==='pending'){
            return item.number
          }
        }),
      };



    default: {
      return state;
    }
  }
}
