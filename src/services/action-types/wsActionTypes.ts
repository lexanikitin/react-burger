import {TOrder} from "../../utils/types";

export const WS_FEED_CONNECTION_START: 'WS_FEED_CONNECTION_START' = 'WS_FEED_CONNECTION_START';
export const WS_FEED_CONNECTION_SUCCESS: 'WS_FEED_CONNECTION_SUCCESS' = 'WS_FEED_CONNECTION_SUCCESS';
export const WS_FEED_CONNECTION_ERROR: 'WS_FEED_CONNECTION_ERROR' = 'WS_FEED_CONNECTION_ERROR';
export const WS_FEED_CONNECTION_CLOSED: 'WS_FEED_CONNECTION_CLOSED' = 'WS_FEED_CONNECTION_CLOSED';
export const WS_FEED_GET_MESSAGE: 'WS_FEED_GET_MESSAGE' = 'WS_FEED_GET_MESSAGE';
export const WS_FEED_SEND_MESSAGE: 'WS_FEED_SEND_MESSAGE' = 'WS_FEED_SEND_MESSAGE';

interface IWSFeedConnectionStartAction {
  readonly type: typeof WS_FEED_CONNECTION_START;
}

export const wsFeedConnectionStartAction = (): IWSFeedConnectionStartAction => ({
  type: WS_FEED_CONNECTION_START,
});


interface IWSFeedConnectionSuccessAction {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export const wsFeedConnectionSuccessAction = (): IWSFeedConnectionSuccessAction => ({
  type: WS_FEED_CONNECTION_SUCCESS,
});


interface IWSFeedConnectionErrorAction {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
}

export const wsFeedConnectionErrorAction = (): IWSFeedConnectionErrorAction => ({
  type: WS_FEED_CONNECTION_ERROR,
});


interface IWSFeedConnectionClosedAction {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export const wsFeedConnectionClosedAction = (): IWSFeedConnectionClosedAction => ({
  type: WS_FEED_CONNECTION_CLOSED,
});

interface IWSFeedGetMessageAction {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  readonly payload: {
    orders: TOrder[];
    total: number;
    totalToday: number;
  }
}

export const wsFeedGetMessageAction = (payload:
                                         {
                                           orders: TOrder[];
                                           total: number;
                                           totalToday: number;
                                         }): IWSFeedGetMessageAction => ({
  type: WS_FEED_GET_MESSAGE,
  payload
});

interface IWSFeedSendMessageAction {
  readonly type: typeof WS_FEED_SEND_MESSAGE;
}

export const wsFeedSendMessageAction = (): IWSFeedSendMessageAction => ({
  type: WS_FEED_SEND_MESSAGE,
});

export type TWSFeedActions =
  IWSFeedConnectionStartAction
  | IWSFeedConnectionSuccessAction
  | IWSFeedConnectionErrorAction
  | IWSFeedConnectionClosedAction
  | IWSFeedGetMessageAction
  | IWSFeedSendMessageAction

export type TFeedActions = {
  wsInit: typeof WS_FEED_CONNECTION_START,
  wsSendMessage: typeof WS_FEED_SEND_MESSAGE,
  onOpen: typeof WS_FEED_CONNECTION_SUCCESS,
  onClose: typeof WS_FEED_CONNECTION_CLOSED,
  onError: typeof WS_FEED_CONNECTION_ERROR,
  onMessage: typeof WS_FEED_GET_MESSAGE
};

export const WS_PRIVATE_FEED_CONNECTION_START: 'WS_PRIVATE_FEED_CONNECTION_START' = 'WS_PRIVATE_FEED_CONNECTION_START';
export const WS_PRIVATE_FEED_CONNECTION_SUCCESS: 'WS_PRIVATE_FEED_CONNECTION_SUCCESS' = 'WS_PRIVATE_FEED_CONNECTION_SUCCESS';
export const WS_PRIVATE_FEED_CONNECTION_ERROR: 'WS_PRIVATE_FEED_CONNECTION_ERROR' = 'WS_PRIVATE_FEED_CONNECTION_ERROR';
export const WS_PRIVATE_FEED_CONNECTION_CLOSED: 'WS_PRIVATE_FEED_CONNECTION_CLOSED' = 'WS_PRIVATE_FEED_CONNECTION_CLOSED';
export const WS_PRIVATE_FEED_GET_MESSAGE: 'WS_PRIVATE_FEED_GET_MESSAGE' = 'WS_PRIVATE_FEED_GET_MESSAGE';
export const WS_PRIVATE_FEED_SEND_MESSAGE: 'WS_PRIVATE_FEED_SEND_MESSAGE' = 'WS_PRIVATE_FEED_SEND_MESSAGE';

interface IWSPrivateFeedConnectionStartAction {
  readonly type: typeof WS_PRIVATE_FEED_CONNECTION_START;
}

export const wsPrivateFeedConnectionStartAction = (): IWSPrivateFeedConnectionStartAction => ({
  type: WS_PRIVATE_FEED_CONNECTION_START,
});

interface IWSPrivateFeedConnectionSuccessAction {
  readonly type: typeof WS_PRIVATE_FEED_CONNECTION_SUCCESS;
}

export const wsPrivateFeedConnectionSuccessAction = (): IWSPrivateFeedConnectionSuccessAction => ({
  type: WS_PRIVATE_FEED_CONNECTION_SUCCESS,
});

interface IWSPrivateFeedConnectionErrorAction {
  readonly type: typeof WS_PRIVATE_FEED_CONNECTION_ERROR;
}

export const wsPrivateFeedConnectionErrorAction = (): IWSPrivateFeedConnectionErrorAction => ({
  type: WS_PRIVATE_FEED_CONNECTION_ERROR,
});

interface IWSPrivateFeedConnectionClosedAction {
  readonly type: typeof WS_PRIVATE_FEED_CONNECTION_CLOSED;
}

export const wsPrivateFeedConnectionClosedAction = (): IWSPrivateFeedConnectionClosedAction => ({
  type: WS_PRIVATE_FEED_CONNECTION_CLOSED,
});

interface IWSPrivateFeedGetMessageAction {
  readonly type: typeof WS_PRIVATE_FEED_GET_MESSAGE;
  readonly payload: {
    orders: TOrder[];
  }
}

export const wsPrivateFeedGetMessageAction = (payload: { orders: TOrder[]; }):
  IWSPrivateFeedGetMessageAction => ({
  type: WS_PRIVATE_FEED_GET_MESSAGE,
  payload
});

interface IWSPrivateFeedSendMessageAction {
  readonly type: typeof WS_PRIVATE_FEED_SEND_MESSAGE;
}

export const wsPrivateFeedSendMessageAction = (): IWSPrivateFeedSendMessageAction => ({
  type: WS_PRIVATE_FEED_SEND_MESSAGE,
});

export type TWSPrivateFeedActions =
  IWSPrivateFeedConnectionStartAction
  | IWSPrivateFeedConnectionSuccessAction
  | IWSPrivateFeedConnectionErrorAction
  | IWSPrivateFeedConnectionClosedAction
  | IWSPrivateFeedGetMessageAction
  | IWSPrivateFeedSendMessageAction

export type TPrivateFeedActions = {
  wsInit: typeof WS_PRIVATE_FEED_CONNECTION_START,
  wsSendMessage: typeof WS_PRIVATE_FEED_SEND_MESSAGE,
  onOpen: typeof WS_PRIVATE_FEED_CONNECTION_SUCCESS,
  onClose: typeof WS_PRIVATE_FEED_CONNECTION_CLOSED,
  onError: typeof WS_PRIVATE_FEED_CONNECTION_ERROR,
  onMessage: typeof WS_PRIVATE_FEED_GET_MESSAGE
};
