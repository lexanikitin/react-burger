import {Middleware, MiddlewareAPI} from "redux";
import {TFeedActions, TPrivateFeedActions} from "../action-types";
import {AppDispatch, TRootState} from "../types";

export const socketMiddleware = (wsUrl:string, wsActions:TFeedActions|TPrivateFeedActions):Middleware => {
  return (store:MiddlewareAPI<AppDispatch, TRootState>) => {
    let socket:WebSocket|null = null;

    return next => action => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      if (type === wsInit ) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
        }
      }

      next(action);
    };
  };
};
