import {FEED_SET_CURRENT_ORDER, FEED_CLEAR_CURRENT_ORDER} from "../actions/feed";

const initialStateFeed = {
  orders: [
    {
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733d0"
      ],
      "_id": "123",
      "status": "done",
      "number": 123,
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    },
    {
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733d0"
      ],
      "_id": "123",
      "status": "done",
      "number": 123,
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    },
    {
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733d0"
      ],
      "_id": "123",
      "status": "done",
      "number": 123,
      "createdAt": "2021-06-23T14:43:22.587Z",
      "updatedAt": "2021-06-23T14:43:22.603Z"
    },
  ],
  total: 1,
  totalToday: 1,
  modalSelected: {
    order: {},
    ingredients: [],
    total: 0
  }
}

export const feedReducer = (state = initialStateFeed, action) => {
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

    default: {
      return state;
    }
  }
}
