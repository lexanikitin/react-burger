import {applyMiddleware, createStore, compose} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import {socketMiddleware} from './middleware';
import thunkMiddleware from 'redux-thunk';

import {
  TFeedActions, TPrivateFeedActions,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE,
  WS_PRIVATE_FEED_CONNECTION_CLOSED,
  WS_PRIVATE_FEED_CONNECTION_ERROR,
  WS_PRIVATE_FEED_CONNECTION_START,
  WS_PRIVATE_FEED_CONNECTION_SUCCESS,
  WS_PRIVATE_FEED_GET_MESSAGE,
  WS_PRIVATE_FEED_SEND_MESSAGE
} from './action-types';
import {getCookie} from "../utils/cookies";

const wsFeedUrl:string = 'wss://norma.nomoreparties.space/orders/all';

const wsFeedActions:TFeedActions = {
  wsInit: WS_FEED_CONNECTION_START,
  wsSendMessage: WS_FEED_SEND_MESSAGE,
  onOpen: WS_FEED_CONNECTION_SUCCESS,
  onClose: WS_FEED_CONNECTION_CLOSED,
  onError: WS_FEED_CONNECTION_ERROR,
  onMessage: WS_FEED_GET_MESSAGE
};
const accessToken:string = getCookie('burgerAccessToken')
const wsPrivateFeedUrl:string = `wss://norma.nomoreparties.space/orders?token=${accessToken}`;

const wsPrivateFeedActions:TPrivateFeedActions = {
  wsInit: WS_PRIVATE_FEED_CONNECTION_START,
  wsSendMessage: WS_PRIVATE_FEED_SEND_MESSAGE,
  onOpen: WS_PRIVATE_FEED_CONNECTION_SUCCESS,
  onClose: WS_PRIVATE_FEED_CONNECTION_CLOSED,
  onError: WS_PRIVATE_FEED_CONNECTION_ERROR,
  onMessage: WS_PRIVATE_FEED_GET_MESSAGE
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      socketMiddleware(wsFeedUrl, wsFeedActions),
      socketMiddleware(wsPrivateFeedUrl, wsPrivateFeedActions)
    )));

