import {SET_ACTIVE_TAB} from "../actions/tabs";

const initialState = {
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
  totalToday: 1
}

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return {
      }
    }

    default: {
      return state;
    }
  }
}
