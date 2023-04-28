import {TBurgerIngredientInfo, TOrder} from "../../utils/types";

export const FEED_SET_CURRENT_ORDER: 'FEED_SET_CURRENT_ORDER' = 'FEED_SET_CURRENT_ORDER';
export const FEED_CLEAR_CURRENT_ORDER: 'FEED_CLEAR_CURRENT_ORDER' = 'FEED_CLEAR_CURRENT_ORDER';

interface IFeedSetCurrentOrderAction {
  readonly type: typeof FEED_SET_CURRENT_ORDER;
  readonly selectedOrder: TOrder;
  readonly selectedList: TBurgerIngredientInfo[];
  readonly selectedTotal: number;
}

interface IFeedClearCurrentOrderAction {
  readonly type: typeof FEED_CLEAR_CURRENT_ORDER;
}

export type TFeedActions = IFeedSetCurrentOrderAction | IFeedClearCurrentOrderAction
export const feedSetCurrentOrderAction = (selectedOrder: TOrder, selectedList: TBurgerIngredientInfo[], selectedTotal: number): IFeedSetCurrentOrderAction => ({
  type: FEED_SET_CURRENT_ORDER,
  selectedOrder, selectedTotal,
  selectedList
});
export const feedClearCurrentOrderAction = (): IFeedClearCurrentOrderAction => ({
  type: FEED_CLEAR_CURRENT_ORDER,
});
