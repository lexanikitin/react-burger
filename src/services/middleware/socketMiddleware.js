import {useSelector} from "react-redux";
import {getCookie} from "../../utils/cookies";

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const {dispatch, getState} = store;
      const {isAuthSuccess} = getState().auth;
      const accessToken = getCookie('burgerAccessToken')
      const {type, payload} = action;
      const {wsInit, wsSendMessage, onOpen, onClose, onError, onMessage} = wsActions;
      if (type === wsInit && accessToken) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      } else if(type === wsInit) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: onOpen, payload: event});
        };

        socket.onerror = event => {
          dispatch({type: onError, payload: event});
        };

        socket.onmessage = event => {
          const {data} = event;
          const parsedData = JSON.parse(data);
          const {success, ...restParsedData} = parsedData;

          dispatch({type: onMessage, payload: restParsedData});
        };

        socket.onclose = event => {
          dispatch({type: onClose, payload: event});
        };

        if (type === wsSendMessage) {
        }
      }

      next(action);
    };
  };
};
