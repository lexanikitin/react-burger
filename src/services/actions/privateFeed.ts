import {TBurgerIngredientInfo, TOrder} from "../../utils/types";

export const PRIVATE_FEED_SET_CURRENT_ORDER:'PRIVATE_FEED_SET_CURRENT_ORDER' = 'PRIVATE_FEED_SET_CURRENT_ORDER';
export const PRIVATE_FEED_CLEAR_CURRENT_ORDER:'PRIVATE_FEED_CLEAR_CURRENT_ORDER' = 'PRIVATE_FEED_CLEAR_CURRENT_ORDER';


interface IPrivateFeedSetCurrentOrderAction {
  readonly type: typeof PRIVATE_FEED_SET_CURRENT_ORDER;
  readonly selectedOrder: TOrder;
  readonly selectedList: TBurgerIngredientInfo[];
  readonly selectedTotal: number;
}

interface IPrivateFeedClearCurrentOrderAction {
  readonly type: typeof PRIVATE_FEED_CLEAR_CURRENT_ORDER;
}

export type TPrivateFeedActions = IPrivateFeedSetCurrentOrderAction | IPrivateFeedClearCurrentOrderAction
export const privateFeedSetCurrentOrderAction = (selectedOrder: TOrder, selectedList: TBurgerIngredientInfo[], selectedTotal: number):
  IPrivateFeedSetCurrentOrderAction => ({
  type: PRIVATE_FEED_SET_CURRENT_ORDER,
  selectedOrder, selectedTotal,
  selectedList
});
export const privateFeedClearCurrentOrderAction = (): IPrivateFeedClearCurrentOrderAction => ({
  type: PRIVATE_FEED_CLEAR_CURRENT_ORDER,
});
